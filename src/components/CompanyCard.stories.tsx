import CompanyCard from './CompanyCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CompanyCard> = {
    title: 'CompanyCard',
    component: CompanyCard,
};
  
export default meta;

type Story = StoryObj<typeof CompanyCard>;

const companyData = {
    "id": "company.17",
    "starred": false,
    "name": "Moen, Steuber and Schumm",
    "description": "dynamic solution-oriented portal",
    "address": {
      "address1": "4208 Zora Village",
      "city": "Genetown",
      "state": "NV",
      "postalCode": "80886"
    },
    "image": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmlns%3Acc%3D%22http%3A%2F%2Fcreativecommons.org%2Fns%23%22%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20762%20762%22%20fill%3D%22none%22%3E%3Cmetadata%3E%3Crdf%3ARDF%3E%3Ccc%3AWork%3E%3Cdc%3Aformat%3Eimage%2Fsvg%2Bxml%3C%2Fdc%3Aformat%3E%3Cdc%3Atype%20rdf%3Aresource%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Fdcmitype%2FStillImage%22%2F%3E%3Cdc%3Atitle%3EAdventurer%3C%2Fdc%3Atitle%3E%3Cdc%3Acreator%3E%3Ccc%3AAgent%3E%3Cdc%3Atitle%3ELisa%20Wischofsky%3C%2Fdc%3Atitle%3E%3C%2Fcc%3AAgent%3E%3C%2Fdc%3Acreator%3E%3Cdc%3Asource%3Ehttps%3A%2F%2Fwww.instagram.com%2Flischi_art%2F%3C%2Fdc%3Asource%3E%3Ccc%3Alicense%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%22%2F%3E%3C%2Fcc%3AWork%3E%3Ccc%3ALicense%20rdf%3Aabout%3D%22https%3A%2F%2Fcreativecommons.org%2Flicenses%2Fby%2F4.0%2F%22%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Reproduction%22%2F%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Distribution%22%2F%3E%3Ccc%3Apermits%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23DerivativeWorks%22%2F%3E%3Ccc%3Arequires%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Notice%22%2F%3E%3Ccc%3Arequires%20rdf%3Aresource%3D%22https%3A%2F%2Fcreativecommons.org%2Fns%23Attribution%22%2F%3E%3C%2Fcc%3ALicense%3E%3C%2Frdf%3ARDF%3E%3C%2Fmetadata%3E%3Cmask%20id%3D%22avatarsRadiusMask%22%3E%3Crect%20width%3D%22762%22%20height%3D%22762%22%20rx%3D%220%22%20ry%3D%220%22%20x%3D%220%22%20y%3D%220%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fmask%3E%3Cg%20mask%3D%22url(%23avatarsRadiusMask)%22%3E%3Cpath%20d%3D%22M396.01%20164.85c37.82%204.9%2074.21%2019.64%20104.8%2042.39%206.15%204.84%2012.48%209.33%2018.02%2014.92%2023.77%2021.98%2042.73%2049.02%2055.13%2078.95%209.35%2022.31%2014.72%2046.04%2016.64%2070.14%206.62.81%2013.05%202.14%2019.12%205%2015.54%206.93%2027.08%2020.94%2031.78%2037.21%202.63%209.56%203.56%2019.75%201.72%2029.55-2.96%2018.76-13.72%2036.13-29.37%2046.92-10.94%207.65-24.49%2012.03-37.86%2011.68-5.13-.05-10.04-1.6-15.13-1.79-1.85%202.17-3.23%204.84-4.76%207.25-18.66%2029.62-44.57%2054.51-74.64%2072.4-28.1%2016.73-59.9%2027.16-92.46%2030.32-11.08.7-21.87%202.05-32.98.74-51.69-2.3-102.07-23.44-140.15-58.43-29.03-26.55-50.84-60.83-62.54-98.39-7.09-22.85-10.62-46.78-10.07-70.71.52-40.34%2012.53-80.58%2033.94-114.76%2019.1-30.81%2045.91-56.58%2077.2-74.83%2029.63-17.28%2063.35-27.68%2097.59-29.87%2014.66-1.47%2029.44-.37%2044.02%201.31Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M363%20169.06c48.47-1.39%2097.32%2014.7%20135.81%2044.12%206.55%204.06%2011.72%209.49%2017.36%2014.64%2024.33%2022.63%2043.2%2050.95%2054.93%2082.02%207.43%2019.61%2011.86%2040.2%2013.56%2061.09-8.89.74-17.34%202.34-25.38%206.38-2.19%201.03-1.89%204.95.68%205.23%202.35.23%204.98-1.51%207.24-2.2%2014.62-5.37%2031.32-4.35%2044.78%203.68%2011.69%206.78%2020.09%2018.16%2023.89%2031.06%202.6%208.25%202.68%2017.41%201.76%2025.95-2.5%2017.35-12.35%2033.73-26.73%2043.81-15.71%2011.33-37.17%2014.64-54.93%206.2-3.17-1.43-5.94-3.58-9.08-5.05-2.95-1.09-4.88%202.79-2.7%204.75%203.17%202.76%207.34%204.52%2011%206.56-20.14%2034.15-49.45%2062.7-84.41%2081.47-30.2%2016.31-64.44%2025.53-98.78%2026.15-27.63.72-55.33-4.04-81.21-13.72-30.32-11.24-57.84-29.43-80.37-52.6-22.67-23.37-39.92-51.88-50.2-82.77-14.96-44.64-14.91-94.01.27-138.59%2011.05-33.06%2030.28-63.21%2055.37-87.39%2029.67-28.73%2067.65-48.54%20108.13-56.67%2012.8-2.52%2025.94-4.24%2039.01-4.12Z%22%20fill%3D%22rgba(242%2C%20211%2C%20177%2C%201)%22%2F%3E%3Cpath%20d%3D%22M605.03%20404.4c2.63-.1%203.44%203.8%201.36%204.98-3.69%201.83-7.82%202.77-11.64%204.35-5.82%202.04-11.28%204.76-16.68%207.72%204.29%202.34%208.86%204.74%2012.71%207.76%202.58%202.09%204.85%204.35%205.33%207.8-.26%203.59-2.73%206.55-5.45%208.69-5.86%204.66-13.92%207.18-20.79%2010.26-1.75.62-4.43%201.99-5.59-.26-1.02-1.74-.06-3.11%201.57-3.87%206.65-3.3%2014.86-5.62%2020.79-10.16%201.37-1.14%203.39-2.74%203.61-4.62-4.07-5.63-12.42-8.59-18.23-12.09-2.34-1.72-2.29-4.24-.16-6.13%207.27-5.64%2016.98-9.26%2025.57-12.38%202.42-.83%205.03-1.95%207.6-2.05Z%22%20fill%3D%22%23000%22%2F%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cg%20fill%3D%22%23000%22%3E%3Cpath%20d%3D%22M619.37%20468.64c3.87%202.59%208.11%205.27%2011.16%208.82.29%201.66.07%203.43.04%205.12-1.93.6-3.41%201.04-5.39.26-29.11-10.45-62.11-9.7-91.33-.07-12.55%204.26-25.01%2010.37-35.3%2018.8-1.32%201.05-3.89%202.91-5.29%201.13-1.71-1.56-.64-3.53.19-5.23%207.13-12.76%2017.99-23.13%2030.66-30.34%2029.02-16.58%2066.88-16.42%2095.26%201.51ZM405.49%20480.39c11.64%202.56%2023.55%208.63%2031.21%2017.94%202.79%203.9%206.46%208.06%205.87%2013.18-1.58-.03-3.27.69-4.53-.5-4.31-3.48-8.75-6.1-13.92-8.1-15.2-5.93-32.51-7.16-48.6-5.04-12.43%201.78-26.06%205.7-35.99%2013.69-1.91%201.29-3.18%202.8-5.68%201.81-1.2-1.87-1.02-4.43.33-6.17%2016.01-21.77%2045.05-31.82%2071.31-26.81Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cg%20fill%3D%22%23000%22%3E%3Cpath%20d%3D%22M523.24%20384.36c6.17-.42%2013.09-.61%2018.45%202.95%203.68%202.44%205.4%206.35%204.48%2010.74-1.55%206.16-6.62%2010.92-11.61%2014.5-8.97%206.29-19.71%2010.24-30.57%2011.53-5.61.53-12.5.43-17.47-2.55-3.63-2.13-5.9-6.12-5.2-10.36%201.02-5.75%205.49-10.49%209.94-13.96%209.19-7.03%2020.55-11.34%2031.98-12.85ZM392.22%20401.23c9.11-.36%2018.31.51%2026.31%205.24%203.85%202.26%207.34%205.89%207.89%2010.49.34%204.21-1.96%207.8-5.19%2010.27-4.52%203.55-9.87%205-15.43%205.99-9.95%201.02-20.55.32-29.48-4.58-3.87-2.29-7.88-5.85-8.47-10.57-.73-4.27%202.02-8.47%205.39-10.84%205.4-3.87%2012.43-5.69%2018.98-6Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cpath%20d%3D%22M517.87%20557.3c2.33.19%203.18%202.72%202.32%204.67-1.39%203.57-3.16%206.99-4.64%2010.53-8.44%2019.32-19.56%2037.08-31.84%2054.17-1.41%201.83-2.87%203.96-4.81%205.27-2.97.78-6.11.75-8.65-1.18-9.12-6.48-17.13-14.16-24.3-22.74-7.03-7.83-13.49-16.1-18.86-25.17-1.05-2.12-2.54-4.48-1.19-6.81%201-1.56%203.22-2%204.86-2.55%2011.13-3.09%2022.19-6.48%2033.39-9.29%2011.78-2.84%2023.79-4.72%2035.86-5.71%205.9-.54%2011.94-1.42%2017.86-1.19Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M513.81%20563.01c-8.96%2021.23-21%2040.76-34.34%2059.49-.92%201.14-2.13%202.83-3.66%203.09-2.18.55-3.7-.86-5.38-1.99-8.5-6.53-15.77-14.19-22.74-22.28-6.22-6.86-11.88-14.33-16.59-22.31%2014.95-3.99%2029.9-8.63%2045.12-11.4%2012.45-2.49%2025.01-3.27%2037.59-4.6Z%22%20fill%3D%22%238F2E45%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cpath%20d%3D%22M489.12%20525.88c6.31%204.76%207.63%2014.96%2013.93%2020.08%206.42%204.85%2014.59%207.27%2022.22%203.55%201.06%201.29%202.3%202.29%201.36%204.1-4.04%206.97-11.2%2010.37-18.68%2012.5-9.75%202.39-20.52%202.45-29.5-2.57-6.24-3.58-9.82-9.17-14.36-14.52-5.21%207.59-12.23%2014.38-20.37%2018.75-5.83%203.02-13.36%205.01-19.86%203.3-6.23-1.8-11.9-6.12-12.18-13.11-.15-2.33%201.23-2.67%203.13-3.08%201.34%201.31%202.27%202.69%204.21%203.08%203.48.68%206.9-1.27%209.13-3.82%205.38-6.43%204.41-17.03%2010.37-22.64%206.15-5.89%2016.87-8.12%2024.48-3.93%207.71-5.3%2017.94-6.94%2026.12-1.69Z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate(-161%20-83)%22%3E%3Cpath%20d%3D%22M561.98%20243.31c21.23%202.34%2042.86%206.05%2063.28%2012.4%206.74%202.26%2013.88%204.45%2020.02%208.06%202.3%201.32.95%203.44-.34%204.94-4.83-1.56-9.35-3.9-14.17-5.5-13.7-4.75-28.06-7.81-42.32-10.35-15.88-2.84-31.99-4.79-48.11-5.34-23.62-1.23-47.3-.15-70.55%204.36-8.27%201.49-16.45%203.43-24.58%205.57-5.58%201.48-10.96%203.38-16.71%204.17-.47-2.51-1.79-4.51%201.29-5.74%2018.39-5.59%2037.13-9.95%2056.23-12.32%2025.27-3.25%2050.65-2.83%2075.96-.25Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M540.34%20247.52c16.12.55%2032.23%202.5%2048.11%205.34%2014.26%202.54%2028.62%205.6%2042.32%2010.35%204.82%201.6%209.34%203.94%2014.17%205.5%203.72%201.42%207.34%203.25%2010.53%205.64%207.29%205.88%2014.76%209.98%2020.17%2018.05%204.36%206.11%205.94%2013.33%205.28%2020.77.27.68.54%201.37.8%202.05%204.51%201.4%208.74%202.2%2012.75%204.34%206.99%203.64%2012.76%209.23%2017.64%2015.35%206.23%208.13%2011.33%2017.19%2015.42%2026.57%2012.4%2028.95%2017.9%2061.41%2019.33%2092.73-6.32-.01-12.55.97-18.39%203.44-1.97.69-4.01%201.25-6.02%201.85%201.03-1.33%202.91-2.54%201.2-4.24-1.08-1.43-2.37-1-3.82-.51-12.94%205.11-22.91%2013.8-32.65%2023.47-.98.93-1.27%202.11-1.68%203.34-1.11-2.07-2.03-4.29-2.92-6.47%203.07-2.7%203.48-7.8%204.61-11.6%203.58-15.4%205.92-31.44%206.65-47.24%202.26-.25%204.81.78%205.45-2.2-.03-2.6-2.05-3.14-3.87-4.38-8.36-4.74-15.62-10.92-22.2-17.87-13.01-13.9-23.24-30.59-29.3-48.65-1.3-3.86-2.25-7.79-3.84-11.55-1.61-4.44-2.07-9.37-3.16-14-5.22-1.46-10.24-2.12-15.65-2.37-16.58-1.56-33.82-.08-50.44.34%209.68-1.36%2019.4-2.96%2028.95-5.07%202.4-.68%205.89-1.22%207.43-3.37%201.27-2.06.15-4.48-1.98-5.33-4.49-1.49-9.48-1.83-14.19-2.07-11.71-.3-23.32-1.26-35.04-.98-19.94-.26-39.88-.05-59.82-.3%2013.19-1.9%2026.15-5.54%2039.31-7.7%209.66-1.58%2019.23-3.67%2028.9-5.17%2011.56-.15%2023.1.17%2034.64.83%204.65.44%209.27%201.02%2013.95.97.54-.88%201.08-1.76%201.62-2.63-1.04-1.3-1.61-2.52-3.42-2.76-6.81-1.48-14.23-1.23-21.18-1.59-13.29-.89-26.68-.55-40-.54-7.35-.07-14.65.72-22%20.78-8.43.14-16.76%201.26-25.17%201.73-32.15%202.67-63.86%208.16-95.3%2015.28%204.94-1.66%209.74-3.71%2014.63-5.53%2028.05-10.48%2056.67-19.04%2086.04-24.96%202.32-.64%205.72-.87%206.99-3.21.83-2.6-.57-4.03-3.1-4.21-17.01-.67-33.36.83-49.9%202.13-16.71%201.83-33.25%203.7-49.69%207.33-4.21.86-8.44%201.58-12.65%202.45%209.43-3.72%2018.93-7.14%2028.65-10.03%205.75-.79%2011.13-2.69%2016.71-4.17%208.13-2.14%2016.31-4.08%2024.58-5.57%2023.25-4.51%2046.93-5.59%2070.55-4.36Z%22%20fill%3D%22rgba(86%2C%2035%2C%206%2C%201)%22%2F%3E%3Cpath%20d%3D%22M512.09%20259.74c2.53.18%203.93%201.61%203.1%204.21-1.27%202.34-4.67%202.57-6.99%203.21-29.37%205.92-57.99%2014.48-86.04%2024.96-4.89%201.82-9.69%203.87-14.63%205.53%2031.44-7.12%2063.15-12.61%2095.3-15.28%208.41-.47%2016.74-1.59%2025.17-1.73%207.35-.06%2014.65-.85%2022-.78%2013.32-.01%2026.71-.35%2040%20.54%206.95.36%2014.37.11%2021.18%201.59%201.81.24%202.38%201.46%203.42%202.76-.54.87-1.08%201.75-1.62%202.63-4.68.05-9.3-.53-13.95-.97-11.54-.66-23.08-.98-34.64-.83-23.1-.33-46.4%201.07-69.4%203.23-35.01%203.45-69.37%2010.1-103.48%2018.62-2.72.5-6.62%201.91-8.98-.08-.49-1.25-.79-3.41.47-4.31%203.28-2.56%207.52-4.02%2011.27-5.79%2028.42-12.38%2057.92-22.32%2087.92-30.09%202.58-.69%205.19-1.21%207.8-1.73-5.32.64-10.66.83-16%201.19-27.55%202.23-54.8%205.84-81.54%2013.06-.92-1.62-2.11-2.56-1.49-4.59%202.55-1.97%205.83-2.67%208.89-3.44%204.21-.87%208.44-1.59%2012.65-2.45%2016.44-3.63%2032.98-5.5%2049.69-7.33%2016.54-1.3%2032.89-2.8%2049.9-2.13ZM656.08%20270.86c2.32-.28%203.81-.12%205.74%201.24%207.25%205.03%2014.8%2011.12%2019.33%2018.8%203.79%205.96%205.27%2012.61%205.09%2019.63%2011.72%202.53%2020.94%209.68%2028.55%2018.65%2010.27%2012.18%2017.54%2027.39%2022.86%2042.32%209.41%2026.83%2013.69%2055.2%2014.97%2083.53.19%202.16-.6%203.94-2.79%204.49-3.93.19-7.73-.2-11.61.79-2.74.45-5.97%201.96-8.72%201.29-.42-1.29-.76-2.61-1.03-3.95%205.84-2.47%2012.07-3.45%2018.39-3.44-1.43-31.32-6.93-63.78-19.33-92.73-4.09-9.38-9.19-18.44-15.42-26.57-4.88-6.12-10.65-11.71-17.64-15.35-4.01-2.14-8.24-2.94-12.75-4.34-.26-.68-.53-1.37-.8-2.05.66-7.44-.92-14.66-5.28-20.77-5.41-8.07-12.88-12.17-20.17-18.05.14-1.17.34-2.33.61-3.49Z%22%20fill%3D%22%23000%22%2F%3E%3Cpath%20d%3D%22M478.16%20298.5c5.98-.43%2012.03.07%2018.02-.05%2019.94.25%2039.88.04%2059.82.3%2011.72-.28%2023.33.68%2035.04.98%204.71.24%209.7.58%2014.19%202.07%202.13.85%203.25%203.27%201.98%205.33-1.54%202.15-5.03%202.69-7.43%203.37-9.55%202.11-19.27%203.71-28.95%205.07%2016.62-.42%2033.86-1.9%2050.44-.34%201.45.29%203.23.29%204.43%201.16.27%201.13.23%202.18-.12%203.17-1.35%201.16-2.93.74-4.59.79-24.87-1.12-49.22%201.18-74%202.5-3.93.24-8.03.64-11.95.13-2.6-.19-3.48-3.91-1.58-5.5%202.33-1.62%205.62-2.04%208.33-2.7%2017.46-3.47%2035.22-5.46%2052.68-9-10.76-1.05-21.67-1.08-32.47-1.15-27.67-.57-55.39-.2-83.07-.54-1.3-.15-3.62-.3-3.67-2.02-.87-1.61%201.29-3.61%202.9-3.57ZM636.75%20331.83c1.11-.08%202.22-.16%203.33-.23%201.59%203.76%202.54%207.69%203.84%2011.55%206.06%2018.06%2016.29%2034.75%2029.3%2048.65%206.58%206.95%2013.84%2013.13%2022.2%2017.87%201.82%201.24%203.84%201.78%203.87%204.38-.64%202.98-3.19%201.95-5.45%202.2-.73%2015.8-3.07%2031.84-6.65%2047.24-1.13%203.8-1.54%208.9-4.61%2011.6-1.09-.56-2.14-1.19-3.15-1.87-.2-2.35.4-4.48%201.01-6.72%203.23-11.12%205-22.86%206.75-34.31.72-6.62%201.54-13.4%201.12-20.06-6.2-4.15-11.91-8.98-17.18-14.26-15.82-16.09-27.82-36.16-34.23-57.81-.7-2.93-1.99-5.41-.15-8.23ZM723.65%20455.26c1.71%201.7-.17%202.91-1.2%204.24-10.49%203.65-19.91%2011.5-27.71%2019.25-2.59%202.32-4.16%205.18-8.06%204.91l-1.18-2.1c.41-1.23.7-2.41%201.68-3.34%209.74-9.67%2019.71-18.36%2032.65-23.47%201.45-.49%202.74-.92%203.82.51ZM709.55%20473.6c2.59-1.04%204.44.66%203.59%203.39-2.71%202.38-6.06%203.96-8.84%206.29-5.1%204.18-9.7%209.03-14.09%2013.94-1.55%201.77-3.37%203.24-5.28%204.62-.8-.9-1.57-1.83-2.29-2.78-.09-2.29%202.21-4.21%203.59-5.84%206.77-7.11%2014.46-15.2%2023.32-19.62Z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
};

export const Default: Story = {
    render: () =>
        <CompanyCard
            name={companyData.name}
            id={companyData.id}
            description={companyData.description}
            address={companyData.address}
            starred={companyData.starred}
            image={companyData.image}
        />
};