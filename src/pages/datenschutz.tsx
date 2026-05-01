import { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './legal.module.css';

const content = {
  de: {
    title: 'Datenschutz',
    sections: (
      <>
        <h1>Datenschutzerklärung</h1>

        <h2>Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
          sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" entnehmen.
        </p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Andere Daten
          werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
          IT-Systeme erfasst (z. B. Internetbrowser, Betriebssystem, Uhrzeit des Seitenaufrufs).
        </p>

        <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und
          Zweck Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen können Sie sich jederzeit an uns
          wenden.
        </p>

        <h2>Hosting</h2>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
          <strong>netcup GmbH</strong>, Daimlerstraße 25, D-76185 Karlsruhe<br />
          Wenn Sie unsere Website besuchen, erfasst netcup verschiedene Logfiles inklusive Ihrer
          IP-Adressen. Weitere Informationen:{' '}
          <a href="https://www.netcup.com/de/kontakt/datenschutzerklaerung" target="_blank" rel="noreferrer">
            netcup Datenschutzerklärung
          </a>.
        </p>
        <p>
          Die Verwendung von netcup erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h3>Auftragsverarbeitung</h3>
        <p>
          Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten
          Dienstes geschlossen.
        </p>

        <h2>Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          <strong>Moritz Kohm</strong><br />
          c/o Impressumservice Dein-Impressum<br />
          Stettiner Str. 41, 35410 Hungen<br />
          E-Mail: info@musiker15.de
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
          Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
          Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
        </p>

        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
          einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
        </p>

        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
          eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen.
        </p>

        <h3>Auskunft, Berichtigung und Löschung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
          und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder
          Löschung dieser Daten.
        </p>

        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
          „http://" auf „https://" wechselt.
        </p>

        <h2>Datenerfassung auf dieser Website</h2>

        <h3>Cookies</h3>
        <p>
          Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete
          und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für
          die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
          Endgerät gespeichert.
        </p>

        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL,
          Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
        </p>

        <h2>Plugins und Tools</h2>
        <h3>Google Fonts (lokales Hosting)</h3>
        <p>
          Diese Seite nutzt Google Fonts, die lokal installiert sind. Eine Verbindung zu Servern
          von Google findet dabei nicht statt. Weitere Informationen:{' '}
          <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer">
            Google Datenschutzerklärung
          </a>.
        </p>
      </>
    ),
  },
  en: {
    title: 'Privacy Policy',
    sections: (
      <>
        <h1>Privacy Policy</h1>

        <h2>Privacy at a Glance</h2>

        <h3>General Information</h3>
        <p>
          The following information provides a simple overview of what happens to your personal data
          when you visit this website. Personal data is any data by which you can be personally
          identified.
        </p>

        <h3>Data Collection on this Website</h3>
        <p>
          Data processing on this website is carried out by the website operator. You can find their
          contact details in the section "Information on the responsible party" below.
        </p>
        <p>
          Your data is collected partly by you providing it to us. Other data is collected
          automatically or with your consent when you visit the website by our IT systems (e.g.
          browser type, operating system, time of page access).
        </p>

        <h3>What rights do you have regarding your data?</h3>
        <p>
          You have the right to receive free information about the origin, recipient and purpose of
          your stored personal data at any time, as well as the right to request correction or
          deletion of this data. Please contact us at any time for this and other questions.
        </p>

        <h2>Hosting</h2>
        <p>
          We host the contents of our website with the following provider:<br />
          <strong>netcup GmbH</strong>, Daimlerstraße 25, D-76185 Karlsruhe, Germany<br />
          When you visit our website, netcup collects various log files including your IP addresses.
          For more information:{' '}
          <a href="https://www.netcup.com/de/kontakt/datenschutzerklaerung" target="_blank" rel="noreferrer">
            netcup Privacy Policy
          </a>.
        </p>
        <p>
          The use of netcup is based on Art. 6 para. 1 lit. f GDPR.
        </p>

        <h3>Order Processing</h3>
        <p>
          We have concluded a data processing agreement (DPA) for the use of the above-mentioned
          service.
        </p>

        <h2>General Information and Mandatory Disclosures</h2>

        <h3>Data Protection</h3>
        <p>
          The operators of these pages take the protection of your personal data very seriously. We
          treat your personal data confidentially and in accordance with the statutory data
          protection regulations and this privacy policy.
        </p>

        <h3>Information on the Responsible Party</h3>
        <p>
          <strong>Moritz Kohm</strong><br />
          c/o Impressumservice Dein-Impressum<br />
          Stettiner Str. 41, 35410 Hungen, Germany<br />
          Email: info@musiker15.de
        </p>

        <h3>Storage Duration</h3>
        <p>
          Unless a more specific storage period has been stated, your personal data will remain with
          us until the purpose for which it was collected no longer applies.
        </p>

        <h3>Revocation of your Consent to Data Processing</h3>
        <p>
          Many data processing operations are only possible with your explicit consent. You can
          revoke consent you have already given at any time.
        </p>

        <h3>Right to Lodge a Complaint with the Supervisory Authority</h3>
        <p>
          In the event of violations of the GDPR, data subjects have the right to lodge a complaint
          with a supervisory authority, in particular in the member state of their habitual
          residence, place of work or place of the alleged violation.
        </p>

        <h3>Right to Data Portability</h3>
        <p>
          You have the right to have data that we process automatically on the basis of your consent
          or in fulfilment of a contract handed over to yourself or to a third party in a commonly
          used, machine-readable format.
        </p>

        <h3>Information, Correction and Deletion</h3>
        <p>
          You have the right to free information about your stored personal data, its origin and
          recipient and the purpose of the data processing at any time, as well as the right to
          correction or deletion of this data.
        </p>

        <h3>SSL / TLS Encryption</h3>
        <p>
          This site uses SSL or TLS encryption for security reasons. You can recognise an encrypted
          connection by the fact that the address line of the browser changes from "http://" to
          "https://".
        </p>

        <h2>Data Collection on this Website</h2>

        <h3>Cookies</h3>
        <p>
          Our websites use so-called "cookies". Cookies are small data packages that do not cause
          any damage to your device. They are stored either temporarily for the duration of a
          session (session cookies) or permanently (persistent cookies) on your device.
        </p>

        <h3>Server Log Files</h3>
        <p>
          The provider of the pages automatically collects and stores information in server log
          files: browser type and version, operating system used, referrer URL, hostname of the
          accessing computer, time of the server request, IP address.
        </p>

        <h2>Plugins and Tools</h2>
        <h3>Google Fonts (local hosting)</h3>
        <p>
          This site uses Google Fonts, which are installed locally. No connection to Google servers
          takes place. For more information:{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google Privacy Policy
          </a>.
        </p>
      </>
    ),
  },
};

export default function Datenschutz() {
  const [lang, setLang] = useState<'de' | 'en'>('en');
  const c = content[lang];

  return (
    <Layout title={c.title}>
      <div className={styles.legalPage}>
        <div className={styles.langSwitcher}>
          <span className={styles.langLabel}>🌐</span>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as 'de' | 'en')}
            className={styles.langSelect}
          >
            <option value="de">🇩🇪 Deutsch</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
        <div className={styles.legalContent}>
          {c.sections}
        </div>
      </div>
    </Layout>
  );
}
