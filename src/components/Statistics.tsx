
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const statisticsData = [
  { id: 1, value: 150, label: "مشروع مكتمل" },
  { id: 2, value: 50, label: "عميل سعيد" },
  { id: 3, value: 10, label: "سنوات خبرة" },
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
    <div ref={ref} className="text-center bg-white p-8 rounded-lg shadow-md">
      <div className="text-4xl font-bold mb-2 text-deviral-blue">
        {count}{symbol}
      </div>
      <div className="text-lg text-gray-600">{label}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section id="statistics" className="section-padding bg-deviral-dark text-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="section-title text-white">
            إنجازاتنا بالأرقام
          </h2>
          <p className="section-subtitle text-white/70">
            نفخر بما حققناه من نجاحات خلال مسيرتنا في عالم التكنولوجيا
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsData.map((stat) => (
            <Counter
              key={stat.id}
              end={stat.value}
              duration={2000}
              label={stat.label}
              symbol={stat.id === 3 ? "+" : "+"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
