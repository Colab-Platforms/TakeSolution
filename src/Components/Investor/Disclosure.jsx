import { useState } from 'react';

const Disclosure = () => {
  const [selectedYear, setSelectedYear] = useState('FY26');

  const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'];

  // Disclosure data for each year
  const disclosureData = {

    ///ujjwal uploaded FY- 26,25,20,19,18
    FY26: [
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Press Release - TAKE Solutions to build a Scalable Unified AI Platform', link: '/assets/investordata/disclosure/disclosure-data/FY26/Press Release - TAKE Solutions to build a Scalable Unified AI Platform.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Press Release - Take Solutions Announces Plans to Set up “One Minute Clinic” in India', link: '/assets/investordata/disclosure/disclosure-data/FY26/Press Release - Take Solutions Announces Plans to Set up “One Minute Clinic” in India.pdf' },

      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Press Release Strategic Plan to Build an Advanced AI-Driven Diagnostic & Preventive Care Platform', link: '/assets/investordata/disclosure/disclosure-data/FY26/Press Release Strategic Plan to Build an Advanced AI-Driven Diagnostic & Preventive Care Platform.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Apointment of Director', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Apointment of Director.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Appointment of Auditor', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Appointment of Auditor.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Resignation of Director and CFO', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Resignation of Director and CFO.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Shifting of Registered Office of the Company', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Shifting of Registered Office of the Company.pdf' },
      { type: 'Other Disclosures', date: '17-Feb-26', description: 'Reg 30 Appointment of Mr. Parmeshvar Namdev Dhangare', link: '/assets/investordata/disclosure/disclosure-data/FY26/Reg 30 Appointment of Mr. Parmeshvar Namdev Dhangare.pdf' },

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

