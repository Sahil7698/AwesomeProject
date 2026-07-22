import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import useCustomNavigation from '../hooks/useCustomNavigation';

interface productType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const NotificationScreen = () => {
  const [productData, setProductData] = useState<productType[]>([]);
  const navigation = useCustomNavigation('NotificationScreen');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(['all']);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(data => setCategories(['all', ...data]))
      .catch(err => console.error(err));

    fetchProducts('all');
  }, []);

  const fetchProducts = (category: string) => {
    setLoading(true);
    setSelectedCategory(category);

    const url =
      category === 'all'
        ? 'https://fakestoreapi.com/products'
        : `https://fakestoreapi.com/products/category/${category}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setProductData(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  const renderProduct = ({ item }: { item: productType }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('ProductDetailsScreen', { productid: item?.id })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.categoryTag}>{item.category.toUpperCase()}</Text>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productDescription} numberOfLines={3}>
          {item.description}
        </Text>
        <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabBarContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map(cat => (
            <TouchableOpacity
              key={cat}
              onPress={() => fetchProducts(cat)}
              style={[
                styles.tabItem,
                selectedCategory === cat && styles.activeTabItem,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedCategory === cat && styles.activeTabText,
                ]}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <FlatList
          data={productData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProduct}
          contentContainerStyle={styles.listPadding}
        />
      )}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listPadding: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row', // Horizontal layout for image + text
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  categoryTag: {
    fontSize: 10,
    color: '#ff8c00',
    fontWeight: '700',
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  productDescription: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2e7d32', // Green for price
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: '#999',
  },
  tabBarContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  tabItem: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
  },
  activeTabItem: {
    backgroundColor: 'orange',
  },
  tabText: { color: '#555', fontWeight: '600' },
  activeTabText: { color: '#fff' },
  statsBar: { padding: 10, backgroundColor: '#fff9f0', alignItems: 'center' },
  statsText: { fontWeight: 'bold', color: 'orange' },
  likeButton: { padding: 10 },
});
