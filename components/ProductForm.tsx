import React, { useState } from 'react';
import { Package, Tag, IndianRupee, Scale, Boxes } from 'lucide-react';
import { Product } from '../types';

interface Props {
  onSubmit: (product: Product) => void;
}

const categories = [
  'Groceries',
  'Fashion',
  'Electronics',
  'Home & Kitchen',
  'Personal Care',
  'Stationery',
] as const;

const units = ['piece', 'kg', 'gram', 'liter', 'ml', 'pack'] as const;

export function ProductForm({ onSubmit }: Props) {
  const [product, setProduct] = useState<Product>({
    name: '',
    category: 'Groceries',
    price: 0,
    unit: 'piece',
    stock: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product);
    // Reset form
    setProduct({
      name: '',
      category: 'Groceries',
      price: 0,
      unit: 'piece',
      stock: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="relative">
          <Package className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder="Product Name"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="relative">
          <Tag className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <select
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base appearance-none bg-white"
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <IndianRupee className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="number"
              min="0"
              step="0.01"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: parseFloat(e.target.value) })
              }
              placeholder="Price"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
              required
            />
          </div>

          <div className="relative">
            <Scale className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <select
              value={product.unit}
              onChange={(e) => setProduct({ ...product, unit: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base appearance-none bg-white"
              required
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative">
          <Boxes className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="number"
            min="0"
            value={product.stock}
            onChange={(e) =>
              setProduct({ ...product, stock: parseInt(e.target.value, 10) })
            }
            placeholder="Stock Quantity"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                // Handle image upload
                console.log('Image selected:', file);
              }
            }}
            className="w-full py-2 text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
          <p className="mt-1 text-xs text-gray-500">
            Optional: Upload product image (max 5MB)
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
        >
          Add Product
        </button>
        <button
          type="button"
          onClick={() => {
            setProduct({
              name: '',
              category: 'Groceries',
              price: 0,
              unit: 'piece',
              stock: 0,
            });
          }}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base font-medium"
        >
          Clear Form
        </button>
      </div>
    </form>
  );
}