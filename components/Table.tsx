import * as React from 'react';

export function Table() {
  return (
    <table className="env-table">
      <thead>
        <tr>
          <th>Environment</th>
          <th>Purpose</th>
          <th>Base URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Sandbox/development</strong></td>
          <td>
            The sandbox/development environment is used majorly during the product development phase. <strong>Note</strong> – every single transaction that happens via the sandbox will not involve real money. No actual value will be spent.
          </td>
          <td>
            <a href="https://api.useklump.com">https://api.useklump.com</a>
          </td>
        </tr>
        <tr>
          <td><strong>Production</strong></td>
          <td>
            The production environment is used when the product is about to go live and ready to be used by the general public.
          </td>
          <td>
            <a href="https://api.useklump.com">https://api.useklump.com</a>
          </td>
        </tr>
      </tbody>
      <style jsx>{`
        .env-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 16px;
        }
        .env-table th,
        .env-table td {
          border: 1px solid #e5e7eb;
          padding: 12px 16px;
          text-align: left;
          vertical-align: top;
        }
        .env-table th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        .env-table a {
          color: grey;
          text-decoration: underline;
        }
      `}</style>
    </table>
  );
}
