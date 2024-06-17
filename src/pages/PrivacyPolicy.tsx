import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

export default function PrivacyPolicy(): React.ReactElement {
  return (
    <div className="about-container">
      <Header />
      <div className="about-content">
        <h1>Privacy Policy</h1>
        <p>
          At Fitness Freaks Indians, we are committed to ensuring satisfaction
          with our fitness programs. Our refund policy is designed to give you
          peace of mind when committing to our services.
        </p>
        <div style={{ textAlign: "left" }}>
          <h2>Your privacy is important</h2>
          <p>
            We are totally committed to protecting the privacy of our site
            visitors and customers, we fully appreciate and respect the
            importance of privacy on the Internet. We will not disclose
            information about my customers to third parties except where it is
            part of providing a service to you – e.g. arranging for a product to
            be sent to you, carrying out credit and other security checks and
            for the purposes of customer research and profiling or where we have
            your express permission to do so.
          </p>
          <h2>Your consent</h2>
          <p>
            We will not sell your name, address, e-mail address, credit card
            information or personal information to any third party (excluding
            partners from whom you may have linked to our site) without your
            permission.
          </p>
          <h2>Communication & marketing</h2>
          <p>
            If you have made a purchase from my store I may occasionally update
            you on our latest products, news and special offers via e-mail. All
            our customers have the option to opt-out of receiving marketing
            communications from me and/or selected third parties. If you do not
            wish to continue to receive marketing from me and/or selected third
            parties on checkout.
          </p>
          <h2>Cookies</h2>
          <p>
            A cookie are a small information file that is sent to your computer
            and is stored on your hard drive. If you have registered with us
            then your computer will store an identifying cookie which will save
            you time each time you re-visit our site, by remembering your email
            address for you. You can change the settings on your browser to
            prevent cookies being stored on your computer without your explicit
            consent.
          </p>
          <h2>Google Remarketing</h2>
          <p>
            This website uses the Google AdWords remarketing service to
            advertise on third party websites (including Google) to previous
            visitors to our site. It could mean that we advertise to previous
            visitors who haven’t completed a task on our site, for example using
            the contact form to make an enquiry. This could be in the form of an
            advertisement on the Google search results page, or a site in the
            Google Display Network. Third-party vendors, including Google, use
            cookies to serve ads based on someone’s past visits to our site. Of
            course, any data collected will be used in accordance with our own
            privacy policy and Google’s privacy policy.
          </p>

          <p>
            You can set preferences for how Google advertises to you using the
            Google Ad Preferences page, and if you want to you can opt out of
            interest-based advertising entirely by cookie settings or
            permanently using a browser plugin.
          </p>

          <h2>Third party sites</h2>
          <p>
            My site may contain links to and from the websites of our partner
            networks, advertisers and other third parties. If you follow a link
            to any of these websites, please note that they have their own
            privacy policies and that I do not accept any responsibility or
            liability for these policies. Please check these policies before you
            submit any personal data to these websites.
          </p>

          <h2>Checking your details</h2>
          <p>
            If you wish to verify the details you have submitted to us you may
            do so by contacting us via the e-mail address given below. Our
            security procedures mean that we may request proof of identity
            before we reveal information. This proof of identity will take the
            form of your e-mail address and password submitted upon
            registration. You must therefore keep this information safe as you
            will be responsible for any action which we take in response to a
            request from someone using your e-mail and password. We would
            strongly recommend that you do not use the browser’s password memory
            function as that would permit other people using your terminal to
            access your personal information.
          </p>

          <h2>Contacting us</h2>
          <p>
            We are always pleased to hear from my customers (even if it is a
            complaint!). we are always grateful for any time you spend providing
            us with the knowledge we need to ensure our customers are completely
            satisfied – we want you to return to the site and to recommend us to
            your friends and family. If you have any questions or feedback about
            this statement, or if you would like us to stop processing your
            information, please do not hesitate to contact customer support, who
            will be delighted to answer any questions you may have.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
