'use client';

import styles from './Banner.module.css';

const publicInstitutions = [
  "British Columbia Institute of Technology",
  "Camosun College",
  "Capilano University",
  "Coast Mountain College",
  "College of New Caledonia",
  "College of the Rockies",
  "Douglas College",
  "Emily Carr University of Art and Design",
  "Justice Institute of British Columbia",
  "Kwantlen Polytechnic University",
  "Langara College",
  "Nicola Valley Institute of Technology",
  "North Island College",
  "Northern Lights College",
  "Okanagan College",
  "Selkirk College",
  "Simon Fraser University",
  "Thompson Rivers University",
  "University of British Columbia",
  "University of Northern British Columbia",
  "University of the Fraser Valley",
  "University of Victoria",
  "Vancouver Community College",
  "Vancouver Island University",
];

const externalInstitutions = [
  "Royal Roads University",
];

const privateInstitutions = [
  "Alexander College",
  "Coquitlam College",
  "Fraser International College",
  "LaSalle College Vancouver",
  "Trinity Western University",
  "University Canada West",
];

export default function Banner() {
  return (
    <aside className={styles.banner}>
      <h2>Associated Institutions</h2>

      <div className={styles.section}>
        <h3>Public</h3>
        <ul>
          {publicInstitutions.map((name) => (
            <li key={name}><button>{name}</button></li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3>External</h3>
        <ul>
          {externalInstitutions.map((name) => (
            <li key={name}><button>{name}</button></li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h3>Private</h3>
        <ul>
          {privateInstitutions.map((name) => (
            <li key={name}><button>{name}</button></li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

