import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { RootRouteProps } from '../types/RootStackProps';

interface productType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductDetailsScreen = () => {
  const router = useRoute<RootRouteProps<'ProductDetailsScreen'>>();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<productType>();

  console.log(product);
  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${router?.params?.productid}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Fetch error:', error))
      .finally(() => setLoading(false));
  }, [router?.params?.productid]);
  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <View style={styles.card}>
          <Image
            source={{ uri: product?.image }}
            style={styles.productImage}
            resizeMode="contain"
          />
          <View style={styles.infoContainer}>
            <Text style={styles.categoryTag}>
              {product?.category.toUpperCase()}
            </Text>
            <Text style={styles.productTitle} numberOfLines={2}>
              {product?.title}
            </Text>
            <Text style={styles.productDescription} numberOfLines={3}>
              {product?.description}
            </Text>
            <Text style={styles.priceText}>${product?.price.toFixed(2)}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
});
