import React from 'react';

const BoardOfDirectors = () => {
  const boardComposition = [
    { name: "Mr. Parmeshvar Dhangare", din: "11410125", designation: "Non-Executive Non-Independent Director & Chairman" },
    { name: "Mr. Vilas Munis", din: "11533598", designation: "Non-Executive Non-Independent Director" },
    { name: "Ms. Pushpa Joshi", din: "06838093", designation: "Non-Executive Independent Director" },
    { name: "Mr. Kanwar Nitin Singh", din: "10204543", designation: "Non-Executive Independent Director" },
    { name: "Mr. Peeyush Sethia", din: "09850692", designation: "Non-Executive Independent Director" },
  ];

  const kmpComposition = [
    { name: "Ms. Vandana Gupta", designation: "Company Secretary & Compliance Officer" },
  ];

  const committees = [
    {
      title: "AUDIT COMMITTEE",
      members: [
        { name: "Ms. Pushpa Joshi", designation: "Chairperson" },
        { name: "Mr. Peeyush Sethia", designation: "Member" },
        { name: "Mr. Parmeshvar Dhangare", designation: "Member" },
      ]
    },
    {
      title: "STAKEHOLDER'S RELATIONSHIP COMMITTEE",
      members: [
        { name: "Mr. Parmeshvar Dhangare", designation: "Chairperson" },
        { name: "Mr. Kanwar Nitin Singh", designation: "Member" },
        { name: "Ms. Pushpa Joshi", designation: "Member" },
      ]
    },
    {
      title: "NOMINATION & REMUNERATION COMMITTEE",
      members: [
        { name: "Ms. Pushpa Joshi", designation: "Chairperson" },
        { name: "Mr. Peeyush Sethia", designation: "Member" },
        { name: "Mr. Parmeshvar Dhangare", designation: "Member" },
      ]
    },
    {
      title: "RISK MANAGEMENT COMMITTEE",
      members: [
        { name: "Mr. Parmeshvar Dhangare", designation: "Chairperson" },
        { name: "Ms. Pushpa Joshi", designation: "Member" },
        { name: "Mr. Vilas Munis", designation: "Member" },
      ]
    }
  ];

  const directors = [
    {
      name: "Ms. Pushpa Joshi",
      designation: "Non-Executive Independent Director",
      description: "She holds a Master's degree in Business Administration with a specialization in Finance and Commerce. She brings extensive experience in Accounting and Finance, having worked across a diverse range of industries.",
      directorships: [
        { sr: 1, company: "Aar Shyam India Investment Company Limited", position: "CFO" },
        { sr: 2, company: "Evoq Remedies Limited", position: "Independent Director" },
        { sr: 3, company: "Vintage Coffee and Beverages Limited", position: "Independent Director" },
      ]
    },
    {
      name: "Mr. Kanwar Nitin Singh",
      designation: "Non-Executive Independent Director",
      description: "He is a qualified Company Secretary from the Institute of Company Secretaries of India (ICSI). He brings over 13 years of experience across diversified areas, with a strong focus on compliance, regulatory frameworks, and corporate governance.",
      directorships: [
        { sr: 1, company: "Leel Electricals Limited", position: "Independent Director" },
        { sr: 2, company: "Alka Securities Ltd", position: "Independent Director" },
        { sr: 3, company: "Spright Agro Limited", position: "Independent Director" },
        { sr: 4, company: "LS Industries Limited", position: "Company Secretary" },
        { sr: 5, company: "Afloat Enterprises Limited", position: "Independent Director" },
      ]
    },
    {
      name: "Mr. Peeyush Sethia",
      designation: "Non-Executive Independent Director",
      description: "He is a qualified Company Secretary from the Institute of Company Secretaries of India (ICSI). He brings over 10 years of experience across diversified areas, including Corporate Laws, Corporate Governance, and related advisory services across a wide range of industries.",
      directorships: [
        { sr: 1, company: "Esquire Money Guarantees Ltd", position: "Director and CFO" },
        { sr: 2, company: "Franklin Industries Limited", position: "Independent Director" },
        { sr: 3, company: "Mrugesh Trading Ltd", position: "Independent Director" },
        { sr: 4, company: "LS Industries Limited", position: "Independent Director" },
      ]
    },
    {
      name: "Mr. Parmeshvar Dhangare",
      designation: "Non-Executive Non-Independent Director",
      description: "He is an Engineer with over 15 years of extensive experience in the industry. He has been involved in the planning, execution, and management of a wide range of construction projects, demonstrating strong expertise in project coordination, quality control, and cost management.",
      directorships: []
    },
    {
      name: "Mr. Vilas Munis",
      designation: "Non-Executive Non-Independent Director",
      description: "He is a graduate with professional experience in administration and management. He has developed strong capabilities in organizational coordination, operational efficiency, and team management.",
      directorships: []
    },
  ];

  return (
    <div className="board-of-directors min-h-screen bg-white py-12 px-4" style={{ fontFamily: 'serif' }}>
      <div className="max-w-5xl mx-auto" style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Composition Tables Section */}
        <div className="space-y-20 mb-24" style={{ marginBottom: '6rem' }}>

          {/* Board of Directors Composition */}
          <div className="composition-section" style={{ marginBottom: '4rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
              textDecoration: 'underline'
            }}>
              COMPOSITION OF BOARD OF DIRECTORS OF THE COMPANY
            </h3>
            <div className="overflow-x-auto">
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                borderTop: '1px solid black',
                borderBottom: '1px solid black'
              }}>
                <thead>
                  <tr>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid black', width: '33.33%' }}>Name of Director</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid black', width: '25%' }}>DIN</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 'bold' }}>DESIGNATION</th>
                  </tr>
                </thead>
                <tbody style={{ borderTop: '1px solid black' }}>
                  {boardComposition.map((director, idx) => (
                    <tr key={idx} style={{ borderBottom: idx === boardComposition.length - 1 ? 'none' : '1px solid black' }}>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid black' }}>{director.name}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'center', borderRight: '1px solid black' }}>{director.din}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'left', fontStyle: 'italic' }}>{director.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* KMP Composition */}
          <div className="composition-section" style={{ marginBottom: '4rem' }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
              textDecoration: 'underline'
            }}>
              COMPOSITION OF KEY MANEGERIAL PERSONNEL(S) OF THE COMPANY
            </h3>
            <div className="overflow-x-auto">
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                borderTop: '1px solid black',
                borderBottom: '1px solid black'
              }}>
                <thead>
                  <tr>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 'bold', borderRight: '1px solid black', width: '50%' }}>Name of Director</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'center', fontWeight: 'bold' }}>DESIGNATION</th>
                  </tr>
                </thead>
                <tbody style={{ borderTop: '1px solid black' }}>
                  {kmpComposition.map((kmp, idx) => (
                    <tr key={idx} style={{ borderBottom: idx === kmpComposition.length - 1 ? 'none' : '1px solid black' }}>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid black' }}>{kmp.name}</td>
                      <td style={{ padding: '0.75rem 1rem', textAlign: 'left', fontStyle: 'italic' }}>{kmp.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Committees Composition */}
          <div className="composition-section">
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
              textDecoration: 'underline'
            }}>
              COMPOSITION OF COMMITTEES OF THE COMPANY
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {committees.map((committee, idx) => (
                <div key={idx} className="committee-block">
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    textDecoration: 'underline',
                    textTransform: 'uppercase'
                  }}>
                    {committee.title}:
                  </h4>
                  <div className="overflow-x-auto">
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      borderTop: '1px solid black',
                      borderBottom: '1px solid black'
                    }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 'bold', borderRight: '1px solid black', width: '50%' }}>Name of Director</th>
                          <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 'bold' }}>Designation</th>
                        </tr>
                      </thead>
                      <tbody style={{ borderTop: '1px solid black' }}>
                        {committee.members.map((member, mIdx) => (
                          <tr key={mIdx} style={{ borderBottom: mIdx === committee.members.length - 1 ? 'none' : '1px solid black' }}>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'left', borderRight: '1px solid black' }}>{member.name}</td>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'left', fontStyle: 'italic' }}>{member.designation}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: 'extrabold',
          textAlign: 'center',
          marginBottom: '3rem',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '6rem',
          fontFamily: 'sans-serif'
        }}>
          Detailed Profiles
        </h2>

        {/* Detailed Profiles Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingBottom: '4rem' }}>
          {directors.map((director, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '1rem',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f3f4f6',
              overflow: 'hidden',
              transition: 'transform 0.3s ease'
            }}>
              {/* Director Header */}
              <div style={{
                background: 'linear-gradient(to right, #dc2626, #991b1b)',
                padding: '2rem',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>{director.name}</h3>
                <p style={{ color: '#fee2e2', marginTop: '0.5rem', fontSize: '1.125rem', fontWeight: '500', opacity: 0.9, margin: 0 }}>
                  {director.designation}
                </p>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem' }}>
                <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '1.06rem', marginBottom: '2rem' }}>
                  {director.description}
                </p>

                {/* Other Directorships Table */}
                {director.directorships.length > 0 && (
                  <div style={{ marginTop: '2.5rem', borderTop: '1px solid #f3f4f6', paddingTop: '2.5rem' }}>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: '#1f2937',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ width: '0.5rem', height: '2rem', backgroundColor: '#dc2626', borderRadius: '9999px', marginRight: '0.75rem' }}></span>
                      Other Directorships
                    </h4>
                    <div style={{ overflowX: 'auto', borderRadius: '0.75rem', border: '1px solid #f3f4f6', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #f3f4f6' }}>
                          <tr>
                            <th style={{ padding: '1rem', textAlign: 'left', width: '5rem', fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sr. No.</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name of Body Corporate</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 'bold', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Designation</th>
                          </tr>
                        </thead>
                        <tbody style={{ backgroundColor: 'white' }}>
                          {director.directorships.map((item, dIdx) => (
                            <tr key={item.sr} style={{ borderBottom: dIdx === director.directorships.length - 1 ? 'none' : '1px solid #f3f4f6' }}>
                              <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: 'bold', color: '#9ca3af' }}>{item.sr}</td>
                              <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: '600', color: '#1f2937' }}>{item.company}</td>
                              <td style={{ padding: '1rem', fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>{item.position}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* No Other Directorships */}
                {director.directorships.length === 0 && (
                  <div style={{
                    marginTop: '2rem',
                    padding: '2rem',
                    backgroundColor: 'rgba(249, 250, 251, 0.5)',
                    border: '1px dashed #e5e7eb',
                    borderRadius: '1rem'
                  }}>
                    <p style={{ color: '#6b7280', fontStyle: 'italic', textAlign: 'center', fontSize: '0.875rem', fontWeight: '500', margin: 0 }}>
                      No directorship or full-time positions held in any other body corporates.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default BoardOfDirectors;