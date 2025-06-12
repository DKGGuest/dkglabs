import React from 'react';
import { useParams, Link } from 'react-router-dom';

const productData = [
  {
    id: 0,
    name: 'GPS Factory',
    shortDescription: 'DKG Labs has partnered with multiple chip manufacturers...',
    longDescription: `
      Our GPS Factory product is a robust tracking solution designed to offer high precision and reliability.
      This system supports various use cases across industries, including education, logistics, and healthcare.
      With remote control capabilities, real-time location updates, and customizable geofencing, it sets a new benchmark in GPS tracking.
      
      Our platform also supports multi-device integration and provides real-time analytics via the dashboard.
      Whether you need to track school buses, mining vehicles, or healthcare assets, GPS Factory delivers a scalable and cost-effective solution.
    `,
    images: ['https://www.dkgrouplabs.com/wp-content/uploads/2019/04/Gpsfactory_image_1.png','https://www.dkgrouplabs.com/wp-content/uploads/2019/03/ora_3.png', 'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/ora_1.png'],
    specs: [
      { title: 'Application Areas', items: ['Student Tracking', 'Asset Management'] },
      { title: 'Specifications', items: ['Remote cut-off', 'Geo-fence'] },
    ]
  },
  // Add more products with `id`, `name`, etc...
  {
  id: 1,
  name: 'Sensor Factory',
  shortDescription: 'Sensor Factory is DKG Labs’ versatile platform for real-time sensor-based monitoring across industries.',
  longDescription: `
    Sensor Factory is a smart, scalable solution designed to collect and analyze real-time data using a wide array of sensors.
    Built for industrial, agricultural, and smart city applications, it enables predictive maintenance, energy optimization, and environmental monitoring.

    With support for temperature, humidity, gas, smoke, pressure, and motion sensors, the platform helps automate operations and reduce manual overhead.
    The system integrates seamlessly with dashboards for alerts, visualization, and decision-making.

    Sensor Factory is ideal for IoT deployments in factories, greenhouses, waste management systems, and infrastructure health monitoring.
  `,
  images: [
    'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/sensorfactory1.png',
    'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/sensorfactory2.png',
    'https://www.dkgrouplabs.com/wp-content/uploads/2019/03/sensorfactory3.png'
  ],
  specs: [
    { title: 'Application Areas', items: ['Industrial Automation', 'Smart Agriculture', 'Environmental Monitoring'] },
    { title: 'Supported Sensors', items: ['Temperature', 'Humidity', 'Gas', 'Smoke', 'Pressure', 'Motion'] }
    ]
  },

  {
  id: 2,
  name: 'ORA Series Devices',
  shortDescription: 'A suite of LoRa and ESP32-based IoT modules—BASIC-ORA577, ADVANCE-ORA597, and ECONOMY-ORA547—designed for scalable, long-range, low-power applications.',
  longDescription: `
    The ORA series includes BASIC-ORA577, ADVANCE-ORA597, and ECONOMY-ORA547, each designed for specific industrial and smart city applications using LoRa and ESP32 technologies.

    These devices support a wide range of use cases like fleet management, predictive maintenance, edge intelligence, and smart supply chains.
    With ultra-low power consumption, built-in GPS, WiFi, Bluetooth, and OLED displays, the ORA series is perfect for embedded IoT solutions.

    Whether you're monitoring urban water supply, managing autonomous transportation, or building a real-time location system, the ORA series delivers the performance and flexibility required.
  `,
  images: [
    'https://www.dkgrouplabs.com/wp-content/uploads/2019/04/LoRa3.jpg',
    'https://www.dkgrouplabs.com/wp-content/uploads/2019/04/LoRa.png',
    'https://www.dkgrouplabs.com/wp-content/uploads/2019/04/LoRA2.jpg'
  ],
  specs: [
    {
      title: 'BASIC-ORA577 - Application Areas',
      items: [
        'Perimeter Security & Access Control',
        'Real-Time Location System (RTLS)',
        'Real-Time Monitoring of Shipments',
        'Real-Time Visibility',
        'Route Optimization',
        'Smart Supply Chain',
        'Time Sensitive Networks',
        'Warehouse Optimization',
        'Automatic Fleet Routing (Telemetric)',
        'Autonomous Transportation Logistics',
        'Baggage Management',
        'Edge Intelligence',
        'Enterprise Asset Management',
        'Fleet Management (FM)',
        'High Speed Network Infrastructure',
        'Indoor Positioning System (IPS)',
        'Industrial Digital Thread',
        'Industrial Wearables',
        'Intelligent Urban Water Supply'
      ]
    },
    {
      title: 'BASIC-ORA577 - Technology Overview',
      items: [
        'LoRa® and LoRaWAN™ LPWAN communication',
        'Optimized for battery, capacity, range, and cost',
        'Competes with other LPWAN technologies for IoT scalability'
      ]
    },
    {
      title: 'BASIC-ORA577 - Features',
      items: [
        'Long range communication with LoRa protocol',
        'Ultra low power consumption',
        'Onboard LiPo cell charging and management',
        'Compatible with Arduino IDE'
      ]
    },
    {
      title: 'BASIC-ORA577 - Specifications',
      items: [
        'LoRa EU/US bands',
        'Remote sensing and low-power applications',
        'uFL antenna socket, +20dBm transmit, -139dBm receive',
        'Operating frequency: 868MHz – 915MHz',
        'Digital RSSI function',
        'Operating voltage: 3.3V',
        'Current receive: 14mA, sleep: 1mA, super sleep: 300uA',
        'LiPo charge and battery monitoring support'
      ]
    },
    {
      title: 'ADVANCE-ORA597 - Application Areas',
      items: [
        'Autonomous Transportation in Logistics',
        'Edge Intelligence',
        'Enterprise Asset Management',
        'Geo-fencing',
        'High Speed Network Infrastructure',
        'Industrial Digital Thread',
        'Industrial Wearables',
        'INFINITE Platform for Virtual Domains',
        'Location Tracking',
        'Predictive-based Maintenance (PBM)'
      ]
    },
    {
      title: 'ADVANCE-ORA597 - Technology Overview',
      items: [
        'LoRa physical layer + LoRaWAN network protocol',
        'Supports long-range (10+ km) low-power communication',
        'Ideal for remote and rural IoT applications in mining, energy, logistics'
      ]
    },
    {
      title: 'ADVANCE-ORA597 - Specifications',
      items: [
        'Voltage: 1.8~3.7v',
        'Frequency: 433MHz/868MHz/915MHz',
        'Transmit power: +20dBm',
        'Data rate: 1.2K~300Kbps (FSK), 0.018K~37.5Kbps (LoRa)',
        'Temperature: -40℃ to +85℃',
        'Digital RSSI, low voltage & temp sensors',
        'WiFi + Bluetooth (ESP32 REV1)',
        '4MB Flash, 3D Antenna',
        'GPS NEO-6M module with EEPROM & backup battery',
        'LED status indicators and power control button'
      ]
    },
    {
      title: 'ECONOMY-ORA547 - Application Areas',
      items: [
        'Autonomous Manufacturing',
        'Intelligent Urban Water Supply',
        'Collaborative Robotics',
        'Intrusion Detection Systems (IDS)',
        'Edge Intelligence',
        'Real-Time Location System (RTLS)',
        'Enterprise Asset Management',
        'Visual Quality Detection',
        'High Speed Network Infrastructure',
        'Time Sensitive Networks',
        'Industrial Digital Thread',
        'Smart Supply Chain',
        'Industrial Wearables'
      ]
    },
    {
      title: 'ECONOMY-ORA547 - Technology Overview',
      items: [
        'Heltec WiFi Kit 32 (ESP32-based) with OLED display',
        'Supports WiFi/Bluetooth, OLED visualization, and Arduino IDE',
        'Perfect for smart lighting, sensor tracking, parking, radiation detection'
      ]
    },
    {
      title: 'ECONOMY-ORA547 - Specifications',
      items: [
        'CPU: ESP32, 240 MHz dual core',
        'WiFi: 150Mbps, 802.11 b/g/n/e/i',
        'Bluetooth: 4.2 (BLE)',
        'Flash: 4MB',
        'USB-Serial: CP2102',
        'Radio: Semtech SX1276, IPX antenna',
        'OLED: 0.96″, SSD1306, 128×64 px',
        'Battery: Li-Ion/Li-Po with 2-pin socket & charging circuit',
        'Board size: 52 x 25.4 x 10.3 mm'
      ]
    }
  ]
  }
];

export default function ProductDetail() {
  // ✅ Place this block right after function declaration
  const { id } = useParams();
  const product = productData.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-white p-10">Product not found.</div>;
  }

  return (
    <div className="text-black px-6 py-10 bg-white min-h-screen">
      <Link to="/Product" className="text-green-500 underline mb-6 inline-block font-bold">← Back to Products</Link>

      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-black/80 mb-8">{product.shortDescription}</p>

      {/* 🖼️ Product Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {product.images.map((src, i) => (
          <img key={i} src={src} alt={`Product ${i}`} className="rounded-xl shadow-lg" />
        ))}
      </div>

      {/* 📝 Long Description */}
      <div className="mb-10 whitespace-pre-wrap text-black/80">{product.longDescription}</div>

      {/* 📊 Specs and Features */}
      {product.specs.map((section, i) => (
        <div key={i} className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">{section.title}</h2>
          <ul className="list-disc list-inside space-y-1 text-black/80">
            {section.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}



// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// const productData = [
//   {
//     id: 0,
//     name: 'GPS Factory',
//     shortDescription: 'DKG Labs has partnered with multiple chip manufacturers...',
//     longDescription: `
//       Our GPS Factory product is a robust tracking solution designed to offer high precision and reliability.
//       This system supports various use cases across industries, including education, logistics, and healthcare.
//       With remote control capabilities, real-time location updates, and customizable geofencing, it sets a new benchmark in GPS tracking.
      
//       Our platform also supports multi-device integration and provides real-time analytics via the dashboard.
//       Whether you need to track school buses, mining vehicles, or healthcare assets, GPS Factory delivers a scalable and cost-effective solution.
//     `,
//     images: ['https://example.com/gps1.png', 'https://example.com/gps2.png'],
//     specs: [
//       { title: 'Application Areas', items: ['Student Tracking', 'Asset Management'] },
//       { title: 'Specifications', items: ['Remote cut-off', 'Geo-fence'] },
//     ]
//   },
//   // More products...
// ];


// export default function ProductDetail() {
//   const { id } = useParams();
//   const product = productData[id];

//   return (
//     <div className="text-white px-6 py-10 bg-black min-h-screen">
//       <Link to="/products" className="text-green-300 underline mb-6 inline-block">← Back to Products</Link>
      
//       <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//       <p className="text-white/80 mb-8">{product.description}</p>

//       {/* 🖼️ Product Images */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//         {product.images.map((src, i) => (
//           <img key={i} src={src} alt={`Product ${i}`} className="rounded-xl shadow-lg" />
//         ))}
//       </div>

//       {/* 📊 Specs and Features */}
//       {product.specs.map((section, i) => (
//         <div key={i} className="mb-8">
//           <h2 className="text-2xl font-semibold text-green-400 mb-2">{section.title}</h2>
//           <ul className="list-disc list-inside space-y-1 text-white/80">
//             {section.items.map((item, j) => (
//               <li key={j}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
