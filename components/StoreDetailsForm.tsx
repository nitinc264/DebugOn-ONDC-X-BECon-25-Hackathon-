import React from 'react';
import { Store, Phone, MapPin, Building2 } from 'lucide-react';
import { StoreDetails } from '../types';

interface Props {
  storeDetails: StoreDetails;
  onChange: (details: StoreDetails) => void;
  onSubmit: () => void;
}

export function StoreDetailsForm({ storeDetails, onChange, onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="relative">
          <Store className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={storeDetails.storeName}
            onChange={(e) =>
              onChange({ ...storeDetails, storeName: e.target.value })
            }
            placeholder="Store Name"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="relative">
          <Building2 className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={storeDetails.ownerName}
            onChange={(e) =>
              onChange({ ...storeDetails, ownerName: e.target.value })
            }
            placeholder="Owner Name"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            value={storeDetails.phone}
            onChange={(e) => onChange({ ...storeDetails, phone: e.target.value })}
            placeholder="Phone Number"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            value={storeDetails.address}
            onChange={(e) =>
              onChange({ ...storeDetails, address: e.target.value })
            }
            placeholder="Store Address"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base min-h-[100px]"
            required
          />
        </div>

        <div className="relative">
          <input
            type="text"
            value={storeDetails.pincode}
            onChange={(e) =>
              onChange({ ...storeDetails, pincode: e.target.value })
            }
            placeholder="PIN Code"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
            required
          />
        </div>

        <div className="relative">
          <input
            type="text"
            value={storeDetails.gstNumber}
            onChange={(e) =>
              onChange({ ...storeDetails, gstNumber: e.target.value })
            }
            placeholder="GST Number (Optional)"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
      >
        Continue
      </button>
    </form>
  );
}