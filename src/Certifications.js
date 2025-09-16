import React from "react";
import "./Certifications.css";

// import your images
import prizeImage from './assets/prize.jpg';
import kcseImage from './assets/kcse.jpg';
import recommendationImage from './assets/letter.jpg';

import digitalMarketingImage from './assets/digital-marketing.png';
import contentMarketingImage from './assets/content-marketing.png';
import socialMediaImage from './assets/social-media.png';

import googleAdsAppImage from './assets/google-ads-app.jpg';
import googleAdsSearchImage from './assets/google-ads-search.jpg';
import googleAdsDisplayImage from './assets/google-ads-display.jpg';
import googleAdsMeasurementImage from './assets/google-ads-measurement.jpg';
import googleAnalyticsImage from './assets/google-analytics.jpg';

import seoEssentialsImage from "./assets/seo-essentials.jpg";
import keywordResearchImage from "./assets/keyword-research.jpg";
import onPageSeoImage from "./assets/onpage-seo.jpg";
import localSeoImage from "./assets/local-seo.jpg";


// import Footer
import Footer from "./Footer";

export default function Certifications() {
  return (
    <>
      <main>
        {/* Achievements Section */}
        <section className="achievements-section">
          <h2 className="section-title">My Achievements & Recognition</h2>
          <p className="section-intro">
            A few milestones that reflect my academic and personal journey.
          </p>
          <div className="image-grid">
            <div className="image-card">
              <img src={recommendationImage} alt="University Recommendation" />
              <h3>University Recommendation</h3>
              <p>
                A recommendation letter from my university showcasing my skills
                and integrity.
              </p>
            </div>

            <div className="image-card">
              <img src={prizeImage} alt="Prize Award" />
              <h3>Prize Giving Award</h3>
              <p>
                Received in recognition of outstanding academic excellence and
                leadership.
              </p>
            </div>

            <div className="image-card">
              <img src={kcseImage} alt="KCSE Certificate" />
              <h3>KCSE Certificate</h3>
              <p>My official Kenya Certificate of Secondary Education results.</p>
            </div>
          </div>
        </section>


{/* Divider */}
      <hr style={{ border: "4px solid red", margin: "2rem 0" }} />


        {/* Professional Certifications Section */}
<section className="certifications-section">
  <h2 className="section-title" style={{ textAlign: "center" }}>
    Professional Certifications
  </h2>
  <p className="section-intro" style={{ textAlign: "center" }}>
    Industry-recognized certifications that strengthen my expertise in digital marketing, content strategies & social media management.
  </p>

  <div className="cert-grid">
    <div className="cert-card">
      <img src={digitalMarketingImage} alt="Digital Marketing Certificate" />
      <h3>Digital Marketing Certificate</h3>
      <p>Proven expertise in designing, executing, and optimizing high-impact digital campaigns that deliver measurable business growth, maximize ROI, and accelerate brand success.</p>
    </div>

    <div className="cert-card">
      <img src={contentMarketingImage} alt="Content Marketing Certificate" />
      <h3>Content Marketing Certificate</h3>
      <p>Certified expertise in crafting and executing content strategies that significantly increase brand visibility, drive audience engagement, and generate measurable business results.</p>
    </div>

    <div className="cert-card">
      <img src={socialMediaImage} alt="Social Media Certificate" />
      <h3>Social Media Certificate</h3>
      <p>Proven expertise in developing and executing high-impact social media strategies that drive measurable engagement, accelerate audience growth, and foster strong brand communities.</p>
    </div>
  </div>
</section>


{/* Divider */}
      <hr style={{ border: "4px solid red", margin: "2rem 0" }} />



<section className="certifications-section">
  <h2 className="section-title">Google Ads Certifications</h2>
  <p className="section-intro">
    Industry-recognized certifications validating my proven ability to design, manage, and optimize high-performing Google Ads campaigns that drive measurable ROI and business growth.
  </p>

  <div className="cert-grid">
    <div className="cert-card">
      <img src={googleAdsAppImage} alt="Google Ads App" />
      <h3>Google Ads App Certification</h3>
      <p>
        Proven expertise in designing and optimizing high-performing app campaigns that consistently drive installs, boost user engagement, and deliver measurable ROI for business growth.
      </p>
    </div>

    <div className="cert-card">
      <img src={googleAdsSearchImage} alt="Google Ads Search" />
      <h3>Google Ads Search Certification</h3>
      <p>
        Specialized in creating data-driven search campaigns that capture high-intent customers, maximize conversions, and generate sustainable revenue growth.
      </p>
    </div>

    <div className="cert-card">
      <img src={googleAdsDisplayImage} alt="Google Ads Display" />
      <h3>Google Ads Display Certification</h3>
      <p>
        Skilled in developing impactful display campaigns that enhance brand visibility, engage target audiences, and deliver measurable business impact across digital channels.
      </p>
    </div>

    <div className="cert-card">
      <img src={googleAdsMeasurementImage} alt="Google Ads Measurement" />
      <h3>Google Ads Measurement Certification</h3>
      <p>
        Certified ability to track, analyze, and optimize campaign performance using advanced measurement strategies, ensuring maximum ROI and informed business decisions.
      </p>
    </div>

    <div className="cert-card">
      <img src={googleAnalyticsImage} alt="Google Analytics" />
      <h3>Google Analytics Certification</h3>
      <p>
        Certified expertise in leveraging Google Analytics to track, analyze, and interpret data—providing actionable insights that optimize marketing strategies and drive measurable business growth.
      </p>
    </div>
  </div>
</section>


{/* Divider */}
      <hr style={{ border: "4px solid red", margin: "2rem 0" }} />


<section className="certifications-section">
      <h2 className="section-title">SEO Certifications</h2>
      <p className="section-intro">
    Certified expertise in driving organic growth through keyword research, on-page optimization, 
  and local SEO strategies—helping businesses improve visibility, attract qualified traffic, 
  and achieve measurable results.
  </p>
      <div className="cert-grid">
        <div className="cert-card">
          <img src={seoEssentialsImage} alt="SEO Essentials" />
          <h3>SEO Essentials Certificate</h3>
          <p>
            Strong foundation in SEO strategies to increase visibility,
            rankings, and organic growth.
          </p>
        </div>

        <div className="cert-card">
          <img src={keywordResearchImage} alt="Keyword Research" />
          <h3>Keyword Research Essentials Certificate</h3>
          <p>
            Skilled in identifying high-value keywords that drive targeted
            traffic and business growth.
          </p>
        </div>

        <div className="cert-card">
          <img src={onPageSeoImage} alt="On-Page SEO" />
          <h3>On-Page SEO Essentials Certificate</h3>
          <p>
            Expertise in optimizing content and structure for maximum search
            engine performance.
          </p>
        </div>

        <div className="cert-card">
          <img src={localSeoImage} alt="Local SEO" />
          <h3>Local SEO Essentials Certificate</h3>
          <p>
            Proven ability to optimize businesses for local searches, improving
            visibility and customer reach.
          </p>
        </div>
      </div>
    </section>
      </main>

      

      {/* Footer */}
      <Footer />
    </>
  );
}
