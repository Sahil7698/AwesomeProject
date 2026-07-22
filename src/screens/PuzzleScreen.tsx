import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const PuzzleScreen = () => {
  const [gridSize, setGridSize] = useState(4);
  const [activeId, setActiveId] = useState(null);

  const { width } = Dimensions.get('window');
  const totalBoxes = gridSize * gridSize;
  const boxes = Array.from({ length: totalBoxes }, (_, i) => ({
    id: i,
    row: Math.floor(i / gridSize),
    col: i % gridSize,
  }));

  const getBoxState = (id: string | number | any) => {
    if (activeId === null) return 'default';
    if (id === activeId) return 'active';

    const current = boxes[id];
    const active = boxes[activeId];

    const isHorizontal = current.row === active.row;
    const isVertical = current.col === active.col;
    const isDiagonal =
      Math.abs(current.row - active.row) === Math.abs(current.col - active.col);

    // If it hits any of these paths, it's BLOCKED
    if (isHorizontal || isVertical || isDiagonal) return 'blocked';

    return 'remaining';
  };

  const handlePress = (id: string | number | any) => {
    if (activeId === null) {
      setActiveId(id);
    } else {
      const clickedBox = boxes[id];
      const activeBox = boxes[activeId];

      // Logic check: Is it in the same row, column, or diagonal?
      const isHorizontal = clickedBox.row === activeBox.row;
      const isVertical = clickedBox.col === activeBox.col;
      const isDiagonal =
        Math.abs(clickedBox.row - activeBox.row) ===
        Math.abs(clickedBox.col - activeBox.col);

      // If it's NOT any of those, it's a "Remaining" box, so we reset
      if (!isHorizontal && !isVertical && !isDiagonal) {
        setActiveId(null);
      }
    }
  };

  type BoxItem = { id: number; row: number; col: number };

  const renderBox = ({ item }: { item: BoxItem }) => {
    const state = getBoxState(item.id);
    const boxSize = (width - 60) / gridSize; // Dynamic sizing based on N

    return (
      <TouchableOpacity
        style={[
          styles.box,
          { width: boxSize, height: boxSize },
          styles[`box_${state}`],
        ]}
        onPress={() => handlePress(item.id)}
        disabled={state === 'blocked'}
      >
        <Text style={styles.boxText}>{item.id + 1}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>3x3 Logic Grid</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gridSize.toString()}
        onChangeText={val => {
          const num = parseInt(val) || 0;
          setGridSize(num);
          setActiveId(null); // Reset when grid changes
        }}
      />
      <FlatList
        data={boxes}
        renderItem={renderBox}
        keyExtractor={item => item.id.toString()}
        numColumns={gridSize}
        key={gridSize} // Forces refresh when N changes
        contentContainerStyle={styles.gridContainer}
      />
      {/* </View> */}
      <Text style={styles.footer}>
        {activeId === null
          ? 'Click any box to start'
          : 'Click an orange box to unblock'}
      </Text>
    </SafeAreaView>
  );
};

export default PuzzleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: 100,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
  },
  gridContainer: { padding: 10, alignItems: 'center' },
  box: {
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  boxText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  box_default: { backgroundColor: '#3498db' },
  box_active: { backgroundColor: '#2ecc71' },
  box_blocked: { backgroundColor: '#dfe6e9', opacity: 0.3 },
  box_remaining: { backgroundColor: '#e67e22' },
  footer: { marginTop: 20, color: '#7f8c8d', marginBottom: 30 },
});
