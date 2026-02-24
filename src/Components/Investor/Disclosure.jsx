import { useState } from 'react';

const Disclosure = () => {
  const [selectedYear, setSelectedYear] = useState('FY26');

  const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'];

  // Disclosure data for each year
  const disclosureData = {

    ///ujjwal uploaded FY- 26,25,20,19,18
    FY26: [
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'TAKE Solutions Taps Anthropic to Accelerate AI Dominance in $370B', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/TAKE Solutions Taps Anthropic to Accelerate AI Dominance in $370B.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Press Release - TAKE Solutions to build a Scalable Unified AI Platform', link: '/assets/investordata/disclosure/disclosure-data/FY26/Press Release - TAKE Solutions to build a Scalable Unified AI Platform.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Press Release - Take Solutions Announces Plans to Set up “One Minute Clinic” in India', link: '/assets/investordata/disclosure/disclosure-data/FY26/Press Release - Take Solutions Announces Plans to Set up “One Minute Clinic” in India.pdf' },

      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Press Release Strategic Plan to Build an Advanced AI-Driven Diagnostic & Preventive Care Platform', link: '/assets/investordata/disclosure/disclosure-data/FY26/Press Release Strategic Plan to Build an Advanced AI-Driven Diagnostic & Preventive Care Platform.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Apointment of Director', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Apointment of Director.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Appointment of Auditor', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Appointment of Auditor.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Resignation of Director and CFO', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Resignation of Director and CFO.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Shifting of Registered Office of the Company', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Shifting of Registered Office of the Company.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Appointment of Mr. Parmeshvar Namdev Dhangare', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Appointment of Mr. Parmeshvar Namdev Dhangare.pdf' },
      
      
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Intimation cut off date EOGM', link: '/assets/investordata/disclosure/disclosure-data/FY26/Intimation cut off date EOGM.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'News Adv UFR Q3', link: '/assets/investordata/disclosure/disclosure-data/FY26/News Adv UFR Q3.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Newspaper Adv Notice of EOGM 2026', link: '/assets/investordata/disclosure/disclosure-data/FY26/Newspaper Adv Notice of EOGM 2026.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Outcome of BM UFR Q3', link: '/assets/investordata/disclosure/disclosure-data/FY26/Outcome of BM UFR Q3.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reconciliation of Share Capital Audit report for the quarter ended December 31, 2025', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reconciliation of Share Capital Audit report for the quarter ended December 31, 2025.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 74(5) Q3', link: 'TakeSolution/public/assets/investordata/disclosure/disclosure-data/FY26/Reg 74(5) Q3.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Take Outcome of BM 11 February 2026', link: '/assets/investordata/disclosure/disclosure-data/FY26/Take Outcome of BM 11 February 2026.pdf' },
      // { type: 'Other Disclosures', date: '17-Feb-26', description: 'Take Outcome of BM Final', link: '/assets/investordata/disclosure/disclosure-data/FY26/Take Outcome of BM Final.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Take Prior intimation of BM 7 February 2026', link: '/assets/investordata/disclosure/disclosure-data/FY26/Take Prior intimation of BM 7 February 2026.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Take Prior intimation of BM UFR Q3', link: '/assets/investordata/disclosure/disclosure-data/FY26/Take Prior intimation of BM UFR Q3.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Trading window closure Q3', link: '/assets/investordata/disclosure/disclosure-data/FY26/Trading window closure Q3.pdf' },
      // { type: 'Other Disclosures', date: '17-Feb-26', description: 'Trading Window Closure sd', link: '/assets/investordata/disclosure/disclosure-data/FY26/Trading Window Closure sd.pdf' },

      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Shareholding Pattern Q1', link: '/assets/investordata/disclosure/disclosure-data/FY26/Shareholding Pattern Q1.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Shareholding Pattern Q2', link: '/assets/investordata/disclosure/disclosure-data/FY26/Shareholding Pattern Q2.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Shareholding Pattern Q3', link: '/assets/investordata/disclosure/disclosure-data/FY26/Shareholding Pattern Q3.pdf' },

      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Annual Secretarial Compliance Report.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Annual Secretarial Compliance Report.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Certificate of Regulation.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Certificate of Regulation.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Clarification_Intimation_Resgn_Seshadri_TSL.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Clarification_Intimation_Resgn_Seshadri_TSL.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Closure of Trading Windows.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Closure of Trading Windows.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Disinvestments.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Disinvestments.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Final_Reg30_Outcome_BM.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Final_Reg30_Outcome_BM.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Intimation_Appt_Directors.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Intimation_Appt_Directors.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Intimation_Appt_IDs_.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Intimation_Appt_IDs_.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Intimation_EGM_Notice_TSL.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Intimation_EGM_Notice_TSL.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'INTIMATION_REG_30_AUDITOR_RESIGNATION_TSL.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/INTIMATION_REG_30_AUDITOR_RESIGNATION_TSL.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Intimation_Reg31(4)_.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Intimation_Reg31(4)_.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Intimation_Resgn_Kiran Sharma_TSL.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Intimation_Resgn_Kiran Sharma_TSL.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Intimation_Resgn_Seshadri_TSL.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Intimation_Resgn_Seshadri_TSL.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Listing Obligations and Disclosure requirement.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Listing Obligations and Disclosure requirement.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'News paper Publication.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/News paper Publication.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Newspaper publication_-.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Newspaper publication_-.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'newspaper publication..pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/newspaper publication..pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Newspaper Publication.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Newspaper Publication.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'NewspaperIntimation-02-06-2025.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/NewspaperIntimation-02-06-2025.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Notce of Board Meeting.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Notce of Board Meeting.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Outcome of Board meeting.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Outcome of Board meeting.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Press release TAKESolutions-23-dec-25.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Press release TAKESolutions-23-dec-25.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reconciliation of Share Capital Audit Report —  June 30, 2025.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reconciliation of Share Capital Audit Report —  June 30, 2025.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reconciliation of Share Capital Audit Report — Quarter ended September 30, 2025.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reconciliation of Share Capital Audit Report — Quarter ended September 30, 2025.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reconciliation of Share Capital Audit Report.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reconciliation of Share Capital Audit Report.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 29_Intimation_BM_..pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 29_Intimation_BM_..pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 29_Intimation_BM_.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 29_Intimation_BM_.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg30_Outcome_BM.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg30_Outcome_BM.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg74(5)_..pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg74(5)_..pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg74(5)_.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg74(5)_.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Scrutinizer_Report_AGM.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Scrutinizer_Report_AGM.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'ScrutinizerReport_EGM_.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/ScrutinizerReport_EGM_.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Submission of Annual report.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Submission of Annual report.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Summary of proceedings of AGM.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Summary of proceedings of AGM.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Summary of proceedings of EGM.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/Summary of proceedings of EGM.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'TradingWindowClosure_.pdf', link: '/assets/investordata/disclosure/disclosure-data/FY26/TradingWindowClosure_.pdf' },

    ],

    


    FY25: [
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Corrigendum AGM Proceedings ', link: '/assets/investordata/disclosure/disclosure-data/FY25/AGM Proceedings_2023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'AR_Submission_20072024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/AR_Submission_20072024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Authorisation_KMP_Reg30(5)', link: '/assets/investordata/disclosure/disclosure-data/FY25/Authorisation_KMP_Reg30(5).pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Book_Closure_AGM_2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Book_Closure_AGM_2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Disclosure_Delay_financials_Q2_2024-25', link: '/assets/investordata/disclosure/disclosure-data/FY25/Disclosure_Delay_financials_Q2_2024-25.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Disclosure_Delay_in_submission_of_financials_Q2-2024-25', link: '/assets/investordata/disclosure/disclosure-data/FY25/Disclosure_Delay_in_submission_of_financials_Q2-2024-25.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'EGM_Proceedings_2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/EGM_Proceedings_2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Final_Reg30_Outcome_BM_22 01 2025_', link: '/assets/investordata/disclosure/disclosure-data/FY25/Final_Reg30_Outcome_BM_22 01 2025_.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Integrated_Filing_Financials_', link: '/assets/investordata/disclosure/disclosure-data/FY25/Integrated_Filing_Financials_.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_Delay_BM_13082024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_Delay_BM_13082024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_EGM_Notice_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_EGM_Notice_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_Reg30_18052024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_Reg30_18052024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_Reg30_25 05 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_Reg30_25 05 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_Reg31(4)_SAST_31032024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_Reg31(4)_SAST_31032024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_Resgn_Chella_Gowrishankar_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_Resgn_Chella_Gowrishankar_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_Resignation_CS_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_Resignation_CS_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Intimation_Resignation_Shobana_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Intimation_Resignation_Shobana_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'LargeCorporateIntimation_31 03 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/LargeCorporateIntimation_31 03 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Microsoft Word - AGM_Proceedings_2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/Microsoft Word - AGM_Proceedings_2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'News paper publication_', link: '/assets/investordata/disclosure/disclosure-data/FY25/News paper publication_.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'News paper publication', link: '/assets/investordata/disclosure/disclosure-data/FY25/News paper publication.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Newspaper Publication Reg_47', link: '/assets/investordata/disclosure/disclosure-data/FY25/Newspaper Publication Reg_47.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Newspaper publication', link: '/assets/investordata/disclosure/disclosure-data/FY25/Newspaper publication.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'NewspaperIntimation_', link: '/assets/investordata/disclosure/disclosure-data/FY25/NewspaperIntimation_.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'NewspaperIntimation_22 07 2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/NewspaperIntimation_22 07 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'NewspaperIntimation_31 05 2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/NewspaperIntimation_31 05 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg 29_Intimation_BM_20052024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg 29_Intimation_BM_20052024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg 29_Intimation_BM_22 01 2025', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg 29_Intimation_BM_22 01 2025.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg_29_Intimation_BM_12 02 2025_', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg_29_Intimation_BM_12 02 2025_.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg_40(9)_31 03 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg_40(9)_31 03 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg24A_ASCR_30 05 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg24A_ASCR_30 05 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg30_Outcome_BM_12 02 2025_', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg30_Outcome_BM_12 02 2025_.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg30_Outcome_BM_30052024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg30_Outcome_BM_30052024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg47_Intimation_Newspaper_23072024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg47_Intimation_Newspaper_23072024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg7(3)_2023-24_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg7(3)_2023-24_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg74(5)_10 07 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg74(5)_10 07 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg74(5)_10042024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg74(5)_10042024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg74(5)_13 01 2025_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg74(5)_13 01 2025_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg74(5)_14 10 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg74(5)_14 10 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg76_30 06 2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg76_30 06 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg76_30 09 2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg76_30 09 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reg76_31 03 2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/Reg76_31 03 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Scrutinizer Report_EGM_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY25/Scrutinizer Report_EGM_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'TradingWindow.', link: '/assets/investordata/disclosure/disclosure-data/FY25/TradingWindow..pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'TradingWindow', link: '/assets/investordata/disclosure/disclosure-data/FY25/TradingWindow.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'TradingWindowClosure_30 06 2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/TradingWindowClosure_30 06 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'TradingWindowClosure_30 09 2024', link: '/assets/investordata/disclosure/disclosure-data/FY25/TradingWindowClosure_30 09 2024.pdf' }
    ],

     FY24:[
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'AGM Proceedings_2023', link: '/assets/investordata/disclosure/disclosure-data/FY24/AGM Proceedings_2023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'AR_Submission_17072023_TSL_Final', link: '/assets/investordata/disclosure/disclosure-data/FY24/AR_Submission_17072023_TSL_Final.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Bookclosure', link: '/assets/investordata/disclosure/disclosure-data/FY24/Bookclosure.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Intimation_Expiry_JMTerm_TAKEPte', link: '/assets/investordata/disclosure/disclosure-data/FY24/Intimation_Expiry_JMTerm_TAKEPte.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Intimation_Reg31(4)_SAST_31032023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Intimation_Reg31(4)_SAST_31032023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Intimation_Scrutinizer_Report_Reg44_12052023', link: '/assets/investordata/disclosure/disclosure-data/FY24/Intimation_Scrutinizer_Report_Reg44_12052023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'LargeCorporateIntimation_31032023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/LargeCorporateIntimation_31032023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Newspaper Intimation_10 11 2023', link: '/assets/investordata/disclosure/disclosure-data/FY24/Newspaper Intimation_10 11 2023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NewspaperIntimation_09042023', link: '/assets/investordata/disclosure/disclosure-data/FY24/NewspaperIntimation_09042023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NewspaperIntimation_19072023', link: '/assets/investordata/disclosure/disclosure-data/FY24/NewspaperIntimation_19072023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NewspaperIntimation_20072023', link: '/assets/investordata/disclosure/disclosure-data/FY24/NewspaperIntimation_20072023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NewspaperPublication_14 02 2024', link: '/assets/investordata/disclosure/disclosure-data/FY24/NewspaperPublication_14 02 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Notice_BM_19052023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Notice_BM_19052023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg 29_Intimation_BM_29 01 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg 29_Intimation_BM_29 01 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg7(3)_31032023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg7(3)_31032023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg23(9)_RPT_29052023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg23(9)_RPT_29052023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg24A_ASCR_30052023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg24A_ASCR_30052023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg29_Intimation_BM_02 11 2023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg29_Intimation_BM_02 11 2023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg29_Intimation_BM_07082023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg29_Intimation_BM_07082023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Outcome_BM_08 11 2023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg30_Outcome_BM_08 11 2023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Outcome_BM_13022024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg30_Outcome_BM_13022024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Outcome_BM_14082023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg30_Outcome_BM_14082023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Shifting_of_Registered_Office', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg30_Shifting_of_Registered_Office.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg33_Outcome_BM_FinancialResults_29052023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg33_Outcome_BM_FinancialResults_29052023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg40(9)_31032023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg40(9)_31032023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Financialresults_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg47_Financialresults_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Intimation_Newspaper_20 12 2023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg47_Intimation_Newspaper_20 12 2023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Intimation_Newspaper_21092023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg47_Intimation_Newspaper_21092023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg74(5)_09 01 2024_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg74(5)_09 01 2024_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg74(5)_10072023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg74(5)_10072023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg74(5)_11042023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg74(5)_11042023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg74(5)_11102023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg74(5)_11102023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg76_31 12 2023', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg76_31 12 2023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg76_30062023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg76_30062023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg76_30092023', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg76_30092023.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg76_31032023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Reg76_31032023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Trading Window_Closure_29092023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY24/Trading Window_Closure_29092023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Trading WindowClosure_28 03 2024', link: '/assets/investordata/disclosure/disclosure-data/FY24/Trading WindowClosure_28 03 2024.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'TSL letterhead_LTD-Mylapore new', link: '/assets/investordata/disclosure/disclosure-data/FY24/TSL letterhead_LTD-Mylapore new.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'VotingResults_ScrutinizerReport_AGM_16082023', link: '/assets/investordata/disclosure/disclosure-data/FY24/VotingResults_ScrutinizerReport_AGM_16082023.pdf' },

    
    ],

     FY23:[
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'AR_Submission_2021_22_Final', link: '/assets/investordata/disclosure/disclosure-data/FY23/AR_Submission_2021_22_Final.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Board_Meeting_Notice_060223', link: '/assets/investordata/disclosure/disclosure-data/FY23/Board_Meeting_Notice_060223.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Bookclosure', link: '/assets/investordata/disclosure/disclosure-data/FY23/Bookclosure.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Closure_of_Trading_Window_300622', link: '/assets/investordata/disclosure/disclosure-data/FY23/Closure_of_Trading_Window_300622.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'December 30_Trading Window', link: '/assets/investordata/disclosure/disclosure-data/FY23/December 30_Trading Window.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Disclosure_SEBI_Circular_Not_a_Large_Corporate_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Disclosure_SEBI_Circular_Not_a_Large_Corporate_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Exchange_Intimaton_Appeal_Withdrawal_100822', link: '/assets/investordata/disclosure/disclosure-data/FY23/Exchange_Intimaton_Appeal_Withdrawal_100822.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Final_Outcome_Reg33_May_28_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Final_Outcome_Reg33_May_28_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'FINAL_Reg30_Int_Diss_ALS_160323', link: '/assets/investordata/disclosure/disclosure-data/FY23/FINAL_Reg30_Int_Diss_ALS_160323.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Intimation_Delay_Fin_Results_120822', link: '/assets/investordata/disclosure/disclosure-data/FY23/Intimation_Delay_Fin_Results_120822.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Intimation_Notice_BM_181022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Intimation_Notice_BM_181022.docx' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Intimation_Reg31(4)_SAST_110422', link: '/assets/investordata/disclosure/disclosure-data/FY23/Intimation_Reg31(4)_SAST_110422.pdf' },

      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Intimation_Scrutinizer_Report_Reg44_200822', link: '/assets/investordata/disclosure/disclosure-data/FY23/Intimation_Scrutinizer_Report_Reg44_200822.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Letterhead_TAKE', link: '/assets/investordata/disclosure/disclosure-data/FY23/Letterhead_TAKE.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Microsoft Word - Reg30_Intimation_071122', link: '/assets/investordata/disclosure/disclosure-data/FY23/Microsoft Word - Reg30_Intimation_071122.docx.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NewspaperIntimation_011222', link: '/assets/investordata/disclosure/disclosure-data/FY23/NewspaperIntimation_011222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Outcome_BM_181022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Outcome_BM_181022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Postal_Ballot_2022_Results_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY23/Postal_Ballot_2022_Results_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reco_300622', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reco_300622.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reco_300922', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reco_300922.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reco_310322', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reco_310322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg7(3)_310322', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg7(3)_310322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg23(9)_RPT_110622', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg23(9)_RPT_110622.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg23(9)_RPT_300922_Final', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg23(9)_RPT_300922_Final.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg24A_Ann_Sec_Comp_Report_310322', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg24A_Ann_Sec_Comp_Report_310322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Appt_of_Independent_Director_BM_14022023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Appt_of_Independent_Director_BM_14022023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Change_in_Directors_July_1_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Change_in_Directors_July_1_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Change_in_Directors_July_6_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Change_in_Directors_July_6_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Change_in_Directors_June 30_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Change_in_Directors_June 30_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Company Update_April_7_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Company Update_April_7_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Delay in Q2 Results_041122', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Delay in Q2 Results_041122.docx' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Dissolution_ALSInc_130323', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Dissolution_ALSInc_130323.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_EGM_Requisition_Notice', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_EGM_Requisition_Notice.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Intimation_AGM_Extension_210722', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Intimation_AGM_Extension_210722.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Intimation_CFO Appt_301222', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Intimation_CFO Appt_301222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Intimation_ID Appt_270922', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Intimation_ID Appt_270922.docx' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Intimation_MD Resig_WTD Reappointment_270622', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Intimation_MD Resig_WTD Reappointment_270622.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Intimation_of_action_by_Receivers_Deloitte', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Intimation_of_action_by_Receivers_Deloitte.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_KMP_Materiality', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_KMP_Materiality.docx' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Outcome_BM_14022023_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Outcome_BM_14022023_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Outcome_Board_071222', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Outcome_Board_071222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Re-Appointment_Managing Director', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Re-Appointment_Managing Director.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Re-appointment_of_Independent_Director', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Re-appointment_of_Independent_Director.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Resignation_July_7_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Resignation_July_7_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Resignation_of_CFO_July_1_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Resignation_of_CFO_July_1_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Update_Default Disclosure_Pyt Interest_Repyt Principal', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Update_Default Disclosure_Pyt Interest_Repyt Principal.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg30_Update_on_EGM_Requisition_May_25_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg30_Update_on_EGM_Requisition_May_25_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg40(9)_310322', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg40(9)_310322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'REG47_Financialresults_TSL', link: '/assets/investordata/disclosure/disclosure-data/FY23/REG47_Financialresults_TSL.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Intimation_Newspaper_271022_Final', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg47_Intimation_Newspaper_271022_Final.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Newspaper_Ad_IEPF_280722', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg47_Newspaper_Ad_IEPF_280722.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Newspaper_Ad_PB_Notice_200722', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg47_Newspaper_Ad_PB_Notice_200722.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Newspaper_Ad_Results_221022_Final', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg47_Newspaper_Ad_Results_221022_Final.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Newspaper_Advertisement_230123', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg47_Newspaper_Advertisement_230123.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Newspaper_Advt_Q2_091222', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg47_Newspaper_Advt_Q2_091222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg47_Newspaper_Intimation_300522', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg47_Newspaper_Intimation_300522.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg74(5)_310322', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg74(5)_310322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reg74(5)_SEBI(DP)_311222', link: '/assets/investordata/disclosure/disclosure-data/FY23/Reg74(5)_SEBI(DP)_311222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'SE_Intimation_Board_Meeting', link: '/assets/investordata/disclosure/disclosure-data/FY23/SE_Intimation_Board_Meeting.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'SE_Intimation_EGM_Requisition_JM_220622', link: '/assets/investordata/disclosure/disclosure-data/FY23/SE_Intimation_EGM_Requisition_JM_220622.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'SE_Intimation_Postal Ballot_Notice_Jul_Aug_2022', link: '/assets/investordata/disclosure/disclosure-data/FY23/SE_Intimation_Postal Ballot_Notice_Jul_Aug_2022.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'September 30_Trading Window', link: '/assets/investordata/disclosure/disclosure-data/FY23/September 30_Trading Window.docx' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Share_Capital_Reco_311222', link: '/assets/investordata/disclosure/disclosure-data/FY23/Share_Capital_Reco_311222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Voting_Results_Scrutinizer_Report_AGM_261222', link: '/assets/investordata/disclosure/disclosure-data/FY23/Voting_Results_Scrutinizer_Report_AGM_261222.pdf' },
 
    
    ],

     FY21:[
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'AGMPROCEEDINGS2020', link: '/assets/investordata/disclosure/disclosure-data/FY21/AGMPROCEEDINGS2020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'ARSubmission2020', link: '/assets/investordata/disclosure/disclosure-data/FY21/ARSubmission2020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'ASCR310320', link: '/assets/investordata/disclosure/disclosure-data/FY21/ASCR310320.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Bookclosure030920', link: '/assets/investordata/disclosure/disclosure-data/FY21/Bookclosure030920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'BSERESPONSE170420', link: '/assets/investordata/disclosure/disclosure-data/FY21/BSERESPONSE170420.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'change_in_company_secretary_compliance_officer', link: '/assets/investordata/disclosure/disclosure-data/FY21/change_in_company_secretary_compliance_officer.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'compliance_certificate_reg731032020', link: '/assets/investordata/disclosure/disclosure-data/FY21/compliance_certificate_reg731032020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'ComplianceCertificate30092020', link: '/assets/investordata/disclosure/disclosure-data/FY21/ComplianceCertificate30092020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'creditrating05012020', link: '/assets/investordata/disclosure/disclosure-data/FY21/creditrating05012020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'CreditRatingIntimation110820', link: '/assets/investordata/disclosure/disclosure-data/FY21/CreditRatingIntimation110820.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Earning_Release_Q2', link: '/assets/investordata/disclosure/disclosure-data/FY21/Earning_Release_Q2.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'earningsrelease120620', link: '/assets/investordata/disclosure/disclosure-data/FY21/earningsrelease120620.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'earningsrelease140920', link: '/assets/investordata/disclosure/disclosure-data/FY21/earningsrelease140920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'envestordisclosure290920', link: '/assets/investordata/disclosure/disclosure-data/FY21/envestordisclosure290920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'esop310320', link: '/assets/investordata/disclosure/disclosure-data/FY21/esop310320.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'financialpublication160920', link: '/assets/investordata/disclosure/disclosure-data/FY21/financialpublication160920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'IEPFNOTICE290121', link: '/assets/investordata/disclosure/disclosure-data/FY21/IEPFNOTICE290121.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'intimation_regarding_analyst_institutional_meet', link: '/assets/investordata/disclosure/disclosure-data/FY21/intimation_regarding_analyst_institutional_meet.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'IntimationReg30', link: '/assets/investordata/disclosure/disclosure-data/FY21/IntimationReg30.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'INVESTORSCALL100221', link: '/assets/investordata/disclosure/disclosure-data/FY21/INVESTORSCALL100221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorscall04112020', link: '/assets/investordata/disclosure/disclosure-data/FY21/investorscall04112020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorscallintimation150920', link: '/assets/investordata/disclosure/disclosure-data/FY21/investorscallintimation150920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NEWSCLARIFICATION_NSE150220', link: '/assets/investordata/disclosure/disclosure-data/FY21/NEWSCLARIFICATION_NSE150220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NewspaperPublication061120', link: '/assets/investordata/disclosure/disclosure-data/FY21/NewspaperPublication061120.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NewspaperPublication110221', link: '/assets/investordata/disclosure/disclosure-data/FY21/NewspaperPublication110221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NEWSPAPERPUBLICATION170221', link: '/assets/investordata/disclosure/disclosure-data/FY21/NEWSPAPERPUBLICATION170221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'newspaperpublication30092020', link: '/assets/investordata/disclosure/disclosure-data/FY21/newspaperpublication30092020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NOTICE040221', link: '/assets/investordata/disclosure/disclosure-data/FY21/NOTICE040221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Notice050620', link: '/assets/investordata/disclosure/disclosure-data/FY21/Notice050620.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'notice070920', link: '/assets/investordata/disclosure/disclosure-data/FY21/notice070920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'notice04112020', link: '/assets/investordata/disclosure/disclosure-data/FY21/notice04112020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Noticepubication', link: '/assets/investordata/disclosure/disclosure-data/FY21/Noticepubication.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'noticepublication070920', link: '/assets/investordata/disclosure/disclosure-data/FY21/noticepublication070920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Outcome_of_Board_Meeting_held_12112020', link: '/assets/investordata/disclosure/disclosure-data/FY21/Outcome_of_Board_Meeting_held_12112020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Outcome110221', link: '/assets/investordata/disclosure/disclosure-data/FY21/Outcome110221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'outcome140920', link: '/assets/investordata/disclosure/disclosure-data/FY21/outcome140920.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Outcome240620', link: '/assets/investordata/disclosure/disclosure-data/FY21/Outcome240620.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Outcome11062020', link: '/assets/investordata/disclosure/disclosure-data/FY21/Outcome11062020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'PITKMPAPPOINTMENT220120', link: '/assets/investordata/disclosure/disclosure-data/FY21/PITKMPAPPOINTMENT220120.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'pressrelease240620', link: '/assets/investordata/disclosure/disclosure-data/FY21/pressrelease240620.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'PromotersReclassification240620', link: '/assets/investordata/disclosure/disclosure-data/FY21/PromotersReclassification240620.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'PIT250220', link: '/assets/investordata/disclosure/disclosure-data/FY21/PIT250220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reco300620', link: '/assets/investordata/disclosure/disclosure-data/FY21/Reco300620.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Reco311220', link: '/assets/investordata/disclosure/disclosure-data/FY21/Reco311220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reconciliation_of_SHA_reg7631032020', link: '/assets/investordata/disclosure/disclosure-data/FY21/reconciliation_of_SHA_reg7631032020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg4030092020', link: '/assets/investordata/disclosure/disclosure-data/FY21/reg4030092020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg4031032020-certificate', link: '/assets/investordata/disclosure/disclosure-data/FY21/reg4031032020-certificate.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'REJOINDER', link: '/assets/investordata/disclosure/disclosure-data/FY21/REJOINDER.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'rptsept30092020', link: '/assets/investordata/disclosure/disclosure-data/FY21/rptsept30092020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'RPT310320', link: '/assets/investordata/disclosure/disclosure-data/FY21/RPT310320.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'rptsept30092020', link: '/assets/investordata/disclosure/disclosure-data/FY21/rptsept30092020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'SHA30092020', link: '/assets/investordata/disclosure/disclosure-data/FY21/SHA30092020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'shareholders_communication', link: '/assets/investordata/disclosure/disclosure-data/FY21/shareholders_communication.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'TradingWindow310321', link: '/assets/investordata/disclosure/disclosure-data/FY21/TradingWindow310321.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'tradingwindow311220', link: '/assets/investordata/disclosure/disclosure-data/FY21/tradingwindow311220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'tradingwindow30092020', link: '/assets/investordata/disclosure/disclosure-data/FY21/tradingwindow30092020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'Tradingwindowdisclosure300620', link: '/assets/investordata/disclosure/disclosure-data/FY21/Tradingwindowdisclosure300620.pdf' },

      
      
     
    ],

    FY19: [
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'analystcall21112018', link: '/assets/investordata/disclosure/disclosure-data/FY19/analystcall21112018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'corporatepresentationupdated050319', link: '/assets/investordata/disclosure/disclosure-data/FY19/corporatepresentationupdated050319.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'esopintimation190418', link: '/assets/investordata/disclosure/disclosure-data/FY19/esopintimation190418.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'intimation23012019', link: '/assets/investordata/disclosure/disclosure-data/FY19/intimation23012019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorintimation180418', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorintimation180418.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorintimation240420181', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorintimation240420181.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorintimation240420182', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorintimation240420182.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investormeet250219-2', link: '/assets/investordata/disclosure/disclosure-data/FY19/investormeet250219-2.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investors050418', link: '/assets/investordata/disclosure/disclosure-data/FY19/investors050418.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsintimation120618', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsintimation120618.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsintimation230418', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsintimation230418.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet01062018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet01062018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet06062018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet06062018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet07062018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet07062018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet120418', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet120418.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet130219', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet130219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet160418', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet160418.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet17072018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet17072018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet18072018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet18072018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet191018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet191018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet21062018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet21062018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet220219', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet220219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet22032019', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet22032019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet23052018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet23052018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet250219', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet250219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet250319', link: '/assets/investordata/disclosure/disclosure-data/FY19/investorsmeet250319.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investotmeet30042018', link: '/assets/investordata/disclosure/disclosure-data/FY19/investotmeet30042018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'letter-to-shareholders26112018', link: '/assets/investordata/disclosure/disclosure-data/FY19/letter-to-shareholders26112018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'lossofsharecertificate020119', link: '/assets/investordata/disclosure/disclosure-data/FY19/lossofsharecertificate020119.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'newspaperpublication100518', link: '/assets/investordata/disclosure/disclosure-data/FY19/newspaperpublication100518.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'notice060219', link: '/assets/investordata/disclosure/disclosure-data/FY19/notice060219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'notice090518', link: '/assets/investordata/disclosure/disclosure-data/FY19/notice090518.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'notice231018', link: '/assets/investordata/disclosure/disclosure-data/FY19/notice231018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'outcome130219', link: '/assets/investordata/disclosure/disclosure-data/FY19/outcome130219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'outcome280319', link: '/assets/investordata/disclosure/disclosure-data/FY19/outcome280319.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'outcome301018', link: '/assets/investordata/disclosure/disclosure-data/FY19/outcome301018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease-100818', link: '/assets/investordata/disclosure/disclosure-data/FY19/pressrelease-100818.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease031018', link: '/assets/investordata/disclosure/disclosure-data/FY19/pressrelease031018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease10012019', link: '/assets/investordata/disclosure/disclosure-data/FY19/pressrelease10012019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease161118', link: '/assets/investordata/disclosure/disclosure-data/FY19/pressrelease161118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease301018', link: '/assets/investordata/disclosure/disclosure-data/FY19/pressrelease301018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'statement-of-deviation', link: '/assets/investordata/disclosure/disclosure-data/FY19/statement-of-deviation.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'tradingwindow060219', link: '/assets/investordata/disclosure/disclosure-data/FY19/tradingwindow060219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'tradingwindow090518', link: '/assets/investordata/disclosure/disclosure-data/FY19/tradingwindow090518.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'tradingwindow231018', link: '/assets/investordata/disclosure/disclosure-data/FY19/tradingwindow231018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'transcript210219', link: '/assets/investordata/disclosure/disclosure-data/FY19/transcript210219.pdf' }
    ],

    FY18:[
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'bmnotice200318', link: '/assets/investordata/disclosure/disclosure-data/FY18/bmnotice200318.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'bmnotice310118', link: '/assets/investordata/disclosure/disclosure-data/FY18/bmnotice310118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'Bookclosure280717', link: '/assets/investordata/disclosure/disclosure-data/FY18/Bookclosure280717.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'CARERATING220917', link: '/assets/investordata/disclosure/disclosure-data/FY18/CARERATING220917.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'cg080117', link: '/assets/investordata/disclosure/disclosure-data/FY18/cg080117.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'CLARIFICATIONNSE', link: '/assets/investordata/disclosure/disclosure-data/FY18/CLARIFICATIONNSE.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'corporategovernance13042017', link: '/assets/investordata/disclosure/disclosure-data/FY18/corporategovernance13042017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'corrigendum-notice060318', link: '/assets/investordata/disclosure/disclosure-data/FY18/corrigendum-notice060318.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'disinvestmentintimation280318', link: '/assets/investordata/disclosure/disclosure-data/FY18/disinvestmentintimation280318.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'dividendintimation15052017', link: '/assets/investordata/disclosure/disclosure-data/FY18/dividendintimation15052017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'esop040118', link: '/assets/investordata/disclosure/disclosure-data/FY18/esop040118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'ESOPINTIMATION11072017', link: '/assets/investordata/disclosure/disclosure-data/FY18/ESOPINTIMATION11072017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'esopintimation13042017', link: '/assets/investordata/disclosure/disclosure-data/FY18/esopintimation13042017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'formb', link: '/assets/investordata/disclosure/disclosure-data/FY18/formb.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investor-call', link: '/assets/investordata/disclosure/disclosure-data/FY18/investor-call.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorcall09052017', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorcall09052017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorcompliants13042017', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorcompliants13042017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorintimation020318', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorintimation020318.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorintimation060318', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorintimation060318.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorintimation190118', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorintimation190118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorintimations240118', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorintimations240118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investormeet07122017', link: '/assets/investordata/disclosure/disclosure-data/FY18/investormeet07122017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investormeet120118', link: '/assets/investordata/disclosure/disclosure-data/FY18/investormeet120118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorscall010218', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorscall010218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsintimation200318', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorsintimation200318.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsintimation210218', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorsintimation210218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsintimation220218', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorsintimation220218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsintimation230218', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorsintimation230218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet100118', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorsmeet100118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet130218', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorsmeet130218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'investorsmeet170118', link: '/assets/investordata/disclosure/disclosure-data/FY18/investorsmeet170118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'noticeBM18052017', link: '/assets/investordata/disclosure/disclosure-data/FY18/noticeBM18052017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'NSEclarificationletter19092017', link: '/assets/investordata/disclosure/disclosure-data/FY18/NSEclarificationletter19092017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'Outcome-18052017', link: '/assets/investordata/disclosure/disclosure-data/FY18/Outcome-18052017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'outcome080218', link: '/assets/investordata/disclosure/disclosure-data/FY18/outcome080218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'outcome14082017', link: '/assets/investordata/disclosure/disclosure-data/FY18/outcome14082017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'outcome220318', link: '/assets/investordata/disclosure/disclosure-data/FY18/outcome220318.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'postalballotintimation160218', link: '/assets/investordata/disclosure/disclosure-data/FY18/postalballotintimation160218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'PRESSRELEASE', link: '/assets/investordata/disclosure/disclosure-data/FY18/PRESSRELEASE.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease010218', link: '/assets/investordata/disclosure/disclosure-data/FY18/pressrelease010218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease01032018', link: '/assets/investordata/disclosure/disclosure-data/FY18/pressrelease01032018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease080218', link: '/assets/investordata/disclosure/disclosure-data/FY18/pressrelease080218.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'PressRelease09062017', link: '/assets/investordata/disclosure/disclosure-data/FY18/PressRelease09062017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease130417', link: '/assets/investordata/disclosure/disclosure-data/FY18/pressrelease130417.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'pressrelease18052017', link: '/assets/investordata/disclosure/disclosure-data/FY18/pressrelease18052017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'PRESSRELEASE30062017', link: '/assets/investordata/disclosure/disclosure-data/FY18/PRESSRELEASE30062017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'reg13-3-110118', link: '/assets/investordata/disclosure/disclosure-data/FY18/reg13-3-110118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'Reg40BSE13042017', link: '/assets/investordata/disclosure/disclosure-data/FY18/Reg40BSE13042017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'Reg40NSE13042017', link: '/assets/investordata/disclosure/disclosure-data/FY18/Reg40NSE13042017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'Reg55A13042017', link: '/assets/investordata/disclosure/disclosure-data/FY18/Reg55A13042017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'REGULATION724042017', link: '/assets/investordata/disclosure/disclosure-data/FY18/REGULATION724042017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'results-postal-ballot', link: '/assets/investordata/disclosure/disclosure-data/FY18/results-postal-ballot.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'shp150118', link: '/assets/investordata/disclosure/disclosure-data/FY18/shp150118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'shp31032017', link: '/assets/investordata/disclosure/disclosure-data/FY18/shp31032017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'TAKEPressRelease', link: '/assets/investordata/disclosure/disclosure-data/FY18/TAKEPressRelease.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'tradingwindow300118', link: '/assets/investordata/disclosure/disclosure-data/FY18/tradingwindow300118.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'tradingwindowclosure', link: '/assets/investordata/disclosure/disclosure-data/FY18/tradingwindowclosure.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'tradingwindowclosure09052017', link: '/assets/investordata/disclosure/disclosure-data/FY18/tradingwindowclosure09052017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'TSLBMNoticeIntimation14082017', link: '/assets/investordata/disclosure/disclosure-data/FY18/TSLBMNoticeIntimation14082017.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'TSLinvestorcall140817-(2)', link: '/assets/investordata/disclosure/disclosure-data/FY18/TSLinvestorcall140817-(2).pdf' },
      { type: 'Other Disclosures', date: '30-Oct-19', description: 'TSLTradingWindow14082017', link: '/assets/investordata/disclosure/disclosure-data/FY18/TSLTradingWindow14082017.pdf' }
    ],

    FY20:[
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'agmnoticepublication', link: '/assets/investordata/disclosure/disclosure-data/FY20/agmnoticepublication.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'AnnualComplianceReport230519', link: '/assets/investordata/disclosure/disclosure-data/FY20/AnnualComplianceReport230519.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'arsubmission2019', link: '/assets/investordata/disclosure/disclosure-data/FY20/arsubmission2019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'bmnotice010819', link: '/assets/investordata/disclosure/disclosure-data/FY20/bmnotice010819.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'bookclosure190719', link: '/assets/investordata/disclosure/disclosure-data/FY20/bookclosure190719.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'cg310319', link: '/assets/investordata/disclosure/disclosure-data/FY20/cg310319.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'corporate-governance-300619', link: '/assets/investordata/disclosure/disclosure-data/FY20/corporate-governance-300619.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'corporate-governance-300919', link: '/assets/investordata/disclosure/disclosure-data/FY20/corporate-governance-300919.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'creditrating170320', link: '/assets/investordata/disclosure/disclosure-data/FY20/creditrating170320.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'dissolution_eal_uk', link: '/assets/investordata/disclosure/disclosure-data/FY20/dissolution_eal_uk.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'duplicatesharecertificate090320', link: '/assets/investordata/disclosure/disclosure-data/FY20/duplicatesharecertificate090320.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'earningsandpressrelease061119', link: '/assets/investordata/disclosure/disclosure-data/FY20/earningsandpressrelease061119.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'esop300619', link: '/assets/investordata/disclosure/disclosure-data/FY20/esop300619.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'esop300919', link: '/assets/investordata/disclosure/disclosure-data/FY20/esop300919.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'financialpublicationnewspaper09082019', link: '/assets/investordata/disclosure/disclosure-data/FY20/financialpublicationnewspaper09082019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'financialspublication', link: '/assets/investordata/disclosure/disclosure-data/FY20/financialspublication.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'iepfnoticeintimation', link: '/assets/investordata/disclosure/disclosure-data/FY20/iepfnoticeintimation.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'IG311219', link: '/assets/investordata/disclosure/disclosure-data/FY20/IG311219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'ih170419', link: '/assets/investordata/disclosure/disclosure-data/FY20/ih170419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorcallcancellation', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorcallcancellation.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorcalltranscript31052019', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorcalltranscript31052019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorintimation140220', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorintimation140220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investormeet120619', link: '/assets/investordata/disclosure/disclosure-data/FY20/investormeet120619.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investors-complaints', link: '/assets/investordata/disclosure/disclosure-data/FY20/investors-complaints.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorscall041119', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorscall041119.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorscall100519', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorscall100519.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorsmeet051219', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorsmeet051219.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorsmeet080419', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorsmeet080419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorsmeet101019', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorsmeet101019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'investorsupdate310320', link: '/assets/investordata/disclosure/disclosure-data/FY20/investorsupdate310320.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'largeentity260419', link: '/assets/investordata/disclosure/disclosure-data/FY20/largeentity260419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'lossofsharecertificate091018', link: '/assets/investordata/disclosure/disclosure-data/FY20/lossofsharecertificate091018.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'newspaper_publication', link: '/assets/investordata/disclosure/disclosure-data/FY20/newspaper_publication.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'newspaperintimation', link: '/assets/investordata/disclosure/disclosure-data/FY20/newspaperintimation.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'NEWSPAPERPUBLICATION14022020', link: '/assets/investordata/disclosure/disclosure-data/FY20/NEWSPAPERPUBLICATION14022020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'newspaperpublicationseintimation30102019', link: '/assets/investordata/disclosure/disclosure-data/FY20/newspaperpublicationseintimation30102019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'notice060220', link: '/assets/investordata/disclosure/disclosure-data/FY20/notice060220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'notice080519', link: '/assets/investordata/disclosure/disclosure-data/FY20/notice080519.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'outcome061119', link: '/assets/investordata/disclosure/disclosure-data/FY20/outcome061119.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'outcome130220', link: '/assets/investordata/disclosure/disclosure-data/FY20/outcome130220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'outcome16052019', link: '/assets/investordata/disclosure/disclosure-data/FY20/outcome16052019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'PIT250220', link: '/assets/investordata/disclosure/disclosure-data/FY20/PIT250220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'pressrelease160519', link: '/assets/investordata/disclosure/disclosure-data/FY20/pressrelease160519.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'pressreleaseandearningrelease13022020', link: '/assets/investordata/disclosure/disclosure-data/FY20/pressreleaseandearningrelease13022020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reco290419', link: '/assets/investordata/disclosure/disclosure-data/FY20/reco290419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reco311220_001', link: '/assets/investordata/disclosure/disclosure-data/FY20/reco311220_001.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reconciliation300619', link: '/assets/investordata/disclosure/disclosure-data/FY20/reconciliation300619.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reconciliationofsharecapital30102019', link: '/assets/investordata/disclosure/disclosure-data/FY20/reconciliationofsharecapital30102019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg30030419', link: '/assets/investordata/disclosure/disclosure-data/FY20/reg30030419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg40290419bse', link: '/assets/investordata/disclosure/disclosure-data/FY20/reg40290419bse.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg40290419nse', link: '/assets/investordata/disclosure/disclosure-data/FY20/reg40290419nse.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg40300919', link: '/assets/investordata/disclosure/disclosure-data/FY20/reg40300919.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg7220419', link: '/assets/investordata/disclosure/disclosure-data/FY20/reg7220419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg7300919', link: '/assets/investordata/disclosure/disclosure-data/FY20/reg7300919.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'reg74260419', link: '/assets/investordata/disclosure/disclosure-data/FY20/reg74260419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'rejoinder071119', link: '/assets/investordata/disclosure/disclosure-data/FY20/rejoinder071119.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'related-party-transactions-half-yearly', link: '/assets/investordata/disclosure/disclosure-data/FY20/related-party-transactions-half-yearly.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'RPTSept302019', link: '/assets/investordata/disclosure/disclosure-data/FY20/RPTSept302019.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'shareholdingpattern300619', link: '/assets/investordata/disclosure/disclosure-data/FY20/shareholdingpattern300619.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'shp190419', link: '/assets/investordata/disclosure/disclosure-data/FY20/shp190419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'shp311220', link: '/assets/investordata/disclosure/disclosure-data/FY20/shp311220.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'statementofdeviation160519', link: '/assets/investordata/disclosure/disclosure-data/FY20/statementofdeviation160519.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'trading-window280619', link: '/assets/investordata/disclosure/disclosure-data/FY20/trading-window280619.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'tradingwindow030419', link: '/assets/investordata/disclosure/disclosure-data/FY20/tradingwindow030419.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'tradingwindow300919', link: '/assets/investordata/disclosure/disclosure-data/FY20/tradingwindow300919.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'TRADINGWINDOWCLOSURE03012020', link: '/assets/investordata/disclosure/disclosure-data/FY20/TRADINGWINDOWCLOSURE03012020.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'tradingwindowclosure310320', link: '/assets/investordata/disclosure/disclosure-data/FY20/tradingwindowclosure310320.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-20', description: 'transcriptinvestorscall080819', link: '/assets/investordata/disclosure/disclosure-data/FY20/transcriptinvestorscall080819.pdf' }
    ],

    FY22:[
      { type: 'Other Disclosures', date: '30-Oct-22', description: '20th_AGM_Proceedings_2021', link: '/assets/investordata/disclosure/disclosure-data/FY22/20th_AGM_Proceedings_2021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'AGM_Bookclosure_2021', link: '/assets/investordata/disclosure/disclosure-data/FY22/AGM_Bookclosure_2021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'AR_Submission_20_21', link: '/assets/investordata/disclosure/disclosure-data/FY22/AR_Submission_20_21.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Clarification_regarding_significant_movement_in_Price', link: '/assets/investordata/disclosure/disclosure-data/FY22/Clarification_regarding_significant_movement_in_Price.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'ComplianceCertificate31032021', link: '/assets/investordata/disclosure/disclosure-data/FY22/ComplianceCertificate31032021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'December_31_Trading_Window', link: '/assets/investordata/disclosure/disclosure-data/FY22/December_31_Trading_Window.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Disclosure_Loan_Default_TAKE_GHPte_030122', link: '/assets/investordata/disclosure/disclosure-data/FY22/Disclosure_Loan_Default_TAKE_GHPte_030122.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Disclosure_Loan_Default_TAKE_GHPte_100122', link: '/assets/investordata/disclosure/disclosure-data/FY22/Disclosure_Loan_Default_TAKE_GHPte_100122.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'EarningsRelease_120821', link: '/assets/investordata/disclosure/disclosure-data/FY22/EarningsRelease_120821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'EarningsRelease_Q421_240621', link: '/assets/investordata/disclosure/disclosure-data/FY22/EarningsRelease_Q421_240621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'EarningsRelease161121', link: '/assets/investordata/disclosure/disclosure-data/FY22/EarningsRelease161121.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Intimation_Reg 30', link: '/assets/investordata/disclosure/disclosure-data/FY22/Intimation_Reg 30.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Intimation_Reg30_250621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Intimation_Reg30_250621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Intimation_Regulation 30_SEBI (LODR)_Promoter Default_180322', link: '/assets/investordata/disclosure/disclosure-data/FY22/Intimation_Regulation 30_SEBI (LODR)_Promoter Default_180322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'March_31_Trading Window', link: '/assets/investordata/disclosure/disclosure-data/FY22/March_31_Trading Window.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Microsoft Word - Outcome_Intimation_BM_10.05.2021', link: '/assets/investordata/disclosure/disclosure-data/FY22/Microsoft Word - Outcome_Intimation_BM_10.05.2021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Microsoft Word - Proceedings_EGM_2021', link: '/assets/investordata/disclosure/disclosure-data/FY22/Microsoft Word - Proceedings_EGM_2021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Newspaper_Intimation_130821', link: '/assets/investordata/disclosure/disclosure-data/FY22/Newspaper_Intimation_130821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Newspaper_Intimation_151121', link: '/assets/investordata/disclosure/disclosure-data/FY22/Newspaper_Intimation_151121.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'NewspaperIntimation_260322 (1)', link: '/assets/investordata/disclosure/disclosure-data/FY22/NewspaperIntimation_260322 (1).pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'NewspaperIntimation_260322', link: '/assets/investordata/disclosure/disclosure-data/FY22/NewspaperIntimation_260322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Not_a_Large_Corporate_Intimation_SEBI', link: '/assets/investordata/disclosure/disclosure-data/FY22/Not_a_Large_Corporate_Intimation_SEBI.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Notice_BM_080222', link: '/assets/investordata/disclosure/disclosure-data/FY22/Notice_BM_080222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Notice_of_BM_12112021', link: '/assets/investordata/disclosure/disclosure-data/FY22/Notice_of_BM_12112021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'OutcomeofBoardMeeting080222', link: '/assets/investordata/disclosure/disclosure-data/FY22/OutcomeofBoardMeeting080222.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Press_Release_060821', link: '/assets/investordata/disclosure/disclosure-data/FY22/Press_Release_060821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Proceedings_EGM_2021', link: '/assets/investordata/disclosure/disclosure-data/FY22/Proceedings_EGM_2021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reco_300621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reco_300621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reco_300921', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reco_300921.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reco310321', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reco310321.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg_30_211221', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg_30_211221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg23(9)_Related_Party_Disclosure', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg23(9)_Related_Party_Disclosure.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg24A_ASCR_300621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg24A_ASCR_300621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg29_Intimation_BM110821', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg29_Intimation_BM110821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg29_Intimation_BM240621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg29_Intimation_BM240621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30_31032021', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30_31032021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30_Analyst_Call_Transcript_130821', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30_Analyst_Call_Transcript_130821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30_AnalystCall_Transcript_250621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30_AnalystCall_Transcript_250621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30_Intimation_060821', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30_Intimation_060821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30_Investor_Meet_130821', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30_Investor_Meet_130821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30_Outcome_BM_110821', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30_Outcome_BM_110821.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30_Outcome_Board_240621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30_Outcome_Board_240621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg30Intimation_Postal_Ballot_Notice_250322', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg30Intimation_Postal_Ballot_Notice_250322.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg31_31032021', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg31_31032021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg40_310321', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg40_310321.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg47_Newspaper_Intimation_260621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg47_Newspaper_Intimation_260621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg47_NewspaperAd', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg47_NewspaperAd.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg74(5)_300621', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg74(5)_300621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg74(5)_300921', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg74(5)_300921.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg74(5)_311221', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg74(5)_311221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Reg745_310321', link: '/assets/investordata/disclosure/disclosure-data/FY22/Reg745_310321.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Scrutinizer_Report_EGM_2021', link: '/assets/investordata/disclosure/disclosure-data/FY22/Scrutinizer_Report_EGM_2021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'SE_Intimation_2021_EGM_Notice', link: '/assets/investordata/disclosure/disclosure-data/FY22/SE_Intimation_2021_EGM_Notice.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'SE_Intimation_Reg30_BM_211221', link: '/assets/investordata/disclosure/disclosure-data/FY22/SE_Intimation_Reg30_BM_211221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'SEB_Circular_221221', link: '/assets/investordata/disclosure/disclosure-data/FY22/SEB_Circular_221221.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'Stock_Exchange_Announcement_040122', link: '/assets/investordata/disclosure/disclosure-data/FY22/Stock_Exchange_Announcement_040122.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'STX_Intimation_Regulation30_TSL_29112021', link: '/assets/investordata/disclosure/disclosure-data/FY22/STX_Intimation_Regulation30_TSL_29112021.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'tradingwindow300621', link: '/assets/investordata/disclosure/disclosure-data/FY22/tradingwindow300621.pdf' },
      { type: 'Other Disclosures', date: '30-Oct-22', description: 'TradingWindow300921', link: '/assets/investordata/disclosure/disclosure-data/FY22/TradingWindow300921.pdf' }
    ]


    



  };

  // Annual Return data
  const annualReturnYears = [
    // { year: '2023-2024', link: '' },
    { year: '2024-2025', link: '/assets/investordata/disclosure/2024-25/2024-25.pdf' },
    { year: '2023-2024', link: '/assets/investordata/disclosure/2023-24/2023-2024.pdf' },
    { year: '2022-2023', link: '/assets/investordata/disclosure/2022-23/MGT_7_22-23_TSL.pdf' },
    { year: '2021-2022', link: '/assets/investordata/disclosure/2021-22/Form_MGT_7.pdf' },
    { year: '2020-2021', link: '/assets/investordata/disclosure/2020-21/MGT_7_2020-21_TSL_Signed.pdf' },
    { year: '2019-2020', link: '/assets/investordata/disclosure/2019-20/Form_MGT-7_2019-20_TSL_Signed.pdf' },
    { year: '2018-2019', link: '/assets/investordata/disclosure/annual_return-2018-19.pdf' }
  ];

  const currentDisclosures = disclosureData[selectedYear] || [];

  return (
    <div className="tab-content active">
      <h3 className="content-title">Disclosure</h3>

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

      {/* Disclosure Table */}
      <div className="disclosure-table-wrapper">
        <table className="disclosure-table">
          <thead>
            <tr>
              <th>Type</th>
              {/* <th>Date</th> */}
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentDisclosures.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                {/* <td>{item.date}</td> */}
                <td>
                  <a href={item.link} className="disclosure-description-link" target="_blank" rel="noopener noreferrer">
                    <span className="pdf-icon-small">📄</span>
                    {item.description}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Annual Return Section */}
      <div className="annual-return-section">
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
      </div>
    </div>
  );
};

export default Disclosure;



