import React from 'react';
import { Truck, CreditCard, RotateCcw, Clock, Shield, Gift } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Envío Gratis',
    description: 'En compras superiores a $25.000'
  },
  {
    icon: CreditCard,
    title: 'Pagos Seguros',
    description: 'Múltiples métodos de pago'
  },
  {
    icon: Shield,
    title: 'Compra Protegida',
    description: 'Garantía de satisfacción'
  },
];

function ServiceFeatures() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 py-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-3 group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-gray-600">
              {feature.description}
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default ServiceFeatures;