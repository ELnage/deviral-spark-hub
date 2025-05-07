
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const statisticsData = [
  { id: 1, value: 150, label: "عميل سعيد" },
  { id: 2, value: 300, label: "مشروع مكتمل" },
  { id: 3, value: 95, label: "مراجعات إيجابية" },
  { id: 4, value: 24, label: "خدمة متخصصة" }
];

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  symbol?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, label, symbol = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold mb-2 gradient-text">
        {count}{symbol}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section id="statistics" className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">إنجازاتنا</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نفخر بما حققناه من نجاحات مع عملائنا في مختلف القطاعات
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 animate-fade-in">
          {statisticsData.map((stat) => (
            <Counter
              key={stat.id}
              end={stat.value}
              duration={2000}
              label={stat.label}
              symbol={stat.id === 3 ? "%" : "+"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
