import { useState, useEffect } from 'react';
import { financialResultAPI } from '../../services/api';

const FinancialResult = () => {
  const [selectedYear, setSelectedYear] = useState('FY26');
  const [loading, setLoading] = useState(false);
  const [financialResultData, setFinancialResultData] = useState({});

  const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'];

  useEffect(() => {
    fetchFinancialResults();
  }, [selectedYear]);

  const fetchFinancialResults = async () => {
    setLoading(true);
    try {
      const response = await financialResultAPI.getByFiscalYear(selectedYear);
      if (response.data.success && response.data.data.length > 0) {
        setFinancialResultData({
          [selectedYear]: response.data.data
        });
      } else {
        // If API returns empty, don't set anything - let it fallback to hardcoded
        setFinancialResultData({});
      }
    } catch (error) {
      console.error('Error fetching financial results:', error);
      // On error, don't set anything - let it fallback to hardcoded
      setFinancialResultData({});
    } finally {
      setLoading(false);
    }
  };

  const hardcodedFinancialResultData = {
    FY26: [
      { type: 'Other Disclosure', year: 'FY-2026', quarter: 'Q1', description: 'Consolidated_Q1_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Consolidated_Q1_FY26_TSL.pdf'},
      { type: 'Other Disclosure', year: 'FY-2026', quarter: 'Q1', description: 'Standalone_Q1_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Standalone_Q1_FY26_TSL.pdf'},
      { type: 'Other Disclosure', year: 'FY-2026', quarter: 'Q2', description: 'Consolidated_Q2_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q2/Consolidated_Q2_FY26_TSL.pdf'},
      { type: 'Other Disclosure', year: 'FY-2026', quarter: 'Q2', description: 'Standalone_Q2_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q2/Standalone_Q2_FY26_TSL.pdf'},
      { type: 'Other Disclosure', year: 'FY-2026', quarter: 'Q3', description: 'Consolidated_Q3_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q3/Consolidated_Q3_FY26_TSL.pdf'},
      { type: 'Other Disclosure', year: 'FY-2026', quarter: 'Q3', description: 'Standalone_Q3_FY26_TSL', link: '/assets/investordata/financial-results/FY-2026/Q3/Standalone_Q3_FY26_TSL.pdf'},

    ],
    FY25: [
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q1', description: 'Standalone_Q1_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q1/Standalone_Q1_FY_25.pdf'},
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q1', description: 'Consolidated_Q1_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q1/Standalone_Q1_FY_25.pdf'},
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q2', description: 'Standalone_Q2_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q2/Standalone_Q2_FY_25.pdf'},
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q2', description: 'Consolidated_Q2_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q2/Consolidated_Q2_FY_25.pdf'},
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q3', description: 'Standalone_Q3_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q3/Standalone_Q3_FY_25.pdf'},
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q3', description: 'Consolidated_Q3_FY_25', link: '/assets/investordata/financial-results/FY-2025/Q3/Consolidated_Q3_FY_25.pdf'},
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q4', description: 'Standalone_Q4_TSL', link: '/assets/investordata/financial-results/FY-2025/Q4/Standalone_Q4_TSL.pdf'},
      { type: 'Other Disclosure', year: 'FY-2025', quarter: 'Q4', description: 'Consolidated_Q4_TSL', link: '/assets/investordata/financial-results/FY-2025/Q4/Consolidated_Q4_TSL.pdf'}
    ],
    FY24: [
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q1', description: 'take-sebi-qtr_1_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q1/take-sebi-qtr_1_stand_alone-2023-24.pdf'},
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q1', description: 'take-sebi-qtr_1_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q1/take-sebi-qtr_1_consolidated-2023-24.pdf'},
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q2', description: 'take-sebi-qtr_2_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q2/take-sebi-qtr_2_stand_alone-2023-24.pdf'},
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q2', description: 'take-sebi-qtr_2_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q2/take-sebi-qtr_2_consolidated-2023-24.pdf'},
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q3', description: 'take-sebi-qtr_3_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q3/take-sebi-qtr_3_stand_alone-2023-24.pdf'},
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q3', description: 'take-sebi-qtr_3_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q3/take-sebi-qtr_3_consolidated-2023-24.pdf'},
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q4/take-sebi-qtr_4_stand_alone-2023-24.pdf'},
      { type: 'Other Disclosure', year: 'FY-2024', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2023-24', link: '/assets/investordata/financial-results/FY-2024/Q4/take-sebi-qtr_4_consolidated-2023-24.pdf'},
    ],
    FY23: [
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q1', description: 'take-sebi-qtr_1_stand_alone-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q1/take-sebi-qtr_1_stand_alone-2022-23.pdf'},
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q1', description: 'take-sebi-qtr_1_consolidated-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q1/take-sebi-qtr_1_stand_alone-2022-23.pdf'},
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q2', description: 'take-sebi-qtr_2_stand_alone-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q2/take-sebi-qtr_2_stand_alone-2022-23.pdf'},
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q2', description: 'take-sebi-qtr_2_consolidated-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q2/take-sebi-qtr_2_consolidated-2022-23.pdf'},
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q3', description: 'take-sebi-qtr_3_stand_alone-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q3/take-sebi-qtr_3_stand_alone-2022-23.pdf'},
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q3', description: 'take-sebi-qtr_3_consolidated-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q3/take-sebi-qtr_3_consolidated-2022-23.pdf'},
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q4/take-sebi-qtr_4_stand_alone-2022-23.pdf'},
      { type: 'Other Disclosure', year: 'FY-2023', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2022-23', link: '/assets/investordata/financial-results/FY-2023/Q4/take-sebi-qtr_4_consolidated-2022-23.pdf'},
    ],
    
    FY22: [
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2022/Q1/TAKE Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'take-sebi-qtr_1_consolidated-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q1/take-sebi-qtr_1_consolidated-2021-22.pdf'},
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'take-sebi-qtr_1_stand_alone-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q1/take-sebi-qtr_1_stand_alone-2021-22.pdf'},
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'take-sebi-qtr_1_transcript-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q1/take-sebi-qtr_1_transcript-2021-22.pdf'},
  
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q2', description: 'TAKE Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2022/Q2/TAKE Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q2', description: 'take-sebi-qtr_2_consolidated-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q2/take-sebi-qtr_2_consolidated-2021-22.pdf'},
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q2', description: 'take-sebi-qtr_2_stand_alone-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q2/take-sebi-qtr_2_stand_alone-2021-22.pdf'},
   

      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q3', description: 'take-sebi-qtr_3_consolidated-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q3/take-sebi-qtr_3_consolidated-2021-22.pdf'},
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q3', description: 'take-sebi-qtr_3_stand_alone-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q3/take-sebi-qtr_3_stand_alone-2021-22.pdf'},
   

      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q4/take-sebi-qtr_4_consolidated-2021-22.pdf'},
      { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2021-22.pdf', link: '/assets/investordata/financial-results/FY-2022/Q4/take-sebi-qtr_4_stand_alone-2021-22.pdf'},
    ],


    FY21: [
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q1', description: 'Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2021/Q1/Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q1', description: 'take-sebi-qtr_1_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q1/take-sebi-qtr_1_consolidated-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q1', description: 'take-sebi-qtr_1_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q1/take-sebi-qtr_1_stand_alone-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q1', description: 'take-sebi-qtr_1_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q1/take-sebi-qtr_1_transcript-2020-21.pdf'},
  
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q2', description: 'TAKE Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2021/Q2/TAKE Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q2', description: 'take-sebi-qtr_2_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q2/take-sebi-qtr_2_consolidated-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q2', description: 'take-sebi-qtr_2_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q2/take-sebi-qtr_2_stand_alone-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q2', description: 'take-sebi-qtr_2_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q2/take-sebi-qtr_2_transcript-2020-21.pdf'},

      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q3', description: 'take_solutions_q3_FY21_earnings_release.pdf', link: '/assets/investordata/financial-results/FY-2021/Q3/take_solutions_q3_FY21_earnings_release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q3', description: 'take-sebi-qtr_3_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q3/take-sebi-qtr_3_consolidated-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q3', description: 'take-sebi-qtr_3_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q3/take-sebi-qtr_3_stand_alone-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q3', description: 'take-sebi-qtr_3_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q3/take-sebi-qtr_3_transcript-2020-21.pdf'},

      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q4', description: 'TAKE Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2021/Q4/TAKE Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q4/take-sebi-qtr_4_consolidated-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q4/take-sebi-qtr_4_stand_alone-2020-21.pdf'},
      { type: 'Other Disclosure', year: 'FY-2021', quarter: 'Q4', description: 'take-sebi-qtr_4_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q4/take-sebi-qtr_4_transcript-2020-21.pdf'},
    ],



    
//ujjwal done fy20-fy19
    FY20: [
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q1', description: 'Consolidated Financial Results', link: '/assets/investordata/financial-results/FY-2020/Q-1/Consolidated Financial Results.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q1', description: 'Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2020/Q-1/Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q1', description: 'Standalone4 Financial Results', link: '/assets/investordata/financial-results/FY-2020/Q-1/Standalone4 Financial Results.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q1', description: 'take-sebi-qtr_1_transcript-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-1/take-sebi-qtr_1_transcript-2019-20.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q2', description: 'Earnings Release', link: '/assets/investordata/financial-results/FY-2020/Q-2/Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q2', description: 'take-sebi-qtr_2_consolidated-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-2/take-sebi-qtr_2_consolidated-2019-20.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q2', description: 'take-sebi-qtr_2_stand_alone-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-2/take-sebi-qtr_2_stand_alone-2019-20.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q3', description: 'Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2020/Q-3/Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q3', description: 'take-sebi-qtr_3_consolidated-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-3/take-sebi-qtr_3_consolidated-2019-20.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q3', description: 'take-sebi-qtr_3_stand_alone-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-3/take-sebi-qtr_3_stand_alone-2019-20.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q4', description: 'TAKE Earnings Release', link: '/assets/investordata/financial-results/FY-2020/Q-4/TAKE Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-4/take-sebi-qtr_4_consolidated-2019-20.pdf'},
      { type: 'Other Disclosure', year: 'FY-2020', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2019-20', link: '/assets/investordata/financial-results/FY-2020/Q-4/take-sebi-qtr_4_stand_alone-2019-20.pdf'},
    ],


    FY19: [
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q1', description: 'Consolidated FInancials', link: '/assets/investordata/financial-results/FY-2019/Q-1/Consolidated FInancials.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q1', description: 'Earnings Release Q1FY19', link: '/assets/investordata/financial-results/FY-2019/Q-1/Earnings Release Q1FY19.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q1', description: 'Standalone financial Results', link: '/assets/investordata/financial-results/FY-2019/Q-1/Standalone financial Results.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q1', description: 'take-sebi-qtr_1_transcript-2018-19', link: '/assets/investordata/financial-results/FY-2019/Q-1/take-sebi-qtr_1_transcript-2018-19.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q2', description: 'Earnings Release', link: '/assets/investordata/financial-results/FY-2019/Q-2/Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q2', description: 'TAKE-CFS-SEBI-Q2-FY19.xlsx', link: '/assets/investordata/financial-results/FY-2019/Q-2/TAKE-CFS-SEBI-Q2-FY19.xlsx.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q2', description: 'TAKE-Standalone-SEBI-Q2-FY19.xlsx', link: '/assets/investordata/financial-results/FY-2019/Q-2/TAKE-Standalone-SEBI-Q2-FY19.xlsx.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q3', description: 'Earnings Release', link: '/assets/investordata/financial-results/FY-2019/Q-3/Earnings Release.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q3', description: 'take-sebi-qtr_3_consolidated-2018-19', link: '/assets/investordata/financial-results/FY-2019/Q-3/take-sebi-qtr_3_consolidated-2018-19.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q3', description: 'take-sebi-qtr_3_stand_alone-2018-19', link: '/assets/investordata/financial-results/FY-2019/Q-3/take-sebi-qtr_3_stand_alone-2018-19.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter:'Q3', description: 'take-sebi-qtr_3_transcript-2018-19', link: '/assets/investordata/financial-results/FY-2019/Q-3/take-sebi-qtr_3_transcript-2018-19.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q4', description: '2.Financials', link: '/assets/investordata/financial-results/FY-2019/Q-4/2.Financials.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q4', description: '2.Stanalone Financials', link: '/assets/investordata/financial-results/FY-2019/Q-4/2.Stanalone Financials.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q4', description: 'Earnings Release Q4 FY19 - TAKE Solutions', link: '/assets/investordata/financial-results/FY-2019/Q-4/Earnings Release Q4 FY19 - TAKE Solutions.pdf'},
      { type: 'Other Disclosure', year: 'FY-2019', quarter: 'Q4', description: 'take-sebi-qtr_4_transcript-2018-19', link: '/assets/investordata/financial-results/FY-2019/Q-4/take-sebi-qtr_4_transcript-2018-19.pdf'},
    ],

   

    

    FY18: [
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'take-sebi-qtr_1_transcript-2017-18', link: '/assets/investordata/financial-results/take-sebi-qtr_1_transcript-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'Consolidated Standealone financial results', link: '/assets/investordata/financial-results/Consolidated Standealone financial results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'Consolidated Financial Results', link: '/assets/investordata/financial-results/Consolidated Financial Results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'Quarter ended June 30, 2017 Earnings Release', link: '/assets/investordata/financial-results/Quarter ended June 30, 2017 Earnings Release.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'TF', link: '/assets/investordata/financial-results/TF.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'standalone financial results', link: '/assets/investordata/financial-results/standalone financial results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'Consolidated financial results', link: '/assets/investordata/financial-results/Consolidated Financial Results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'Quarter ended September 30, 2017 Earnings Release', link: '/assets/investordata/financial-results/Quarter ended September 30, 2017 Earnings Release.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'take-sebi-qtr_3_transcript-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q3/take-sebi-qtr_3_transcript-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Standalone', link: '/assets/investordata/financial-results/FY-2018/Q3/Standalone.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Consolidated FS', link: '/assets/investordata/financial-results/FY-2018/Q3/Consolidated FS.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Quarter ended December 31, 2017 Earnings Release', link: '/assets/investordata/financial-results/FY-2018/Q3/Quarter ended December 31, 2017 Earnings Release.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'take-sebi-qtr_4_transcript-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q4/take-sebi-qtr_4_transcript-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q4/take-sebi-qtr_4_stand_alone-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q4/take-sebi-qtr_4_consolidated-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'Earnings Release', link: '/assets/investordata/financial-results/FY-2018/Q4/Earnings Release.pdf' },      
    ],


    // FY17: [
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2021/Q1/Earnings Release.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'take-sebi-qtr_1_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2021/Q1/take-sebi-qtr_1_consolidated-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'take-sebi-qtr_1_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q1/take-sebi-qtr_1_stand_alone-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q1', description: 'take-sebi-qtr_1_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q1/take-sebi-qtr_1_transcript-2020-21.pdf'},
  
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q2', description: 'TAKE Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2022/Q2/TAKE Earnings Release.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q2', description: 'take-sebi-qtr_2_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q2/take-sebi-qtr_2_consolidated-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q2', description: 'take-sebi-qtr_2_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q2/take-sebi-qtr_2_stand_alone-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q2', description: 'take-sebi-qtr_2_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q2/take-sebi-qtr_2_transcript-2020-21.pdf'},

    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q3', description: 'take_solutions_q3_FY21_earnings_release.pdf', link: '/assets/investordata/financial-results/FY-2022/Q3/take_solutions_q3_FY21_earnings_release.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q3', description: 'take-sebi-qtr_3_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q3/take-sebi-qtr_3_consolidated-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q3', description: 'take-sebi-qtr_3_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q3/take-sebi-qtr_3_stand_alone-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q3', description: 'take-sebi-qtr_3_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q3/take-sebi-qtr_3_transcript-2020-21.pdf'},

    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q4', description: 'TAKE Earnings Release.pdf', link: '/assets/investordata/financial-results/FY-2022/Q4/TAKE Earnings Release.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q4/take-sebi-qtr_4_consolidated-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q4/take-sebi-qtr_4_stand_alone-2020-21.pdf'},
    //   { type: 'Other Disclosure', year: 'FY-2022', quarter: 'Q4', description: 'take-sebi-qtr_4_transcript-2020-21.pdf', link: '/assets/investordata/financial-results/FY-2022/Q4/take-sebi-qtr_4_transcript-2020-21.pdf'},
    // ],
  };

  // Use API data if available, otherwise fallback to hardcoded data
  const currentYearFinancialData = financialResultData[selectedYear] || hardcodedFinancialResultData[selectedYear] || [];
  const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

  return (
    <div className="tab-content active">
      {/* Year Tabs */}
      <div className="disclosure-year-tabs">
        {years.map((year) => (
          <button
            key={year}
            className={`disclosure-year-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Disclosure Table */}
      {!loading && (
        <div className="disclosure-table-wrapper">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Quarter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {currentYearFinancialData.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-muted">
                    No data available for {selectedYear}
                  </td>
                </tr>
              ) : (
                currentYearFinancialData.map((item, index) => (
                  <tr key={item._id || index}>
                    <td>{item.year}</td>
                    <td>{item.quarter}</td>
                    <td>
                      <a 
                        href={item.pdfUrl ? `${BASE_URL}${item.pdfUrl}` : item.link} 
                        className="disclosure-description-link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="pdf-icon-small">📄</span>
                        {item.description}
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Annual Return Section */}
      {/* <div className="annual-return-section">
        <h4 className="annual-return-title">Annual Return</h4>
        <div className="annual-return-table">
          <div className="annual-return-row annual-return-header">
            <div className="annual-return-cell">Financial Year</div>
            {annualReturnYears.map((item, index) => (
              <div key={index} className="annual-return-cell">{item.year}</div>
            ))}
          </div>
          <div className="annual-return-row">
            <div className="annual-return-cell">Annual Return</div>
            {annualReturnYears.map((item, index) => (
              <div key={index} className="annual-return-cell">
                <a href={item.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  📄
                </a>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FinancialResult;


