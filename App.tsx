import React, { useState } from 'react';
import { LanguageSelector } from './components/LanguageSelector';
import { OnboardingProgress } from './components/OnboardingProgress';
import { StoreDetailsForm } from './components/StoreDetailsForm';
import { ProductForm } from './components/ProductForm';
import { Language, OnboardingStep, StoreDetails, Product } from './types';
import { Store, Menu } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentStep, setCurrentStep] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [storeDetails, setStoreDetails] = useState<StoreDetails>({
    storeName: '',
    ownerName: '',
    phone: '',
    address: '',
    pincode: '',
    gstNumber: '',
  });
  const [products, setProducts] = useState<Product[]>([]);

  const steps: OnboardingStep[] = [
    {
      id: 1,
      title: 'Store Details',
      description: 'Enter your store information',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Add Products',
      description: 'Create your product catalog',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Verification',
      description: 'Verify your store details',
      isCompleted: false,
    },
    {
      id: 4,
      title: 'Go Live',
      description: 'Launch your online store',
      isCompleted: false,
    },
  ];

  const handleStoreDetailsSubmit = () => {
    console.log('Store details submitted:', storeDetails);
    steps[0].isCompleted = true;
    setCurrentStep(2);
  };

  const handleProductSubmit = (product: Product) => {
    console.log('Product added:', product);
    setProducts([...products, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <Store className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">E-Dukaan</h1>
            </div>
            <LanguageSelector
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div
            className={`
              fixed md:relative inset-y-0 left-0 transform 
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
              md:translate-x-0 transition duration-200 ease-in-out
              md:col-span-3 bg-white md:bg-transparent p-6 md:p-0
              w-64 md:w-auto z-30
            `}
          >
            <OnboardingProgress steps={steps} currentStep={currentStep} />
          </div>

          {/* Main Form Area */}
          <div className="md:col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                {steps[currentStep - 1].title}
              </h2>
              
              {currentStep === 1 && (
                <StoreDetailsForm
                  storeDetails={storeDetails}
                  onChange={setStoreDetails}
                  onSubmit={handleStoreDetailsSubmit}
                />
              )}

              {currentStep === 2 && (
                <>
                  <ProductForm onSubmit={handleProductSubmit} />
                  {products.length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Added Products ({products.length})
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg bg-gray-50"
                          >
                            <h4 className="font-medium text-gray-900">
                              {product.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {product.category}
                            </p>
                            <p className="text-sm text-gray-900 mt-2">
                              ₹{product.price} per {product.unit}
                            </p>
                            <p className="text-sm text-gray-500">
                              Stock: {product.stock}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}