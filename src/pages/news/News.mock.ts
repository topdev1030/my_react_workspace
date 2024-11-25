// types
import {
  FeedlyArticle,
  FeedlyThreat,
  FeedlyThreatArticleCountGraphs,
  FeedlyThreatEntityTrends,
  FeedlyThreatRelationShips,
  FeedlyThreatEntity,
  FeedlyCVE,
  FeedlyCVEEvent,
} from "@/types";

export const mockArticles: FeedlyArticle[] = [
  {
    fingerprint: "39f969f3",
    id: "zwUJFVdnktlsCRyWGJ/if2dTo03NYy+gE/Px51ybzi4=_18b0494a897:235e51:e11a9d8",
    language: "en",
    originId:
      "https://thehackernews.com/2023/10/new-os-tool-tells-you-who-has-access-to.html",
    origin: {
      title: "The Hacker News",
      streamId: "feed/http://thehackernews.com/feeds/posts/default",
      htmlUrl: "https://thehackernews.com",
    },
    title: "New OS Tool Tells You Who Has Access to What Data",
    author: "info@thehackernews.com (The Hacker News)",
    crawled: 1696588933271,
    published: 1696587660000,
    alternate: [
      {
        type: "text/html",
        href: "https://thehackernews.com/2023/10/new-os-tool-tells-you-who-has-access-to.html",
      },
    ],
    summary: {
      content:
        "Ensuring sensitive data remains confidential, protected from unauthorized access, and compliant with data privacy regulations is paramount. Data breaches result in financial and reputational damage but also lead to legal consequences. Therefore, robust data access security measures are essential to safeguard an organization’s assets, maintain customer trust, and meet regulatory requirements.  A",
      direction: "ltr",
    },
    enclosure: [
      {
        type: "image/jpeg",
        href: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ9oh4RlUyxxq-fU1E0aHlesWWeT52kVB3OIFT_afXIqVfJS27VQd1w2_g7SB5vVyYI2RsB1s-pfoV8Jm4M3fBp8VNndJZ-BuaqdHHaUrF2Ol4tX7uuxGhWpetJN56I3UfDBvNB1t-yqxU47bIDsQjI5igckQYp-hkp2_BFqsGhdxmIVrJXLI-zg4jouM/s1600/Satori.png",
        length: 12216320,
      },
    ],
    visual: {
      contentType: "image/png",
      processor: "feedly-nikon-v3.1",
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJ9oh4RlUyxxq-fU1E0aHlesWWeT52kVB3OIFT_afXIqVfJS27VQd1w2_g7SB5vVyYI2RsB1s-pfoV8Jm4M3fBp8VNndJZ-BuaqdHHaUrF2Ol4tX7uuxGhWpetJN56I3UfDBvNB1t-yqxU47bIDsQjI5igckQYp-hkp2_BFqsGhdxmIVrJXLI-zg4jouM/s1600/Satori.png",
      expirationDate: 1699180946008,
      width: 728,
      height: 380,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/cT8WCz2gLfmw8g8TmhYRhIqfkPs2CEydlEzP3YT4a6VapMWnCIZLVdYN31t7aunjPyiFsqOCecWul0yPeFxgkeqTQeB_qdf1l9KTPp4",
    },
    canonicalUrl:
      "https://thehackernews.com/2023/10/new-os-tool-tells-you-who-has-access-to.html",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div id="articlebody">\n<p>Ensuring sensitive data remains confidential, protected from unauthorized access, and compliant with data privacy regulations is paramount. Data breaches result in financial and reputational damage but also lead to legal consequences. Therefore, robust data access security measures are essential to safeguard an organization\'s assets, maintain customer trust, and meet regulatory requirements. </p>\n<p>A comprehensive <a href="https://satoricyber.com/data-security-platform/" rel="noopener" target="_blank"><b>Data Security Platform</b></a> is essential for full visibility and control of sensitive data. One example is Satori\'s Universal Data Permissions Scanner (UDPS), an open-source authorization analysis tool.<b> <a href="https://github.com/SatoriCyber/universal-data-permissions-scanner" rel="noopener" target="_blank">UDPS</a></b>, available on GitHub, enables universal visibility into data access permissions across various data stores. With this tool, it\'s easier to identify who has the potential to access sensitive data, which can help organizations take a proactive approach to enhancing their security posture, streamline compliance, and ensure well-governed data access.</p>\n<h2>Understanding the Need for Universal Data Permissions</h2>\n<p>In managing data access permissions across large volumes of data, data engineers have to deal with several challenges.</p>\n<p>One such challenge is the complexity of granting and revoking permissions to various users across many data repositories. As organizations scale up their operations and data grows exponentially, keeping track of who has access to what becomes increasingly challenging. </p>\n<p>This complexity can lead to errors, security vulnerabilities, and difficulties in maintaining an audit trail of data access, which is crucial for compliance and security purposes. Data engineers are often tasked with maintaining a fine balance between providing access to authorized users and safeguarding data from unauthorized access.</p>\n<h3>Dispersed Data Stores</h3>\n<p>The data access permissions management landscape has become more complicated in recent years due to the widespread adoption of cloud computing. Data engineers face a highly distributed data landscape, with data now residing in on-prem data centers, multiple cloud platforms, and edge devices. Ensuring data security and governance across these diverse environments requires a more unified approach to data access permissions. </p>\n<p>The dynamic nature of the cloud means that traditional access control models may no longer suffice, and data engineers must adopt new paradigms that include granular control, visibility, and governance. </p>\n<h2>Satori\'s UDPS</h2>\n<p>Satori\'s <a href="https://satoricyber.com/universal-data-permissions-scanner/" rel="noopener" target="_blank"><b>open-source UDPS</b></a> takes a proactive and comprehensive approach to data access authorization. It scans and analyzes the permissions model of each data platform to retrieve a human-readable list of users and their access level to data assets, including database tables, cloud storage buckets, files, and more.</p>\n<p>Instead of requiring data engineers to navigate the intricacies of each individual data store\'s access controls, UDPS provides a unified platform to view and manage data permissions across all data repositories. Data engineers no longer need to use different access control mechanisms, reducing the potential for errors and unauthorized access.</p>\n<p>The standout feature of UDPS is its universal visibility into data access permissions. After scanning all databases, data warehouses, cloud accounts, and data lakes, UDPS analyzes the permissions and retrieves a list of users, their access levels, and what they have access to. </p>\n<p>The Universal Data Permissions Scanner is available in two ways: </p>\n\n<ol><li>Scan the permissions structure of a database to get the list of all users and data assets they can access. </li><li>Posture Manager - a fully managed SaaS solution to periodically scan, store, and visualize all users and data assets they can access. </li></ol><p></p>\n\n<p>Data engineers gain greater visibility, allowing them to quickly identify overprivileged users, unauthorized access, or unusual behavior in real time. Universal visibility simplifies the auditing process and ensures that data access remains transparent and compliant with security and privacy regulations.</p>\n<p>Data engineers can efficiently manage data security and governance, reducing secure and compliant data access challenges.</p>\n<h2>Benefits of Using an OS UDPS</h2>\n<ol><li><strong>Identifying Overprivileged Users and Reducing Security Risks:</strong> With comprehensive visibility into data access permissions, organizations can pinpoint individuals or accounts granted unnecessary or excessive access to sensitive data. By identifying and rectifying overprivileged users, businesses can reduce the risk of data breaches and unauthorized data access.</li>\n<li><strong>Streamlining Compliance Reporting and Privacy Law Compliance: </strong>Organizations generate compliance reports more efficiently by aggregating data access information across various repositories. This streamlines the reporting process and ensures data access aligns with regulatory requirements. Businesses can maintain compliance with data protection laws such as GDPR or HIPAA, reducing the potential for legal issues and fines.</li>\n<li><strong>Enhancing Data Security and Data Posture:</strong> Data engineers and security proactively address security gaps by clearly viewing data access authorizations and identifying potential vulnerabilities. Enhanced data security protects an organization\'s assets and preserves its reputation and customer trust in an increasingly data-sensitive world.</li>\n\n<li><strong>Detecting Unusual Behavior and Tracking Data Usage:</strong> Preserve data integrity by detecting unusual behavior and tracking data usage across complex data infrastructures. It monitors access patterns and raises alerts when deviations from the norm are detected. This proactive approach allows organizations to respond to potential security incidents swiftly, reducing the impact of data breaches or insider threats. By tracking data usage, businesses gain valuable insights into the use of their data, which can inform decision-making processes and improve operational efficiency.</li>\n<li><strong>Simplifying Authorization Management for Data and Security Engineers:</strong> Simplifies the intricate task of authorization management for data and security engineers. Instead of navigating multiple data repositories and access control systems, these professionals can use a centralized platform to manage and enforce data access policies. This streamlines the process, reduces the likelihood of misconfigurations, and ensures that data authorization is consistent and transparent across the organization. Simplified authorization management translates to more efficient data governance and a stronger security posture.</li>\n<li><strong>Enhancing Productivity: </strong>Untangling the web of permissions complexity enables seamless information sharing across departments, accelerating time-to-value. This means that data can be efficiently accessed and leveraged when needed, facilitating agile decision-making and fostering collaboration among teams. It removes the barriers that once hindered the rapid flow of information within the enterprise.</li>\n</ol><h2>Ease of Implementation</h2>\n<p>Some key insights into the ease of implementing Satori\'s solution:</p>\n<p></p><ul><li><b>Agentless Deployment:</b> There is no need to install agents or additional software on your data stores or systems. This agentless approach simplifies the deployment process and eliminates the need for complex configurations or alterations to your existing infrastructure.</li><li><b>Zero Code Changes:</b> It does not require any changes to existing data structures or schemas. The data remains intact and retains its structure.</li><li><b>User-Friendly Interface:</b> The interface simplifies the definition and enforcement of data access policies. Security and data engineering teams can easily configure and manage fine-grained policies to control who can access specific data elements without requiring specialized coding or extensive technical expertise.</li><li><b>Real-time Policy Updates:</b> Allows for real-time policy updates so that security measures are adapted on the fly to address emerging threats or changing compliance requirements. This agility simplifies the ongoing management of data security controls.</li><li><b>Non-Intrusive Data Encryption: </b>Transparent data encryption that doesn\'t disrupt existing user interactions. Data remains accessible to authorized users without noticeable changes in how they interact. </li><li><b>Compatibility and Scalability: </b>Compatible with many data stores, databases, data lakes, and cloud platforms. It also scales with your organization\'s needs.</li></ul><p></p> <p>Implementation is a straightforward and hassle-free process. It doesn\'t require alterations to your data structures or user interactions. The ease of implementation makes Satori an attractive solution for organizations looking to enhance their data security effortlessly.</p>\n<h2>Conclusion</h2>\n<p>Satori\'s Universal Data Permissions Scanner (UDPS) simplifies data access authorization complexities by providing a centralized, non-intrusive solution. It offers universal visibility into data access permissions across diverse data repositories, enabling organizations to identify overprivileged users, streamline compliance reporting, and enhance data security. It is easy to implement, with no changes to existing data structures or user interactions; read more about the UDPS in the <a href="https://satoricyber.github.io/universal-data-permissions-scanner/" rel="noopener" target="_blank"><b>project documentation</b></a>.</p>\n<p>Organizations can detect unusual behavior, track data usage, and simplify authorization management, contributing to a stronger security posture and streamlined data governance.</p>\n\n<p id="hiddenH1"></p>\n<div><p>Found this article interesting? Follow us on <a href="https://twitter.com/thehackersnews" rel="noopener" target="_blank">Twitter </a> and <a href="https://www.linkedin.com/company/thehackernews/" rel="noopener" target="_blank">LinkedIn</a> to read more exclusive content we post.</p></div>\n</div>\n\n</div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidence: 0.744,
      topic: {
        id: "nlp/f/topic/3003",
        label: "Cyber Security",
      },
      confidenceLevel: "unsure",
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        label: "Cyber Security",
        score: 0.744,
        salienceLevel: "about",
      },
      {
        type: "contentType",
        id: "nlp/f/topic/10678",
        label: "Explainers",
        score: 0.88,
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/4105",
        label: "Security Compliance",
        score: 0.978,
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/3000",
        label: "Artificial Intelligence",
        score: 15.192741572732073,
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/253",
        label: "Big Data",
        score: 0.893,
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/487",
        label: "Cloud Computing",
        score: 0.86,
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:twitter",
        label: "Twitter, Inc.",
        mentions: [
          {
            text: "Twitter",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:finance-industry-companies",
        label: "Finance Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:twitter",
            label: "Twitter, Inc.",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "With this tool, it's easier to identify who has the potential to access sensitive data, which can help organizations take a proactive approach to enhancing their security posture, streamline compliance, and ensure well-governed data access.",
        },
        {
          text: "Instead of requiring data engineers to navigate the intricacies of each individual data store's access controls, UDPS provides a unified platform to view and manage data permissions across all data repositories.",
        },
      ],
    },
    indicatorsOfCompromise: {
      mentions: [],
      exports: [
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/b08ca2dbf44a5f7250cf1200fb2c63bf/misp-20231006.034213.all-ioc.json",
        },
      ],
    },
    engagement: 3,
    engagementRate: 0.25,
  },
  {
    language: "en",
    fingerprint: "aac394bb",
    id: "iJsgu1DRIkYZoeZgqPqgAhWJiN0n5njLRUb77oDapDY=_18b028b0585:384678:a4fdcf0e",
    originId: "tag:theregister.com,2005:story230000",
    origin: {
      htmlUrl: "https://www.theregister.com/security/",
      streamId: "feed/http://www.theregister.co.uk/security/headlines.atom",
      title: "The Register – Security",
    },
    title:
      "GoldDigger Android trojan targets Vietnamese banking apps, code contains hints of wider targets",
    author: "Laura Dobberstein",
    crawled: 1696554747269,
    published: 1696554370000,
    updated: 1696554370000,
    alternate: [
      {
        type: "text/html",
        href: "https://go.theregister.com/feed/www.theregister.com/2023/10/06/golddigger_android_trojan_vietnam_attacks/",
      },
    ],
    summary: {
      content:
        "<h4>More malware scum using acessibility features to steal personal info</h4> <p>Singapore-based infosec outfit Group-IB on Thursday released details of a new Android trojan that exploits the operating system's accessibility features to steal info that enables theft of personal information.…</p>",
      direction: "ltr",
    },
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://regmedia.co.uk/2023/10/06/shutterstock_ai_shovel_embedded_in_golden_smartphone.jpg",
      expirationDate: 1699146759954,
      width: 1024,
      height: 512,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/-1hLGUMcr0vhGFl9uCWH1KCvfUCUkiwBpM7UJnvY6YMc0eF8l-P6P1AIoNAbXhfUeJJyv9nBO7oNymJmaF-apn58rtiM_rgkAyHyuw",
    },
    canonicalUrl:
      "https://www.theregister.com/2023/10/06/golddigger_android_trojan_vietnam_attacks/",
    ampUrl:
      "https://www.theregister.com/AMP/2023/10/06/golddigger_android_trojan_vietnam_attacks/",
    cdnAmpUrl:
      "https://www-theregister-com.cdn.ampproject.org/c/s/www.theregister.com/AMP/2023/10/06/golddigger_android_trojan_vietnam_attacks/",
    fullContent:
      '<div><body><div><div id="body">\n<p>Singapore-based infosec outfit Group-IB on Thursday released details of a new Android trojan that exploits the operating system\'s accessibility features to steal info that enables theft of personal information.</p>\n<p>The security research outfit <a target="_blank" href="https://www.group-ib.com/blog/golddigger-fraud-matrix/">wrote</a> that the trojan, named GoldDigger, currently targets Vietnamese banking apps – but includes code suggesting its developers plan wider attacks. Between June 2023, when it spotted GoldDigger, and late August, Group-IB <a target="_blank" href="https://www.group-ib.com/media-center/press-releases/golddigger-trojan-vietnam/">identified</a> 51 financial organization applications targeted by the trojan. The security form is unsure how many devices have been infected, or how much money has been stolen.</p>\n<p>The malware makes its way onto devices after users visit fake websites that manipulate them into downloading the app. Once installed, GoldDigger requests access to Android’s Accessibility Service – the feature designed to assist users with disabilities by allowing apps to interact with each other and modify the user interface.</p>\n\n    \n\n<p>Permission to use the Accessibility Service means GoldDigger can monitor and manipulate a device\'s functions and view personal information such as banking app credentials and the content of SMS messages, and send that info to command-and-control servers. A code snippet found by the researchers suggests the malware attempts to bypass two factor authentication, and is designed to fool banking apps that it is making legitimate transactions.</p>\n\n<p>"We have not confirmed that the Trojan operators use these capabilities at the time of writing. However, based on the behavior of other known Trojans similar to GoldDigger, we don\'t think they differ significantly," explained Group-IB.</p>\n<p>"We are definitely observing a significant increase in the Android malware strains abusing the Accessibility Service. For Android malware trends, there is a noticeable shift away from the traditional use of web fakes," Sharmine Low, malware analyst at Group-IB, told <i>The Register</i>. Low said using the Accessibility Function was a "much more invasive approach compared to generating individual web fake files for each specific target."</p>\n\n        \n\n<p>GoldDigger\'s developers have left clues that their ambitions may reach beyond Vietnam. The malware includes translations in Chinese and Spanish, suggesting that countries where those languages are spoken may be next in line as targets.</p>\n<p>One way the security firm noted the malware could be prevented – aside from the usual check for updates, watch out for unusual permissions and adopting fraud protection services – is to keep the "Install from Unknown Sources" setting disabled by default on Android devices. Only if the setting is enabled can APKs from sources outside Google Play Store be installed. ®</p>                                \n<p> </p>\n\n                    </div>\n\n\n\n                            </div></body></div>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/1396",
        score: 0.997,
        label: "Malware",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 0.996,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        id: "nlp/f/topic/7020",
        score: 0.994,
        label: "Summaries of Threat Intelligence Reports",
        salienceLevel: "about",
      },
      {
        type: "industryTopic",
        id: "nlp/f/topic/4017",
        score: 1.0,
        label: "Finance Industry",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/603",
        score: 0.962,
        label: "Cyber Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1025",
        score: 0.901,
        label: "Hacking",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/4005",
        score: 0.962,
        label: "Mobile Security",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:1952f5c7-ae8b-461e-82e1-eb577f30f5b4",
        label: "GoldDigger",
        mentions: [
          {
            text: "GoldDigger",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        id: "nlp/f/entity/wd:950084",
        label: "Trojan",
        mentions: [
          {
            text: "trojan",
          },
        ],
        salienceLevel: "about",
      },
    ],
    businessEvents: [
      {
        id: "nlp/f/businessEvent/productLaunch",
        score: 1.0,
        label: "Product Launches",
        mentions: [
          {
            text: "Singapore-based infosec outfit Group-IB on Thursday released details of a new Android trojan that exploits the operating system's accessibility features to steal info that enables theft of personal information.",
          },
        ],
        salienceLevel: "about",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/aa2905ec-635a-11ee-8c7a-e2525ee415ff",
      featured: true,
      score: 1.0,
      label: "Android Trojan targets banking apps",
    },
    clusters: [
      {
        id: "topic/f/meme/aa2905ec-635a-11ee-8c7a-e2525ee415ff",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "The security research outfit wrote that the trojan, named GoldDigger, currently targets Vietnamese banking apps – but includes code suggesting its developers plan wider attacks.",
        },
        {
          text: "Permission to use the Accessibility Service means GoldDigger can monitor and manipulate a device's functions and view personal information such as banking app credentials and the content of SMS messages, and send that info to command-and-control servers.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/9bc91467b8bfc443ce20855ef8cc0390/stix2.1-20231005.181227.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/9bc91467b8bfc443ce20855ef8cc0390/misp-20231005.181227.all-ioc.json",
        },
      ],
      mentions: [],
    },
    engagement: 18,
    engagementRate: 1.2,
  },
  {
    language: "en",
    fingerprint: "c84c1d92",
    id: "8HRqF+HLSOwmc5TejVtQFNgJV+IjW20gTvr8o8MF+ts=_18b01cdc755:2b379c:a4fdcf0e",
    keywords: [
      "Breaking News",
      "Hacking",
      "Mobile",
      "Android",
      "hacking news",
      "information security news",
      "IT Information Security",
      "malware",
      "mobile",
      "Pierluigi Paganini",
      "Security Affairs",
      "Security News",
      "WhatsApp",
      "zero-Day",
    ],
    originId: "https://securityaffairs.com/?p=152035",
    origin: {
      htmlUrl: "https://securityaffairs.com/",
      streamId: "feed/http://securityaffairs.co/wordpress/feed",
      title: "Security Affairs ",
    },
    title: "A WhatsApp zero-day exploit can cost several million dollars",
    content: {
      content:
        '<div></div> <h2 class="wp-block-heading">TechCrunch reported that a working zero-day exploit for the popular WhatsApp can be paid millions of dollars. </h2> <p>The research of zero-day exploits for popular applications such as WhatsApp is even more complex due to the security mechanisms implemented by the developers of the mobile OSs and the app.</p> <p>TechCrunch reported that a zero-day exploits for popular applications like WhatsApp “are now worth millions of dollars”.</p> <p>TechCrunch obtained leaked documents that demonstrate that, as of 2021, a zero-click, zero-day exploit for the Android version of WhatsApp had a bounty between $1.7 and $8 million. Someone was willing to pay these great payouts to remotely gain access to the messages of a target.</p> <p>According to the documents, a company was selling a zero-click exploit for a remote code execution (RCE) vulnerability in WhatsApp for around $1.7 million.</p> <p><em>“The document said the exploit worked for Android versions 9 to 11, which was released in 2020, and that it took advantage of a flaw in the “image rendering library.” In 2020 and 2021, WhatsApp <a rel="noreferrer noopener" href="https://www.whatsapp.com/security/advisories/2021/" target="_blank">fixed</a> three <a rel="noreferrer noopener" href="https://www.whatsapp.com/security/advisories/2020/" target="_blank">vulnerabilities</a> — CVE-2020-1890, CVE-2020-1910, and CVE-2021-24041— that all involved how the app processes images. It’s unclear if these patches fixed the flaws underlying the exploits that were on sale in 2021.” <a href="https://techcrunch.com/2023/10/05/zero-days-for-hacking-whatsapp-are-now-worth-millions-of-dollars/"><strong>wrote</strong></a> <a href="https://techcrunch.com/author/lorenzo-franceschi-bicchierai/">Lorenzo Franceschi-Bicchierai</a> on TechCrunch.</em></p> <p>The surveillance market is literally exploding, intelligence agencies, law enforcement bodies and zero-day brokers are competing to buy exploits that can allow them to compromise devices and apps. </p> <p>In some cases, the exploit for a single vulnerability can allow to spy on a target, in other cases, threat actors combine multiple issues in an exploit chain to achieve the same effect.</p> <p>In mid-September, researchers from the Citizen Lab and Google’s Threat Analysis Group (TAG) <a href="https://securityaffairs.com/144174/hacking/exploit-chains-zero-day-spyware.html">revealed</a> that the <a href="https://securityaffairs.com/110462/hacking/apple-ios-zero-days.html">three Apple zero-days</a> (CVE-2023-41993, CVE-2023-41991, CVE-2023-41992) addressed in the same period were used as part of an exploit to install <a href="https://securityaffairs.com/131561/hacking/predator-spyware-zero-day-exploits.html">Cytrox Predator spyware</a>.</p> <p>The three flaws were discovered by Bill Marczak of The Citizen Lab at The University of Toronto’s Munk School and Maddie Stone of Google’s Threat Analysis Group. The two research teams have already discovered multiple actively exploited zero-days in Apple products that were exploited in targeted attacks against high-profile individuals, such as opposition politicians, dissidents, and journalists.</p> <p>The Russian zero-day broker firm Operation Zero, <a href="https://securityaffairs.com/151607/hacking/russian-zero-day-broker-offering.html">recently increased payouts</a> for top-tier mobile exploits. The company is willing to pay up to $20,000,000 for zero-day exploits for iPhone and Android devices.</p> <p>The Russian company pointed out that the end user for its exploits is a non-NATO country, it also added that decided to increase the payout due to high demand on the market.</p> <p>Unlike other zero-day brokers, such as <a href="https://securityaffairs.com/?s=Zerodium">Zerodium</a> and <a href="https://securityaffairs.com/50173/breaking-news/zero-day-bug-bounty-program.html">Exodus Intelligence</a>, Operation Zero focuses on the Russian market. Operation Zero’s clients include Russian government agencies and private businesses.</p> <p>Follow me on Twitter: <a href="https://twitter.com/securityaffairs"><strong>@securityaffairs</strong></a> and <a href="https://www.facebook.com/sec.affairs"><strong>Facebook</strong></a> and <a href="https://infosec.exchange/@securityaffairs"><strong>Mastodon</strong></a></p> <p><a href="http://www.linkedin.com/pub/pierluigi-paganini/b/742/559"><strong>Pierluigi Paganini</strong></a></p> <p><strong>(</strong><a href="http://securityaffairs.co/wordpress/"><strong>SecurityAffairs</strong></a><strong> –</strong> <strong>hacking, zero-day)</strong></p> <p></p> <p>The post <a rel="nofollow" href="https://securityaffairs.com/152035/hacking/whatsapp-zero-day-exploit.html">A WhatsApp zero-day exploit can cost several million dollars</a> appeared first on <a rel="nofollow" href="https://securityaffairs.com">Security Affairs</a>.</p>',
      direction: "ltr",
    },
    author: "Pierluigi Paganini",
    crawled: 1696542345045,
    published: 1696539893000,
    alternate: [
      {
        type: "text/html",
        href: "https://securityaffairs.com/152035/hacking/whatsapp-zero-day-exploit.html",
      },
    ],
    summary: {
      content:
        '<p>TechCrunch reported that a working zero-day exploit for the popular WhatsApp can be paid millions of dollars. The research of zero-day exploits for popular applications such as WhatsApp is even more complex due to the security mechanisms implemented by the developers of the mobile OSs and the app. TechCrunch reported that a zero-day exploits for […]</p> <p>The post <a rel="nofollow" href="https://securityaffairs.com/152035/hacking/whatsapp-zero-day-exploit.html">A WhatsApp zero-day exploit can cost several million dollars</a> appeared first on <a rel="nofollow" href="https://securityaffairs.com">Security Affairs</a>.</p>',
      direction: "ltr",
    },
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2014/12/whatsapp-hack-valunerbility-app.jpg?fit=600%2C378&ssl=1",
      expirationDate: 1699134369320,
      width: 600,
      height: 378,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/ys9ifk16jnLQ1fRm3SwrDj72TkwHzd8SS-fVkyESDtx---dSHFugefC5ldmZo-EBa7LJE01sEfCkCVHAdLeqRmLb5FAP-p_WtxSWo4_v",
    },
    ampUrl:
      "https://securityaffairs.com/152035/hacking/whatsapp-zero-day-exploit.html?amp=1",
    cdnAmpUrl:
      "https://securityaffairs-com.cdn.ampproject.org/c/s/securityaffairs.com/152035/hacking/whatsapp-zero-day-exploit.html?amp=1",
    canonicalUrl:
      "https://securityaffairs.com/152035/hacking/whatsapp-zero-day-exploit.html",
    expansionFailureStatus: 4,
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidenceLevel: "unsure",
      confidence: 0.809,
      topic: {
        id: "nlp/f/topic/603",
        label: "Cyber Crime",
      },
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/2440",
        score: 1.0,
        label: "Vulnerabilities",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        causes: [
          {
            id: "nlp/f/topic/2440",
            label: "Vulnerabilities",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/603",
        score: 0.809,
        label: "Cyber Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/7002",
        score: 1.0,
        label: "Proof of Exploit",
        mentions: [
          {
            text: "TechCrunch reported that a working zero-day exploit for the popular WhatsApp can be paid millions of dollars.",
          },
          {
            text: "According to the documents, a company was selling a zero-click exploit for a remote code execution (RCE) vulnerability in WhatsApp for around $1.7 million.",
          },
          {
            text: "The two research teams have already discovered multiple actively exploited zero-days in Apple products that were exploited in targeted attacks against high-profile individuals, such as opposition politicians, dissidents, and journalists.",
          },
        ],
        salienceLevel: "mention",
      },
    ],
    entities: [
      {
        vulnerabilityInfo: {
          description:
            "A URL validation issue in WhatsApp for Android prior to v2.20.11 and WhatsApp Business for Android prior to v2.20.2 could have caused the recipient of a sticker message containing deliberately malformed data to load an image from a sender-controlled URL without user interaction.",
          cvssScore: 7.5,
          hasExploit: false,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2020-1890",
        label: "CVE-2020-1890",
        mentions: [
          {
            text: "CVE-2020-1890",
          },
        ],
      },
      {
        vulnerabilityInfo: {
          description:
            "A missing bounds check in WhatsApp for Android prior to v2.21.1.13 and WhatsApp Business for Android prior to v2.21.1.13 could have allowed out-of-bounds read and write if a user applied specific image filters to a specially crafted image and sent the resulting image.",
          cvssScore: 7.8,
          hasExploit: false,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2020-1910",
        label: "CVE-2020-1910",
        mentions: [
          {
            text: "CVE-2020-1910",
          },
        ],
      },
      {
        vulnerabilityInfo: {
          description:
            "A missing bounds check in image blurring code prior to WhatsApp for Android v2.21.22.7 and WhatsApp Business for Android v2.21.22.7 could have allowed an out-of-bounds write if a user sent a malicious image.",
          cvssScore: 9.8,
          hasExploit: false,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2021-24041",
        label: "CVE-2021-24041",
        mentions: [
          {
            text: "CVE-2021-24041",
          },
        ],
      },
      {
        vulnerabilityInfo: {
          description:
            "The issue was addressed with improved checks. This issue is fixed in Safari 17, iOS 16.7 and iPadOS 16.7, macOS Sonoma 14. Processing web content may lead to arbitrary code execution. Apple is aware of a report that this issue may have been actively exploited against versions of iOS before iOS 16.7.",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 9.8,
          hasExploit: true,
          hasPatch: true,
          trending: true,
        },
        id: "vulnerability/m/entity/CVE-2023-41993",
        label: "CVE-2023-41993",
        mentions: [
          {
            text: "CVE-2023-41993",
          },
        ],
      },
      {
        vulnerabilityInfo: {
          description:
            "A certificate validation issue was addressed. This issue is fixed in macOS Ventura 13.6, iOS 16.7 and iPadOS 16.7. A malicious app may be able to bypass signature validation. Apple is aware of a report that this issue may have been actively exploited against versions of iOS before iOS 16.7.",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 5.5,
          hasExploit: true,
          hasPatch: true,
          trending: true,
        },
        id: "vulnerability/m/entity/CVE-2023-41991",
        label: "CVE-2023-41991",
        mentions: [
          {
            text: "CVE-2023-41991",
          },
        ],
      },
      {
        vulnerabilityInfo: {
          description:
            "The issue was addressed with improved checks. This issue is fixed in macOS Monterey 12.7, macOS Ventura 13.6, iOS 16.7 and iPadOS 16.7. A local attacker may be able to elevate their privileges. Apple is aware of a report that this issue may have been actively exploited against versions of iOS before iOS 16.7.",
          cvssCategoryEstimate: "MEDIUM",
          cvssScore: 7.8,
          hasExploit: true,
          hasPatch: true,
          trending: true,
        },
        id: "vulnerability/m/entity/CVE-2023-41992",
        label: "CVE-2023-41992",
        mentions: [
          {
            text: "CVE-2023-41992",
          },
        ],
      },
      {
        disambiguated: true,
        type: "consumerGood",
        id: "nlp/f/entity/wd:1049511",
        label: "WhatsApp",
        mentions: [
          {
            text: "whatsapp",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:49",
        label: "North America",
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/wd:1022366",
        label: "TechCrunch",
        mentions: [
          {
            text: "techcrunch",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:8069492",
        label: "Zero",
        mentions: [
          {
            text: "zero",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:2720632",
        label: "Zero",
        mentions: [
          {
            text: "zero",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "consumerGood",
        id: "nlp/f/entity/wd:40156",
        label: "Mitsubishi A6M Zero",
        mentions: [
          {
            text: "zero",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:136046",
        label: "Zero",
        mentions: [
          {
            text: "zero",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "consumerGood",
        id: "nlp/f/entity/wd:8069489",
        label: "Zero",
        mentions: [
          {
            text: "zero",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
        label: "Exploitation for Client Execution (Enterprise T1203)",
        mentions: [
          {
            text: "zero-click exploit for a remote code execution (RCE",
          },
          {
            text: "RCE) vulnerability",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:apple",
        label: "Apple",
        mentions: [
          {
            text: "Apple",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:google",
        label: "Google",
        mentions: [
          {
            text: "Google",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "consumerGood",
        id: "nlp/f/entity/wd:94",
        label: "Android",
        mentions: [
          {
            text: "android",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:7723133",
        label: "The Citizen",
        mentions: [
          {
            text: "the citizen",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:7723135",
        label: "The Citizen",
        mentions: [
          {
            text: "the citizen",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:2750599",
        label: "The Citizen",
        mentions: [
          {
            text: "the citizen",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/wd:4751092",
        label: "Analysis Group",
        mentions: [
          {
            text: "analysis group",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:facebook-incorporated",
        label: "Meta Platforms",
        mentions: [
          {
            text: "Facebook",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/wd:180865",
        label: "University of Toronto",
        mentions: [
          {
            text: "university of toronto",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        id: "nlp/f/entity/wd:2766",
        label: "IPhone",
        mentions: [
          {
            text: "iphone",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/wd:24907649",
        label: "Zerodium",
        mentions: [
          {
            text: "zerodium",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/wd:1140115",
        label: "Government of Russia",
        mentions: [
          {
            text: "russian government",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:dca0dc02-8477-4b6f-8cf7-072d994d2c80",
        label: "Predator",
        mentions: [
          {
            text: "Predator",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:2b96b9a9-92f5-41b2-87ee-df00f6080191",
        label: "Cytrox",
        mentions: [
          {
            text: "Cytrox",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-4ca45d45-df4d-4613-8980-bac22d278fa5",
        label: "Execution (Enterprise TA0002)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
            label: "Exploitation for Client Execution (Enterprise T1203)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi-any",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
            label: "Exploitation for Client Execution (Enterprise T1203)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:google",
            label: "Google",
          },
          {
            id: "nlp/f/entity/gz:org:apple",
            label: "Apple",
          },
          {
            id: "nlp/f/entity/gz:org:facebook-incorporated",
            label: "Meta Platforms",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:google",
            label: "Google",
          },
          {
            id: "nlp/f/entity/gz:org:apple",
            label: "Apple",
          },
          {
            id: "nlp/f/entity/gz:org:facebook-incorporated",
            label: "Meta Platforms",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "TechCrunch obtained leaked documents that demonstrate that, as of 2021, a zero-click, zero-day exploit for the Android version of WhatsApp had a bounty between $1.7 and $8 million.",
        },
        {
          text: "TechCrunch reported that a working zero-day exploit for the popular WhatsApp can be paid millions of dollars.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/4980382fc6cbe44148780b81ed0b2314/stix2.1-20231005.144545.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/4980382fc6cbe44148780b81ed0b2314/misp-20231005.144545.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 1,
      url: "https://exports.feedly.com/attacks/30fa0bf491e5092808a549d9f1069a93/feedly-ai-a-whatsapp-zero-day-exploit-can-cost-several-milli.json",
    },
    engagement: 16,
    engagementRate: 1.6,
    webfeeds: {
      icon: "https://storage.googleapis.com/test-site-assets/8HRqF-HLSOwmc5TejVtQFNgJV-IjW20gTvr8o8MF-ts_oicon-1658bb14e8b",
      partial: true,
    },
  },
  {
    language: "en",
    fingerprint: "c4f9b8c",
    id: "GMj7uLpm4IPOOx5kU64zxGBMiBD17Xf8SvoEADZo/gQ=_18b018ec84f:26bb13:e11a9d8",
    originId:
      "https://www.darkreading.com/vulnerabilities-threats/10-routine-security-gaffes-the-feds-are-begging-you-to-fix",
    origin: {
      streamId: "feed/http://www.darkreading.com/rss/all.xml",
      title: "Dark Reading",
      htmlUrl: "https://www.darkreading.com",
    },
    title: "10 Routine Security Gaffes the Feds Are Begging You to Fix",
    author: "Dark Reading Staff, Dark Reading",
    crawled: 1696538216527,
    published: 1696537500000,
    alternate: [
      {
        href: "https://www.darkreading.com/vulnerabilities-threats/10-routine-security-gaffes-the-feds-are-begging-you-to-fix",
        type: "text/html",
      },
    ],
    summary: {
      content:
        "Here are the most common misconfigurations plaguing large organizations, according to a new joint cybersecurity advisory.",
      direction: "ltr",
    },
    enclosure: [
      {
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt323f5fc6526d5a0c/646539b5dc45a23f7249d9ed/CISA_GK_Images_Alamy.jpg",
        type: "image/*",
      },
      {
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt99a085317510bed4/64c2d09eb4efdc3baa62182f/285801_DR23_Graphics_Website_Author_Logo_0.jpg",
        type: "image/*",
        length: 0,
      },
    ],
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt323f5fc6526d5a0c/646539b5dc45a23f7249d9ed/CISA_GK_Images_Alamy.jpg",
      expirationDate: 1699130239408,
      width: 1200,
      height: 800,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/tpEREetQJlft_zMwmGUJ7zhYvsz80zSMY7e6pvXZovpxwuuB444wxWoGO0NLYHWX5BWD23ZMLBv5QlAHdejHjAtkA7UNHfROpuis0g",
    },
    canonicalUrl:
      "https://www.darkreading.com/vulnerabilities-threats/10-routine-security-gaffes-the-feds-are-begging-you-to-fix",
    fullContent:
      '<div><body><img src="https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt323f5fc6526d5a0c/646539b5dc45a23f7249d9ed/CISA_GK_Images_Alamy.jpg"> <br>The National Security Agency (NSA) and Cybersecurity and Infrastructure Security Agency (CISA) have issued a plea to network defenders to fix easy misconfiguration errors that allow threat actors to launch successful cyberattacks against their organizations.Red and blue teams, as well as incident response teams from both agencies, identified these as the top 10 most common network configurations:Default configurations of software and applicationsImproper separation of user/administrator privilegeInsufficient internal network monitoringLack of network segmentationPoor patch managementBypass of system access controlsWeak or misconfigured multifactor authentication (MFA) methodsInsufficient access control lists (ACLs) on network shares and servicesPoor credential hygieneUnrestricted code executionThe agencies added that software providers need to immediately adopt principles of secure-by-design to prevent these and other misconfigurations."As America’s Cyber Defense Agency, CISA is charged with safeguarding our nation against ever-evolving cyber threats and to understand, manage, and reduce risk to the cyber and physical infrastructure that Americans rely on every hour of every day," the advisory said. "Ensuring software is secure by design will help keep every organization and every American more secure."</body></div>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      topic: {
        id: "nlp/f/topic/4105",
        label: "Security Compliance",
      },
      confidence: 0.811,
      confidenceLevel: "confirm",
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 0.998,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/4105",
        score: 0.811,
        label: "Security Compliance",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        type: "location",
        disambiguated: true,
        id: "nlp/f/entity/gz:loc:49",
        label: "North America",
        mentions: [
          {
            text: "America",
          },
          {
            text: "Americans",
          },
          {
            text: "American",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "location",
        disambiguated: true,
        id: "nlp/f/entity/gz:loc:30",
        label: "United States",
        mentions: [
          {
            text: "America",
          },
          {
            text: "Americans",
          },
          {
            text: "American",
          },
        ],
        salienceLevel: "about",
      },
    ],
    clusters: [
      {
        id: "topic/f/meme/80f77d2e-63ab-11ee-8dac-9e2bc02d91bb",
      },
    ],
    related: [
      {
        entryId:
          "52n1/z/lTzTmgPyzjwpcQsgAXThWJnzNdlmdUTVJWGQ=_18b01081d95:2c88e3:cee8d097",
        feedId: "feed/http://www.bleepingcomputer.com/feed/",
        feedTitle: "BleepingComputer",
        unread: true,
      },
    ],
    leoSummary: {
      sentences: [],
    },
    indicatorsOfCompromise: {
      mentions: [],
      exports: [
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/44a67eb1f1196334a4b41a3c68590434/misp-20231005.133656.all-ioc.json",
        },
      ],
    },
    engagement: 32,
    engagementRate: 1.23,
  },
  {
    language: "en",
    fingerprint: "95cf6a70",
    id: "52n1/z/lTzTmgPyzjwpcQsgAXThWJnzNdlmdUTVJWGQ=_18b00d3e2d9:18304f:a4fdcf0e",
    keywords: ["Security", "Cloud", "Technology"],
    originId:
      "https://www.bleepingcomputer.com/news/security/amazon-to-make-mfa-mandatory-for-root-aws-accounts-by-mid-2024/",
    origin: {
      htmlUrl: "https://www.bleepingcomputer.com/",
      streamId: "feed/http://www.bleepingcomputer.com/feed/",
      title: "BleepingComputer",
    },
    title: "Amazon to make MFA mandatory for 'root' AWS accounts by mid-2024",
    author: "Bill Toulas",
    crawled: 1696525968089,
    published: 1696525596000,
    alternate: [
      {
        type: "text/html",
        href: "https://www.bleepingcomputer.com/news/security/amazon-to-make-mfa-mandatory-for-root-aws-accounts-by-mid-2024/",
      },
    ],
    summary: {
      content:
        "Amazon will require all privileged AWS (Amazon Web Services) accounts to use multi-factor authentication (MFA) for stronger protection against account hijacks leading to data breaches, starting in mid-2024. [...]",
      direction: "ltr",
    },
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://www.bleepstatic.com/content/hl-images/2023/01/06/amazon-aws-header.jpg",
      expirationDate: 1699117980945,
      width: 1600,
      height: 900,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/EvXOiL9y7qCtEBAHHfnJP0_usAWp-mIoGJv6T-B6uio20DsG-xPvnQDSYUft7MaHmUooCLyUdUqgSWAeBDlzZJe5fk9YyvevhNyrH5E",
    },
    canonicalUrl:
      "https://www.bleepingcomputer.com/news/security/amazon-to-make-mfa-mandatory-for-root-aws-accounts-by-mid-2024/",
    ampUrl:
      "https://www.bleepingcomputer.com/news/security/amazon-to-make-mfa-mandatory-for-root-aws-accounts-by-mid-2024/amp/",
    cdnAmpUrl:
      "https://www-bleepingcomputer-com.cdn.ampproject.org/c/s/www.bleepingcomputer.com/news/security/amazon-to-make-mfa-mandatory-for-root-aws-accounts-by-mid-2024/amp/",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p><img alt="AWS" src="https://www.bleepstatic.com/content/hl-images/2023/01/06/amazon-aws-header.jpg"></p>\n<p>Amazon will require all privileged AWS (Amazon Web Services) accounts to use multi-factor authentication (MFA) for stronger protection against account hijacks leading to data breaches, starting in mid-2024.</p>\n<p>Multi-factor authentication provides an extra layer of security to prevent unauthorized access, even if attackers steal an account\'s credentials.</p>\n<p>Amazon has been offering free MFA security keys for eligible AWS customers in the United States since 2021 and added more flexible MFA options on the platform in November 2022, allowing the registration of up to 8 MFA devices per account.</p>\n<p>Not using MFA to protect cloud assets can result in unauthorized access, compromise of sensitive data stored in AWS services, loss of service availability due to malicious modification of settings or the deletion of essential resources, and more.</p>\n<p>Amazon has decided that the most straightforward approach to mitigating these risks and decreasing the attack surface on AWS would be to enforce MFA, starting from the most critical category of users.</p>\n<p>"Beginning in mid-2024, customers signing in to the AWS Management Console with the root user of an AWS Organizations management account will be required to enable MFA to proceed," reads&#160;<a href="https://aws.amazon.com/blogs/security/security-by-design-aws-to-enhance-mfa-requirements-in-2024/" target="_blank" rel="nofollow noopener">Amazon\'s announcement</a>.</p>\n<p>"Customers who must enable MFA will be notified of the upcoming change through multiple channels, including a prompt when they sign in to the console."</p>\n<p>Amazon has also said that this requirement will be expanded to additional accounts and use-case scenarios as they release new features that will make MFA adoption and management at scale easier.</p>\n<p>Finally, Amazon recommends that customers pick phishing-resistant MFA technologies like security keys, although MFA authentication apps also work.</p>\n<p>Security keys conforming to the FIDO U2F or FIDO2/WebAuthn standards are inherently resistant to reverse proxy and man-in-the-middle attacks that are&#160;<a href="https://www.bleepingcomputer.com/news/security/evilproxy-uses-indeedcom-open-redirect-for-microsoft-365-phishing/" target="_blank">on the rise right now</a>.</p>\n<p>During authentication, the security key responds to server-sent challenges using its private key while also checking the website\'s origin.</p>\n<p>If there\'s an origin mismatch, possibly from a reverse proxy attack, the key won\'t sign the challenge, preventing the interception of valuable secrets.</p>\n<p>For more information on MFA support on AWS and guidance on setting up protection for your account, check out&#160;<a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/mfa-types.html" target="_blank" rel="nofollow noopener">Amazon\'s user guide page</a>.</p>\n\n</div>\n</div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidenceLevel: "unsure",
      confidence: 0.709,
      topic: {
        id: "nlp/f/topic/2256",
        label: "Tech",
      },
    },
    commonTopics: [
      {
        type: "technology",
        id: "nlp/f/topic/487",
        score: 0.966,
        label: "Cloud Computing",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/2256",
        score: 0.709,
        label: "Tech",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:amazon",
        label: "Amazon",
        mentions: [
          {
            text: "Amazon",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:amazon-web-services",
        label: "Amazon Web Services",
        mentions: [
          {
            text: "AWS",
          },
          {
            text: "Amazon Web Services",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:49",
        label: "North America",
        mentions: [
          {
            text: "the United States",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:30",
        label: "United States",
        mentions: [
          {
            text: "the United States",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:amazon",
            label: "Amazon",
          },
        ],
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:amazon",
            label: "Amazon",
          },
        ],
        mentions: [],
        salienceLevel: "about",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/9f1600ee-6213-11ee-8c7a-e2525ee415ff",
      featured: true,
      score: 1.0,
      label: "AWS mandates MFA for customers",
    },
    clusters: [
      {
        id: "topic/f/meme/9f1600ee-6213-11ee-8c7a-e2525ee415ff",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "Amazon will require all privileged AWS (Amazon Web Services) accounts to use multi-factor authentication (MFA) for stronger protection against account hijacks leading to data breaches, starting in mid-2024.",
        },
        {
          text: '"Beginning in mid-2024, customers signing in to the AWS Management Console with the root user of an AWS Organizations management account will be required to enable MFA to proceed," reads Amazon\'s announcement .',
        },
      ],
    },
    engagement: 138,
    engagementRate: 1.13,
  },
  {
    language: "en",
    fingerprint: "c685ab80",
    id: "8dpo/qFWYByOyFRTdN0tyzkcf5yiHbyLYE4uz9Kd1BA=_18b008e9fc1:1068e2:a4fdcf0e",
    keywords: [
      "Endpoint Security",
      "ICS/OT",
      "IoT Security",
      "BlackBerry",
      "Cylance",
    ],
    originId: "https://www.securityweek.com/?p=35219",
    origin: {
      htmlUrl: "https://www.securityweek.com/",
      streamId: "feed/http://feeds.feedburner.com/Securityweek",
      title: "SecurityWeek",
    },
    title: "BlackBerry to Split Cybersecurity, IoT Business Units",
    author: "Ryan Naraine",
    crawled: 1696521428929,
    published: 1696518262000,
    alternate: [
      {
        type: "text/html",
        href: "https://www.securityweek.com/blackberry-to-split-cybersecurity-iot-business-units/",
      },
    ],
    summary: {
      content:
        '<p>BlackBerry plans to split its cybersecurity and IOT (Internet of Things) businesses and pursue an IPO for the IOT unit early next year.</p> <p>The post <a rel="nofollow" href="https://www.securityweek.com/blackberry-to-split-cybersecurity-iot-business-units/">BlackBerry to Split Cybersecurity, IoT Business Units</a> appeared first on <a rel="nofollow" href="https://www.securityweek.com">SecurityWeek</a>.</p>',
      direction: "ltr",
    },
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://www.securityweek.com/wp-content/uploads/2023/01/Cybersecurity_News-SecurityWeek.jpg",
      expirationDate: 1699113439593,
      width: 1200,
      height: 675,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/BPu81zOvWTLDevCAl36hc_0537BW4sqiHvrmK9tuv8XJ3OPzXFr__Wh-t8alrkoCkaA8oekYKZKWwem6RplEX9H92R2AQ8pbxW_sD9M",
    },
    canonicalUrl:
      "https://www.securityweek.com/blackberry-to-split-cybersecurity-iot-business-units/",
    ampUrl:
      "https://www.securityweek.com/blackberry-to-split-cybersecurity-iot-business-units/amp/",
    cdnAmpUrl:
      "https://www-securityweek-com.cdn.ampproject.org/c/s/www.securityweek.com/blackberry-to-split-cybersecurity-iot-business-units/amp/",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p>\n</p><p><strong>Canadian tech giant BlackBerry has announced plans to split its cybersecurity and IOT (Internet of Things) businesses and pursue an initial public offering for the IOT unit early next year.</strong>\n</p><p>BlackBerry said the split of the two business units paves the way for the cybersecurity business to pursue its own strategy to compete with heavyweights like Microsoft, CrowdStrike and Sentinel One.\n</p><p>The company said the main goal of the separation is to target an IPO for the Internet of Things business in the first half of the next fiscal year.&#160;\n</p><p>&#8220;BlackBerry believes that a separately-traded IoT subsidiary will enable shareholders to more clearly evaluate the performance and future potential of BlackBerry&#8217;s principal businesses on a standalone basis, while allowing each business to pursue its own distinct strategy and capital allocation policy,&#8221; the company said.\n</p><p>&#8220;This new proposed structure will further increase both their operational agility and ability to focus on delivering exceptional solutions to their customers.&#8221;\n</p><p>The announcement follows recent chatter that private equity firm <a href="https://www.securityweek.com/acquisition-chatter-swirl-around-sentinelone-blackberry/">Veritas Capital held discussions to acquire BlackBerry</a>, the venerable device maker that <a href="https://www.securityweek.com/blackberry-acquire-cylance-14-billion-cash/">acquired Cylance for $1.4 billion</a> and reinvented itself as a cybersecurity vendor.\n</p><p>BlackBerry&#8217;s most recent quarterly earnings report (<a href="https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/bbcomv4/blackberry-com/en/company/investors/financial-reports/2024/q22024/Q2-FY24-Earnings-Press-Release-FINAL.pdf">Q2-FY24</a>) pegged cybersecurity revenues at $79 million and cybersecurity ARR at $279 million.</p><div><span>Advertisement. Scroll to continue reading.</span></div>\n<p><strong>Related:</strong> <a href="https://www.securityweek.com/acquisition-chatter-swirl-around-sentinelone-blackberry/">Acquisition Chatter Swirls Around SentinelOne, BlackBerry</a>\n</p><p><strong>Related: </strong><a href="https://www.securityweek.com/blackberry-announces-automotive-security-solution/">BlackBerry Announces Automotive Security Solution</a>\n</p><p><strong>Related:</strong> <a href="https://www.securityweek.com/blackberry-launches-new-cybersecurity-rd-unit/">BlackBerry Launches New Cybersecurity R&amp;D Unit</a>\n</p><p><strong>Related: </strong><a href="https://www.securityweek.com/blackberry-acquire-cylance-14-billion-cash/">BlackBerry to Acquire Cylance for $1.4 Billion in Cash</a>\n</p><p>\n</p></div></div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidenceLevel: "unsure",
      confidence: 0.777,
      topic: {
        id: "nlp/f/topic/1197",
        label: "Internet of Things",
      },
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "dataMention",
        id: "nlp/f/topic/10002",
        score: 1.0,
        label: "Revenue",
        mentions: [
          {
            text: "BlackBerry’s most recent quarterly earnings report ( Q2-FY24 ) pegged cybersecurity revenues at $79 million and cybersecurity ARR at $279 million.",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "dataMention",
        id: "nlp/f/topic/6013",
        score: 1.0,
        label: "Market Data",
        causes: [
          {
            id: "nlp/f/topic/10002",
            label: "Revenue",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "technology",
        id: "nlp/f/topic/1197",
        score: 0.777,
        label: "Internet of Things",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1822",
        score: 0.789,
        label: "Private Equity",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:blackberry",
        label: "BlackBerry",
        mentions: [
          {
            text: "BlackBerry",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:16",
        label: "Canada",
        mentions: [
          {
            text: "Canadian",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:49",
        label: "North America",
        mentions: [
          {
            text: "Canadian",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:microsoft",
        label: "Microsoft",
        mentions: [
          {
            text: "Microsoft",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    businessEvents: [
      {
        id: "nlp/f/businessEvent/mergers-acquisitions",
        score: 1.0,
        label: "Mergers and Acquisitions",
        mentions: [
          {
            text: "The announcement follows recent chatter that private equity firm Veritas Capital held discussions to acquire BlackBerry, the venerable device maker that acquired Cylance for $1.4 billion and reinvented itself as a cybersecurity vendor.",
          },
        ],
        salienceLevel: "mention",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/c2f390ca-62ff-11ee-81b9-26dba75314f1",
      featured: true,
      score: 1.0,
      label: "BlackBerry separates business units",
    },
    clusters: [
      {
        id: "topic/f/meme/c2f390ca-62ff-11ee-81b9-26dba75314f1",
      },
    ],
    leoSummary: {
      sentences: [],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/36b6fdf2cbd3c84a0fcb7b7a451f488b/misp-20231005.085708.all-ioc.json",
        },
      ],
      mentions: [],
    },
    engagement: 14,
    engagementRate: 1.17,
  },
  {
    language: "en",
    fingerprint: "75763ad3",
    originId: "https://securityaffairs.com/?p=152020",
    keywords: [
      "Breaking News",
      "Hacking",
      "Security",
      "CISA",
      "hacking news",
      "information security news",
      "IT Information Security",
      "JetBrains TeamCity",
      "Known Exploited Vulnerabilities Catalog",
      "Pierluigi Paganini",
      "Security Affairs",
      "Security News",
      "Windows",
    ],
    id: "8HRqF+HLSOwmc5TejVtQFNgJV+IjW20gTvr8o8MF+ts=_18b00184c8d:186847:cee8d097",
    origin: {
      htmlUrl: "https://securityaffairs.com/",
      streamId: "feed/http://securityaffairs.co/wordpress/feed",
      title: "Security Affairs ",
    },
    title:
      "CISA adds JetBrains TeamCity and Windows flaws to its Known Exploited Vulnerabilities catalog",
    published: 1696510981000,
    summary: {
      direction: "ltr",
      content:
        '<p>The U.S. CISA added JetBrains TeamCity and Windows vulnerabilities to its Known Exploited Vulnerabilities Catalog. The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added the JetBrains TeamCity flaw CVE-2023-42793 (CVSS score: 9.8) and Windows bug CVE-2023-28229 (CVSS score: 7.0) to its Known Exploited Vulnerabilities Catalog. Below are the descriptions of the two vulnerabilities: According to Binding Operational Directive […]</p> <p>The post <a rel="nofollow" href="https://securityaffairs.com/152020/hacking/cisa-known-exploited-vulnerabilities-catalog-jetbrains-teamcity-and-windows.html">CISA adds JetBrains TeamCity and Windows flaws to its Known Exploited Vulnerabilities catalog</a> appeared first on <a rel="nofollow" href="https://securityaffairs.com">Security Affairs</a>.</p>',
    },
    alternate: [
      {
        href: "https://securityaffairs.com/152020/hacking/cisa-known-exploited-vulnerabilities-catalog-jetbrains-teamcity-and-windows.html",
        type: "text/html",
      },
    ],
    content: {
      direction: "ltr",
      content:
        '<div></div> <h2 class="wp-block-heading">The U.S. CISA added JetBrains TeamCity and Windows vulnerabilities to its <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog">Known Exploited Vulnerabilities Catalog</a>.</h2> <p>The U.S. Cybersecurity and Infrastructure Security Agency (CISA) <a href="https://www.cisa.gov/news-events/alerts/2023/10/04/cisa-adds-two-known-exploited-vulnerabilities-catalog-removes-five-kevs">added</a> the JetBrains TeamCity flaw <a rel="noreferrer noopener" href="https://nvd.nist.gov/vuln/detail/CVE-2023-42793" target="_blank"><strong>CVE-2023-42793</strong></a> (CVSS score: 9.8) and Windows bug <a rel="noreferrer noopener" href="https://nvd.nist.gov/vuln/detail/CVE-2023-28229" target="_blank"><strong>CVE-2023-28229</strong></a> (CVSS score: 7.0) to its <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog">Known Exploited Vulnerabilities Catalog</a>.</p> <p>Below are the descriptions of the two vulnerabilities:</p> <ul> <li><a href="https://securityaffairs.com/151399/hacking/teamcity-critical-flaw-cve-2023-42793.html">CVE-2023-42793</a> JetBrains TeamCity Authentication Bypass Vulnerability. The vulnerability is an<a rel="noreferrer noopener" href="https://blog.jetbrains.com/teamcity/2023/09/critical-security-issue-affecting-teamcity-on-premises-update-to-2023-05-4-now/" target="_blank"> authentication bypass</a> issue affecting the on-premises version of TeamCity. An attacker can exploit the flaw to steal source code and stored service secrets and private keys of the target organization. By injecting malicious code, an attacker can also compromise the integrity of software releases and impact all downstream users.</li> <li><a href="https://nvd.nist.gov/vuln/detail/CVE-2023-28229">CVE-2023-28229</a> Microsoft Windows CNG Key Isolation Service Privilege Escalation Vulnerability. At the end of August a cybersecurity researcher <a rel="noreferrer noopener" href="https://whereisk0shl.top/post/isolate-me-from-sandbox-explore-elevation-of-privilege-of-cng-key-isolation" target="_blank">released</a> the details, and a proof-of-concept (PoC) exploit for this vulnerability. The <a rel="noreferrer noopener" href="https://securityonline.info/category/news/windows/" target="_blank">vulnerability</a>, which has a CVSS score of 7.0, could allow an attacker to gain specific limited SYSTEM privileges.</li> </ul> <p>According to <a rel="noreferrer noopener" href="https://cyber.dhs.gov/bod/22-01/" target="_blank">Binding Operational Directive (BOD) 22-01: Reducing the Significant Risk of Known Exploited Vulnerabilities</a>, FCEB agencies have to address the identified vulnerabilities by the due date to protect their networks against attacks exploiting the flaws in the catalog.</p> <p>Experts recommend also private organizations review the <a rel="noreferrer noopener" href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank">Catalog</a> and address the vulnerabilities in their infrastructure.</p> <p>CISA orders federal agencies to fix this flaw by October 25, 2023.</p> <p>This week the US CISA also added a Use-After-Free Vulnerability, tracked as <a href="https://nvd.nist.gov/vuln/detail/CVE-2023-4211">CVE-2023-4211</a>, in Arm Mali GPU Kernel Driver to the Catalog. CISA orders federal agencies to fix this flaw by October 24, 2023.</p> <p>Follow me on Twitter: <a href="https://twitter.com/securityaffairs"><strong>@securityaffairs</strong></a> and <a href="https://www.facebook.com/sec.affairs"><strong>Facebook</strong></a> and <a href="https://infosec.exchange/@securityaffairs"><strong>Mastodon</strong></a></p> <p><a href="http://www.linkedin.com/pub/pierluigi-paganini/b/742/559"><strong>Pierluigi Paganini</strong></a></p> <p><strong>(</strong><a href="http://securityaffairs.co/wordpress/"><strong>SecurityAffairs</strong></a><strong> –</strong> <strong>hacking, Known Exploited Vulnerabilities catalog)</strong></p> <p>The post <a rel="nofollow" href="https://securityaffairs.com/152020/hacking/cisa-known-exploited-vulnerabilities-catalog-jetbrains-teamcity-and-windows.html">CISA adds JetBrains TeamCity and Windows flaws to its Known Exploited Vulnerabilities catalog</a> appeared first on <a rel="nofollow" href="https://securityaffairs.com">Security Affairs</a>.</p>',
    },
    crawled: 1696513674381,
    author: "Pierluigi Paganini",
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2020/07/CISA.jpeg?fit=700%2C368&ssl=1",
      expirationDate: 1699105681884,
      width: 700,
      height: 368,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/HlfrTQr-9cV2QLpSgLhGXllsNfHr6CzoRTZ_D7YNoQgSESVL5-CRAyjP4widZaZLAAGmwBq-R5e44BjnUGbp-UMVNoKPke_ybqA7FE42",
    },
    canonicalUrl:
      "https://securityaffairs.com/152020/hacking/cisa-known-exploited-vulnerabilities-catalog-jetbrains-teamcity-and-windows.html",
    ampUrl:
      "https://securityaffairs.com/152020/hacking/cisa-known-exploited-vulnerabilities-catalog-jetbrains-teamcity-and-windows.html?amp=1",
    cdnAmpUrl:
      "https://securityaffairs-com.cdn.ampproject.org/c/s/securityaffairs.com/152020/hacking/cisa-known-exploited-vulnerabilities-catalog-jetbrains-teamcity-and-windows.html?amp=1",
    expansionFailureStatus: 4,
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        label: "Vulnerabilities",
        score: 1.0,
        id: "nlp/f/topic/2440",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Cyber Security",
        score: 1.0,
        causes: [
          {
            label: "Vulnerabilities",
            id: "nlp/f/topic/2440",
          },
        ],
        id: "nlp/f/topic/3003",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Hacking",
        score: 0.938,
        id: "nlp/f/topic/1025",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        vulnerabilityInfo: {
          description:
            "In JetBrains TeamCity before 2023.05.4 authentication bypass leading to RCE on TeamCity Server was possible",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 9.8,
          hasExploit: true,
          hasPatch: true,
          trending: true,
        },
        id: "vulnerability/m/entity/CVE-2023-42793",
        label: "CVE-2023-42793",
        mentions: [
          {
            text: "CVE-2023-42793",
          },
        ],
      },
      {
        vulnerabilityInfo: {
          description:
            "Windows CNG Key Isolation Service Elevation of Privilege Vulnerability",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 7.0,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2023-28229",
        label: "CVE-2023-28229",
        mentions: [
          {
            text: "CVE-2023-28229",
          },
        ],
      },
      {
        vulnerabilityInfo: {
          description:
            "A local non-privileged user can make improper GPU memory processing operations  to gain access to already freed memory.\n\n",
          cvssCategoryEstimate: "MEDIUM",
          cvssScore: 5.5,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2023-4211",
        label: "CVE-2023-4211",
        mentions: [
          {
            text: "CVE-2023-4211",
          },
        ],
      },
      {
        disambiguated: true,
        type: "org",
        label: "Cybersecurity and Infrastructure Security Agency",
        id: "nlp/f/entity/wd:5205058",
        mentions: [
          {
            text: "cisa",
          },
          {
            text: "cybersecurity and infrastructure security agency",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        label: "TeamCity",
        id: "nlp/f/entity/wd:4050768",
        mentions: [
          {
            text: "teamcity",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        label: "Microsoft Windows",
        id: "nlp/f/entity/wd:1406",
        mentions: [
          {
            text: "windows",
          },
          {
            text: "microsoft windows",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        label: "JetBrains",
        id: "nlp/f/entity/gz:org:jetbrains",
        mentions: [
          {
            text: "JetBrains",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        label: "North America",
        id: "nlp/f/entity/gz:loc:49",
        mentions: [
          {
            text: "the U.S.",
          },
          {
            text: "the US",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        label: "United States",
        id: "nlp/f/entity/gz:loc:30",
        mentions: [
          {
            text: "the U.S.",
          },
          {
            text: "the US",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Privilege Escalation (Enterprise TA0004)",
        causes: [
          {
            label: "Process Injection (Enterprise T1055)",
            id: "nlp/f/entity/gz:mi:attack-pattern-43e7dc91-05b2-474c-b9ac-2ed4fe101f4d",
          },
          {
            label: "Exploitation for Privilege Escalation (Enterprise T1068)",
            id: "nlp/f/entity/gz:mi:attack-pattern-b21c3b2d-02e6-45b1-980b-e69051040839",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-5e29b093-294e-49e9-a803-dab3d73b77dd",
        mentions: [
          {
            text: "Privilege Escalation",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        label: "Mali",
        id: "nlp/f/entity/wd:2620412",
        mentions: [
          {
            text: "arm mali",
          },
          {
            text: "mali",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Meta Platforms",
        id: "nlp/f/entity/gz:org:facebook-incorporated",
        mentions: [
          {
            text: "Facebook",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Microsoft",
        id: "nlp/f/entity/gz:org:microsoft",
        mentions: [
          {
            text: "Microsoft",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Process Injection (Enterprise T1055)",
        id: "nlp/f/entity/gz:mi:attack-pattern-43e7dc91-05b2-474c-b9ac-2ed4fe101f4d",
        mentions: [
          {
            text: "injecting malicious code",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Exploitation for Privilege Escalation (Enterprise T1068)",
        id: "nlp/f/entity/gz:mi:attack-pattern-b21c3b2d-02e6-45b1-980b-e69051040839",
        mentions: [
          {
            text: "Privilege Escalation Vulnerability",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Fortune 500 Companies",
        causes: [
          {
            label: "Microsoft",
            id: "nlp/f/entity/gz:org:microsoft",
          },
          {
            label: "Meta Platforms",
            id: "nlp/f/entity/gz:org:facebook-incorporated",
          },
        ],
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Big Tech Companies",
        causes: [
          {
            label: "Microsoft",
            id: "nlp/f/entity/gz:org:microsoft",
          },
          {
            label: "Meta Platforms",
            id: "nlp/f/entity/gz:org:facebook-incorporated",
          },
        ],
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            label: "Privilege Escalation (Enterprise TA0004)",
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-5e29b093-294e-49e9-a803-dab3d73b77dd",
          },
          {
            label: "Process Injection (Enterprise T1055)",
            id: "nlp/f/entity/gz:mi:attack-pattern-43e7dc91-05b2-474c-b9ac-2ed4fe101f4d",
          },
          {
            label: "Exploitation for Privilege Escalation (Enterprise T1068)",
            id: "nlp/f/entity/gz:mi:attack-pattern-b21c3b2d-02e6-45b1-980b-e69051040839",
          },
        ],
        id: "nlp/f/entity/gz:mi-any",
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    clusters: [
      {
        id: "topic/vulnerabilities/meme/a43acd64-5b99-11ee-891a-02ede3e69ee4",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) added the JetBrains TeamCity flaw CVE-2023-42793 (CVSS score: 9.8) and Windows bug CVE-2023-28229 (CVSS score: 7.0) to its Known Exploited Vulnerabilities Catalog .",
        },
        {
          text: "The U.S. CISA added JetBrains TeamCity and Windows vulnerabilities to its Known Exploited Vulnerabilities Catalog .",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/e999a80e10d97a5480fcabb91b9d0d34/stix2.1-20231005.064754.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/e999a80e10d97a5480fcabb91b9d0d34/misp-20231005.064754.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 2,
      url: "https://exports.feedly.com/attacks/90218984d8c728be4866264262b9c114/feedly-ai-cisa-adds-jetbrains-teamcity-and-windows-flaws-to.json",
    },
    engagement: 12,
    engagementRate: 1.09,
    webfeeds: {
      icon: "https://storage.googleapis.com/test-site-assets/8HRqF-HLSOwmc5TejVtQFNgJV-IjW20gTvr8o8MF-ts_oicon-1658bb14e8b",
      partial: true,
    },
  },
  {
    language: "en",
    fingerprint: "4935078d",
    id: "zwUJFVdnktlsCRyWGJ/if2dTo03NYy+gE/Px51ybzi4=_18aff798d04:243b3b:e11a9d8",
    originId:
      "https://thehackernews.com/2023/10/golddigger-android-trojan-targets.html",
    origin: {
      streamId: "feed/http://thehackernews.com/feeds/posts/default",
      title: "The Hacker News",
      htmlUrl: "https://thehackernews.com",
    },
    title:
      "GoldDigger Android Trojan Targets Banking Apps in Asia Pacific Countries",
    author: "info@thehackernews.com (The Hacker News)",
    crawled: 1696503270660,
    published: 1696499760000,
    alternate: [
      {
        href: "https://thehackernews.com/2023/10/golddigger-android-trojan-targets.html",
        type: "text/html",
      },
    ],
    summary: {
      content:
        "A new Android banking trojan named GoldDigger has been found targeting several financial applications with an aim to siphon victims' funds and backdoor infected devices. &quot;The malware targets more than 50 Vietnamese banking, e-wallet and crypto wallet applications,&quot; Group-IB said. &quot;There are indications that this threat might be poised to extend its reach across the wider APAC region and to",
      direction: "ltr",
    },
    enclosure: [
      {
        href: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglTU3Yoc9dbMhTmPsaoHNvGPzdRXFBOPSdSTwfFQXUuHwzxWM7rYT7xlXXJUheApxtkkisH1SFXABckI-zpNqBBe61sqpbfFTWSZ2rJFx7fZ9Ub0-fHpv7c-U6ZaWHPzb2w8U_LsthSnV3OU5yD-l3BZLrdZ8hXjrvSV-6zi_wN_Wvfc7JRG2XOpPrx2-3/s1600/android-trojn.jpg",
        type: "image/jpeg",
        length: 12216320,
      },
    ],
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglTU3Yoc9dbMhTmPsaoHNvGPzdRXFBOPSdSTwfFQXUuHwzxWM7rYT7xlXXJUheApxtkkisH1SFXABckI-zpNqBBe61sqpbfFTWSZ2rJFx7fZ9Ub0-fHpv7c-U6ZaWHPzb2w8U_LsthSnV3OU5yD-l3BZLrdZ8hXjrvSV-6zi_wN_Wvfc7JRG2XOpPrx2-3/s1600/android-trojn.jpg",
      expirationDate: 1699095290523,
      width: 728,
      height: 380,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/pJZRWjrJioPC--BnAWuSMFiSwrQek132wmpO_8ZeXVaBjJvKwZ2Mx1LNQKn9KDC5GBEJMaggbLrI_UHSiH6Vyx74D5TrR1m_zMFSww",
    },
    canonicalUrl:
      "https://thehackernews.com/2023/10/golddigger-android-trojan-targets.html",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p><span><i>&#59394;</i><span>Oct 05, 2023</span><i>&#59396;</i><span>Newsroom</span></span><span>Mobile Security / crypto </span></p></div>\n<div id="articlebody">\n<p>A new Android banking trojan named <b>GoldDigger </b>has been found targeting several financial applications with an aim to siphon victims\' funds and backdoor infected devices.</p>\n<p>"The malware targets more than 50 Vietnamese banking, e-wallet and crypto wallet applications," Group-IB <a href="https://www.group-ib.com/blog/golddigger-fraud-matrix/" rel="noopener" target="_blank">said</a>. "There are indications that this threat might be poised to extend its reach across the wider APAC region and to Spanish-speaking countries."</p>\n<p>The malware was <a href="https://twitter.com/GroupIB_TI/status/1696828035285348459" rel="noopener" target="_blank">first detected</a> by the Singapore-headquartered company in August 2023, although there is evidence to suggest that it has been active since June 2023.</p>\n\n<p>While the exact scale of the infections is currently not known, the malicious apps have been found to impersonate a Vietnamese government portal and an energy company to request intrusive permissions to meet its data-gathering goals.</p>\n<p>This primarily includes <a href="https://www.group-ib.com/media-center/press-releases/gustuff/" rel="noopener" target="_blank">abusing</a> <a href="https://thehackernews.com/2023/08/gigabud-rat-android-banking-malware.html" rel="noopener" target="_blank">Android\'s accessibility services</a>, which is intended to assist users with disabilities to use the apps, in order to interact with the targeted apps and extract personal information, steal banking app credentials, intercept SMS messages, and perform various user actions.</p>\n\n<p>Granting permissions to the malware also enables it to gain full visibility into user actions and view bank account balances, capture two-factor authentication (2FA) codes, and log keystrokes, as well as facilitate device remote access.</p>\n<p>Attack chains distributing GoldDigger leverage <a href="https://thehackernews.com/2021/12/new-android-malware-targeting-brazils_27.html" rel="noopener" target="_blank">fake websites</a> impersonating Google Play Store pages and counterfeit corporate websites in Vietnam, raising the possibility that these links are propagated to victims via smishing or traditional phishing tactics.</p>\n\n<p>However, the success of the campaign hinges on enabling the "Install from Unknown Sources" option to allow the installation of arbitrary apps available outside of the official storefront.</p>\n<p>"One of the main features of GoldDigger is its use of an advanced protection mechanism," the company noted in a report shared with The Hacker News.</p>\n<p>"Virbox Protector, a legitimate software identified in all discovered samples of GoldDigger, allows the Trojan to significantly complicate both static and dynamic malware analysis and evade detection. This presents a challenge in triggering malicious activity in sandboxes or emulators."</p>\n<p id="trim-sidebar"></p>\n\n<p id="hiddenH1"></p>\n<div><p>Found this article interesting? Follow us on <a href="https://twitter.com/thehackersnews" rel="noopener" target="_blank">Twitter </a> and <a href="https://www.linkedin.com/company/thehackernews/" rel="noopener" target="_blank">LinkedIn</a> to read more exclusive content we post.</p></div>\n</div>\n\n</div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidence: 0.945,
      confidenceLevel: "unsure",
      topic: {
        id: "nlp/f/topic/4005",
        label: "Mobile Security",
      },
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/1396",
        score: 0.995,
        label: "Malware",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 0.994,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        id: "nlp/f/topic/7020",
        score: 0.997,
        label: "Summaries of Threat Intelligence Reports",
        salienceLevel: "about",
      },
      {
        type: "industryTopic",
        id: "nlp/f/topic/4017",
        score: 1.0,
        label: "Finance Industry",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/603",
        score: 0.918,
        label: "Cyber Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1025",
        score: 0.975,
        label: "Hacking",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/4005",
        score: 0.945,
        label: "Mobile Security",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:1952f5c7-ae8b-461e-82e1-eb577f30f5b4",
        label: "GoldDigger",
        mentions: [
          {
            text: "GoldDigger",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        id: "nlp/f/entity/wd:950084",
        label: "Trojan",
        mentions: [
          {
            text: "trojan",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:twitter",
        label: "Twitter, Inc.",
        mentions: [
          {
            text: "Twitter",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-a8c31121-852b-46bd-9ba4-674ae5afe7ad",
        label: "Input Capture (Mobile T1417)",
        mentions: [
          {
            text: "log keystrokes",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-c6421411-ae61-42bb-9098-73fddb315002",
        label: "SMS Messages (Mobile T1636.004)",
        mentions: [
          {
            text: "intercept SMS",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:new-malware",
        label: "New Malware",
        causes: [
          {
            id: "nlp/f/entity/gz:mal:1952f5c7-ae8b-461e-82e1-eb577f30f5b4",
            label: "GoldDigger",
          },
        ],
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:finance-industry-companies",
        label: "Finance Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:twitter",
            label: "Twitter, Inc.",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-11c2c2b7-1fd4-408f-bc2e-fe772ef9df5e",
        label: "Protected User Data (Mobile T1636)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-c6421411-ae61-42bb-9098-73fddb315002",
            label: "SMS Messages (Mobile T1636.004)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi-any",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-c6421411-ae61-42bb-9098-73fddb315002",
            label: "SMS Messages (Mobile T1636.004)",
          },
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-a8c31121-852b-46bd-9ba4-674ae5afe7ad",
            label: "Input Capture (Mobile T1417)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-7a0d25d3-f0c0-40bf-bf90-c743871b19ba",
        label: "Collection (Mobile TA0035)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-c6421411-ae61-42bb-9098-73fddb315002",
            label: "SMS Messages (Mobile T1636.004)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/aa2905ec-635a-11ee-8c7a-e2525ee415ff",
      featured: true,
      score: 1.0,
      label: "GoldDigger Android Trojan",
    },
    clusters: [
      {
        id: "topic/f/meme/aa2905ec-635a-11ee-8c7a-e2525ee415ff",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "A new Android banking trojan named GoldDigger has been found targeting several financial applications with an aim to siphon victims' funds and backdoor infected devices.",
        },
        {
          text: "While the exact scale of the infections is currently not known, the malicious apps have been found to impersonate a Vietnamese government portal and an energy company to request intrusive permissions to meet its data-gathering goals.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/d91c2033ab06b5d95910fe1bcde40dc4/stix2.1-20231005.035430.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/d91c2033ab06b5d95910fe1bcde40dc4/misp-20231005.035430.all-ioc.json",
        },
      ],
      mentions: [],
    },
    engagement: 113,
    engagementRate: 1.55,
  },
  {
    fingerprint: "8ff33edb",
    language: "en",
    id: "iJsgu1DRIkYZoeZgqPqgAhWJiN0n5njLRUb77oDapDY=_18aff501af6:21a4dc:a4fdcf0e",
    originId: "tag:theregister.com,2005:story229965",
    origin: {
      htmlUrl: "https://www.theregister.com/security/",
      title: "The Register – Security",
      streamId: "feed/http://www.theregister.co.uk/security/headlines.atom",
    },
    title:
      "Lorenz ransomware crew bungles blackmail blueprint by leaking two years of contacts",
    author: "Connor Jones",
    crawled: 1696500554486,
    published: 1696500010000,
    updated: 1696500010000,
    alternate: [
      {
        href: "https://go.theregister.com/feed/www.theregister.com/2023/10/05/lorenz_ransomware_group_leaks_details/",
        type: "text/html",
      },
    ],
    summary: {
      content:
        "<h4>Data leakers become data leakees</h4> <p>The Lorenz ransomware group leaked the details of every person who contacted it via its online contact form over the course of the last two years.…</p>",
      direction: "ltr",
    },
    visual: {
      contentType: "image/jpeg",
      processor: "feedly-nikon-v3.1",
      url: "https://regmedia.co.uk/2022/03/25/ransomware_attack_shutterstock.jpg",
      expirationDate: 1699092575441,
      width: 1200,
      height: 627,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/c2lSkkCsFrhlApGlpYgXB1bnwHKjOZsntv_-g_tiXripSJQb-T2Zv6TCr46B1gPh2UETIBFcd8rOcG9mS_chxJJUUivNovuFuBOplA",
    },
    canonicalUrl:
      "https://www.theregister.com/2023/10/05/lorenz_ransomware_group_leaks_details/",
    ampUrl:
      "https://www.theregister.com/AMP/2023/10/05/lorenz_ransomware_group_leaks_details/",
    cdnAmpUrl:
      "https://www-theregister-com.cdn.ampproject.org/c/s/www.theregister.com/AMP/2023/10/05/lorenz_ransomware_group_leaks_details/",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div id="body">\n<p>The Lorenz ransomware group leaked the details of every person who contacted it via its online contact form over the course of the last two years.</p>\n<p>A security researcher noticed Lorenz\'s dark web victim blog was leaking backend code, pulled the data from the site, and uploaded to it a public GitHub repository.</p>\n<p>The data includes names, email addresses, and the subject line entered into the ransomware group\'s limited online form to request information from Lorenz.</p>\n<blockquote>\n\n<p>Sometime over the course of the last month, someone on the Lorenz team misconfigured their Apache2 web server, causing their login form to leak backend PHP code</p>\n</blockquote>\n<p>A subset of the individuals included in the breach were approached by <em>The Register</em> and all confirmed they had contacted Lorenz in the past two years.</p>\n<p>Data entries included in the leak date back to June 3, 2021, and end on September 17, 2023 &#8211; the date the contact form broke.</p>\n\n    \n\n<p>Security firm Cybereason previously asserted that the Lorenz group was <a href="https://www.cybereason.com/blog/research/cybereason-vs.-lorenz-ransomware" rel="nofollow">first observed in February 2021</a>, meaning the leaked data almost spans the entire time the group has existed.</p>\n\n        \n\n\n        <p>\n            \n        </p>\n\n<p>Htmalgae, the online handle of the professional security researcher who found and <a href="https://github.com/htmalgae/research/blob/main/lorenz-contact-form-messages.txt" rel="nofollow">published</a> the leak on the clear web, exclusively told <em>The Register</em> that the leak was due to a misconfigured Apache2 server.</p>\n<div><a href="https://regmedia.co.uk/2023/10/04/lorenz_leak_php_code.jpg" target="_blank"><img src="https://regmedia.co.uk/2023/10/04/lorenz_leak_php_code.jpg?x=648&amp;y=324&amp;infer_y=1" alt="Code editor showing the PHP code leaked by Lorenz\'s ransomware blog" title="Code editor showing the PHP code leaked by Lorenz\'s ransomware blog"></a>\n<p>Code editor showing the PHP code leaked by Lorenz\'s ransomware blog</p>\n</div>\n<p>"Sometime over the course of the last month, someone on the Lorenz team misconfigured their Apache2 web server, causing their login form to leak backend PHP code.</p>\n<p>"It was probably one of the easiest leaks I\'ve discovered so far. During my daily sweep of all the ransomware shame sites, I came across Lorenz\'s broken contact form. It was really as simple as viewing the source on the page and copy-pasting the leaked file path. It was pretty much placed in my lap, I didn\'t even need to do a vulnerability scan."</p>\n<p>According to htmalgae, Lorenz closed access to its online contact form, preventing contact attempts using it, but the root issue "has not been addressed."</p>\n\n        \n\n<p>At the time of writing, Lorenz\'s website and online contact form are still accessible, and users can submit requests, but they are not actually being sent to the group at this time.</p>\n<div><a href="https://regmedia.co.uk/2023/10/04/lorenz_leak_contact_form_screenshot.jpg" target="_blank"><img src="https://regmedia.co.uk/2023/10/04/lorenz_leak_contact_form_screenshot.jpg?x=648&amp;y=324&amp;infer_y=1" alt="Screenshot of the Lorenz ransomware groups\' online contact portal" title="Screenshot of the Lorenz ransomware groups\' online contact portal"></a>\n<p>Screenshot of the Lorenz ransomware groups\' online contact portal</p>\n</div>\n<p>The Lorenz discovery marks a rare occurrence of a ransomware group leaking data against their schedule.</p>\n<p>Publishing data belonging to victims they have failed to extort is a common practice of ransomware criminals, but many of those involved in the latest leak weren\'t victims of ransomware encryption.</p>\n<p>Most had their identities masked behind fake names and obscure Proton Mail email addresses &#8211; a platform favored by many dark web users &#8211; but some included details that identified them personally. These included reporters, those working in financial services, and security researchers, among others.</p>\n\n<h3>What is the Lorenz ransomware group?</h3>\n<p>First observed in early 2021, the Lorenz ransomware is believed by experts to be a rebrand of the .sZ40 strain discovered in October 2020, which in turn is linked with the ThunderCrypt strain of 2017. The group\'s victim blog also shows \'.sZ40\' written across its homepage banner.</p>\n<p>Like many leading ransomware operations, Lorenz is known for using a double-extortion model in attacks whereby they steal data before encrypting victims\' devices, holding both their data and systems to ransom.</p>\n<p>This approach is designed to mitigate the possibility of victims simply restoring from backups and not having to pay the ransom demands for unlocking access to devices.</p>\n\n        \n\n<p>One of its most notorious attacks took place last year when it was observed <a href="https://www.theregister.com/2022/09/13/lorenz_ransomware_mitel_voip/">exploiting a vulnerability in Mitel\'s VoIP systems</a>, tracked as <a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-29499" rel="nofollow">CVE-2022-29499</a>, to break into organizations and encrypt their data using Microsoft\'s BitLocker Drive Encryption.</p>\n<p>Cybereason categorizes the group\'s threat level as "high" due to the destructive nature of their attacks. Lorenz is also thought to be a sophisticated operation, with the individuals involved typically investing "a lot of effort into their attacks," including custom binaries for nearly every attack.</p>\n<p>"They study their target\'s employees, suppliers, and partners. This way, the Lorenz group can even go from one, already compromised victim to another. The knowledge they have collected is used to customize the attack specifically for the target," Cybereason said.</p>\n<p>In addition to double-extortion activities, Lorenz is also known for acting as an initial access broker (IABs), selling the access it secures to corporate networks to other cybercriminals who can then launch additional attacks.</p>\n<p>SentinelOne <a href="https://www.sentinelone.com/anthology/lorenz/" rel="nofollow">said</a> Lorenz relied on IABs in the past to launch its own attacks, as well as acting as one itself.</p>\n<p>Lorenz isn\'t among the most prolific ransomware groups in operation, failing to appear in any of the top rankings for 2023.</p>\n<p>It only posted 16 victims to its leak site in 2023, including those whose identities were kept anonymous due to the ransom being paid. By contrast, AlphV/BlackCat posted 13 victims in just the past seven days. &#174;</p>                                \n<p>&#160;</p>\n\n                    </div>\n\n\n\n                            </div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/1396",
        score: 0.934,
        label: "Malware",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/2440",
        score: 1.0,
        label: "Vulnerabilities",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        causes: [
          {
            id: "nlp/f/topic/2440",
            label: "Vulnerabilities",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "contentType",
        id: "nlp/f/topic/7020",
        score: 0.957,
        label: "Summaries of Threat Intelligence Reports",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3040",
        score: 62.002383452556174,
        label: "Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/603",
        score: 0.962,
        label: "Cyber Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1025",
        score: 0.992,
        label: "Hacking",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/7002",
        score: 1.0,
        label: "Proof of Exploit",
        mentions: [
          {
            text: "One of its most notorious attacks took place last year when it was observed exploiting a vulnerability in Mitel's VoIP systems, tracked as CVE-2022-29499, to break into organizations and encrypt their data using Microsoft's BitLocker Drive Encryption.",
          },
        ],
        salienceLevel: "mention",
      },
    ],
    entities: [
      {
        vulnerabilityInfo: {
          description:
            "The Service Appliance component in Mitel MiVoice Connect through 19.2 SP3 allows remote code execution because of incorrect data validation. The Service Appliances are SA 100, SA 400, and Virtual SA.",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 9.8,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2022-29499",
        label: "CVE-2022-29499",
        mentions: [
          {
            text: "CVE-2022-29499",
          },
        ],
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:3ec79052-d8c0-49b2-9204-42f9d8f035f8",
        label: "Lorenz",
        mentions: [
          {
            text: "Lorenz",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:cybereason",
        label: "Cybereason",
        mentions: [
          {
            text: "Cybereason",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "consumerGood",
        id: "nlp/f/entity/wd:59",
        label: "PHP",
        mentions: [
          {
            text: "php",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-b80d107d-fa0d-4b60-9684-b0433e8bdba0",
        label: "Data Encrypted for Impact (Enterprise T1486)",
        mentions: [
          {
            text: "ransomware encryption",
          },
          {
            text: "encrypting victims' devices, holding both their data and systems to ransom",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        mentions: [
          {
            text: "BlackCat",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        mentions: [
          {
            text: "BlackCat",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:1363733",
        label: "The Register",
        mentions: [
          {
            text: "the register",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:3917258",
        label: "The Des Moines Register",
        mentions: [
          {
            text: "the register",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-d108ce10-2419-4cf9-a774-46161d6c6cfe",
        label: "Collection (Enterprise TA0009)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
            label: "Data from Local System (Enterprise T1005)",
          },
        ],
        mentions: [
          {
            text: "steal data",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
        label: "Data from Local System (Enterprise T1005)",
        mentions: [
          {
            text: "steal data before encrypting victims' devices",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:mitel",
        label: "Mitel",
        mentions: [
          {
            text: "Mitel",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:github-inc",
        label: "GitHub Inc.",
        mentions: [
          {
            text: "GitHub",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:protonmail",
        label: "ProtonMail",
        mentions: [
          {
            text: "Proton Mail",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:microsoft",
        label: "Microsoft",
        mentions: [
          {
            text: "Microsoft",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:sentinelone",
        label: "SentinelOne",
        mentions: [
          {
            text: "SentinelOne",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:2b7127b9-ba6e-450b-b5a3-3aaf9a0a1a41",
        label: "ThunderCrypt",
        mentions: [
          {
            text: "ThunderCrypt",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-5569339b-94c2-49ee-afb3-2222936582c8",
        label: "Impact (Enterprise TA0040)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-b80d107d-fa0d-4b60-9684-b0433e8bdba0",
            label: "Data Encrypted for Impact (Enterprise T1486)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi-any",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-b80d107d-fa0d-4b60-9684-b0433e8bdba0",
            label: "Data Encrypted for Impact (Enterprise T1486)",
          },
          {
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-d108ce10-2419-4cf9-a774-46161d6c6cfe",
            label: "Collection (Enterprise TA0009)",
          },
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
            label: "Data from Local System (Enterprise T1005)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:telecom-industry-companies",
        label: "Telecom Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:mitel",
            label: "Mitel",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:ransomware",
        label: "Ransomware",
        causes: [
          {
            id: "nlp/f/entity/gz:mal:3ec79052-d8c0-49b2-9204-42f9d8f035f8",
            label: "Lorenz",
          },
          {
            id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
            label: "BlackCat",
          },
          {
            id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
            label: "BlackCat",
          },
        ],
        mentions: [],
        salienceLevel: "about",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "The data includes names, email addresses, and the subject line entered into the ransomware group's limited online form to request information from Lorenz.",
        },
        {
          text: "A security researcher noticed Lorenz's dark web victim blog was leaking backend code, pulled the data from the site, and uploaded to it a public GitHub repository.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/9185ce16405201eb344ef96a3ab971e2/stix2.1-20231005.030914.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/9185ce16405201eb344ef96a3ab971e2/misp-20231005.030914.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 2,
      url: "https://exports.feedly.com/attacks/462fc881e14495e6afcdb363084c1360/feedly-ai-lorenz-ransomware-crew-bungles-blackmail-blueprint.json",
    },
    engagement: 18,
    engagementRate: 1.13,
  },
  {
    language: "en",
    fingerprint: "d5a33508",
    id: "8HRqF+HLSOwmc5TejVtQFNgJV+IjW20gTvr8o8MF+ts=_18afe99b365:12c360:e11a9d8",
    keywords: [
      "Breaking News",
      "Cyber Crime",
      "Data Breach",
      "Hacking",
      "clop ransomware",
      "Cybercrime",
      "data breach",
      "hacking news",
      "information security news",
      "IT Information Security",
      "MOVEit Transfer",
      "Pierluigi Paganini",
      "Security Affairs",
      "Security News",
      "Sony",
    ],
    originId: "https://securityaffairs.com/?p=151982",
    origin: {
      streamId: "feed/http://securityaffairs.co/wordpress/feed",
      title: "Security Affairs ",
      htmlUrl: "https://securityaffairs.com/",
    },
    title:
      "Sony sent data breach notifications to about&nbsp;6,800 individuals",
    content: {
      content:
        '<div></div> <h2 class="wp-block-heading">Sony Interactive Entertainment has notified current and former employees and their family members about a data breach.</h2> <p>Sony Interactive Entertainment (SIE) has notified current and former employees and their family members about a data breach that exposed their personal information. Sony notified about 6,800 individuals, it confirmed that the security breach was the result of the exploitation of the zero-day vulnerability <a href="https://securityaffairs.com/146998/security/cisa-moveit-transfer-0day-catalog.html">CVE-2023-34362</a> in the <a href="https://securityaffairs.com/147093/hacking/clop-ransomware-moveit-transfer.html">MOVEit Transfer platform</a>.</p> <p>The <a href="https://securityaffairs.com/142130/cyber-crime/clop-ransomware-goanywhere-mft.html">Clop ransomware</a> gang (aka <a href="https://securityaffairs.com/145952/apt/iranian-apt-papercut-exploitation.html">Lace Tempest</a>) is <a href="https://securityaffairs.com/147093/hacking/clop-ransomware-moveit-transfer.html"><strong>credited</strong></a> by Microsoft for the recent campaign that exploits a zero-day vulnerability, tracked as <a href="https://securityaffairs.com/146998/security/cisa-moveit-transfer-0day-catalog.html">CVE-2023-34362</a>, in the <a href="https://securityaffairs.com/146963/hacking/moveit-transfer-zero-day.html">MOVEit Transfer</a> platform.</p> <p>MOVEit Transfer is a managed file transfer that is used by enterprises to securely transfer files using SFTP, SCP, and HTTP-based uploads.</p> <p>The vulnerability is a SQL injection vulnerability, it an be exploited by an unauthenticated attacker to gain unauthorized access to MOVEit Transfer’s database.</p> <p><em>“a SQL injection vulnerability has been found in the MOVEit Transfer web application that could allow an un-authenticated attacker to gain unauthorized access to MOVEit Transfer’s database.” reads the <a href="https://community.progress.com/s/article/MOVEit-Transfer-Critical-Vulnerability-31May2023"><strong>advisory</strong></a> published by the company. “Depending on the database engine being used (MySQL, Microsoft SQL Server, or Azure SQL), an attacker may be able to infer information about the structure and contents of the database in addition to executing SQL statements that alter or delete database elements.”</em></p> <p>The vulnerability affects all MOVEit Transfer versions, it doesn’t affect the cloud version of the product. The company also shared Indicators of Compromise (IoCs) for this attack and urges customers who notice any of the indicators to immediately <a href="https://community.progress.com/s/supportlink-landing">contact</a> its security and IT teams.</p> <p>In late June, the <a href="https://securityaffairs.com/147195/cyber-crime/clop-ransomware-moveit-transfer-attacks.html">Clop ransomware</a> gang added Sony to its list of victims on its leak site. </p> <p>“We are writing to you as we believe you are a former employee of Sony Interactive Entertainment (“SIE”) or are a family member of a current or former employee of SIE.” reads the <a href="https://apps.web.maine.gov/online/aeviewer/ME/40/8b595be6-d1d7-47df-84d5-05738edd84f9.shtml">data breach notification</a> sent to the impacted individuals.</p> <p>“On May 31, 2023, Progress Software announced a newly discovered vulnerability in its MOVEit file transfer platform, which is used by SIE and thousands of other enterprises around the world. On May 28, 2023, before Progress Software announced the vulnerability and we became aware of it, an unauthorized actor used the vulnerability to download some SIE files stored on our MOVEit platform. On June 2, 2023, SIE discovered the unauthorized downloads, immediately took the platform offline and remediated the vulnerability. An investigation was then launched with assistance from external cybersecurity experts.” </p> <p>Once it had discovered the unauthorized downloads, SIE launched an investigation into the security breach and notified law enforcement. </p> <p>In response to the incident, SIE has increased the monitoring of its systems. The company pointed out that they are not aware of the publication or misuse of the stolen personal information. The company is also offering complimentary Equifax Complete Premier credit monitoring and identity restoration services to the impacted individuals. </p> <p>In September, Sony <a href="https://securityaffairs.com/151518/data-breach/threat-actors-claim-sony-hack.html">announced</a> it was investigating allegations of a data breach after the RansomedVC extortion group claimed to have hacked the company and added the company to its Tor leak site.</p> <p><em>“We are currently investigating the situation, and we have no further comment at this time.” Sony said.</em></p> <p>The ransomware group published some files as proof of the hack, but it is unclear if the threat actors were able to compromise all the company’s systems.</p> <p>RansomedVC <a href="https://www.bleepingcomputer.com/news/security/sony-investigates-cyberattack-as-hackers-fight-over-whos-responsible/"><strong>told</strong></a> BleepingComputer that it has stolen 260 GB of data from Sony’s networks and they are attempting to sell stolen data for $2.5 million.</p> <p>While RansomedVC claims the hack, another threat actor that goes online with the moniker ‘MajorNelson’ also claims responsibility for the attack and says RansomVC is lying.</p> <p>MajorNelson leaked a compressed archive of 2.4 GB in size which contains “A lot of credentials for internal systems,” and data related to</p> <ul> <li>SonarQube</li> <li>Creators Cloud</li> <li>Sony’s certificates</li> <li>A device emulator for generating licenses</li> <li>qasop security</li> <li>Incident response policies</li> <li>and more.</li> </ul> <p>At the time of this writing we cannot exclude that Sony has suffered more than a data breach since June.</p> <p>Follow me on Twitter: <a href="https://twitter.com/securityaffairs"><strong>@securityaffairs</strong></a> and <a href="https://www.facebook.com/sec.affairs"><strong>Facebook</strong></a> and <a href="https://infosec.exchange/@securityaffairs"><strong>Mastodon</strong></a></p> <p><a href="http://www.linkedin.com/pub/pierluigi-paganini/b/742/559"><strong>Pierluigi Paganini</strong></a></p> <p><strong>(</strong><a href="http://securityaffairs.co/wordpress/"><strong>SecurityAffairs</strong></a><strong> –</strong> <strong>hacking, Clop ransomware)</strong></p> <p>The post <a rel="nofollow" href="https://securityaffairs.com/151982/data-breach/sony-sent-data-breach-notifications-to-about-6800-individuals.html">Sony sent data breach notifications to about 6,800 individuals</a> appeared first on <a rel="nofollow" href="https://securityaffairs.com">Security Affairs</a>.</p>',
      direction: "ltr",
    },
    author: "Pierluigi Paganini",
    crawled: 1696488600421,
    published: 1696487091000,
    alternate: [
      {
        href: "https://securityaffairs.com/151982/data-breach/sony-sent-data-breach-notifications-to-about-6800-individuals.html",
        type: "text/html",
      },
    ],
    summary: {
      content:
        '<p>Sony Interactive Entertainment has notified current and former employees and their family members about a data breach. Sony Interactive Entertainment (SIE) has notified current and former employees and their family members about a data breach that exposed their personal information. Sony notified about 6,800 individuals, it confirmed that the security breach was the result of the […]</p> <p>The post <a rel="nofollow" href="https://securityaffairs.com/151982/data-breach/sony-sent-data-breach-notifications-to-about-6800-individuals.html">Sony sent data breach notifications to about 6,800 individuals</a> appeared first on <a rel="nofollow" href="https://securityaffairs.com">Security Affairs</a>.</p>',
      direction: "ltr",
    },
    visual: {
      contentType: "image/png",
      processor: "feedly-nikon-v3.1",
      url: "https://i0.wp.com/securityaffairs.com/wp-content/uploads/2023/10/logo-sony-1957.png?fit=800%2C450&ssl=1",
      expirationDate: 1699080615306,
      width: 800,
      height: 450,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/fGfBRddvMWf81aKfRzUMAFln7-zLtPnM_5FBXIIDngg1kDaG4_FHALOoKQEjxjBhGBwFmmpzUp-6X0FvcoUsBeyDMzV8A_lW4OOnvOCS",
    },
    canonicalUrl:
      "https://securityaffairs.com/151982/data-breach/sony-sent-data-breach-notifications-to-about-6800-individuals.html",
    ampUrl:
      "https://securityaffairs.com/151982/data-breach/sony-sent-data-breach-notifications-to-about-6800-individuals.html?amp=1",
    cdnAmpUrl:
      "https://securityaffairs-com.cdn.ampproject.org/c/s/securityaffairs.com/151982/data-breach/sony-sent-data-breach-notifications-to-about-6800-individuals.html?amp=1",
    expansionFailureStatus: 4,
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidence: 0.489,
      confidenceLevel: "confirm",
      topic: {
        id: "nlp/f/topic/4004",
        label: "Data Breach",
      },
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/2440",
        score: 1.0,
        label: "Vulnerabilities",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        causes: [
          {
            id: "nlp/f/topic/2440",
            label: "Vulnerabilities",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/4004",
        score: 0.489,
        label: "Data Breach",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/603",
        score: 0.924,
        label: "Cyber Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1025",
        score: 0.997,
        label: "Hacking",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/7002",
        score: 1.0,
        label: "Proof of Exploit",
        mentions: [
          {
            text: "The Clop ransomware gang (aka Lace Tempest ) is credited by Microsoft for the recent campaign that exploits a zero-day vulnerability, tracked as CVE-2023-34362, in the MOVEit Transfer platform.",
          },
        ],
        salienceLevel: "mention",
      },
    ],
    entities: [
      {
        vulnerabilityInfo: {
          description:
            "In Progress MOVEit Transfer before 2021.0.6 (13.0.6), 2021.1.4 (13.1.4), 2022.0.4 (14.0.4), 2022.1.5 (14.1.5), and 2023.0.1 (15.0.1), a SQL injection vulnerability has been found in the MOVEit Transfer web application that could allow an unauthenticated attacker to gain access to MOVEit Transfer's database. Depending on the database engine being used (MySQL, Microsoft SQL Server, or Azure SQL), an attacker may be able to infer information about the structure and contents of the database, and execute SQL statements that alter or delete database elements. NOTE: this is exploited in the wild in May and June 2023; exploitation of unpatched systems can occur via HTTP or HTTPS. All versions (e.g., 2020.0 and 2019x) before the five explicitly mentioned versions are affected, including older unsupported versions.",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 9.8,
          hasExploit: true,
          hasPatch: true,
          trending: true,
        },
        id: "vulnerability/m/entity/CVE-2023-34362",
        label: "CVE-2023-34362",
        mentions: [
          {
            text: "CVE-2023-34362",
          },
        ],
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:sony-interactive-entertainment",
        label: "Sony Interactive Entertainment",
        mentions: [
          {
            text: "Sony Interactive Entertainment",
          },
          {
            text: "SIE",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:3d11ec52-9ca8-4d83-99d4-6658f306e8e4",
        label: "Clop (Linux)",
        mentions: [
          {
            text: "Clop",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:8071f2d8-cc44-4682-845b-6f39a9f8b587",
        label: "Clop (Windows)",
        mentions: [
          {
            text: "Clop",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:microsoft",
        label: "Microsoft",
        mentions: [
          {
            text: "Microsoft",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-d45a3d09-b3cf-48f4-9f0f-f521ee5cb05c",
        label: "Data Destruction (Enterprise T1485)",
        mentions: [
          {
            text: "delete database",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:facebook-incorporated",
        label: "Meta Platforms",
        mentions: [
          {
            text: "Facebook",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-5569339b-94c2-49ee-afb3-2222936582c8",
        label: "Impact (Enterprise TA0040)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-d45a3d09-b3cf-48f4-9f0f-f521ee5cb05c",
            label: "Data Destruction (Enterprise T1485)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi-any",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-d45a3d09-b3cf-48f4-9f0f-f521ee5cb05c",
            label: "Data Destruction (Enterprise T1485)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
          {
            id: "nlp/f/entity/gz:org:facebook-incorporated",
            label: "Meta Platforms",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
          {
            id: "nlp/f/entity/gz:org:facebook-incorporated",
            label: "Meta Platforms",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:gaming-industry-companies",
        label: "Gaming Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:sony-interactive-entertainment",
            label: "Sony Interactive Entertainment",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:malta:03c80674-35f8-4fe0-be2b-226ed0fcd69f",
        label: "Malware Families Associated with TA505",
        causes: [
          {
            id: "nlp/f/entity/gz:mal:8071f2d8-cc44-4682-845b-6f39a9f8b587",
            label: "Clop",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:ransomware",
        label: "Ransomware",
        causes: [
          {
            id: "nlp/f/entity/gz:mal:8071f2d8-cc44-4682-845b-6f39a9f8b587",
            label: "Clop",
          },
          {
            id: "nlp/f/entity/gz:mal:3d11ec52-9ca8-4d83-99d4-6658f306e8e4",
            label: "Clop",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "Sony notified about 6,800 individuals, it confirmed that the security breach was the result of the exploitation of the zero-day vulnerability CVE-2023-34362 in the MOVEit Transfer platform .",
        },
        {
          text: "Sony Interactive Entertainment (SIE) has notified current and former employees and their family members about a data breach that exposed their personal information.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/998407499cb3c35b85fe577b33889687/stix2.1-20231004.235000.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/998407499cb3c35b85fe577b33889687/misp-20231004.235000.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 1,
      url: "https://exports.feedly.com/attacks/b5f7bf7b2098112f03fdd8542164da69/feedly-ai-sony-sent-data-breach-notifications-to-about.json",
    },
    engagement: 21,
    engagementRate: 1.75,
    webfeeds: {
      icon: "https://storage.googleapis.com/test-site-assets/8HRqF-HLSOwmc5TejVtQFNgJV-IjW20gTvr8o8MF-ts_oicon-1658bb14e8b",
      partial: true,
    },
  },
  {
    language: "en",
    fingerprint: "6700b603",
    id: "GMj7uLpm4IPOOx5kU64zxGBMiBD17Xf8SvoEADZo/gQ=_18b01675c10:2417d6:e11a9d8",
    originId:
      "https://www.darkreading.com/threat-intelligence/hundreds-of-data--crypto-stealing-python-packages-slither-onto-windows-systems",
    origin: {
      streamId: "feed/http://www.darkreading.com/rss/all.xml",
      title: "Dark Reading",
      htmlUrl: "https://www.darkreading.com",
    },
    title: "Stealthy, Thieving Python Packages Slither Onto Windows Systems",
    author: "Elizabeth Montalbano, Contributor, Dark Reading",
    crawled: 1696535632912,
    published: 1696535100000,
    alternate: [
      {
        href: "https://www.darkreading.com/threat-intelligence/hundreds-of-data--crypto-stealing-python-packages-slither-onto-windows-systems",
        type: "text/html",
      },
    ],
    summary: {
      content:
        "A campaign that's been active since April has already racked up nearly 75,000 downloads, stealing data and cryptocurrency in the process.",
      direction: "ltr",
    },
    enclosure: [
      {
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltf34e8fb49828a01d/647a4b3565658f7bbb22a892/python-Ernie_Janes-Alamy.jpg",
        type: "image/*",
      },
      {
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltbfd004d139d42d70/6303bca6236c2476a257760e/ElizabethMontalbano.jpg",
        type: "image/*",
        length: 0,
      },
    ],
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltf34e8fb49828a01d/647a4b3565658f7bbb22a892/python-Ernie_Janes-Alamy.jpg",
      contentType: "image/jpeg",
      width: 5616,
      height: 3744,
      expirationDate: 1699127646036,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/Btw_hrwZv8AwMBMOIWfHbclKj2xWBSPEeZ7jzTZq2n5-mQIkuDbh2dIgqxOnpkND_rr5UI4POpICH7krmVIBxacfSJBkqMWSOsXYYLk",
    },
    canonicalUrl:
      "https://www.darkreading.com/threat-intelligence/hundreds-of-data--crypto-stealing-python-packages-slither-onto-windows-systems",
    fullContent:
      '<div><body><img src="https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltf34e8fb49828a01d/647a4b3565658f7bbb22a892/python-Ernie_Janes-Alamy.jpg"> <br>A threat actor has been delivering a "relentless campaign" since early April to seed the software supply chain with hundreds of malicious Python packages aimed at stealing sensitive data and cryptocurrency from Windows systems.The packages, delivered via various usernames on GitHub, have been downloaded nearly 75,000 times already, researchers from Checkmarx revealed in a blog post this week. They also cast a wide net in terms of the info they collect, with the capability to steal data from the target system, various applications and browsers, and even the users themselves.Further, the campaign has what appears to be a lucrative monetization aspect: It targets cryptocurrency users by modifying crypto addresses to redirect transactions to the attacker, according to Checkmarx. In fact, one of the crypto wallet addresses accepting these transactions showed a six-figure amount during the time period that the malicious packages were active."The sheer volume and persistence of these deployments hinted at an attacker with a well-crafted agenda," Checkmarx security researcher Yehuda Gelb wrote in the post.Moreover, the attacker has shown a steady evolution in the sophistication of the packages, transitioning from plaintext to encryption to multilayered obfuscation — even secondary disassembly payloads."The threat actors\' most recent packages adeptly dismantle system defenses, leaving it exposed and vulnerable," Gelb wrote.Multiphase EvolutionThe attacker employed a multiphase attack sequence, reflected in the activity of the malicious packages as they evolved since they initially appeared in early April.In the beginning, the packages, written in plaintext, "were deceptively transparent," according to Gelb. They "would subtly integrate themselves into unsuspecting systems, all the while laying the groundwork for their malicious endeavors," he wrote.Those activities began with a stealthy installation of dependencies and a subprocess that prevented any console window from surfacing to alert users, followed by an ability to sense the environment to cease activity at signs of detection.Once this initial activity ended, the packages would set about their real task of collecting data from an infected system, extracting sensitive data including usernames, passwords, history, cookies, and payment information from Opera, Chrome, Microsoft Edge, Brave, and Yandex browsers. They also mined data from various apps, including Atomic, Exodus, Steam, and NationsGlory, packaging the data into ZIP files before extracting them.Other capabilities of the packages during this initial phase included a search of the user\'s directories for potentially valuable files and subsequent upload of finds to hxxps[:]//transfer[.]sh; theft of badges, phone numbers, email addresses, and more from Discord as well as from popular gaming platforms such as Minecraft and Roblox; and screenshot-capture to track real-time user activity.Crypto Heist and Evasive TacticsThe cryptocurrency element was also a hallmark of the first phase of the attacks. Malware spread through the packages would track the user\'s clipboard, scanning for cryptocurrency addresses so they could be replaced with the attacker\'s own."Similar crypto addresses were found across the myriad of malicious packages hinting at a centralized strategy, channeling the redirected funds into a few primary collection points," Gelb noted.The packages didn\'t stop there, but also would tamper with applications such as Exodus — a crypto wallet management app — to alter its core files to enable "unrestricted data exfiltration," he wrote.After the first wave of packages, the attacker added encryption to the plaintext of the malware released in the summer months, making its malicious functionality harder to detect, though at its core the behavior stayed the same.The most recent packages took these deceptive practices even further, including dozens of layers of obfuscation that would hide secondary payloads fetched from an external source in the code.Further, additional payloads included in the latest packages significantly extended the data collection and exfiltration capabilities of earlier packages, as well as included further evasion tactics that could prevent users from downloading antivirus software or checking files for viruses.Attackers also added the ability to steal data from Telegram and pilfer data such as cryptocurrency wallets, system information, antivirus info, task list, Wi-Fi passwords, clipboard data, and specific files from directories like Desktop, Pictures, Documents, Music, Videos, and Downloads directly from the targeted machine, according to the researchers.Beware Suspicious PackagesThreat actors increasingly are recognizing the value of weaponizing open source packages as a way to target the software supply chain and thus reach an enormous target base with significantly less effort than other types of attacks can require.Python, given its widespread use in software development, is an especially popular target for attackers, who have even gone so far as to poison entire projects based in the programming language.Indeed, malware distribution through open source packages is an ongoing threat, one that requires organizations to maintain "constant vigilance and adaptability to effectively protect against it," Gelb wrote.The discovery of the recent Python campaign, in which the attacker constantly evolved to evade detection, highlights how important it is both for security professionals to share open source threat intelligence, and for developers to carefully vet any packages they download, particularly when they come from untrusted sources.</body></div>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 0.991,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        id: "nlp/f/topic/7020",
        score: 0.944,
        label: "Summaries of Threat Intelligence Reports",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/3047",
        score: 22.22706872097599,
        label: "Crypto",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1025",
        score: 0.962,
        label: "Hacking",
        salienceLevel: "about",
      },
      {
        type: "indicatorOfCompromise",
        id: "nlp/f/topic/7003",
        score: 1.0,
        label: "URLs Indicators of Compromise",
        salienceLevel: "about",
      },
      {
        type: "indicatorOfCompromise",
        id: "nlp/f/topic/1832",
        score: 1.0,
        label: "Indicators of Compromise",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        type: "consumerGood",
        disambiguated: true,
        id: "nlp/f/entity/wd:1406",
        label: "Microsoft Windows",
        mentions: [
          {
            text: "windows",
          },
          {
            text: "windows systems",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-d108ce10-2419-4cf9-a774-46161d6c6cfe",
        label: "Collection (Enterprise TA0009)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
            label: "Data from Local System (Enterprise T1005)",
          },
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-0259baeb-9f63-4c69-bf10-eb038c390688",
            label: "Screen Capture (Enterprise T1113)",
          },
        ],
        mentions: [
          {
            text: "stealing sensitive data",
          },
          {
            text: "steal data",
          },
          {
            text: "collecting data",
          },
          {
            text: "collection",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-9a4e74ab-5008-408c-84bf-a10dfbc53462",
        label: "Exfiltration (Enterprise TA0010)",
        mentions: [
          {
            text: "data exfiltration",
          },
          {
            text: "exfiltration",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
        label: "Data from Local System (Enterprise T1005)",
        mentions: [
          {
            text: "stealing sensitive data",
          },
          {
            text: "collecting data from an infected",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:attack-pattern-0259baeb-9f63-4c69-bf10-eb038c390688",
        label: "Screen Capture (Enterprise T1113)",
        mentions: [
          {
            text: "screenshot-capture",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:hammer-and-chisel-incorporated",
        label: "Discord Inc.",
        mentions: [
          {
            text: "Discord",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:microsoft",
        label: "Microsoft",
        mentions: [
          {
            text: "Microsoft",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:attack-pattern-b3d682b6-98f2-4fb0-aa3b-b4df007ca70a",
        label: "Obfuscated Files or Information (Enterprise T1027)",
        mentions: [
          {
            text: "obfuscation that would hide secondary payloads",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-78b23412-0651-46d7-a540-170a1ce8bd5a",
        label: "Defense Evasion (Enterprise TA0005)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-b3d682b6-98f2-4fb0-aa3b-b4df007ca70a",
            label: "Obfuscated Files or Information (Enterprise T1027)",
          },
        ],
        mentions: [
          {
            text: "evade detection",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:creator-economy-companies",
        label: "Creator Economy Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:hammer-and-chisel-incorporated",
            label: "Discord Inc.",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi-any",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-d108ce10-2419-4cf9-a774-46161d6c6cfe",
            label: "Collection (Enterprise TA0009)",
          },
          {
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-9a4e74ab-5008-408c-84bf-a10dfbc53462",
            label: "Exfiltration (Enterprise TA0010)",
          },
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
            label: "Data from Local System (Enterprise T1005)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/ed68646c-6303-11ee-9aa8-baa6772378dd",
      score: 1.0,
      label: "Malicious Python packages steal data",
      featured: true,
    },
    clusters: [
      {
        id: "topic/f/meme/ed68646c-6303-11ee-9aa8-baa6772378dd",
      },
    ],
    leoSummary: {
      sentences: [],
    },
    indicatorsOfCompromise: {
      mentions: [
        {
          type: "url",
          text: "hxxps[:]//transfer[.]sh",
          canonical: "hxxps://transfer[.]sh",
        },
      ],
      exports: [
        {
          type: "markdown",
          url: "https://exports.feedly.com/ioc/db99768f5f495f0cee80ab1e68c6d3f9/markdown-20231005.125352.all-ioc.md",
        },
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/db99768f5f495f0cee80ab1e68c6d3f9/stix2.1-20231005.125352.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/db99768f5f495f0cee80ab1e68c6d3f9/misp-20231005.125352.all-ioc.json",
        },
        {
          type: "csv",
          url: "https://exports.feedly.com/ioc/db99768f5f495f0cee80ab1e68c6d3f9/csv-20231005.125352.all-ioc.csv",
        },
      ],
    },
    attackNavigator: {
      url: "https://exports.feedly.com/attacks/0614e1c8ffca894453f18cae4651ff6d/feedly-ai-stealthy-thieving-python-packages-slither-onto-wi.json",
      ttpCount: 3,
    },
    engagement: 22,
    engagementRate: 0.76,
  },
  {
    language: "en",
    fingerprint: "c944dcc7",
    id: "GMj7uLpm4IPOOx5kU64zxGBMiBD17Xf8SvoEADZo/gQ=_18b015a3b06:22c9cf:e11a9d8",
    originId:
      "https://www.darkreading.com/application-security/critical-shelltorch-flaws-open-source-ai-google",
    origin: {
      streamId: "feed/http://www.darkreading.com/rss/all.xml",
      title: "Dark Reading",
      htmlUrl: "https://www.darkreading.com",
    },
    title:
      "Critical 'ShellTorch' Flaws Light Up Open Source AI Users, Like Google",
    author: "Jai Vijayan, Contributing Writer, Dark Reading",
    crawled: 1696534772486,
    published: 1696533900000,
    alternate: [
      {
        href: "https://www.darkreading.com/application-security/critical-shelltorch-flaws-open-source-ai-google",
        type: "text/html",
      },
    ],
    summary: {
      content:
        "The vulnerabilities exist in the widely used TorchServe framework, used by Amazon, Google, Walmart, and many other heavy hitters.",
      direction: "ltr",
    },
    enclosure: [
      {
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltac9f0ad9f6b37309/651f059661f7edbadb5e9e4b/torch-_jokerpro-Alamy.jpg",
        type: "image/*",
      },
      {
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt02d79fb9a44a4258/60b1e9dd2a25046b35110696/Jai-Vijayan.jpeg",
        type: "image/*",
        length: 0,
      },
    ],
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltac9f0ad9f6b37309/651f059661f7edbadb5e9e4b/torch-_jokerpro-Alamy.jpg",
      contentType: "image/jpeg",
      width: 4252,
      height: 2835,
      expirationDate: 1699126782939,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/s76xFAMcDe-uPUoxy7PmuZCaTCOlsbSIWJRpOVcmOC06hZ0CILVexM0m611mHYW2Fn7kUdgcaBuXiCfQWR15LL-LfEjh5ojRHwrUJHM",
    },
    canonicalUrl:
      "https://www.darkreading.com/application-security/critical-shelltorch-flaws-open-source-ai-google",
    fullContent:
      '<div><body><img src="https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltac9f0ad9f6b37309/651f059661f7edbadb5e9e4b/torch-_jokerpro-Alamy.jpg"> <br>A newly discovered set of critical vulnerabilities in a machine learning framework known as TorchServe could allow cyberattackers a way to completely subvert artificial intelligence (AI) models for a range of bad outcomes. The bugs show that AI applications are equally as susceptible to open source bugs as any other application, researchers noted. The bugs affect Amazon and Google\'s machine learning services, among many others.TorchServe is an open source framework maintained by Amazon and Meta, used for deploying deep-learning models based on the PyTorch open source machine learning library into production environments. It\'s used by many large companies; commercial users of TorchServe include Walmart, Amazon, Microsoft Azure, Google Cloud, and others.Successful exploitation of the vulnerabilities could let threat actors access proprietary data in AI models, to insert malicious models into production environments, alter a machine learning model\'s results, and take complete control over servers.Thousands of Targets: Bugs See Wide ExposureThousands of vulnerable instances of the software are publicly exposed on the Internet and open to unauthorized access and a range of other malicious actions, according to researchers at Oligo who discovered the vulnerabilities."TorchServe is among the most popular model-serving frameworks for PyTorch," Oligo researchers Idan Levcovich, Guy Kaplan, and Gal Elbaz wrote in a blog post this week. "Using a simple IP scanner, we were able to find tens of thousands of IP addresses that are currently completely exposed to the attack — including many belonging to Fortune 500 organizations."All versions of TorchServe from 0.8.1 and earlier are vulnerable. Oligo reported the vulnerabilities to PyTorch, which addressed the flaws in TorchServe version 0.8.2. "The update from Oct. 3 dramatically reduced the exposure, and therefore we recommend all users upgrade to the latest version," says Elbaz, co-founder and CTO at Oligo.The ShellTorch FlawsOligo has collectively dubbed the vulnerabilities as "ShellTorch." Two of them are rated as critical with a near-maximum severity rating on the CVSS scale: CVE-2023-43654, a server-side request forgery (SSRF) vulnerability that enables remote code execution (RCE); and CVE-2022-1471, a Java deserialization RCE.The third ShellTorch vulnerability stems from how TorchServe by default exposes a critical management API to the Internet. Though changing the configuration from default mitigates the issue, many organizations and projects based on TorchServe have used the default configuration."As a result, the vulnerability is also present in Amazon’s and Google’s proprietary Docker images by default, and are present in self-managed services of the largest providers of machine learning services," according to Oligo. "This includes self-managed Amazon AWS SageMaker, self-managed Google Vertex AT, and several other projects built on TorchServe. The misconfiguration is particularly problematic because accessing the management interface requires no authentication at all, so anyone can access it.""Correctly configuring the management interface does close the major attack vector, but ShellTorch can be exploited via additional vectors," Elbaz says.Server-Side Request Forgery FlawOne of these vectors has to do with CVE-2023-43564, the SSRF flaw that the company discovered. The flaw is tied to a TorchServe API for fetching a machine learning model\'s configuration files. Oligo found that while the API contained logic for fetching configuration files from only an allowed list of URLs, by default it accepted any and all domains as valid URLs. An attacker could use the flaw to upload a malicious model into a production environment resulting in arbitrary code execution. When combined with the default configuration error, CVE-2023-43564 allows an unauthenticated attacker to execute arbitrary code in PyTorch environments, Oligo found.CVE-2022-1471 is am RCE vulnerability in SnakeYaml, a widely used open source library that TorchServe implements. Oligo researchers found that by uploading an ML model with a malicious YAML file, they could trigger an attack that resulted in RCE on the underlying server.The vulnerabilities show that AI applications are exposed to the same risks that all applications are exposed to from open source code, Elbaz says. But with AI, the consequences are even greater given the myriad use cases for large language models and other AI technologies. Vulnerabilities such as ShellTorch give attackers a way to corrupt AI models in order to generate misleading answers and create other havoc. "AI is a giant step forward for technology, and with these benefits come new risks — huge potential with huge risks," Elbaz says. "There are new types of risks that we have never really seen before, so we need to be ready to evolve in order to protect AI infrastructure."</body></div>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      topic: {
        id: "nlp/f/topic/630",
        label: "Deep Learning",
      },
      confidence: 0.677,
      confidenceLevel: "unsure",
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/2440",
        score: 1.0,
        label: "Vulnerabilities",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        causes: [
          {
            id: "nlp/f/topic/2440",
            label: "Vulnerabilities",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "contentType",
        id: "nlp/f/topic/7020",
        score: 0.771,
        label: "Summaries of Threat Intelligence Reports",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/3000",
        score: 92.97029195405038,
        label: "Artificial Intelligence",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3002",
        score: 32.406375586195864,
        label: "Data Science",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/253",
        score: 0.803,
        label: "Big Data",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/487",
        score: 0.843,
        label: "Cloud Computing",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/630",
        score: 0.677,
        label: "Deep Learning",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/1381",
        score: 0.763,
        label: "Machine Learning",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/2256",
        score: 0.727,
        label: "Tech",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/6002",
        score: 1.0,
        label: "Executive Mentions",
        mentions: [
          {
            text: "Elbaz, co-founder and CTO at Oligo",
          },
        ],
        salienceLevel: "mention",
      },
    ],
    entities: [
      {
        vulnerabilityInfo: {
          description:
            "TorchServe is a tool for serving and scaling PyTorch models in production. TorchServe default configuration lacks proper input validation, enabling third parties to invoke remote HTTP download requests and write files to the disk. This issue could be taken advantage of to compromise the integrity of the system and sensitive data. This issue is present in versions 0.1.0 to 0.8.1. A user is able to load the model of their choice from any URL that they would like to use. The user of TorchServe is responsible for configuring both the allowed_urls and specifying the model URL to be used. A pull request to warn the user when the default value for allowed_urls is used has been merged in PR #2534. TorchServe release 0.8.2 includes this change. Users are advised to upgrade. There are no known workarounds for this issue.",
          cvssCategoryEstimate: "MEDIUM",
          cvssScore: 9.8,
          hasExploit: false,
          hasPatch: true,
          trending: true,
        },
        id: "vulnerability/m/entity/CVE-2023-43654",
        mentions: [
          {
            text: "CVE-2023-43654",
          },
        ],
        label: "CVE-2023-43654",
      },
      {
        vulnerabilityInfo: {
          description:
            "SnakeYaml's Constructor() class does not restrict types which can be instantiated during deserialization. Deserializing yaml content provided by an attacker can lead to remote code execution. We recommend using SnakeYaml's SafeConsturctor when parsing untrusted content to restrict deserialization. We recommend upgrading to version 2.0 and beyond.\n",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 9.8,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2022-1471",
        mentions: [
          {
            text: "CVE-2022-1471",
          },
        ],
        label: "CVE-2022-1471",
      },
      {
        vulnerabilityInfo: {
          description:
            "The CVE description is not yet available but Feedly AI found some discussions about it",
          hasExploit: false,
          hasPatch: false,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2023-43564",
        mentions: [
          {
            text: "CVE-2023-43564",
          },
        ],
        label: "CVE-2023-43564",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:google",
        label: "Google",
        mentions: [
          {
            text: "Google",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:amazon",
        label: "Amazon",
        mentions: [
          {
            text: "Amazon",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
        label: "Exploitation for Client Execution (Enterprise T1203)",
        mentions: [
          {
            text: "vulnerability that enables remote code execution (RCE",
          },
          {
            text: "CVE-2022-1471, a Java deserialization RCE",
          },
          {
            text: "CVE-2022-1471 is am RCE",
          },
          {
            text: "RCE on the underlying server.The vulnerabilities",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-4ca45d45-df4d-4613-8980-bac22d278fa5",
        label: "Execution (Enterprise TA0002)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
            label: "Exploitation for Client Execution (Enterprise T1203)",
          },
        ],
        mentions: [
          {
            text: "arbitrary code execution",
          },
          {
            text: "execute arbitrary code",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:facebook-incorporated",
        label: "Meta Platforms",
        mentions: [
          {
            text: "Meta",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:walmart",
        label: "Walmart",
        mentions: [
          {
            text: "Walmart",
          },
        ],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:retail-industry-companies",
        label: "Retail Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:walmart",
            label: "Walmart",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:grocery-retail-industry-companies",
        label: "Grocery Retail Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:walmart",
            label: "Walmart",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:amazon",
            label: "Amazon",
          },
          {
            id: "nlp/f/entity/gz:org:google",
            label: "Google",
          },
          {
            id: "nlp/f/entity/gz:org:walmart",
            label: "Walmart",
          },
        ],
        mentions: [],
        salienceLevel: "about",
      },
      {
        type: "org",
        disambiguated: true,
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:amazon",
            label: "Amazon",
          },
          {
            id: "nlp/f/entity/gz:org:google",
            label: "Google",
          },
          {
            id: "nlp/f/entity/gz:org:facebook-incorporated",
            label: "Meta Platforms",
          },
        ],
        mentions: [],
        salienceLevel: "about",
      },
      {
        type: "mitreAttack",
        disambiguated: true,
        id: "nlp/f/entity/gz:mi-any",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
            label: "Exploitation for Client Execution (Enterprise T1203)",
          },
          {
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-4ca45d45-df4d-4613-8980-bac22d278fa5",
            label: "Execution (Enterprise TA0002)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "Oligo found that while the API contained logic for fetching configuration files from only an allowed list of URLs, by default it accepted any and all domains as valid URLs. An attacker could use the flaw to upload a malicious model into a production environment resulting in arbitrary code execution.",
        },
        {
          text: "Oligo researchers found that by uploading an ML model with a malicious YAML file, they could trigger an attack that resulted in RCE on the underlying server.The vulnerabilities show that AI applications are exposed to the same risks that all applications are exposed to from open source code, Elbaz says.",
        },
      ],
    },
    indicatorsOfCompromise: {
      mentions: [],
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/2b02734f967784459ead0a65309c3b8d/stix2.1-20231005.123932.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/2b02734f967784459ead0a65309c3b8d/misp-20231005.123932.all-ioc.json",
        },
      ],
    },
    attackNavigator: {
      url: "https://exports.feedly.com/attacks/f00009fb3f6df1416f6daff27bb84e11/feedly-ai-critical-shelltorch-flaws-light-up-open-source-a.json",
      ttpCount: 1,
    },
    engagement: 18,
    engagementRate: 0.62,
  },
  {
    language: "en",
    fingerprint: "a766b0f2",
    id: "eF4IwaTfLbd1PEx3gNhE4ox3GV4XECRYM0cAeGRSTDA=_18b00a1dedc:126985:a4fdcf0e",
    keywords: [
      "Denial of Service",
      "Podcast",
      "Vulnerability",
      "car",
      "DDoS",
      "deepfake",
      "Instagram",
      "Royalty",
      "Smashing Security",
      "Tom Hanks",
      "vulnerability",
    ],
    originId: "https://grahamcluley.com/?p=13338302",
    origin: {
      htmlUrl: "https://grahamcluley.com",
      streamId: "feed/http://feeds.feedburner.com/GrahamCluleysBlog",
      title: "Graham Cluley",
    },
    title:
      "Smashing Security podcast #342: Royal family attacked, keyless car theft, and a deepfake Tom Hanks",
    author: "Graham Cluley",
    crawled: 1696522690268,
    published: 1696518958000,
    alternate: [
      {
        type: "text/html",
        href: "https://grahamcluley.com/smashing-security-podcast-342/",
      },
    ],
    summary: {
      content:
        "Is a deepfake Tom Hanks better than the real thing? Who has been attacking the British Royal Family’s website, and why? And how can you protect your vehicle from the spate of keyless car thefts? All this and much much more is discussed in the latest edition of the “Smashing Security” podcast by cybersecurity veterans Graham Cluley and Carole Theriault, joined this week by Maria Varmazis. Plus don’t miss our featured interview with Devo CISO Kayla Williams.",
      direction: "ltr",
    },
    visual: {
      url: "https://grahamcluley.com/wp-content/uploads/2023/10/ss-episode-342-jpeg.webp",
    },
    canonicalUrl: "https://grahamcluley.com/smashing-security-podcast-342/",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p><img src="https://grahamcluley.com/smashing-security-podcast-342/" alt="Smashing Security podcast #342: Royal family attacked, keyless car theft, and a deepfake Tom Hanks"><noscript><img src="https://grahamcluley.com/wp-content/uploads/2023/10/ss-episode-342-jpeg.webp" alt="Smashing Security podcast #342: Royal family attacked, keyless car theft, and a deepfake Tom Hanks"></noscript></p>\n<p>Is a deepfake Tom Hanks better than the real thing? Who has been attacking the British Royal Family&#8217;s website, and why? And how can you protect your vehicle from the spate of keyless car thefts?</p>\n<p>All this and much much more is discussed in the latest edition of the &#8220;Smashing Security&#8221; podcast by cybersecurity veterans Graham Cluley and Carole Theriault, joined this week by Maria Varmazis.</p>\n<p>Plus don&#8217;t miss our featured interview with Devo CISO Kayla Williams.</p>\n<p>Warning: This podcast may contain nuts, adult themes, and rude language.</p>\n<p><noscript></noscript></p>\n<h3>Hosts:</h3>\n<p>Graham Cluley &#8211; <a href="https://twitter.com/gcluley">@gcluley</a><br>\nCarole Theriault &#8211; <a href="https://twitter.com/caroletheriault">@caroletheriault</a></p>\n<h3>Guest:</h3>\n<p>Maria Varmazis &#8211; <a href="https://twitter.com/mvarmazis">@mvarmazis</a></p>\n<h3>Episode links:</h3>\n\n<h3>Sponsored by:</h3>\n<ul><li><a href="https://www.hunters.security/" rel="noopener noreferrer">Hunters</a> &#8211; A SOC platform, built to empower your security team to reduce risk, complexity and costs.</li>\n<li><a href="https://www.kolide.com/smashing" rel="noopener noreferrer">Kolide</a> &#8211; Kolide ensures that if your device isn&#8217;t secure it can&#8217;t access your cloud apps. It&#8217;s Device Trust for Okta. Watch the demo today!</li>\n<li><a href="https://www.smashingsecurity.com/devo" rel="noopener noreferrer">Devo</a> &#8211; Register now to join Devo and other cybersecurity industry professionals on October 18 for sessions and panels focused on de-stressing, SOC career development, and more!</li>\n</ul><h3>Support the show:</h3>\n<p>You can help the podcast by telling your friends and colleagues about &#8220;Smashing Security&#8221;, and leaving us a review on <a href="https://apple.co/2J1YMCu">Apple Podcasts</a> or <a href="https://www.podchaser.com/podcasts/smashing-security-244729">Podchaser</a>.</p>\n<p>Become a supporter via <a href="https://www.patreon.com/smashingsecurity">Patreon</a> or <a href="https://apple.co/2J1YMCu">Apple Podcasts</a> for ad-free episodes and our early-release feed!</p>\n<h3>Follow us:</h3>\n<p>Follow the show on Twitter at <a href="https://twitter.com/smashinsecurity">@SmashinSecurity</a>, or on <a href="https://www.smashingsecurity.com/mastodon">Mastodon</a>, on the <a href="https://www.reddit.com/r/smashingsecurity">Smashing Security subreddit</a>, or <a href="https://www.smashingsecurity.com/">visit our website</a> for more episodes.</p>\n<h3>Thanks:</h3>\n<p>Theme tune: &#8220;Vinyl Memories&#8221; by Mikael Manvelyan.<br>\nAssorted sound effects: AudioBlocks.</p>\n<p><em>Found this article interesting? <a href="https://twitter.com/intent/follow?screen_name=gcluley" rel="nofollow noopener noreferrer" title="Link to @gcluley on Twitter">Follow Graham Cluley on Twitter</a> or <a href="https://mastodon.green/@gcluley" title="Link to @gcluley@mastodon.green on Mastodon">Mastodon</a> to read more of the exclusive content we post.</em></p>\n<hr><div>\n\n<p>\nGraham Cluley is a veteran of the cybersecurity industry, having worked for a number of security companies since the early 1990s when he wrote the first ever version of Dr Solomon\'s Anti-Virus Toolkit for Windows. Now an independent analyst, he regularly makes <a href="https://grahamcluley.com/about-this-site/media/">media appearances</a> and is an <a href="https://grahamcluley.com/about-this-site/public-speaking/">international public speaker</a> on the topic of cybersecurity, hackers, and online privacy.\nFollow him on <a href="https://www.twitter.com/gcluley" rel="me">Twitter</a>, <a href="https://mastodon.green/@gcluley">Mastodon</a>, <a href="https://bsky.app/profile/grahamcluley.com">Bluesky</a>, or <a href="https://grahamcluley.com/contact">drop him an email</a>. </p>\n</div>\n</div>\n</div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 0.863,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3040",
        score: 35.10240366026693,
        label: "Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/6002",
        score: 1.0,
        label: "Executive Mentions",
        mentions: [
          {
            text: "Devo CISO Kayla Williams",
          },
        ],
        salienceLevel: "mention",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:46",
        label: "Europe",
        mentions: [
          {
            text: "British",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:145",
        label: "United Kingdom",
        mentions: [
          {
            text: "British",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:twitter",
        label: "Twitter, Inc.",
        mentions: [
          {
            text: "Twitter",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:patreon",
        label: "Patreon",
        mentions: [
          {
            text: "Patreon",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:finance-industry-companies",
        label: "Finance Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:twitter",
            label: "Twitter, Inc.",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:creator-economy-companies",
        label: "Creator Economy Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:patreon",
            label: "Patreon",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "All this and much much more is discussed in the latest edition of the “Smashing Security” podcast by cybersecurity veterans Graham Cluley and Carole Theriault, joined this week by Maria Varmazis.",
        },
        {
          text: "Follow the show on Twitter at @SmashinSecurity, or on Mastodon, on the Smashing Security subreddit, or visit our website for more episodes.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/288474a68f7036eccaf4759b8181f065/misp-20231005.091810.all-ioc.json",
        },
      ],
      mentions: [],
    },
    engagement: 6,
    engagementRate: 0.67,
  },
  {
    fingerprint: "27f36e31",
    id: "wBPYzCbaSCG+OvDIrSVufxSuBy764QUt9gfRU+iI9Jk=_18b006294fc:bde64:a4fdcf0e",
    keywords: ["headline,government,privacy,spyware"],
    originId:
      "https://packetstormsecurity.com/news/view/35091/School-Surveillance-Tech-Does-More-Harm-Than-Good.html",
    origin: {
      htmlUrl: "https://packetstormsecurity.com/",
      streamId: "feed/http://packetstormsecurity.org/headlines.xml",
      title: "Packet Storm Security",
    },
    title: "School Surveillance Tech Does More Harm Than Good",
    crawled: 1696518542588,
    published: 1696517688000,
    alternate: [
      {
        type: "text/html",
        href: "https://packetstormsecurity.com/news/view/35091/School-Surveillance-Tech-Does-More-Harm-Than-Good.html",
      },
    ],
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://i.guim.co.uk/img/media/78273d27c028319bf4b3760429fff7af1cd47a97/0_703_1497_898/master/1497.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=29608ea8b4a489c003a84f1290910336",
      contentType: "image/jpeg",
      width: 1200,
      height: 630,
      expirationDate: 1699110615774,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/SXQcoqfWMjSvL9rJ-r6F74C1B5Y7VNTF8KhLQFRZ8Y6j0TnqMeHrgZBke0TXHD2jbWI2uIzaV8B_uZUdX9cfTGr917XTHKyJ1HCB5IU",
    },
    canonicalUrl:
      "https://www.theguardian.com/technology/2023/oct/04/school-surveillance-tech-aclu-report",
    ampUrl:
      "https://amp.theguardian.com/technology/2023/oct/04/school-surveillance-tech-aclu-report",
    cdnAmpUrl:
      "https://amp-theguardian-com.cdn.ampproject.org/c/s/amp.theguardian.com/technology/2023/oct/04/school-surveillance-tech-aclu-report",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div><p>An <a href="https://www.aclu.org/report/digital-dystopia-the-danger-in-buying-what-the-edtech-surveillance-industry-is-selling">ACLU report</a> has found that despite claims from companies, surveillance technology in US schools does not improve student safety and constant surveillance can, in fact, cause a number of harms to students including making students less likely to report dangerous behavior.</p><p>Schools typically use technologies such as cameras, facial recognition software and communication monitoring and filtering technology, which have been marketed by education technology surveillance companies as intervention tools against school shootings, suicides and bullying. In 2021, US schools and colleges spent $3.1bn on these products and this number is expected to grow by 8% every year, according to the report.</p><p id="sign-in-gate"></p><figure id="38eadd3d-6ed8-4897-9bba-2f4d07571bc6"></figure><p>But the ACLU&#8217;s report concludes that there is little to no independent research or evidence that supports that this technology works. <a href="https://www.theguardian.com/world/surveillance">Surveillance</a> tech companies say their technology can and has been effective at preventing conflict, violence abuse and self-harm.</p><p>Gaggle, for example, a company that provides surveillance technology and software for kindergarten through 12-grade schools, claims their products are effective at &#8220;preventing suicides&#8221;, &#8220;preventing school violence&#8221; and &#8220;limiting bullying and harassing&#8221;.</p><p>Chad Marlow, a senior policy counsel for the ACLU&#8217;s national office and the report&#8217;s lead author, said that from a research standpoint, these claims are impossible to prove and are misleading to school officials and administrators. The report&#8217;s extensive review of tech companies&#8217; websites and marketing materials showed that companies rarely provide any data to support claims around efficacy.</p><p>Outside of schools, <a href="https://popcenter.asu.edu/sites/default/files/215_greenberg_roush_cctveffectiveness.pdf">research</a> has <a href="https://www.mtas.tennessee.edu/knowledgebase/there-empirical-evidence-surveillance-cameras-reduce-crime">shown</a> that camera surveillance is largely ineffective as a crime deterrent. In the last two decades, eight out of the ten most deadly school shootings took place in schools with surveillance video cameras, according to the report.</p><p>Although school shootings and suicides are rare events, they are every parent&#8217;s worst nightmare and the fear is very real, Marlow said. That makes these products easy to sell and market to schools, according to Marlow.</p><p>&#8220;They [consumers] want the products to work,&#8221; Marlow said. &#8220;You&#8217;re kind of selling people on their hopes and fears rather than reality.&#8221;</p><p>A second key finding in the ACLU&#8217;s report is that school surveillance has a clear negative effect on student&#8217;s mental health and can be especially harmful for historically marginalized and under-resourced students.</p><p>The ACLU commissioned YouGov to complete a national survey on student&#8217;s perceptions towards surveillance tech in their schools. More than 500 students ages 14-18 were asked about their experience in school regarding this technology and almost one-third of students reported this technology makes them feel like they are always being watched.</p><p>When it comes to education technology surveillance in their schools, students reported heightened anxiety, unease and fear. Students also reported a degraded level of trust towards their teachers and school administrators. An analysis of plots against schools conducted by the United States Secret Service showed that students themselves often play an important role in reporting dangerous or self-harm behavior and plots to staff.</p><p>&#8220;It&#8217;s going to make it less likely that students are going to reach out for help,&#8221; said Amelia Vance, the president of the Public Interest Privacy Center. This constant monitoring has a demonstrated chilling effect on students and makes it less likely that they will seek the sometimes life saving help they and other students need, Vance said.</p><p>The ACLU report also offers recommendations to school districts and state level decision-makers about which tools are proven to work. These tools include mental health counselors, guidance counselors, hall monitors, doors that lock from the inside and other proven techniques that benefit student safety.</p><p>&#8220;I think the problem is much of what we&#8217;re doing when it comes to student surveillance technology only makes us<em> feel</em> safer,&#8221; Marlow said. &#8220;But it doesn&#8217;t actually make the kids any safer &#8230; and it&#8217;s hurting our kids in the process.&#8221;</p></div></div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    engagement: 40,
    engagementRate: 0.37,
  },
  {
    language: "en",
    fingerprint: "4a02c",
    id: "GMj7uLpm4IPOOx5kU64zxGBMiBD17Xf8SvoEADZo/gQ=_18b002664b1:61eb9:a4fdcf0e",
    originId:
      "https://www.darkreading.com/vulnerabilities-threats/could-cybersecurity-breaches-become-harmless-in-the-future-",
    origin: {
      htmlUrl: "https://www.darkreading.com",
      streamId: "feed/http://www.darkreading.com/rss/all.xml",
      title: "Dark Reading",
    },
    title: "Could Cybersecurity Breaches Become Harmless in the Future?",
    author: "Vishal Gupta, CEO & Co-Founder, Seclore",
    crawled: 1696514598065,
    published: 1696514400000,
    alternate: [
      {
        type: "text/html",
        href: "https://www.darkreading.com/vulnerabilities-threats/could-cybersecurity-breaches-become-harmless-in-the-future-",
      },
    ],
    summary: {
      content:
        "With these five steps, organizations can develop stronger security practices and make the inevitable breaches inconsequential.",
      direction: "ltr",
    },
    enclosure: [
      {
        type: "image/*",
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltf44dca49a508d04e/651ebd95ca23af0d983a65b4/Cybersecurity_Science_Photo_Library_Alamy.jpg",
      },
      {
        type: "image/*",
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt9627a0dc685c86de/651d6b45d667d37945110382/Vishal_Gupta.png",
        length: 0,
      },
    ],
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltf44dca49a508d04e/651ebd95ca23af0d983a65b4/Cybersecurity_Science_Photo_Library_Alamy.jpg",
      contentType: "image/jpeg",
      width: 1200,
      height: 721,
      expirationDate: 1699106622915,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/8NP_nMZZjHc5bfFMh9IFKS9xHChu38zXgDZjrmyyON9P5sbWvS1ROPYMS41PEe5JzKFG9LPDYvTfFhJVGQ1sjZNexOM3f24t1RMWV08",
    },
    canonicalUrl:
      "https://www.darkreading.com/vulnerabilities-threats/could-cybersecurity-breaches-become-harmless-in-the-future-",
    fullContent:
      "<div><body><img src=\"https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltf44dca49a508d04e/651ebd95ca23af0d983a65b4/Cybersecurity_Science_Photo_Library_Alamy.jpg\"> <br>According to IBM's latest \"Cost of a Data Breach Report,\" the cost of a breach has risen to nearly $4.5 million per incident on average globally. While stolen data is an obvious impact of a breach, lost profits and corporate reputation can also cause significant and even longer-lasting damage to businesses. The consequences are often felt long after the initial breach as they can erode customers' trust, lead to declining stock prices for public companies, and force businesses to raise prices to deal with lost profits.That's all to say, a data breach can have a massive impact on all areas of the business… but what if that was no longer the case?Imagine a future where a breach is harmless — it's not that they won't happen, but they won't matter. A company is infiltrated, attackers make their way into the network and maybe even access an employee's device, but the data remains safe and uncompromised. And because there is no data loss, the reputational fallout is next to nothing, as organizations can confidently say that corporate and customer data was protected despite the breach.Sounds great, right? It's entirely possible — but only if organizations commit to a needed, if not overdue, paradigm shift in their security strategies.A Paradigm Shift in SecurityFor years, the dominant theory was to build security around the network: protect the perimeter and keep bad actors out. This approach ended up being insufficient as bigger and higher walls don't matter when the perimeter is porous. Next, the growth of endpoints and more distributed workforces created a new strategy where security was built around devices. This approach again fell short as device-based security leaves gaps when it comes to third parties with access to enterprise assets.Building security around networks and devices alone isn't effective. It's time to shift the focus to building security around the data itself. This model embeds granular security controls not around devices or workers but around the digital assets to ensure they're used only as intended. These controls travel wherever the data goes whether inside or outside the enterprise, are agnostic to the mediums through which data is shared and stored, and allow access to digital assets to be updated any time.By securing data outside the network perimeter, organizations can retain visibility and control of their sensitive assets, even while sharing critical information with third-party collaborators. This enables them to secure their supply chain without slowing growth for the enterprise. By focusing on protecting data rather than networks or endpoints, organizations not only protect their most critical and sensitive assets but also proactively mitigate the impact of any future breach.5 Steps to Reduce the Impact of BreachesHere are five steps security professionals can take to reorient their cybersecurity strategy and reduce the impact of breaches:Communicate to executive leaders why this shift is necessary: Firewalls and endpoint protection have dominated security for years, so there's an element of change management needed. Before transitioning to a data-oriented model, you need to gain buy-in from the executive team. When preparing for this discussion, pull from recent well-known breaches like Log4j and MOVEit to highlight lost profits and reputational fallout. During the conversation, lean into other benefits this shift will usher in, such as greater compliance. Higher-level business values can resonate better with non-technical stakeholders than pure cybersecurity use cases.Know and classify your data: After getting buy-in from executives, identify the most valuable data and classify it accordingly. To classify your data, ask questions such as: What is the purpose of the data? What format is the data in? Where does the data live? Who uses it, and are they in or outside the organization?Develop policies that continuously protect data: When deciding the best policies for the enterprise, you must understand the data's lifecycle (such as who uses it when, how they use it) and address the different levels of risk different groups of data might require. As you create policies, be sure to include real users of the data to create the most usable processes.Automate your data protection: Automation is a necessary element in data security as it helps avoid human error or oversights. Teams should consider practices like automatically classifying data from certain users or teams or whenever certain information is mentioned (for example, financial statements).Solicit feedback and prioritize usability: Rigid security policies can prevent work from being completed, leading to frustrated employees looking for ways to get around security measures. Include employees outside the security team to see what is working and what isn't, where they may need more flexibility, and when workflow processes may be changing.A single data breach can turn a company upside down, at times beyond recovery. But in the years to come, it doesn't have to be that way. By evolving past outdated cybersecurity paradigms that no longer serve modern enterprises, organizations can not only develop stronger security practices but render breaches inconsequential.</body></div>",
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidenceLevel: "unsure",
      confidence: 0.686,
      topic: {
        id: "nlp/f/topic/349",
        label: "Business",
      },
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        id: "nlp/f/topic/10678",
        score: 0.674,
        label: "Explainers",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/4105",
        score: 0.873,
        label: "Security Compliance",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/349",
        score: 0.686,
        label: "Business",
        salienceLevel: "about",
      },
      {
        type: "emergingTrend",
        id: "nlp/f/topic/663",
        score: 0.846,
        label: "Digital Transformation",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:ibm",
        label: "IBM",
        mentions: [
          {
            text: "IBM",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:ibm",
            label: "IBM",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "It's entirely possible — but only if organizations commit to a needed, if not overdue, paradigm shift in their security strategies.A Paradigm Shift in SecurityFor years, the dominant theory was to build security around the network: protect the perimeter and keep bad actors out.",
        },
        {
          text: "These controls travel wherever the data goes whether inside or outside the enterprise, are agnostic to the mediums through which data is shared and stored, and allow access to digital assets to be updated any time.By securing data outside the network perimeter, organizations can retain visibility and control of their sensitive assets, even while sharing critical information with third-party collaborators.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/d18551a51db241c984608ab20f6a32b5/misp-20231005.070318.all-ioc.json",
        },
      ],
      mentions: [],
    },
    engagement: 28,
    engagementRate: 0.88,
  },
  {
    language: "en",
    fingerprint: "4765e0c9",
    originId:
      "https://thehackernews.com/2023/10/qakbot-threat-actors-still-in-action.html",
    id: "zwUJFVdnktlsCRyWGJ/if2dTo03NYy+gE/Px51ybzi4=_18b0015d270:180702:cee8d097",
    origin: {
      htmlUrl: "https://thehackernews.com",
      streamId: "feed/http://thehackernews.com/feeds/posts/default",
      title: "The Hacker News",
    },
    title:
      "QakBot Threat Actors Still in Action, Using Ransom Knight and Remcos RAT in Latest Attacks",
    published: 1696511880000,
    summary: {
      direction: "ltr",
      content:
        "Despite the disruption to its infrastructure, the threat actors behind the QakBot malware have been linked to an ongoing phishing campaign since early August 2023 that led to the delivery of Ransom Knight (aka Cyclops) ransomware and Remcos RAT. This indicates that “the law enforcement operation may not have impacted Qakbot operators’ spam delivery infrastructure but rather only their",
    },
    alternate: [
      {
        href: "https://thehackernews.com/2023/10/qakbot-threat-actors-still-in-action.html",
        type: "text/html",
      },
    ],
    crawled: 1696513512048,
    author: "info@thehackernews.com (The Hacker News)",
    enclosure: [
      {
        href: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQauQZOzG9ZshPGmelwwFZGjxdy4K9QWSFtv5RQ2n5KpHoSzYcyiuvnDucm13g5VZm7nMiJ3QdBbjAmFAmzm2YCyK4GYDKUFfaGqukr1cl-RkqNTSaWVmdknGoyOyhAO4NCBmRHJnFSSkgNVVwVpSjTeX1WDsXY-60Gv9hV8JSE6aa2EuaYdO3VvcxdF8V/s1600/hacking.png",
        type: "image/jpeg",
        length: 12216320,
      },
    ],
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQauQZOzG9ZshPGmelwwFZGjxdy4K9QWSFtv5RQ2n5KpHoSzYcyiuvnDucm13g5VZm7nMiJ3QdBbjAmFAmzm2YCyK4GYDKUFfaGqukr1cl-RkqNTSaWVmdknGoyOyhAO4NCBmRHJnFSSkgNVVwVpSjTeX1WDsXY-60Gv9hV8JSE6aa2EuaYdO3VvcxdF8V/s1600/hacking.png",
      contentType: "image/png",
      width: 728,
      height: 380,
      expirationDate: 1699105520929,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/TZNBPbIbVh2yFtMRLewhmau52nVPJxtIRvQMdOtRuPy8KdQ8BSqdYPfXEhLjvd_d5yCHouFKLC3g54emtkF-xsp1NuWbMG6F-v7NCg",
    },
    canonicalUrl:
      "https://thehackernews.com/2023/10/qakbot-threat-actors-still-in-action.html",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p><span><i>&#59394;</i><span>Oct 05, 2023</span><i>&#59396;</i><span>Newsroom</span></span><span>Ransomware / Malware</span></p></div>\n<div id="articlebody">\n<p>Despite the disruption to its infrastructure, the threat actors behind the QakBot malware have been linked to an ongoing phishing campaign since early August 2023 that led to the delivery of Ransom Knight (aka Cyclops) ransomware and Remcos RAT.</p>\n<p>This indicates that "the law enforcement operation may not have impacted Qakbot operators\' spam delivery infrastructure but rather only their command-and-control (C2) servers," Cisco Talos researcher Guilherme Venere <a href="https://blog.talosintelligence.com/qakbot-affiliated-actors-distribute-ransom/" rel="noopener" target="_blank">said</a> in a new report published today.</p>\n<p>The activity has been attributed with moderate confidence by the cybersecurity firm to QakBot affiliates. There is no evidence to date that the threat actors have resumed distributing the malware loader itself post-infrastructure takedown.</p>\n\n<p>QakBot, also called QBot and Pinkslipbot, originated as a Windows-based banking trojan in 2007 and subsequently developed capabilities to deliver additional payloads, including ransomware. In late August 2023, the notorious malware operation was dealt a blow as part of an operation named <a href="https://thehackernews.com/2023/08/fbi-dismantles-qakbot-malware-frees.html" rel="noopener" target="_blank">Duck Hunt</a>.</p>\n\n<p>The latest activity, which commenced just before the takedown, starts with a malicious LNK file likely distributed via phishing emails that, when launched, detonates the infection and ultimately deploys the Ransom Knight ransomware, a recent rebrand of the <a href="https://thehackernews.com/2023/06/cyclops-ransomware-gang-offers-go-based.html" rel="noopener" target="_blank">Cyclops</a> ransomware-as-a-service (RaaS) scheme.</p>\n<p>The ZIP archives containing the LNK files have also been observed incorporating Excel add-in (.XLL) files to propagate the Remcos RAT, which facilitates persistent backdoor access to the endpoints.</p>\n\n<p>Some of the file names being used in the campaign are written in Italian, which suggests the attackers are targeting users in that region.</p>\n<p>"Though we have not seen the threat actors distributing Qakbot post-infrastructure takedown, we assess the malware will likely continue to pose a significant threat moving forward," Venere said.</p>\n<p>"Given the operators remain active, they may choose to rebuild Qakbot infrastructure to fully resume their pre-takedown activity."</p>\n<p id="trim-sidebar"></p>\n\n<p id="hiddenH1"></p>\n<div><p>Found this article interesting? Follow us on <a href="https://twitter.com/thehackersnews" rel="noopener" target="_blank">Twitter </a> and <a href="https://www.linkedin.com/company/thehackernews/" rel="noopener" target="_blank">LinkedIn</a> to read more exclusive content we post.</p></div>\n</div>\n\n</div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidence: 0.896,
      confidenceLevel: "confirm",
      topic: {
        id: "nlp/f/topic/603",
        label: "Cyber Crime",
      },
    },
    commonTopics: [
      {
        type: "topic",
        label: "Malware",
        score: 0.977,
        id: "nlp/f/topic/1396",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Cyber Security",
        score: 0.99,
        id: "nlp/f/topic/3003",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        label: "Summaries of Threat Intelligence Reports",
        score: 0.999,
        id: "nlp/f/topic/7020",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Cyber Crime",
        score: 0.896,
        id: "nlp/f/topic/603",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Hacking",
        score: 0.997,
        id: "nlp/f/topic/1025",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "QakBot",
        id: "nlp/f/entity/gz:mal:2ccaccd0-8362-4224-8497-2012e7cc7549",
        mentions: [
          {
            text: "QakBot",
          },
          {
            text: "Qakbot",
          },
          {
            text: "QBot",
          },
          {
            text: "Pinkslipbot",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Remcos",
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        mentions: [
          {
            text: "Remcos",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        label: "Europe",
        id: "nlp/f/entity/gz:loc:46",
        mentions: [
          {
            text: "Italian",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        label: "Italy",
        id: "nlp/f/entity/gz:loc:38",
        mentions: [
          {
            text: "Italian",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Bashlite",
        id: "nlp/f/entity/gz:mal:81917a93-6a70-4334-afe2-56904c1fafe9",
        mentions: [
          {
            text: "QBot",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Ingress Tool Transfer (Enterprise T1105)",
        id: "nlp/f/entity/gz:mi:attack-pattern-e6919abc-99f9-4c6c-95a5-14761e7b2add",
        mentions: [
          {
            text: "deliver additional payloads",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Command and Control (Enterprise TA0011)",
        causes: [
          {
            label: "Ingress Tool Transfer (Enterprise T1105)",
            id: "nlp/f/entity/gz:mi:attack-pattern-e6919abc-99f9-4c6c-95a5-14761e7b2add",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-f72804c5-f15a-449e-a5da-2eecd181f813",
        mentions: [
          {
            text: "command-and-control (C2) servers",
          },
          {
            text: "C2) servers",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Twitter, Inc.",
        id: "nlp/f/entity/gz:org:twitter",
        mentions: [
          {
            text: "Twitter",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Spearphishing Attachment (Enterprise T1566.001)",
        id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
        mentions: [
          {
            text: "LNK file likely distributed via phishing",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Phishing (Enterprise T1566)",
        causes: [
          {
            label: "Spearphishing Attachment (Enterprise T1566.001)",
            id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
          },
        ],
        id: "nlp/f/entity/gz:mi:attack-pattern-a62a8db3-f23a-4d8f-afd6-9dbc77e7813b",
        mentions: [
          {
            text: "phishing",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Mark-of-the-Web Bypass (Enterprise T1553.005)",
        id: "nlp/f/entity/gz:mi:attack-pattern-7e7c2fba-7cca-486c-9582-4c1bb2851961",
        mentions: [
          {
            text: "ZIP archives containing the LNK",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Malware Families Associated with GOLD CABIN",
        causes: [
          {
            label: "QakBot",
            id: "nlp/f/entity/gz:mal:2ccaccd0-8362-4224-8497-2012e7cc7549",
          },
        ],
        id: "nlp/f/entity/gz:malta:36e8c848-4d20-47ea-9fc2-31aa17bf82d1",
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Malware Families Associated with The Gorgon Group",
        causes: [
          {
            label: "Remcos",
            id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
          },
        ],
        id: "nlp/f/entity/gz:malta:e47c2c4d-706b-4098-92a2-b93e7103e131",
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Remote Access Trojan",
        causes: [
          {
            label: "Remcos",
            id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
          },
        ],
        id: "nlp/f/entity/gz:remote-access-trojan",
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Malware Families Associated with APT33",
        causes: [
          {
            label: "Remcos",
            id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
          },
        ],
        id: "nlp/f/entity/gz:malta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Finance Companies",
        causes: [
          {
            label: "Twitter, Inc.",
            id: "nlp/f/entity/gz:org:twitter",
          },
        ],
        id: "nlp/f/entity/gz:org:finance-industry-companies",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            label: "Command and Control (Enterprise TA0011)",
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-f72804c5-f15a-449e-a5da-2eecd181f813",
          },
          {
            label: "Ingress Tool Transfer (Enterprise T1105)",
            id: "nlp/f/entity/gz:mi:attack-pattern-e6919abc-99f9-4c6c-95a5-14761e7b2add",
          },
          {
            label: "Phishing (Enterprise T1566)",
            id: "nlp/f/entity/gz:mi:attack-pattern-a62a8db3-f23a-4d8f-afd6-9dbc77e7813b",
          },
        ],
        id: "nlp/f/entity/gz:mi-any",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Initial Access (Enterprise TA0001)",
        causes: [
          {
            label: "Phishing (Enterprise T1566)",
            id: "nlp/f/entity/gz:mi:attack-pattern-a62a8db3-f23a-4d8f-afd6-9dbc77e7813b",
          },
          {
            label: "Spearphishing Attachment (Enterprise T1566.001)",
            id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-ffd5bcee-6e16-4dd2-8eca-7b3beedf33ca",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Defense Evasion (Enterprise TA0005)",
        causes: [
          {
            label: "Mark-of-the-Web Bypass (Enterprise T1553.005)",
            id: "nlp/f/entity/gz:mi:attack-pattern-7e7c2fba-7cca-486c-9582-4c1bb2851961",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-78b23412-0651-46d7-a540-170a1ce8bd5a",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Subvert Trust Controls (Enterprise T1553)",
        causes: [
          {
            label: "Mark-of-the-Web Bypass (Enterprise T1553.005)",
            id: "nlp/f/entity/gz:mi:attack-pattern-7e7c2fba-7cca-486c-9582-4c1bb2851961",
          },
        ],
        id: "nlp/f/entity/gz:mi:attack-pattern-b83e166d-13d7-4b52-8677-dff90c548fd7",
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/e704d666-6379-11ee-8dac-9e2bc02d91bb",
      score: 1.0,
      label: "actors Ransom Knight",
      featured: true,
    },
    clusters: [
      {
        id: "topic/f/meme/e704d666-6379-11ee-8dac-9e2bc02d91bb",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "Despite the disruption to its infrastructure, the threat actors behind the QakBot malware have been linked to an ongoing phishing campaign since early August 2023 that led to the delivery of Ransom Knight (aka Cyclops) ransomware and Remcos RAT.",
        },
        {
          text: "There is no evidence to date that the threat actors have resumed distributing the malware loader itself post-infrastructure takedown.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/d69667c1c566ae5a30c6203390696923/stix2.1-20231005.064512.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/d69667c1c566ae5a30c6203390696923/misp-20231005.064512.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 4,
      url: "https://exports.feedly.com/attacks/034f2da905e3da238dcb56ba129e0f0b/feedly-ai-remote-access-trojan-one-article.json",
    },
    engagement: 55,
    engagementRate: 0.75,
  },
  {
    language: "en",
    fingerprint: "7e9ce69d",
    originId: "https://www.securityweek.com/?p=35210",
    keywords: ["Management & Strategy", "Training & Awareness", "Training"],
    id: "8dpo/qFWYByOyFRTdN0tyzkcf5yiHbyLYE4uz9Kd1BA=_18affce6686:1166e0:cee8d097",
    origin: {
      htmlUrl: "https://www.securityweek.com/",
      streamId: "feed/http://feeds.feedburner.com/Securityweek",
      title: "SecurityWeek",
    },
    title: "Addressing the People Problem in Cybersecurity",
    published: 1696503600000,
    summary: {
      direction: "ltr",
      content:
        '<p>Addressing the people problem with effective approaches and tools for users and security practitioners will enable us to work smarter, and force attackers into a position where they must work harder.</p> <p>The post <a rel="nofollow" href="https://www.securityweek.com/addressing-the-people-problem-in-cybersecurity/">Addressing the People Problem in Cybersecurity</a> appeared first on <a rel="nofollow" href="https://www.securityweek.com">SecurityWeek</a>.</p>',
    },
    alternate: [
      {
        href: "https://www.securityweek.com/addressing-the-people-problem-in-cybersecurity/",
        type: "text/html",
      },
    ],
    crawled: 1696508831366,
    author: "Marc Solomon",
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://www.securityweek.com/wp-content/uploads/2023/01/Cybersecurity_News-SecurityWeek.jpg",
      contentType: "image/jpeg",
      width: 1200,
      height: 675,
      expirationDate: 1699100864736,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/BPu81zOvWTLDevCAl36hc_0537BW4sqiHvrmK9tuv8XJ3OPzXFr__Wh-t8alrkoCkaA8oekYKZKWwem6RplEX9H92R2AQ8pbxW_sD9M",
    },
    canonicalUrl:
      "https://www.securityweek.com/addressing-the-people-problem-in-cybersecurity/",
    ampUrl:
      "https://www.securityweek.com/addressing-the-people-problem-in-cybersecurity/amp/",
    cdnAmpUrl:
      "https://www-securityweek-com.cdn.ampproject.org/c/s/www.securityweek.com/addressing-the-people-problem-in-cybersecurity/amp/",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p>October marks the 20<sup>th</sup> anniversary of <a href="https://staysafeonline.org/programs/cybersecurity-awareness-month/" target="_blank" rel="noreferrer noopener">Cybersecurity Awareness Month</a> &#8211; an annual campaign led by the Cybersecurity and Infrastructure Agency (CISA) in partnership with the National Cybersecurity Alliance to raise awareness for ways in which we can better protect our data. Some of the most visible cyberattacks in recent months have reminded us that we all play a role in security and people remain our weakest link. Threat actors continue to take advantage of human nature by using phishing emails, persuasive text messages and convincing phone calls to gain access to high value systems and sensitive data and reap financial rewards. Given the headlines, it makes sense this month to take a closer look at the people problem and what organizations can do to strengthen defenses.</p>\n<p>The people problem is two-fold: a lack of security awareness among users and a lack of cybersecurity talent. Let&#8217;s start with the first challenge, what organizations can do to raise security awareness among users.</p>\n<ul><li><strong>Support for security awareness programs:</strong> According to the SANS 2023 Security Awareness Report: Managing Human Risk (<a href="https://go.sans.org/wp_2023_security_awareness_report.pdf">PDF</a>), maturity levels for security awareness programs are improving when compared to last year. However, organizations are struggling with the fundamentals of program development including lack of budget, limits on training time for employees, and lack of staffing and time for program management. It comes as no surprise that the most effective programs are backed by strong leadership support, have dedicated full-time employees, and promote a strong security culture where incident reporting is encouraged and made easy which helps mitigate risk.</li>\n<li><strong>User training:</strong> Also not surprising, the SANS report finds that phishing/smishing/vishing tops the list of human risks, followed by passwords/authentication, detection/reporting, and IT admin misconfiguration. Training should focus on these four areas and go beyond annual computer-based training to include continuous training so that key concepts are reinforced year-round. Involving security teams in the development of human-focused security training helps ensure content remains highly relevant to the organization. Partnering with other departments such as communications and human resources and bringing on third-party training consultants will also help drive program effectiveness while optimizing resources.</li>\n</ul><p>Looking at the second component of the people problem &#8211; a lack of cybersecurity talent &#8211; a combination of training and technology can help close the gap currently estimated at <a href="https://www.cyberseek.org/heatmap.html" target="_blank" rel="noreferrer noopener">663,600</a> in the U.S. alone. For example:</p>\n<ul><li><strong>Cybersecurity professionals training:</strong> Cybersecurity itself is a continuous learning experience, something that is often overlooked. New research by Enterprise Strategy Group (ESG) finds that 40% of cybersecurity professionals believe their organization should increase its commitment to cybersecurity training to help address the skills shortage by enabling the organization to get more out of existing resources. Partnering with security technology vendors that offer product training and make it available in multiple formats and form factors, including instructor-led/in-person, instructor-led/virtual, and self-service, provides flexibility to select what works best for your business model and your security teams.</li>\n<li><strong>Security automation:</strong> An important benefit of security automation is that the highly skilled human resources you have can work smarter, not harder. In research we commissioned recently, security leaders say the number one way to address a top challenge &#8211; high turnover rates &#8211; is with smarter tools that simplify work. Additionally, over 60% expect automation to positively affect employee satisfaction and retention. A balanced approach to automation where repetitive, low-risk, time-consuming tasks are automated so that analysts are freed-up to take the lead on irregular, high-impact, time-sensitive work can improve retention and utilization while driving better security outcomes. And a data-driven approach to automation ensures that actions remain relevant for greater focus, accuracy and confidence in the outcomes. Additionally, security automation platforms that support low-code/no-code interfaces can make automation accessible to a range of users with varying skill sets.</li>\n<li><strong>Additional, new technologies</strong>: Approaches and technologies like AI are already helping to drive efficiencies. Specifically, natural language processing is being used to identify and extract threat data, such as indicators of compromise, malware and adversaries, from unstructured text in data feed sources and intelligence reports so that analysts spend less time on manual tasks and more time proactively addressing risks. Machine learning (ML) techniques are being applied to make sense of all this data in order to get the right data to the right systems and teams at the right time to accelerate detection, investigation and response. And a closed loop model with feedback, ensures AI capable security operations platforms can continue to learn and improve over time.</li>\n</ul><p>Threat actors continue to use variations of the same threat vectors year after year to execute successful attacks. Fortunately, we have it in our power to disrupt the cycle. Addressing the people problem with effective approaches and tools for users and security practitioners to strengthen defenses will enable us to work smarter, and force attackers into a position where <strong><em>they</em></strong> must work harder.</p>\n<hr class="wp-block-separator has-alpha-channel-opacity"><p></p>\n</div></div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidence: 0.742,
      confidenceLevel: "unsure",
      topic: {
        id: "nlp/f/topic/663",
        label: "Digital Transformation",
      },
    },
    commonTopics: [
      {
        type: "topic",
        label: "Cyber Security",
        score: 1.0,
        id: "nlp/f/topic/3003",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        label: "Explainers",
        score: 0.705,
        id: "nlp/f/topic/10678",
        salienceLevel: "about",
      },
      {
        type: "dataMention",
        label: "Consumer Insights",
        score: 1.0,
        id: "nlp/f/topic/6003",
        mentions: [
          {
            text: "New research by Enterprise Strategy Group (ESG) finds that 40% of cybersecurity professionals believe their organization should increase its commitment to cybersecurity training to help address the skills shortage by enabling the organization to get more out of existing resources.",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "technology",
        label: "Artificial Intelligence",
        score: 29.787773968677833,
        id: "nlp/f/topic/3000",
        salienceLevel: "about",
      },
      {
        type: "technology",
        label: "Automation",
        score: 0.672,
        id: "nlp/f/topic/193",
        salienceLevel: "about",
      },
      {
        type: "emergingTrend",
        label: "Digital Transformation",
        score: 0.742,
        id: "nlp/f/topic/663",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "location",
        label: "North America",
        id: "nlp/f/entity/gz:loc:49",
        mentions: [
          {
            text: "the U.S.",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        label: "United States",
        id: "nlp/f/entity/gz:loc:30",
        mentions: [
          {
            text: "the U.S.",
          },
        ],
        salienceLevel: "about",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/ffbdc078-611c-11ee-b2c1-aa9740c8f5ce",
      score: 1.0,
      label: "Cybersecurity Awareness Month",
      featured: true,
    },
    clusters: [
      {
        id: "topic/f/meme/ffbdc078-611c-11ee-b2c1-aa9740c8f5ce",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "Involving security teams in the development of human-focused security training helps ensure content remains highly relevant to the organization.",
        },
        {
          text: "A balanced approach to automation where repetitive, low-risk, time-consuming tasks are automated so that analysts are freed-up to take the lead on irregular, high-impact, time-sensitive work can improve retention and utilization while driving better security outcomes.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/e4670d8de2789fe47c158574396e5147/misp-20231005.052711.all-ioc.json",
        },
      ],
      mentions: [],
    },
    engagement: 10,
    engagementRate: 0.83,
  },
  {
    language: "en",
    fingerprint: "1f8340fa",
    originId: "https://www.securityweek.com/?p=35213",
    keywords: ["Malware & Threats", "malware", "Qakbot"],
    id: "8dpo/qFWYByOyFRTdN0tyzkcf5yiHbyLYE4uz9Kd1BA=_18affce6686:1166df:cee8d097",
    origin: {
      htmlUrl: "https://www.securityweek.com/",
      streamId: "feed/http://feeds.feedburner.com/Securityweek",
      title: "SecurityWeek",
    },
    title: "Qakbot Hackers Continue to Push Malware After Takedown Attempt",
    published: 1696503600000,
    summary: {
      direction: "ltr",
      content:
        '<p>Qakbot cybercriminals continue to push malware, which shows they are still operational after the recent takedown attempt.</p> <p>The post <a rel="nofollow" href="https://www.securityweek.com/qakbot-hackers-continue-to-push-malware-after-takedown-attempt/">Qakbot Hackers Continue to Push Malware After Takedown Attempt</a> appeared first on <a rel="nofollow" href="https://www.securityweek.com">SecurityWeek</a>.</p>',
    },
    alternate: [
      {
        href: "https://www.securityweek.com/qakbot-hackers-continue-to-push-malware-after-takedown-attempt/",
        type: "text/html",
      },
    ],
    crawled: 1696508831366,
    author: "Eduard Kovacs",
    visual: {
      url: "https://www.securityweek.com/wp-content/uploads/2023/01/Cybersecurity_News-SecurityWeek.jpg",
    },
    canonicalUrl:
      "https://www.securityweek.com/qakbot-hackers-continue-to-push-malware-after-takedown-attempt/",
    ampUrl:
      "https://www.securityweek.com/qakbot-hackers-continue-to-push-malware-after-takedown-attempt/amp/",
    cdnAmpUrl:
      "https://www-securityweek-com.cdn.ampproject.org/c/s/www.securityweek.com/qakbot-hackers-continue-to-push-malware-after-takedown-attempt/amp/",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p>\n</p><p><strong>The cybercriminals behind the Qakbot malware have been observed distributing ransomware and backdoors following the recent infrastructure takedown attempt by law enforcement, according to Cisco&#8217;s Talos research and threat intelligence group.</strong>\n</p><p>In late August, authorities in the United States and Europe announced the results of an international operation whose goal was the <a href="https://www.securityweek.com/operation-duck-hunt-qakbot-malware-disrupted-8-6-million-in-cryptocurrency-seized/">disruption of the notorious Qakbot botnet</a>, aka Qbot and Pinkslipbot.&#160;\n</p><p>The law enforcement operation involved the takeover of Qakbot infrastructure, the seizure of millions of dollars worth of cryptocurrency, and the distribution of a utility designed to automatically remove the malware from infected devices.\n</p><p>Talos has been monitoring Qakbot-related activities and on Thursday pointed out that a campaign launched by cybercriminals in early August has continued even after the law enforcement operation was announced.\n</p><p>As part of this campaign, the hackers have delivered Ransom Knight ransomware and the Remcos backdoor using phishing emails. This suggests, according to Talos, that the law enforcement operation impacted only Qakbot command and control (C&amp;C) servers, without affecting spam delivery infrastructure.&#160;&#160;\n</p><p>The campaign delivering Ransom Knight and Remcos malware appears to be the work of Qakbot affiliates known for a previous operation named &#8216;AA&#8217;, which ran in 2021 and 2022.&#160;\n</p><p>&#8220;We assess Qakbot will likely continue to pose a significant threat moving forward. Given the operators remain active, they may choose to rebuild Qakbot infrastructure to fully resume their pre-takedown activity,&#8221; <a href="https://blog.talosintelligence.com/">Talos said</a>.</p><div><span>Advertisement. Scroll to continue reading.</span></div>\n<p><em>SecurityWeek</em> has also heard from others who have seen signs that the Qakbot infrastructure is being rebuilt, with cybercriminals moving to distribute new malware.\n</p><p>Qakbot, primarily delivered through spam emails, has been used to gain initial access to systems, to which cybercriminals could then distribute ransomware and other malware.&#160;\n</p><p>When they announced the takedown attempt, US authorities said they had gained access to Qakbot infrastructure and identified more than 700,000 infected computers worldwide. The FBI redirected Qakbot traffic through servers controlled by the agency, instructing infected devices to download the malware uninstaller.&#160;\n</p><p><strong>Related</strong>:<a href="https://www.securityweek.com/industry-reactions-to-qakbot-botnet-disruption-feedback-friday/"> Industry Reactions to Qakbot Botnet Disruption: Feedback Friday</a>\n</p><p><strong>Related</strong>: <a href="https://www.securityweek.com/us-announces-takedown-of-card-checking-service-charges-against-russian-operator/">US Announces Takedown of Card-Checking Service, Charges Against Russian Operator</a>\n</p><p><strong>Related</strong>: <a href="https://www.securityweek.com/success-of-genesis-market-takedown-attempt-called-into-question/">Success of Genesis Market Takedown Attempt Called Into Question</a>\n</p><p>\n</p></div></div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "cyberAttack",
      confidence: 0.983752429485321,
      predictedTarget: {
        text: "Qakbot",
      },
    },
    commonTopics: [
      {
        type: "topic",
        label: "Malware",
        score: 0.929,
        id: "nlp/f/topic/1396",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Cyber Security",
        score: 1.0,
        causes: [
          {
            label: "Cyber Attacks",
            id: "nlp/f/topic/4009",
          },
        ],
        id: "nlp/f/topic/3003",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        label: "Summaries of Threat Intelligence Reports",
        score: 0.976,
        id: "nlp/f/topic/7020",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Cyber Crime",
        score: 0.91,
        id: "nlp/f/topic/603",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Hacking",
        score: 1.0,
        id: "nlp/f/topic/1025",
        salienceLevel: "about",
      },
      {
        targets: [
          {
            confidence: 0.983752429485321,
            text: "Qakbot",
            id: "nlp/f/entity/gz:mal:2ccaccd0-8362-4224-8497-2012e7cc7549",
          },
        ],
        type: "cyberEvent",
        label: "Cyber Attacks",
        score: 0.996,
        id: "nlp/f/topic/4009",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "QakBot",
        id: "nlp/f/entity/gz:mal:2ccaccd0-8362-4224-8497-2012e7cc7549",
        mentions: [
          {
            text: "Qakbot",
          },
          {
            text: "Qbot",
          },
          {
            text: "Pinkslipbot",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        label: "North America",
        id: "nlp/f/entity/gz:loc:49",
        mentions: [
          {
            text: "the United States",
          },
          {
            text: "US",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        label: "United States",
        id: "nlp/f/entity/gz:loc:30",
        mentions: [
          {
            text: "the United States",
          },
          {
            text: "US",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Command and Control (Enterprise TA0011)",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-f72804c5-f15a-449e-a5da-2eecd181f813",
        mentions: [
          {
            text: "command and control",
          },
          {
            text: "C&C) servers",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Bashlite",
        id: "nlp/f/entity/gz:mal:81917a93-6a70-4334-afe2-56904c1fafe9",
        mentions: [
          {
            text: "Qbot",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Remcos",
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        mentions: [
          {
            text: "Remcos",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Spearphishing Attachment (Enterprise T1566.001)",
        id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
        mentions: [
          {
            text: "phishing emails",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Initial Access (Enterprise TA0001)",
        causes: [
          {
            label: "Spearphishing Attachment (Enterprise T1566.001)",
            id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-ffd5bcee-6e16-4dd2-8eca-7b3beedf33ca",
        mentions: [
          {
            text: "gain initial access",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Cisco",
        id: "nlp/f/entity/gz:org:cisco-systems",
        mentions: [
          {
            text: "Cisco",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Phishing (Enterprise T1566)",
        causes: [
          {
            label: "Spearphishing Attachment (Enterprise T1566.001)",
            id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
          },
        ],
        id: "nlp/f/entity/gz:mi:attack-pattern-a62a8db3-f23a-4d8f-afd6-9dbc77e7813b",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            label: "Command and Control (Enterprise TA0011)",
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-f72804c5-f15a-449e-a5da-2eecd181f813",
          },
          {
            label: "Spearphishing Attachment (Enterprise T1566.001)",
            id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
          },
          {
            label: "Initial Access (Enterprise TA0001)",
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-ffd5bcee-6e16-4dd2-8eca-7b3beedf33ca",
          },
        ],
        id: "nlp/f/entity/gz:mi-any",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Fortune 500 Companies",
        causes: [
          {
            label: "Cisco",
            id: "nlp/f/entity/gz:org:cisco-systems",
          },
        ],
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        label: "Telecom Companies",
        causes: [
          {
            label: "Cisco",
            id: "nlp/f/entity/gz:org:cisco-systems",
          },
        ],
        id: "nlp/f/entity/gz:org:telecom-industry-companies",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Remote Access Trojan",
        causes: [
          {
            label: "Remcos",
            id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
          },
        ],
        id: "nlp/f/entity/gz:remote-access-trojan",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Malware Families Associated with The Gorgon Group",
        causes: [
          {
            label: "Remcos",
            id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
          },
        ],
        id: "nlp/f/entity/gz:malta:e47c2c4d-706b-4098-92a2-b93e7103e131",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Malware Families Associated with APT33",
        causes: [
          {
            label: "Remcos",
            id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
          },
        ],
        id: "nlp/f/entity/gz:malta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Malware Families Associated with GOLD CABIN",
        causes: [
          {
            label: "QakBot",
            id: "nlp/f/entity/gz:mal:2ccaccd0-8362-4224-8497-2012e7cc7549",
          },
        ],
        id: "nlp/f/entity/gz:malta:36e8c848-4d20-47ea-9fc2-31aa17bf82d1",
        mentions: [],
        salienceLevel: "about",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/e704d666-6379-11ee-8dac-9e2bc02d91bb",
      score: 1.0,
      label: "QakBot distributes Ransom Knight malware",
      featured: true,
    },
    clusters: [
      {
        id: "topic/f/meme/e704d666-6379-11ee-8dac-9e2bc02d91bb",
      },
      {
        id: "topic/f/meme/ba1b110e-6321-11ee-b2c1-aa9740c8f5ce",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "The cybercriminals behind the Qakbot malware have been observed distributing ransomware and backdoors following the recent infrastructure takedown attempt by law enforcement, according to Cisco’s Talos research and threat intelligence group.",
        },
        {
          text: "Talos has been monitoring Qakbot-related activities and on Thursday pointed out that a campaign launched by cybercriminals in early August has continued even after the law enforcement operation was announced.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/861a9e43756e0e2c1d02ac7899b3217a/stix2.1-20231005.052711.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/861a9e43756e0e2c1d02ac7899b3217a/misp-20231005.052711.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 1,
      url: "https://exports.feedly.com/attacks/7f199fae9b70121aa3a57dc05cf3723d/feedly-ai-qakbot-hackers-continue-to-push-malware-after-take.json",
    },
    engagement: 10,
    engagementRate: 0.83,
  },
  {
    language: "en",
    fingerprint: "15648099",
    originId: "https://www.securityweek.com/?p=35214",
    keywords: ["Malware & Threats", "NPM", "rootkit"],
    id: "8dpo/qFWYByOyFRTdN0tyzkcf5yiHbyLYE4uz9Kd1BA=_18aff73bd02:a74cb:cee8d097",
    origin: {
      htmlUrl: "https://www.securityweek.com/",
      streamId: "feed/http://feeds.feedburner.com/Securityweek",
      title: "SecurityWeek",
    },
    title:
      "Hundreds Download Malicious NPM Package Capable of Delivering Rootkit",
    published: 1696501354000,
    summary: {
      direction: "ltr",
      content:
        '<p>Threat actor uses typosquatting to trick hundreds of users into downloading a malicious NPM package that delivers the r77 rootkit.</p> <p>The post <a rel="nofollow" href="https://www.securityweek.com/hundreds-download-malicious-npm-package-capable-of-delivering-rootkit/">Hundreds Download Malicious NPM Package Capable of Delivering Rootkit</a> appeared first on <a rel="nofollow" href="https://www.securityweek.com">SecurityWeek</a>.</p>',
    },
    alternate: [
      {
        href: "https://www.securityweek.com/hundreds-download-malicious-npm-package-capable-of-delivering-rootkit/",
        type: "text/html",
      },
    ],
    crawled: 1696502889730,
    author: "Ionut Arghire",
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://www.securityweek.com/wp-content/uploads/2023/01/Cybersecurity_News-SecurityWeek.jpg",
      contentType: "image/jpeg",
      width: 1200,
      height: 675,
      expirationDate: 1699094910299,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/BPu81zOvWTLDevCAl36hc_0537BW4sqiHvrmK9tuv8XJ3OPzXFr__Wh-t8alrkoCkaA8oekYKZKWwem6RplEX9H92R2AQ8pbxW_sD9M",
    },
    canonicalUrl:
      "https://www.securityweek.com/hundreds-download-malicious-npm-package-capable-of-delivering-rootkit/",
    ampUrl:
      "https://www.securityweek.com/hundreds-download-malicious-npm-package-capable-of-delivering-rootkit/amp/",
    cdnAmpUrl:
      "https://www-securityweek-com.cdn.ampproject.org/c/s/www.securityweek.com/hundreds-download-malicious-npm-package-capable-of-delivering-rootkit/amp/",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p>\n</p><p><strong>A recently observed malicious campaign has relied on typosquatting to trick users into downloading a malicious NPM package that would infect their systems with a rootkit, supply chain security firm ReversingLabs warns.</strong>\n</p><p>The malicious package, named &#8216;node-hide-console-windows&#8217;, which was designed to mimic the legitimate &#8216;node-hide-console-window&#8217; package on the NPM repository, first appeared at the end of August, but amassed<a href="https://www.reversinglabs.com/blog/r77-rootkit-typosquatting-npm-threat-research"> more than 700 downloads</a> before being removed.\n</p><p>To ensure that the malicious package was hard to distinguish from the legitimate one, the threat actor not only mimicked the package name, but also the repository contents, publishing ten versions of the code, the same as for the real &#8216;node-hide-console-window&#8217;.\n</p><p>Upon execution, the malicious code would fetch an executable from a remote location, which turned out to be a copy of DiscordRAT 2.0, an open source remote access trojan (RAT), which claims to have been created &#8216;for educational use only&#8217;.\n</p><p>Once set up, DiscordRAT creates a channel in the associated Discord server, then waits for additional commands from its operator. The RAT can exfiltrate information from the infected system, can disable security programs, kill processes, prevent the use of mouse and keyboard, and even shut down the system.\n</p><p>ReversingLabs&#8217; analysis of the malware variant used in this attack also revealed the inclusion of support for a new command that allowed the threat actor to launch an older version of the r77 rootkit on the victim&#8217;s system.\n</p><p>An open source malware, r77 is easy to deploy, can be bundled with other software, and can hide its presence on the system, via two registry subkeys (one for the executable path and another for the malware&#8217;s process).</p><div><span>Advertisement. Scroll to continue reading.</span></div>\n<p>According to ReversingLabs, all ten versions of the malicious package downloaded the same executable delivering DiscordRAT 2.0, which in turn could execute the r77 rootkit. The RAT also included a command to remove the rootkit.\n</p><p>The most recent two versions of the malicious package also contained code to fetch a PyInstaller-compiled executable serving the Blank-Grabber information stealer.\n</p><p>The malicious &#8216;node-hide-console-windows&#8217; package has been removed from the NPM repository.\n</p><p><strong>The threat to open source developers</strong>\n</p><p>Despite the threat actor&#8217;s efforts to make the malicious package seem trustworthy, the campaign does not show signs of sophistication, especially given the use of open source malware that could be easily detected, but the threat it poses should not be underestimated.\n</p><p>&#8220;Regardless of how this campaign ranks in sophistication, these packages highlight an always present, and growing, danger lurking on public repositories such as NPM or PyPI, as well as on GitHub. Something as dangerous and invasive as a rootkit is easily available to everyone, well documented, and ready for use,&#8221; ReversingLabs notes.\n</p><p>According to Bugcrowd director of cybersecurity Sajeeb Lohani, this attack underlines the risks developers expose themselves to when placing trust in open source packages without thoroughly verifying them first.\n</p><p>&#8220;Installing any software package from a majority of the package managers, basically runs the code written by the author. This puts a large amount of trust on package developers, which can be abused, allowing the threat actor to compromise any system that downloads and installs the package,&#8221; Lohani said in an emailed comment.\n</p><p>Keeper Security head of product Zane Bond, points out that this campaign shows once again the increasing interest of threat actors in open source environments, which allows them to set up impactful supply chain attacks.\n</p><p>&#8220;Open-source packages are the underpinnings of many enterprise software systems that are distributed globally, and is one reason supply chain security has become a priority in recent years. Cybersecurity technologies protecting these environments must cover every user, on every device, from every location,&#8221; Bond said.\n</p><p>Developers who downloaded the malicious package and were infected with the r77 rootkit, Lohani says, should re-install their systems, to remove any malware.\n</p><p>&#8220;Since r77 is a fileless rootkit, and the framework may have been modified prior to deployment, it is often safer to re-image the affected device, following disaster recovery protocols. I strongly recommend having proper logs sent to immutable log storage services, which helps a blue team to search and identify potentially affected systems,&#8221; Lohani said.\n</p><p>Additionally, Netenrich principal threat hunter John Bambenek underlines, it is critically important to maintain visibility into all dependencies used within a development environment, to remedy any attack efficiently.\n</p><p>&#8220;Teams need to keep a strong and accurate library of what packages are installed so they can quickly go back and remove libraries that have been compromised or malicious typosquatted libraries, as that is a manual process,&#8221; Bambenek commented.\n</p><p><strong>Related:</strong><a href="https://www.securityweek.com/dozens-of-malicious-npm-packages-steal-user-system-data/"><strong> </strong>Dozens of Malicious NPM Packages Steal User, System Data</a>\n</p><p><strong>Related:</strong><a href="https://www.securityweek.com/developers-warned-of-malicious-pypi-npm-ruby-packages-targeting-macs/"> Developers Warned of Malicious PyPI, NPM, Ruby Packages Targeting Macs</a>\n</p><p><strong>Related:</strong><a href="https://www.securityweek.com/malicious-nuget-packages-used-to-target-net-developers/"> Malicious NuGet Packages Used to Target .NET Developers</a>\n</p><p>\n</p></div></div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        label: "Malware",
        score: 0.959,
        id: "nlp/f/topic/1396",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Cyber Security",
        score: 1.0,
        id: "nlp/f/topic/3003",
        salienceLevel: "about",
      },
      {
        type: "contentType",
        label: "Summaries of Threat Intelligence Reports",
        score: 0.869,
        id: "nlp/f/topic/7020",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Malicious Packages",
        score: 0.985,
        id: "nlp/f/topic/7000",
        salienceLevel: "about",
      },
      {
        type: "topic",
        label: "Hacking",
        score: 0.985,
        id: "nlp/f/topic/1025",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Rootkit (Enterprise T1014)",
        id: "nlp/f/entity/gz:mi:attack-pattern-0f20e3cb-245b-4a61-8a91-2d93f7cb0e9b",
        mentions: [
          {
            text: "Rootkit",
          },
          {
            text: "rootkit",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "r77",
        id: "nlp/f/entity/gz:mal:f577050b-a4a3-4ebd-a9d9-77300f3435f5",
        mentions: [
          {
            text: "r77 rootkit",
          },
          {
            text: "r77",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "Remote Access Trojan",
        id: "nlp/f/entity/gz:remote-access-trojan",
        mentions: [
          {
            text: "remote access trojan",
          },
          {
            text: "RAT",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Hidden Window (Enterprise T1564.003)",
        id: "nlp/f/entity/gz:mi:attack-pattern-cbb66055-0325-4111-aca0-40547b6ad5b0",
        mentions: [
          {
            text: "hide-console-window",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "DiscordRAT 2.0",
        id: "nlp/f/entity/gz:mal:32e978f2-1557-4233-ac53-1a30b0f29a2e",
        mentions: [
          {
            text: "DiscordRAT 2.0",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Malware (Enterprise T1588.001)",
        id: "nlp/f/entity/gz:mi:attack-pattern-7807d3a4-a885-4639-a786-c1ed41484970",
        mentions: [
          {
            text: "use of open source malware",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Execution (Enterprise TA0002)",
        causes: [
          {
            label: "Malicious File (Enterprise T1204.002)",
            id: "nlp/f/entity/gz:mi:attack-pattern-232b7f21-adf9-4b42-b936-b9d6f7df856e",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-4ca45d45-df4d-4613-8980-bac22d278fa5",
        mentions: [
          {
            text: "Upon execution, the malicious",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Malicious File (Enterprise T1204.002)",
        id: "nlp/f/entity/gz:mi:attack-pattern-232b7f21-adf9-4b42-b936-b9d6f7df856e",
        mentions: [
          {
            text: "victim’s system. \nAn open source malware",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Supply Chain Compromise (Enterprise T1195)",
        id: "nlp/f/entity/gz:mi:attack-pattern-3f18edba-28f4-4bb9-82c3-8aa60dcac5f7",
        mentions: [
          {
            text: "supply chain attacks",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "User Execution (Enterprise T1204)",
        causes: [
          {
            label: "Malicious File (Enterprise T1204.002)",
            id: "nlp/f/entity/gz:mi:attack-pattern-232b7f21-adf9-4b42-b936-b9d6f7df856e",
          },
        ],
        id: "nlp/f/entity/gz:mi:attack-pattern-8c32eb4d-805f-4fc5-bf60-c4d476c131b5",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Obtain Capabilities (Enterprise T1588)",
        causes: [
          {
            label: "Malware (Enterprise T1588.001)",
            id: "nlp/f/entity/gz:mi:attack-pattern-7807d3a4-a885-4639-a786-c1ed41484970",
          },
        ],
        id: "nlp/f/entity/gz:mi:attack-pattern-ce0687a0-e692-4b77-964a-0784a8e54ff1",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Defense Evasion (Enterprise TA0005)",
        causes: [
          {
            label: "Rootkit (Enterprise T1014)",
            id: "nlp/f/entity/gz:mi:attack-pattern-0f20e3cb-245b-4a61-8a91-2d93f7cb0e9b",
          },
          {
            label: "Hidden Window (Enterprise T1564.003)",
            id: "nlp/f/entity/gz:mi:attack-pattern-cbb66055-0325-4111-aca0-40547b6ad5b0",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-78b23412-0651-46d7-a540-170a1ce8bd5a",
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Initial Access (Enterprise TA0001)",
        causes: [
          {
            label: "Supply Chain Compromise (Enterprise T1195)",
            id: "nlp/f/entity/gz:mi:attack-pattern-3f18edba-28f4-4bb9-82c3-8aa60dcac5f7",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-ffd5bcee-6e16-4dd2-8eca-7b3beedf33ca",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Resource Development (Enterprise TA0042)",
        causes: [
          {
            label: "Malware (Enterprise T1588.001)",
            id: "nlp/f/entity/gz:mi:attack-pattern-7807d3a4-a885-4639-a786-c1ed41484970",
          },
        ],
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-d679bca2-e57d-4935-8650-8031c87a4400",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Hide Artifacts (Enterprise T1564)",
        causes: [
          {
            label: "Hidden Window (Enterprise T1564.003)",
            id: "nlp/f/entity/gz:mi:attack-pattern-cbb66055-0325-4111-aca0-40547b6ad5b0",
          },
        ],
        id: "nlp/f/entity/gz:mi:attack-pattern-22905430-4901-4c2a-84f6-98243cb173f8",
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            label: "Rootkit (Enterprise T1014)",
            id: "nlp/f/entity/gz:mi:attack-pattern-0f20e3cb-245b-4a61-8a91-2d93f7cb0e9b",
          },
          {
            label: "Hidden Window (Enterprise T1564.003)",
            id: "nlp/f/entity/gz:mi:attack-pattern-cbb66055-0325-4111-aca0-40547b6ad5b0",
          },
          {
            label: "Execution (Enterprise TA0002)",
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-4ca45d45-df4d-4613-8980-bac22d278fa5",
          },
        ],
        id: "nlp/f/entity/gz:mi-any",
        mentions: [],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        label: "New Malware",
        causes: [
          {
            label: "DiscordRAT 2.0",
            id: "nlp/f/entity/gz:mal:32e978f2-1557-4233-ac53-1a30b0f29a2e",
          },
        ],
        id: "nlp/f/entity/gz:new-malware",
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/53c96096-62a8-11ee-8c7a-e2525ee415ff",
      score: 1.0,
      label: "npm package deploys r77 rootkit",
      featured: true,
    },
    clusters: [
      {
        id: "topic/f/meme/53c96096-62a8-11ee-8c7a-e2525ee415ff",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "A recently observed malicious campaign has relied on typosquatting to trick users into downloading a malicious NPM package that would infect their systems with a rootkit, supply chain security firm ReversingLabs warns.",
        },
        {
          text: "Upon execution, the malicious code would fetch an executable from a remote location, which turned out to be a copy of DiscordRAT 2.0, an open source remote access trojan (RAT), which claims to have been created ‘for educational use only’.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/310fb4b5d3aac159344c75c9321c1a78/stix2.1-20231005.034809.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/310fb4b5d3aac159344c75c9321c1a78/misp-20231005.034809.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 5,
      url: "https://exports.feedly.com/attacks/ba3ea37144fbc6d58257a569dba9852a/feedly-ai-remote-access-trojan-one-article.json",
    },
    engagement: 8,
    engagementRate: 0.67,
  },
  {
    fingerprint: "e826d5d6",
    language: "en",
    id: "zwUJFVdnktlsCRyWGJ/if2dTo03NYy+gE/Px51ybzi4=_18aff47e391:20d639:a4fdcf0e",
    originId:
      "https://thehackernews.com/2023/10/cisa-warns-of-active-exploitation-of.html",
    origin: {
      htmlUrl: "https://thehackernews.com",
      title: "The Hacker News",
      streamId: "feed/http://thehackernews.com/feeds/posts/default",
    },
    title:
      "CISA Warns of Active Exploitation of JetBrains and Windows Vulnerabilities",
    author: "info@thehackernews.com (The Hacker News)",
    crawled: 1696500016017,
    published: 1696498200000,
    alternate: [
      {
        href: "https://thehackernews.com/2023/10/cisa-warns-of-active-exploitation-of.html",
        type: "text/html",
      },
    ],
    summary: {
      content:
        "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added two security flaws to its Known Exploited Vulnerabilities (KEV) catalog due to active exploitation, while removing five bugs from the list due to lack of adequate evidence. The vulnerabilities newly added are below - CVE-2023-42793 (CVSS score: 9.8) - JetBrains TeamCity Authentication Bypass Vulnerability",
      direction: "ltr",
    },
    enclosure: [
      {
        href: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfK1vJiOIToipxN1oU0GKsZwYaIIxIctCDvMPM_0GXE9AdNqIuxMYUqVmPq4jmhyphenhyphen2rXQ2QGJ_iytbEbAaUFAoU-c57OP9gxSBrBAeIyRCbzffLKFXnoP5qfQwyqsI8OxbKMmgJNFlXMebSxUfvddKTZP9Lsr9o22r5jRTuhp1dD4RhsTW304gAths1LGKI/s1600/cisa.jpg",
        length: 12216320,
        type: "image/jpeg",
      },
    ],
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfK1vJiOIToipxN1oU0GKsZwYaIIxIctCDvMPM_0GXE9AdNqIuxMYUqVmPq4jmhyphenhyphen2rXQ2QGJ_iytbEbAaUFAoU-c57OP9gxSBrBAeIyRCbzffLKFXnoP5qfQwyqsI8OxbKMmgJNFlXMebSxUfvddKTZP9Lsr9o22r5jRTuhp1dD4RhsTW304gAths1LGKI/s1600/cisa.jpg",
      contentType: "image/jpeg",
      width: 728,
      height: 380,
      expirationDate: 1699092029107,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/ESsfB3B71HpYlzIgA8MYDESJ5Hhc2WRxzcFWK3QnOnWMtxg7aPBdHPR8ufQqxmXCSeOYK3wxRlM7HgD-Y4X5otDfurh1XngfquTwhg",
    },
    canonicalUrl:
      "https://thehackernews.com/2023/10/cisa-warns-of-active-exploitation-of.html",
    fullContent:
      '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">\n<html><body><div><div><div>\n<p><span><i>&#59394;</i><span>Oct 05, 2023</span><i>&#59396;</i><span>Newsroom</span></span><span>Vulnerability / Cyber Attack</span></p></div>\n<div id="articlebody">\n<p>The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday <a href="https://www.cisa.gov/news-events/alerts/2023/10/04/cisa-adds-two-known-exploited-vulnerabilities-catalog-removes-five-kevs" rel="noopener" target="_blank">added</a> two security flaws to its Known Exploited Vulnerabilities (<a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" rel="noopener" target="_blank">KEV</a>) catalog due to active exploitation, while removing five bugs from the list due to lack of adequate evidence.</p>\n<p>The vulnerabilities newly added are below -</p>\n<ul><li><a href="https://nvd.nist.gov/vuln/detail/CVE-2023-42793" rel="noopener" target="_blank"><strong>CVE-2023-42793</strong></a> (CVSS score: 9.8) - JetBrains TeamCity Authentication Bypass Vulnerability</li>\n<li><a href="https://nvd.nist.gov/vuln/detail/CVE-2023-28229" rel="noopener" target="_blank"><strong>CVE-2023-28229</strong></a> (CVSS score: 7.0) - Microsoft Windows CNG Key Isolation Service Privilege Escalation Vulnerability</li>\n</ul><p>CVE-2023-42793 relates to a <a href="https://thehackernews.com/2023/09/critical-jetbrains-teamcity-flaw-could.html" rel="noopener" target="_blank">critical authentication bypass vulnerability</a> that allows for remote code execution on TeamCity Server. Data gathered by GreyNoise has revealed exploitation attempts targeting the flaw from <a href="https://viz.greynoise.io/tag/jetbrains-teamcity-authentication-bypass-attempt?days=3" rel="noopener" target="_blank">74 unique IP addresses</a> to date.</p>\n<p>On the other hand, CVE-2023-28229 is a <a href="https://whereisk0shl.top/post/isolate-me-from-sandbox-explore-elevation-of-privilege-of-cng-key-isolation" rel="noopener" target="_blank">high-severity flaw</a> in the Microsoft Windows Cryptographic Next Generation (CNG) Key Isolation Service that allows an attacker to gain specific limited SYSTEM privileges.</p>\n<p>There are currently no public reports documenting in-the-wild exploitation of the bug, and CISA has not disclosed any further details about the attacks or exploitation scenarios. A proof-of-concept (PoC) was <a href="https://github.com/Y3A/CVE-2023-28229" rel="noopener" target="_blank">made available</a> early last month.</p>\n\n<p>Microsoft, for its part, tagged CVE-2023-28229 with an "Exploitation Less Likely" assessment. It was <a href="https://msrc.microsoft.com/update-guide/vulnerability/CVE-2023-28229" rel="noopener" target="_blank">patched</a> by the tech giant as part of Patch Tuesday updates released in April 2023.</p>\n<p>The cybersecurity agency has also removed five flaws affecting Owl Labs Meeting Owl from the KEV catalog, citing "insufficient evidence."</p>\n<p>While CVE-2022-31460 was added in June 2022, four other vulnerabilities (CVE-2022-31459, CVE-2022-31461, CVE-2022-31462, and CVE-2022-31463) were <a href="https://thehackernews.com/2023/09/trend-micro-releases-urgent-fix-for.html" rel="noopener" target="_blank">added</a> on September 18, 2023.</p>\n<p>In light of the active exploitation of the two flaws, Federal Civilian Executive Branch (FCEB) agencies are required to apply the vendor-provided patches by October 25, 2023, to secure their networks against potential threats.</p>\n<p id="trim-sidebar"></p>\n\n<p id="hiddenH1"></p>\n<div><p>Found this article interesting? Follow us on <a href="https://twitter.com/thehackersnews" rel="noopener" target="_blank">Twitter </a> and <a href="https://www.linkedin.com/company/thehackernews/" rel="noopener" target="_blank">LinkedIn</a> to read more exclusive content we post.</p></div>\n</div>\n\n</div></div></body></html>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/2440",
        score: 1.0,
        label: "Vulnerabilities",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        causes: [
          {
            id: "nlp/f/topic/2440",
            label: "Vulnerabilities",
          },
        ],
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1025",
        score: 0.925,
        label: "Hacking",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/7002",
        score: 1.0,
        label: "Proof of Exploit",
        mentions: [
          {
            text: "CISA Warns of Active Exploitation of JetBrains and Windows Vulnerabilities",
          },
          {
            text: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added two security flaws to its Known Exploited Vulnerabilities ( KEV ) catalog due to active exploitation, while removing five bugs from the list due to lack of adequate evidence.",
          },
          {
            text: "Data gathered by GreyNoise has revealed exploitation attempts targeting the flaw from 74 unique IP addresses to date.",
          },
        ],
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        vulnerabilityInfo: {
          description:
            "In JetBrains TeamCity before 2023.05.4 authentication bypass leading to RCE on TeamCity Server was possible",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 9.8,
          hasExploit: true,
          hasPatch: true,
          trending: true,
        },
        id: "vulnerability/m/entity/CVE-2023-42793",
        mentions: [
          {
            text: "CVE-2023-42793",
          },
        ],
        label: "CVE-2023-42793",
      },
      {
        vulnerabilityInfo: {
          description:
            "Windows CNG Key Isolation Service Elevation of Privilege Vulnerability",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 7.0,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2023-28229",
        mentions: [
          {
            text: "CVE-2023-28229",
          },
        ],
        label: "CVE-2023-28229",
      },
      {
        vulnerabilityInfo: {
          description:
            "Owl Labs Meeting Owl 5.2.0.15 allows attackers to activate Tethering Mode with hard-coded hoothoot credentials via a certain c 150 value.",
          cvssCategoryEstimate: "MEDIUM",
          cvssScore: 7.4,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2022-31460",
        mentions: [
          {
            text: "CVE-2022-31460",
          },
        ],
        label: "CVE-2022-31460",
      },
      {
        vulnerabilityInfo: {
          description:
            "Owl Labs Meeting Owl 5.2.0.15 allows attackers to retrieve the passcode hash via a certain c 10 value over Bluetooth.",
          cvssCategoryEstimate: "MEDIUM",
          cvssScore: 6.5,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2022-31459",
        mentions: [
          {
            text: "CVE-2022-31459",
          },
        ],
        label: "CVE-2022-31459",
      },
      {
        vulnerabilityInfo: {
          description:
            "Owl Labs Meeting Owl 5.2.0.15 allows attackers to deactivate the passcode protection mechanism via a certain c 11 message.",
          cvssCategoryEstimate: "MEDIUM",
          cvssScore: 6.5,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2022-31461",
        mentions: [
          {
            text: "CVE-2022-31461",
          },
        ],
        label: "CVE-2022-31461",
      },
      {
        vulnerabilityInfo: {
          description:
            "Owl Labs Meeting Owl 5.2.0.15 allows attackers to control the device via a backdoor password (derived from the serial number) that can be found in Bluetooth broadcast data.",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 8.8,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2022-31462",
        mentions: [
          {
            text: "CVE-2022-31462",
          },
        ],
        label: "CVE-2022-31462",
      },
      {
        vulnerabilityInfo: {
          description:
            "Owl Labs Meeting Owl 5.2.0.15 does not require a password for Bluetooth commands, because only client-side authentication is used.",
          cvssCategoryEstimate: "HIGH",
          cvssScore: 7.1,
          hasExploit: true,
          hasPatch: true,
          trending: false,
        },
        id: "vulnerability/m/entity/CVE-2022-31463",
        mentions: [
          {
            text: "CVE-2022-31463",
          },
        ],
        label: "CVE-2022-31463",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        id: "nlp/f/entity/wd:1406",
        label: "Microsoft Windows",
        mentions: [
          {
            text: "windows",
          },
          {
            text: "microsoft windows",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/wd:5205058",
        label: "Cybersecurity and Infrastructure Security Agency",
        mentions: [
          {
            text: "cisa",
          },
          {
            text: "cybersecurity and infrastructure security agency",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:jetbrains",
        label: "JetBrains",
        mentions: [
          {
            text: "JetBrains",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:49",
        label: "North America",
        mentions: [
          {
            text: "the U.S.",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:30",
        label: "United States",
        mentions: [
          {
            text: "the U.S.",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:microsoft",
        label: "Microsoft",
        mentions: [
          {
            text: "Microsoft",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "consumerGood",
        id: "nlp/f/entity/wd:11261",
        label: "Microsoft Word",
        mentions: [
          {
            text: "microsoft",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        id: "nlp/f/entity/wd:4050768",
        label: "TeamCity",
        mentions: [
          {
            text: "teamcity",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "consumerGood",
        id: "nlp/f/entity/wd:6382043",
        label: "KeY",
        mentions: [
          {
            text: "key",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: false,
        type: "org",
        id: "nlp/f/entity/wd:7455660",
        label: "Service",
        mentions: [
          {
            text: "service",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-5e29b093-294e-49e9-a803-dab3d73b77dd",
        label: "Privilege Escalation (Enterprise TA0004)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-b21c3b2d-02e6-45b1-980b-e69051040839",
            label: "Exploitation for Privilege Escalation (Enterprise T1068)",
          },
        ],
        mentions: [
          {
            text: "Privilege Escalation",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:twitter",
        label: "Twitter, Inc.",
        mentions: [
          {
            text: "Twitter",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:linkedin",
        label: "LinkedIn",
        mentions: [
          {
            text: "LinkedIn",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "consumerGood",
        id: "nlp/f/entity/wd:8795",
        label: "Internet Protocol",
        mentions: [
          {
            text: "ip",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-b21c3b2d-02e6-45b1-980b-e69051040839",
        label: "Exploitation for Privilege Escalation (Enterprise T1068)",
        mentions: [
          {
            text: "Privilege Escalation Vulnerability",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
        label: "Exploitation for Client Execution (Enterprise T1203)",
        mentions: [
          {
            text: "vulnerability \nthat allows for remote code execution",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:finance-industry-companies",
        label: "Finance Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:twitter",
            label: "Twitter, Inc.",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:big-tech-industry-companies",
        label: "Big Tech Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:microsoft",
            label: "Microsoft",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi:x-mitre-tactic-4ca45d45-df4d-4613-8980-bac22d278fa5",
        label: "Execution (Enterprise TA0002)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
            label: "Exploitation for Client Execution (Enterprise T1203)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "mitreAttack",
        id: "nlp/f/entity/gz:mi-any",
        label: "Tactics and Techniques (Mitre ATT&CK)",
        causes: [
          {
            id: "nlp/f/entity/gz:mi:x-mitre-tactic-5e29b093-294e-49e9-a803-dab3d73b77dd",
            label: "Privilege Escalation (Enterprise TA0004)",
          },
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-b21c3b2d-02e6-45b1-980b-e69051040839",
            label: "Exploitation for Privilege Escalation (Enterprise T1068)",
          },
          {
            id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
            label: "Exploitation for Client Execution (Enterprise T1203)",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added two security flaws to its Known Exploited Vulnerabilities ( KEV ) catalog due to active exploitation, while removing five bugs from the list due to lack of adequate evidence.",
        },
        {
          text: "On the other hand, CVE-2023-28229 is a high-severity flaw in the Microsoft Windows Cryptographic Next Generation (CNG) Key Isolation Service that allows an attacker to gain specific limited SYSTEM privileges.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/33a03043e654dd189ee12145395a66c4/stix2.1-20231005.030016.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/33a03043e654dd189ee12145395a66c4/misp-20231005.030016.all-ioc.json",
        },
      ],
      mentions: [],
    },
    attackNavigator: {
      ttpCount: 2,
      url: "https://exports.feedly.com/attacks/e88594ac720a77b5057b6c47378c8178/feedly-ai-cisa-warns-of-active-exploitation-of-jetbrains-and.json",
    },
    engagement: 51,
    engagementRate: 0.66,
  },
  {
    fingerprint: "944dcb4a",
    language: "en",
    id: "iJsgu1DRIkYZoeZgqPqgAhWJiN0n5njLRUb77oDapDY=_18afe5909da:1ea515:cee8d097",
    originId: "tag:theregister.com,2005:story229996",
    recrawled: 1696493131370,
    updateCount: 1,
    origin: {
      htmlUrl: "https://www.theregister.com/security/",
      title: "The Register – Security",
      streamId: "feed/http://www.theregister.co.uk/security/headlines.atom",
    },
    title: "South Korea accuses North of Phish and Ships attack",
    author: "Laura Dobberstein",
    crawled: 1696484362714,
    published: 1696483747000,
    updated: 1696492852000,
    alternate: [
      {
        href: "https://go.theregister.com/feed/www.theregister.com/2023/10/05/north_korea_phishing_attack_on_south/",
        type: "text/html",
      },
    ],
    summary: {
      content:
        "<h4>Kim Jong-un looks at industry's progress with green eyes, says South Korea's spy agency</h4> <p>South Korea's National Intelligence Service (NIS) has warned North Korea is attacking its shipbuilding sector.…</p>",
      direction: "ltr",
    },
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://regmedia.co.uk/2020/12/15/shutterstock_ship.jpg",
      contentType: "image/jpeg",
      width: 1200,
      height: 900,
      expirationDate: 1699085136717,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/eesO0_6dvagg24o-T5j9nNZidTz1TiFjBHTky-ICHHMQg-Z21Fbu27-4alisjNdrcaLpWj1S__78tW_UoT2SpuA8j9dO2vNYVbhw0rU",
    },
    canonicalUrl:
      "https://www.theregister.com/2023/10/05/north_korea_phishing_attack_on_south/",
    ampUrl:
      "https://www.theregister.com/AMP/2023/10/05/north_korea_phishing_attack_on_south/",
    cdnAmpUrl:
      "https://www-theregister-com.cdn.ampproject.org/c/s/www.theregister.com/AMP/2023/10/05/north_korea_phishing_attack_on_south/",
    fullContent:
      '<div><body><div><div id="body">\n<p>South Korea\'s National Intelligence Service (NIS) has warned North Korea is attacking its shipbuilding sector.</p>\n<p>"Security recently reported that North Korea has targeted our shipbuilding companies to strengthen its naval military power," <a target="_blank" href="https://www.nis.go.kr:4016/resources/synap/skin/doc.html?fn=NIS_FILE_1696403626891">explained</a> [PDF] the intelligence agency, via machine translation.</p>\n<p>According to the alert, the attacks were launched in August and September,with phishing emails sent to maritime industry employees and IT contractors. As ever, clicking on the mails deployment of malicious code.</p>\n\n    \n\n<p>NIS suggested the attacks were likely at North Korean leader Kim Jong-un\'s direction as he wants inteligence that will help his Navy build medium to large ships.</p>\n\n        \n\n<p>The hermit kingdom\'s leader <a target="_blank" href="https://www.reuters.com/world/asia-pacific/north-korea-says-it-staged-tactical-nuclear-attack-drill-2023-09-02/">reportedly</a> declared last month he wanted to "set forth an important modernization" of the Pukjung Machine Complex – a facility that produces marine engines, and to alter "the development direction of the shipbuilding industry."</p>\n<p>NIS has warned the relevant companies, and warned that attacks on the industry are expected to continue on shipbuilders and component manufacturers.</p>\n\n<p>Kim Jong-un\'s tyrant cabal <a target="_blank" href="https://www.reuters.com/article/northkorea-missiles-cybercrime-idINKBN1D00EZ">reportedly</a> succeeded with similar tactics in 2017, when South Korean warship and submarine builder Daewoo Shipbuilding &amp; Marine Engineering (DSME) allegedly sufffered theft of warship blueprints.</p>\n<p>In other news from the Peninsula, South Korean and US authorities are <a target="_blank" href="https://en.yna.co.kr/view/AEN20231005004800315?section=news">monitoring</a> North Korea to determine if it has halted nuclear reactor operations at its Yongbyon nuclear complex. Intelligence has detected signs that electricity production has stopped, which may indicate North Korea is reprocessing spent fuel rods in an attempt to recover plutonium for weapons. ®</p>                                \n<p> </p>\n\n                    </div>\n\n\n\n                            </div></body></div>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    analysisFeedbackPrompt: {
      type: "topic",
      confidence: 0.688,
      topic: {
        id: "nlp/f/topic/899",
        label: "Foreign Policy",
      },
      confidenceLevel: "unsure",
    },
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/960",
        score: 0.982,
        label: "Geopolitics",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/3040",
        score: 39.4986725902724,
        label: "Crime",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1466",
        score: 0.872,
        label: "Military",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1544",
        score: 0.871,
        label: "Navy",
        salienceLevel: "about",
      },
    ],
    featuredMeme: {
      id: "topic/f/meme/2e12939a-62ee-11ee-81b9-26dba75314f1",
      score: 1.0,
      label: "North Korea shipbuilders",
      featured: true,
    },
    clusters: [
      {
        id: "topic/f/meme/2e12939a-62ee-11ee-81b9-26dba75314f1",
      },
    ],
    duplicates: [
      {
        entryId:
          "wBPYzCbaSCG+OvDIrSVufxSuBy764QUt9gfRU+iI9Jk=_18b006294fc:bde62:a4fdcf0e",
        feedId: "feed/http://packetstormsecurity.org/headlines.xml",
        feedTitle: "News ≈ Packet Storm",
        unread: true,
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: 'The hermit kingdom\'s leader reportedly declared last month he wanted to "set forth an important modernization" of the Pukjung Machine Complex – a facility that produces marine engines, and to alter "the development direction of the shipbuilding industry." ',
        },
        {
          text: "NIS suggested the attacks were likely at North Korean leader Kim Jong-un's direction as he wants inteligence that will help his Navy build medium to large ships.",
        },
      ],
    },
    indicatorsOfCompromise: {
      mentions: [],
      exports: [
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/a8ff24393146a0277685f7609f2de4f2/misp-20231004.223922.all-ioc.json",
        },
      ],
    },
    engagement: 16,
    engagementRate: 0.89,
  },
  {
    fingerprint: "4ffb744f",
    language: "en",
    id: "GMj7uLpm4IPOOx5kU64zxGBMiBD17Xf8SvoEADZo/gQ=_18afd2c0650:3196f3:a4fdcf0e",
    originId:
      "https://www.darkreading.com/edge/insurance-companies-have-a-lot-to-lose-in-cyberattacks",
    origin: {
      htmlUrl: "https://www.darkreading.com",
      streamId: "feed/http://www.darkreading.com/rss/all.xml",
      title: "Dark Reading",
    },
    title: "Insurance Companies Have a Lot to Lose in Cyberattacks",
    author: "Stephen Lawton, Contributing Writer",
    crawled: 1696464635472,
    published: 1696464360000,
    alternate: [
      {
        type: "text/html",
        href: "https://www.darkreading.com/edge/insurance-companies-have-a-lot-to-lose-in-cyberattacks",
      },
    ],
    summary: {
      content:
        "Not only do insurance companies collate sensitive information from their clients, but they also generate their own corporate data to protect.",
      direction: "ltr",
    },
    enclosure: [
      {
        type: "image/*",
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt1433982ef5eca2a1/651dfd7c6f5d5d8c9ea25cac/insuranceload-Bordeianu_Andrei-alamy.jpg",
      },
      {
        type: "image/*",
        href: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/bltd3941643ea87865b/628d1dcaef83f961a70e4205/stephen-lawton.png",
        length: 0,
      },
    ],
    visual: {
      processor: "feedly-nikon-v3.1",
      url: "https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt1433982ef5eca2a1/651dfd7c6f5d5d8c9ea25cac/insuranceload-Bordeianu_Andrei-alamy.jpg",
      contentType: "image/jpeg",
      width: 1200,
      height: 800,
      expirationDate: 1699056659629,
      edgeCacheUrl:
        "https://lh3.googleusercontent.com/svmFRgLq0iZPdPlFwlOob5yaawFrZuw7OXD95wfMGVBGe85EssPHQ8O2YncXgJDOeqTUHY1VY7w_gMHG3qfnLiTBoKiacbW8ZUOsJdQ",
    },
    canonicalUrl:
      "https://www.darkreading.com/edge/insurance-companies-have-a-lot-to-lose-in-cyberattacks",
    fullContent:
      '<div><body><img src="https://eu-images.contentstack.com/v3/assets/blt66983808af36a8ef/blt1433982ef5eca2a1/651dfd7c6f5d5d8c9ea25cac/insuranceload-Bordeianu_Andrei-alamy.jpg"> <br>Insurance companies have a huge target on their proverbial backs as cyber attackers increase their focus on an industry ripe with personal, medical, corporate, and other confidential data that can be monetized after a data breach.In 2023 alone, multiple insurance companies have been targeted, including Sun Life in June via an attack on its vendor Pension Benefits Information LLC; Prudential Insurance in May, in which more than 320,000 customer accounts were impacted; New York Life Insurance Company, which had 25,700 accounts affected during the same days period as the Prudential attack; and Genworth Financial, which had up to 2.7 million individuals affected. All of these insurance companies were victims of the MOVEit file transfer cyberattack.Aside from MOVEit, other common ransomware attacks also targeted the insurance industry. Point32Health, the parent company of Harvard Pilgrim Health Care and Tufts Health Plan, was hit by a ransomware attack in April, while NationsBenefits reported that it was a victim of the Cl0p ransomware gang. The largest US attack on an insurance company compromised 9 million patients of Managed Care of North America (MCNA) Dental, a victim of the LockBit attack.Consulting firm Deloitte noted, "Cyber-attacks in the insurance sector are growing exponentially as insurance companies migrate toward digital channels in an effort to create tighter customer relationships, offer new products and expand their share of customers\' financial portfolios. This shift is driving increased investment in traditional core IT systems (e.g., policy and claims systems) as well as in highly integrated enabling platforms such as agency portals, online policy applications and web- and mobile-based apps for filing claims."The firm added, "As insurers find new and innovative ways to analyze data, they must also find ways to secure the data from cyber-attacks."Applications Reveal a LotThe reasons insurance brokers and carriers are now in the hotseat are varied, as Deloitte noted, but several stand out as key motives. While the most mundane is the profitability of obtaining personally identifiable information and personal health information for resale, there are more nefarious inducements to attack insurers. For example, insurance applications.The amount of private, corporate data that appears on an insurance application could be a bonanza to cyber attackers, says Marc Schein, national co-chair of the Cyber Risk Practice and a risk management consultant at Marsh McLennan Agency, an insurance broker. Schein notes that applications include a vast array of potentially useful information, including the amount of insurance a company is purchasing (ransomware attackers do not want to leave money on the table when they demand a ransom) as well as some of the deficiencies a company might have in its network security.Schein points out that other insurance products, such as errors and omissions policies or directors and officers policies, could provide valuable information about trade secrets, private information of key company executives, and data about potential business transactions.Patricia Titus is chief privacy and information security officer at Markel Insurance, a carrier that underwrites its own assurance, specialty, and international policies. She agrees that applications can provide a deep understanding of a company\'s technology profile.Insurance applications can identify technology debt, Titus says — unpatched software, outdated hardware that might be past the manufacturer\'s security or software patches, legacy systems that could represent potential security vulnerabilities, and other deficiencies a company might have in its network security. These vulnerabilities could be exploited by attackers.All Sides of Insurance Transactions Are VulnerableIt is not only insurance clients that need to evaluate their cybersecurity infrastructure, Titus points out. Markel is looking at ways it can better protect its own data, as well as that of its clients.In Markel\'s case, Titus says, the company is looking at technologies that could do a better job of microsegmenting its networks, limiting the ability of attackers to move laterally through the network should they successfully breach the corporate defenses. Moving laterally, she notes, is the greatest advantage an attack can have if they can find a hole into a network.Human data always is interesting to cyber attackers, Titus adds. Should the attacker be able to access insurance applications or approved policies, they can learn a great deal about potential targets. Individuals and companies alike need to insure high-value luxury items, such as antiques. However, enterprises also insure trade secrets (think of the recipe of Coca-Cola, for example) that cannot be made public through patents, private data about executives and officers, and errors and omissions that might occur during business transactions. Ultimately, there is a vast array of data companies protect that can be identified and compromised should their insurance policies or applications be breached.Schein recommends that companies submitting an insurance application send encrypted files only so that anything intercepted during transmission cannot be read by the attacker.</body></div>',
    unread: true,
    categories: [
      {
        id: "enterprise/omegaconsulting/category/8b751c51-34b7-4e10-9ddc-7fdc08e26746",
        label: "Cyber",
      },
    ],
    commonTopics: [
      {
        type: "topic",
        id: "nlp/f/topic/3003",
        score: 1.0,
        label: "Cyber Security",
        salienceLevel: "about",
      },
      {
        type: "industryTopic",
        id: "nlp/f/topic/4020",
        score: 1.0,
        label: "Insurance Industry",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1176",
        score: 121.13175693386786,
        label: "Insurance",
        salienceLevel: "about",
      },
      {
        type: "topic",
        id: "nlp/f/topic/1025",
        score: 0.976,
        label: "Hacking",
        salienceLevel: "about",
      },
      {
        type: "technology",
        id: "nlp/f/topic/1177",
        score: 0.992,
        label: "Insurtech",
        salienceLevel: "about",
      },
    ],
    entities: [
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:49",
        label: "North America",
        mentions: [
          {
            text: "North America",
          },
          {
            text: "US",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "location",
        id: "nlp/f/entity/gz:loc:30",
        label: "United States",
        mentions: [
          {
            text: "US",
          },
        ],
        salienceLevel: "about",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:markel-corporation",
        label: "Markel Group",
        mentions: [
          {
            text: "Markel",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit (Windows)",
        mentions: [
          {
            text: "LockBit",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        mentions: [
          {
            text: "LockBit",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        mentions: [
          {
            text: "LockBit",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:prudential-plc",
        label: "Prudential",
        mentions: [
          {
            text: "Prudential",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:83f9d8bf-3457-4591-9845-4770fc01b607",
        label: "MOVEit",
        mentions: [
          {
            text: "MOVEit",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:new-york-life-insurance-company",
        label: "New York Life Insurance Company",
        mentions: [
          {
            text: "New York Life Insurance Company",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:the-coca-cola-company",
        label: "The Coca-Cola Company",
        mentions: [
          {
            text: "Coca-Cola",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:mal:3d11ec52-9ca8-4d83-99d4-6658f306e8e4",
        label: "Clop (Linux)",
        mentions: [
          {
            text: "Cl0p",
          },
        ],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:fortune-500-companies",
        label: "Fortune 500 Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:markel-corporation",
            label: "Markel Group",
          },
          {
            id: "nlp/f/entity/gz:org:the-coca-cola-company",
            label: "The Coca-Cola Company",
          },
          {
            id: "nlp/f/entity/gz:org:new-york-life-insurance-company",
            label: "New York Life Insurance Company",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:beverage-industry-companies",
        label: "Beverage Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:the-coca-cola-company",
            label: "The Coca-Cola Company",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:food-industry-companies",
        label: "Food Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:the-coca-cola-company",
            label: "The Coca-Cola Company",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "org",
        id: "nlp/f/entity/gz:org:insurance-industry-companies",
        label: "Insurance Companies",
        causes: [
          {
            id: "nlp/f/entity/gz:org:markel-corporation",
            label: "Markel Group",
          },
          {
            id: "nlp/f/entity/gz:org:prudential-plc",
            label: "Prudential",
          },
          {
            id: "nlp/f/entity/gz:org:new-york-life-insurance-company",
            label: "New York Life Insurance Company",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
      {
        disambiguated: true,
        type: "malwareFamily",
        id: "nlp/f/entity/gz:ransomware",
        label: "Ransomware",
        causes: [
          {
            id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
            label: "LockBit",
          },
          {
            id: "nlp/f/entity/gz:mal:83f9d8bf-3457-4591-9845-4770fc01b607",
            label: "MOVEit",
          },
          {
            id: "nlp/f/entity/gz:mal:3d11ec52-9ca8-4d83-99d4-6658f306e8e4",
            label: "Clop",
          },
        ],
        mentions: [],
        salienceLevel: "mention",
      },
    ],
    leoSummary: {
      sentences: [
        {
          text: "For example, insurance applications.The amount of private, corporate data that appears on an insurance application could be a bonanza to cyber attackers, says Marc Schein, national co-chair of the Cyber Risk Practice and a risk management consultant at Marsh McLennan Agency, an insurance broker.",
        },
        {
          text: "The largest US attack on an insurance company compromised 9 million patients of Managed Care of North America (MCNA) Dental, a victim of the LockBit attack.Consulting firm Deloitte noted, \"Cyber-attacks in the insurance sector are growing exponentially as insurance companies migrate toward digital channels in an effort to create tighter customer relationships, offer new products and expand their share of customers' financial portfolios.",
        },
      ],
    },
    indicatorsOfCompromise: {
      exports: [
        {
          type: "stix2.1",
          url: "https://exports.feedly.com/ioc/952bad1e7147ece9edc14674bf61c918/stix2.1-20231004.171035.all-ioc.json",
        },
        {
          type: "misp",
          url: "https://exports.feedly.com/ioc/952bad1e7147ece9edc14674bf61c918/misp-20231004.171035.all-ioc.json",
        },
      ],
      mentions: [],
    },
    engagement: 28,
    engagementRate: 0.76,
  },
];

export const mockThreats: FeedlyThreat[] = [
  {
    actors: [],
    delta: 3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fbba1c00-9c63-4a0f-9a65-e766df904ff3",
        label: "BiBi",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 8,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-f5d8eed6-48a9-4cdf-a3d7-d1ffa99c3d2a",
      label: "Inhibit System Recovery (Enterprise T1490)",
      mitreId: "T1490",
      name: "Inhibit System Recovery",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:a1315451-326f-4185-8d71-80f9243f395f",
        label: "GhostSec",
        type: "threatActor",
      },
    ],
    delta: -11,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0cc978bb-b6d2-42fc-a88f-1c5673b0d973",
        label: "Babuk ()",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:26b4d805-890b-4767-9d9f-a08adeee1c96",
        label: "Babuk (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:3e243686-a0a0-4aff-b149-786cc3f99a84",
        label: "Babuk (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8aa3a91c-6e03-43be-8be4-24c62a314ba8",
        label: "Backmydata",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fbba1c00-9c63-4a0f-9a65-e766df904ff3",
        label: "BiBi",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:35c86fef-18fe-491c-ad3c-13f98e8f5584",
        label: "Black Basta (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cfb95b38-e9b9-4592-90f5-4b7a1d85fbf9",
        label: "Black Basta (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2ff26425-93b6-46ad-9c39-28eb9dbc3974",
        label: "Cactus",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:3d11ec52-9ca8-4d83-99d4-6658f306e8e4",
        label: "Clop (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8071f2d8-cc44-4682-845b-6f39a9f8b587",
        label: "Clop (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c1ab8323-ce61-409a-80f3-b945c8ffcd42",
        label: "Conti (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c9dca6f3-2a84-4abe-8f33-ccb7a7a0246c",
        label: "Conti (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c5a783da-9ff3-4427-84c5-428480b21cc7",
        label: "CryptoLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2d4d7ea1-d30b-4a2b-8984-2b570fe0cc14",
        label: "Jasmin",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e6740704-0b01-43e2-adad-c5ad36c6c522",
        label: "LockBit 3.0",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f155e529-dbea-4e4d-9df3-518401191c82",
        label: "Medusa (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:237a1c2d-eb14-483d-9a2e-82f10b63ec06",
        label: "Medusa (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:77e7221f-d3db-4d13-bcde-e6d7a494f424",
        label: "MedusaLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:5f96787e-fc9f-486b-a15f-f46c8179a4d5",
        label: "RagnarLocker (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:33f55172-873b-409e-a09b-97ac1301b036",
        label: "RagnarLocker (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d9d76456-01a3-4dcd-afc2-87529e00c1ba",
        label: "REvil (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e7698597-e0a9-4f4b-9920-09f5db225bd4",
        label: "REvil (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:b326739f-e01b-4562-b2a3-d80b1f9e151a",
        label: "Rhysida",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1dbd7cbb-960d-4ef4-9520-1748fb7cd4c6",
        label: "Rhysida (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f58b4f63-63f1-45bf-831f-2f5a37d32113",
        label: "ScreenConnect",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ad67ff31-2a02-43f9-8b12-7df7e4fcccd6",
        label: "WannaCryptor",
        type: "malwareFamily",
      },
    ],
    nArticles: 64,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-851e071f-208d-4c79-adc6-5974c85c78f3",
      label: "Financial Theft (Enterprise T1657)",
      mitreId: "T1657",
      name: "Financial Theft",
    },
  },
  {
    actors: [],
    delta: 3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8abdd40c-d79a-4353-80e3-29f8a4229a37",
        label: "BabyShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:06e5e678-8660-43c8-ad8f-a9e3257f5f4b",
        label: "GTPDOOR",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:992151e9-2d4d-4621-9a2e-f2219f97e55b",
        label: "Pikabot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 8,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-3ccef7ae-cb5e-48f6-8302-897105fbf55c",
      label: "Deobfuscate/Decode Files or Information (Enterprise T1140)",
      mitreId: "T1140",
      name: "Deobfuscate/Decode Files or Information",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-24bfaeba-cb0d-4525-b3dc-507c77ecec41",
      label: "Symmetric Cryptography (Enterprise T1573.001)",
      mitreId: "T1573.001",
      name: "Symmetric Cryptography",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 7,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:06e5e678-8660-43c8-ad8f-a9e3257f5f4b",
        label: "GTPDOOR",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 8,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-b8902400-e6c5-4ba2-95aa-2d35b442b118",
      label: "Encrypted Channel (Enterprise T1573)",
      mitreId: "T1573",
      name: "Encrypted Channel",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:5b4ee3ea-eee3-4c8e-8323-85ae32658754",
        label: "APT28",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 48,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8abdd40c-d79a-4353-80e3-29f8a4229a37",
        label: "BabyShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8d9987a8-3f1e-4ee2-865d-b1449eaf2e22",
        label: "BadUSB",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:a43919b9-d766-4ce5-9030-df3de0a5d7d7",
        label: "CronRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e3fbde98-4435-4f5b-8166-b454092b048e",
        label: "FAKEUPDATES",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:06e5e678-8660-43c8-ad8f-a9e3257f5f4b",
        label: "GTPDOOR",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ae25953d-cf7c-4304-9ea2-2ea1498ea035",
        label: "Hydra",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:42562c47-08e1-46bc-962c-28d1831d092b",
        label: "NetSupportManager RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:a81635fc-7bb7-4cd1-b26c-ea8ce6cb2763",
        label: "Nitro (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d8734d79-8718-4034-9af2-ffff37af9666",
        label: "Nood",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:dca0dc02-8477-4b6f-8cf7-072d994d2c80",
        label: "Predator",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:913d3007-9c2b-4c1c-b3a6-2ecb736bc338",
        label: "RedCurl",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff18a858-7778-485c-949b-d28d867d1ffb",
        label: "RedLine Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cbb4cfd8-3642-4b04-a199-8e9b4b80fb62",
        label: "RedRum",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:135ce3db-a242-4f81-844a-cf03eb72c291",
        label: "RemCom",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2261f656-9ad0-4eab-bc9c-5e5cc3597bf7",
        label: "Script",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:31592c69-d540-4617-8253-71ae0c45526c",
        label: "SpyNote",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 61,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-7385dfaf-6886-4229-9ecd-6fd678040830",
      label: "Command and Scripting Interpreter (Enterprise T1059)",
      mitreId: "T1059",
      name: "Command and Scripting Interpreter",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-8f4a33ec-8b1f-4b80-a2f6-642b2e479580",
      label: "Process Discovery (Enterprise T1057)",
      mitreId: "T1057",
      name: "Process Discovery",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:2fa2be52-e44f-4998-bde7-c66cfb6f4521",
        label: "AMOS",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:992151e9-2d4d-4621-9a2e-f2219f97e55b",
        label: "Pikabot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:50d322d7-c7e0-4d9b-9996-e5767caa8f1c",
        label: "Rhadamanthys",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-82caa33e-d11a-433a-94ea-9b5a5fbef81d",
      label: "Virtualization/Sandbox Evasion (Enterprise T1497)",
      mitreId: "T1497",
      name: "Virtualization/Sandbox Evasion",
    },
  },
  {
    actors: [],
    delta: 5,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:56e2ea3a-1517-429c-b71a-12f83b1e15a1",
        label: "Fakext",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e4dc8c01-417f-458d-9ee0-bb0617c1b391",
      label: "Debugger Evasion (Enterprise T1622)",
      mitreId: "T1622",
      name: "Debugger Evasion",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:e62937d0-dec6-4c39-a836-e43b1d138df4",
        label: "NoName057(16)",
        type: "threatActor",
      },
    ],
    delta: 8,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:81917a93-6a70-4334-afe2-56904c1fafe9",
        label: "Bashlite",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8fa6dd0e-b630-419f-bd01-5271dd8f27c6",
        label: "Bifrost",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8119b6e4-b29c-4a1f-b98f-19d93ae5f215",
        label: "Dosia",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:42562c47-08e1-46bc-962c-28d1831d092b",
        label: "NetSupportManager RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d8734d79-8718-4034-9af2-ffff37af9666",
        label: "Nood",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2ccaccd0-8362-4224-8497-2012e7cc7549",
        label: "QakBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:05252643-093b-4070-b62f-d5836683a9fa",
        label: "Quasar RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 20,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-b3d682b6-98f2-4fb0-aa3b-b4df007ca70a",
      label: "Obfuscated Files or Information (Enterprise T1027)",
      mitreId: "T1027",
      name: "Obfuscated Files or Information",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
    ],
    delta: 11,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f53e404b-0dcd-4116-91dd-cad94fc41936",
        label: "magecart",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:669fd4ad-e9fb-4d96-b1a3-fe368a2ce359",
        label: "SiteCheck",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6ad84f52-0025-4a9d-861a-65c870f47988",
        label: "Stuxnet",
        type: "malwareFamily",
      },
    ],
    nArticles: 11,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-43e7dc91-05b2-474c-b9ac-2ed4fe101f4d",
      label: "Process Injection (Enterprise T1055)",
      mitreId: "T1055",
      name: "Process Injection",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 10,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:b88e29cf-79d9-42bc-b369-0383b5e04380",
        label: "Agent Tesla",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fb1c6035-42ee-403c-a2ae-a53f7ab2de00",
        label: "AllaKore",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:47e5df57-f0a8-41f9-bcaa-b9f90d094e7d",
        label: "RSOCKS",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
    ],
    nArticles: 15,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
      label: "Spearphishing Attachment (Enterprise T1566.001)",
      mitreId: "T1566.001",
      name: "Spearphishing Attachment",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 21,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:32e9c2ce-08a6-47ee-8636-ea83711930b1",
        label: "SapphireMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e1b2b792-033a-438d-a9c4-4d2adf1abb43",
        label: "SapphireStealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:77af876d-84c5-4da3-a2b0-2fe5c77f758c",
        label: "TargetCompany",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0266c594-75fe-499b-8aac-400a4cf0d29f",
        label: "ToddleShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 22,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-354a7f88-63fb-41b5-a801-ce3b377b36f1",
      label: "System Information Discovery (Enterprise T1082)",
      mitreId: "T1082",
      name: "System Information Discovery",
    },
  },
  {
    actors: [],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:e5600185-39b7-49a0-bd60-a6806c7d47dd",
        label: "Chisel (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fbfbbcbc-6730-4c4d-9ece-9b72802d42e9",
        label: "Chisel (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:06e5e678-8660-43c8-ad8f-a9e3257f5f4b",
        label: "GTPDOOR",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1cff5fa1-e9d6-4e59-8840-44b2cc254b3c",
        label: "Tinyshell",
        type: "malwareFamily",
      },
    ],
    nArticles: 10,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-4fe28b27-b13c-453e-a386-c2ef362a573b",
      label: "Protocol Tunneling (Enterprise T1572)",
      mitreId: "T1572",
      name: "Protocol Tunneling",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:5b4ee3ea-eee3-4c8e-8323-85ae32658754",
        label: "APT28",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
    ],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cb145003-727c-4b3c-84af-131345ad3e2e",
        label: "EvilProxy",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:dca0dc02-8477-4b6f-8cf7-072d994d2c80",
        label: "Predator",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cbb4cfd8-3642-4b04-a199-8e9b4b80fb62",
        label: "RedRum",
        type: "malwareFamily",
      },
    ],
    nArticles: 15,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-035bb001-ab69-4a0b-9f6c-2de8b09e1b9d",
      label: "Adversary-in-the-Middle (Enterprise T1557)",
      mitreId: "T1557",
      name: "Adversary-in-the-Middle",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:5b4ee3ea-eee3-4c8e-8323-85ae32658754",
        label: "APT28",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:3b238f3a-c67a-4a9e-b474-dc3897e00129",
        label: "Scattered Spider",
        type: "threatActor",
      },
    ],
    delta: 12,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fb1c6035-42ee-403c-a2ae-a53f7ab2de00",
        label: "AllaKore",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c94c4f23-20d1-4858-8f94-01a54b213981",
        label: "AsyncRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8abdd40c-d79a-4353-80e3-29f8a4229a37",
        label: "BabyShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:81917a93-6a70-4334-afe2-56904c1fafe9",
        label: "Bashlite",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:4b105625-1bd6-4104-ac5f-4808859c1627",
        label: "BlueKeep",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d9ff080d-cde0-48da-89db-53435c99446b",
        label: "BRATA",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:3d11ec52-9ca8-4d83-99d4-6658f306e8e4",
        label: "Clop (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8071f2d8-cc44-4682-845b-6f39a9f8b587",
        label: "Clop (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c1ab8323-ce61-409a-80f3-b945c8ffcd42",
        label: "Conti (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c9dca6f3-2a84-4abe-8f33-ccb7a7a0246c",
        label: "Conti (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:4610786e-bee7-4fc2-9e3a-4b49da4712d1",
        label: "Copybara",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:24808197-d6a6-420c-863c-457caaa335d3",
        label: "CopyCat",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cb145003-727c-4b3c-84af-131345ad3e2e",
        label: "EvilProxy",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:121615cb-39ca-48bd-85fb-b74bcfe40a2c",
        label: "Fake-SMS",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:13c5f597-d7e4-41c7-8143-060a024a9cac",
        label: "Phemedrone Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:992151e9-2d4d-4621-9a2e-f2219f97e55b",
        label: "Pikabot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:dca0dc02-8477-4b6f-8cf7-072d994d2c80",
        label: "Predator",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2ccaccd0-8362-4224-8497-2012e7cc7549",
        label: "QakBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cbb4cfd8-3642-4b04-a199-8e9b4b80fb62",
        label: "RedRum",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:50d322d7-c7e0-4d9b-9996-e5767caa8f1c",
        label: "Rhadamanthys",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:16dcc67b-4415-4620-818d-7ca24a5ccaf5",
        label: "RokRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:32e9c2ce-08a6-47ee-8636-ea83711930b1",
        label: "SapphireMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e1b2b792-033a-438d-a9c4-4d2adf1abb43",
        label: "SapphireStealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c273b97c-53b5-4762-8b3c-54706b3bb10a",
        label: "Wolf GPT",
        type: "malwareFamily",
      },
    ],
    nArticles: 43,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-a62a8db3-f23a-4d8f-afd6-9dbc77e7813b",
      label: "Phishing (Enterprise T1566)",
      mitreId: "T1566",
      name: "Phishing",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:5b4ee3ea-eee3-4c8e-8323-85ae32658754",
        label: "APT28",
        type: "threatActor",
      },
    ],
    delta: 18,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:4b105625-1bd6-4104-ac5f-4808859c1627",
        label: "BlueKeep",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e3fbde98-4435-4f5b-8166-b454092b048e",
        label: "FAKEUPDATES",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:5e2ebb21-7fb0-41e6-a886-741b9cafaa6b",
        label: "Netcat",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:b326739f-e01b-4562-b2a3-d80b1f9e151a",
        label: "Rhysida",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1dbd7cbb-960d-4ef4-9520-1748fb7cd4c6",
        label: "Rhysida (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
    ],
    nArticles: 24,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-eb062747-2193-45de-8fa2-e62549c37ddf",
      label: "Remote Desktop Protocol (Enterprise T1021.001)",
      mitreId: "T1021.001",
      name: "Remote Desktop Protocol",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:3b238f3a-c67a-4a9e-b474-dc3897e00129",
        label: "Scattered Spider",
        type: "threatActor",
      },
    ],
    delta: -9,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0cc978bb-b6d2-42fc-a88f-1c5673b0d973",
        label: "Babuk ()",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:26b4d805-890b-4767-9d9f-a08adeee1c96",
        label: "Babuk (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:3e243686-a0a0-4aff-b149-786cc3f99a84",
        label: "Babuk (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c5a783da-9ff3-4427-84c5-428480b21cc7",
        label: "CryptoLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2ab86121-7e6d-4c46-9f48-d205c850f4fd",
        label: "GoNNaCry",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:b326739f-e01b-4562-b2a3-d80b1f9e151a",
        label: "Rhysida",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1dbd7cbb-960d-4ef4-9520-1748fb7cd4c6",
        label: "Rhysida (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:77af876d-84c5-4da3-a2b0-2fe5c77f758c",
        label: "TargetCompany",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ad67ff31-2a02-43f9-8b12-7df7e4fcccd6",
        label: "WannaCryptor",
        type: "malwareFamily",
      },
    ],
    nArticles: 30,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-b80d107d-fa0d-4b60-9684-b0433e8bdba0",
      label: "Data Encrypted for Impact (Enterprise T1486)",
      mitreId: "T1486",
      name: "Data Encrypted for Impact",
    },
  },
  {
    actors: [],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:94cc4cf1-8e3d-457c-926d-c0d75c0ba7bc",
        label: "ZarDoor",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-01a5a209-b94c-450b-b7f9-946497d91055",
      label: "Windows Management Instrumentation (Enterprise T1047)",
      mitreId: "T1047",
      name: "Windows Management Instrumentation",
    },
  },
  {
    actors: [],
    delta: 0,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-7bc57495-ea59-4380-be31-a64af124ef18",
      label: "File and Directory Discovery (Enterprise T1083)",
      mitreId: "T1083",
      name: "File and Directory Discovery",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:588fb91d-59c6-4667-b299-94676d48b17b",
        label: "MimiKatz",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 7,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-a2fdce72-04b2-409a-ac10-cc1695f4fce0",
      label: "Tool (Enterprise T1588.002)",
      mitreId: "T1588.002",
      name: "Tool",
    },
  },
  {
    actors: [],
    delta: 0,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-5372c5fe-f424-4def-bcd5-d3a8e770f07b",
      label: "Disable or Modify System Firewall (Enterprise T1562.004)",
      mitreId: "T1562.004",
      name: "Disable or Modify System Firewall",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:4b105625-1bd6-4104-ac5f-4808859c1627",
        label: "BlueKeep",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e3a12395-188d-4051-9a16-ea8e14d07b88",
      label: "Network Service Discovery (Enterprise T1046)",
      mitreId: "T1046",
      name: "Network Service Discovery",
    },
  },
  {
    actors: [],
    delta: 5,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:e3b0ed5c-4e6a-4f50-bef2-1f7112aa31ed",
        label: "NodeRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e7890226-7e39-4902-bbce-e384e0847303",
        label: "NodeStealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:50d322d7-c7e0-4d9b-9996-e5767caa8f1c",
        label: "Rhadamanthys",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 6,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-155207c0-7f53-4f13-a06b-0a9907ef5096",
      label: "Malvertising (Enterprise T1583.008)",
      mitreId: "T1583.008",
      name: "Malvertising",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-60b508a1-6a5e-46b1-821a-9f7b78752abf",
      label: "Private Keys (Enterprise T1552.004)",
      mitreId: "T1552.004",
      name: "Private Keys",
    },
  },
  {
    actors: [],
    delta: 6,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:c5a783da-9ff3-4427-84c5-428480b21cc7",
        label: "CryptoLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6c642fc7-7b98-4c29-89c0-529065d2acc4",
        label: "Denonia",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:a126a208-6269-4359-96c1-17da48283e1b",
        label: "HeadCrab",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:17e12216-a303-4a00-8283-d3fe92d0934c",
        label: "Mirai (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2edd3051-b1b5-47f2-9155-8c97f791dfb7",
        label: "Mirai (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:992151e9-2d4d-4621-9a2e-f2219f97e55b",
        label: "Pikabot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 9,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-cd25c1b4-935c-4f0e-ba8d-552f28bc4783",
      label: "Resource Hijacking (Enterprise T1496)",
      mitreId: "T1496",
      name: "Resource Hijacking",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 6,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:8abdd40c-d79a-4353-80e3-29f8a4229a37",
        label: "BabyShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2ff26425-93b6-46ad-9c39-28eb9dbc3974",
        label: "Cactus",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:56e2ea3a-1517-429c-b71a-12f83b1e15a1",
        label: "Fakext",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff18a858-7778-485c-949b-d28d867d1ffb",
        label: "RedLine Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        label: "Remcos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f58b4f63-63f1-45bf-831f-2f5a37d32113",
        label: "ScreenConnect",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1f15b789-a424-4ae4-8ff2-62c8f2f6295f",
        label: "ToddlerShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0266c594-75fe-499b-8aac-400a4cf0d29f",
        label: "ToddleShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1f44c08a-b427-4496-9d6d-909b6bf34b9b",
        label: "Vidar",
        type: "malwareFamily",
      },
    ],
    nArticles: 50,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-4061e78c-1284-44b4-9116-73e4ac3912f7",
      label: "Remote Access Software (Enterprise T1219)",
      mitreId: "T1219",
      name: "Remote Access Software",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:5b4ee3ea-eee3-4c8e-8323-85ae32658754",
        label: "APT28",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:e62937d0-dec6-4c39-a836-e43b1d138df4",
        label: "NoName057(16)",
        type: "threatActor",
      },
    ],
    delta: 13,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:8119b6e4-b29c-4a1f-b98f-19d93ae5f215",
        label: "Dosia",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:16f67545-85d0-4c6c-8b0e-cf0aa341c6df",
        label: "IZ1H9 Mirai",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:17e12216-a303-4a00-8283-d3fe92d0934c",
        label: "Mirai (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2edd3051-b1b5-47f2-9155-8c97f791dfb7",
        label: "Mirai (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:4e8c1ab7-2841-4823-a5d1-39284fb0969a",
        label: "Zeus",
        type: "malwareFamily",
      },
    ],
    nArticles: 14,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-d74c4a7e-ffbf-432f-9365-7ebf1f787cab",
      label: "Network Denial of Service (Enterprise T1498)",
      mitreId: "T1498",
      name: "Network Denial of Service",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: -3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cf1a54c7-a76f-4b12-accb-e0447b0dc51c",
        label: "FudModule",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-b21c3b2d-02e6-45b1-980b-e69051040839",
      label: "Exploitation for Privilege Escalation (Enterprise T1068)",
      mitreId: "T1068",
      name: "Exploitation for Privilege Escalation",
    },
  },
  {
    actors: [],
    delta: -9,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d99e4582-d58f-4972-86be-63807c8259c5",
        label: "BadCandy",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cf1a54c7-a76f-4b12-accb-e0447b0dc51c",
        label: "FudModule",
        type: "malwareFamily",
      },
    ],
    nArticles: 6,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-ac08589e-ee59-4935-8667-d845e38fe579",
      label: "Disable or Modify Tools (Enterprise T1562.001)",
      mitreId: "T1562.001",
      name: "Disable or Modify Tools",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:68391641-859f-4a9a-9a1e-3e5cf71ec376",
        label: "Lazarus Group",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:e62937d0-dec6-4c39-a836-e43b1d138df4",
        label: "NoName057(16)",
        type: "threatActor",
      },
    ],
    delta: -19,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:f90fae14-b531-440c-8af0-0f9913b3c47c",
        label: " libprocesshider ",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:840c44e4-cd71-4863-b776-850f48153dcd",
        label: "CAKETAP",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0b1c514d-f617-4380-a28c-a1ed305a7538",
        label: "Cloud Snooper",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8119b6e4-b29c-4a1f-b98f-19d93ae5f215",
        label: "Dosia",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cf1a54c7-a76f-4b12-accb-e0447b0dc51c",
        label: "FudModule",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:a126a208-6269-4359-96c1-17da48283e1b",
        label: "HeadCrab",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 27,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-0f20e3cb-245b-4a61-8a91-2d93f7cb0e9b",
      label: "Rootkit (Enterprise T1014)",
      mitreId: "T1014",
      name: "Rootkit",
    },
  },
  {
    actors: [],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fb1c6035-42ee-403c-a2ae-a53f7ab2de00",
        label: "AllaKore",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:05252643-093b-4070-b62f-d5836683a9fa",
        label: "Quasar RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        label: "Remcos",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-0259baeb-9f63-4c69-bf10-eb038c390688",
      label: "Screen Capture (Enterprise T1113)",
      mitreId: "T1113",
      name: "Screen Capture",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-ca9d3402-ada3-484d-876a-d717bd6e05f2",
      label: "Domain Fronting (Enterprise T1090.004)",
      mitreId: "T1090.004",
      name: "Domain Fronting",
    },
  },
  {
    actors: [],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1f44c08a-b427-4496-9d6d-909b6bf34b9b",
        label: "Vidar",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-830c9528-df21-472c-8c14-a036bf17d665",
      label: "Web Service (Enterprise T1102)",
      mitreId: "T1102",
      name: "Web Service",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 9,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:c94c4f23-20d1-4858-8f94-01a54b213981",
        label: "AsyncRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:42562c47-08e1-46bc-962c-28d1831d092b",
        label: "NetSupportManager RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:13c5f597-d7e4-41c7-8143-060a024a9cac",
        label: "Phemedrone Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:913d3007-9c2b-4c1c-b3a6-2ecb736bc338",
        label: "RedCurl",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:b326739f-e01b-4562-b2a3-d80b1f9e151a",
        label: "Rhysida",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1dbd7cbb-960d-4ef4-9520-1748fb7cd4c6",
        label: "Rhysida (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 13,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-970a3432-3237-47ad-bcca-7d8cbb217736",
      label: "PowerShell (Enterprise T1059.001)",
      mitreId: "T1059.001",
      name: "PowerShell",
    },
  },
  {
    actors: [],
    delta: 5,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6ad84f52-0025-4a9d-861a-65c870f47988",
        label: "Stuxnet",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-d63a3fb8-9452-4e9d-a60a-54be68d5998c",
      label: "File Deletion (Enterprise T1070.004)",
      mitreId: "T1070.004",
      name: "File Deletion",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6ad84f52-0025-4a9d-861a-65c870f47988",
        label: "Stuxnet",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-7f0ca133-88c4-40c6-a62f-b3083a7fbc2e",
      label: "Pre-OS Boot (Enterprise T1542)",
      mitreId: "T1542",
      name: "Pre-OS Boot",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:5b4ee3ea-eee3-4c8e-8323-85ae32658754",
        label: "APT28",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:b8967b3c-3bc9-11e8-8701-8b1ead8c099e",
        label: "APT35",
        type: "threatActor",
      },
    ],
    delta: -2,
    malwares: [],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-a10641f4-87b4-45a3-a906-92a149cb2c27",
      label: "Account Manipulation (Enterprise T1098)",
      mitreId: "T1098",
      name: "Account Manipulation",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 21,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:147081b9-7e59-4613-ad55-bbc08141fee1",
        label: "Anatsa",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c94c4f23-20d1-4858-8f94-01a54b213981",
        label: "AsyncRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d9ff080d-cde0-48da-89db-53435c99446b",
        label: "BRATA",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:149e693c-4b51-4143-9061-6a8698b0e7f5",
        label: "EvilGnome",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e3fbde98-4435-4f5b-8166-b454092b048e",
        label: "FAKEUPDATES",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:42562c47-08e1-46bc-962c-28d1831d092b",
        label: "NetSupportManager RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f58b4f63-63f1-45bf-831f-2f5a37d32113",
        label: "ScreenConnect",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 23,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e6919abc-99f9-4c6c-95a5-14761e7b2add",
      label: "Ingress Tool Transfer (Enterprise T1105)",
      mitreId: "T1105",
      name: "Ingress Tool Transfer",
    },
  },
  {
    actors: [],
    delta: 15,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fb1c6035-42ee-403c-a2ae-a53f7ab2de00",
        label: "AllaKore",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8d9987a8-3f1e-4ee2-865d-b1449eaf2e22",
        label: "BadUSB",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:47e654af-8b94-4b97-a2ea-6a28c1bc8099",
        label: "bifrose",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:70973ef7-e031-468f-9420-d8aa4eb7543a",
        label: "Coper",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:149e693c-4b51-4143-9061-6a8698b0e7f5",
        label: "EvilGnome",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        label: "Remcos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:31592c69-d540-4617-8253-71ae0c45526c",
        label: "SpyNote",
        type: "malwareFamily",
      },
    ],
    nArticles: 16,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-09a60ea3-a8d1-4ae5-976e-5783248b72a4",
      label: "Keylogging (Enterprise T1056.001)",
      mitreId: "T1056.001",
      name: "Keylogging",
    },
  },
  {
    actors: [],
    delta: 9,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6b8b2abb-0dcc-49b1-a923-f9a4045f66a2",
        label: "Xeno",
        type: "malwareFamily",
      },
    ],
    nArticles: 10,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e64c62cf-9cd7-4a14-94ec-cdaac43ab44b",
      label: "DLL Side-Loading (Enterprise T1574.002)",
      mitreId: "T1574.002",
      name: "DLL Side-Loading",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-0533ab23-3f7d-463f-9bd8-634d27e4dee1",
      label: "Embedded Payloads (Enterprise T1027.009)",
      mitreId: "T1027.009",
      name: "Embedded Payloads",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 13,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:8abdd40c-d79a-4353-80e3-29f8a4229a37",
        label: "BabyShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:51fcc1c4-4c87-4cea-9e62-905581f3d5e6",
        label: "CHAVECLOAK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:5f638985-49e1-4059-b2eb-f2ffa397b212",
        label: "Conficker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cbb4cfd8-3642-4b04-a199-8e9b4b80fb62",
        label: "RedRum",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ba91d713-c36e-4d98-9fb7-e16496a69eec",
        label: "SmokeLoader",
        type: "malwareFamily",
      },
    ],
    nArticles: 14,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-57340c81-c025-4189-8fa0-fc7ede51bae4",
      label: "Modify Registry (Enterprise T1112)",
      mitreId: "T1112",
      name: "Modify Registry",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 6,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        label: "Remcos",
        type: "malwareFamily",
      },
    ],
    nArticles: 6,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-dfd7cc1d-e1d8-4394-a198-97c4cab8aa67",
      label: "Visual Basic (Enterprise T1059.005)",
      mitreId: "T1059.005",
      name: "Visual Basic",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:3b238f3a-c67a-4a9e-b474-dc3897e00129",
        label: "Scattered Spider",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-c9e0c59e-162e-40a4-b8b1-78fab4329ada",
      label: "Impersonation (Enterprise T1656)",
      mitreId: "T1656",
      name: "Impersonation",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:b2056ff0-00b9-482e-b11c-c771daa5f28a",
        label: "APT29",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:3b238f3a-c67a-4a9e-b474-dc3897e00129",
        label: "Scattered Spider",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 9,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        label: "Remcos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:50d322d7-c7e0-4d9b-9996-e5767caa8f1c",
        label: "Rhadamanthys",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 14,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-b17a1a56-e99c-403c-8948-561df0cffe81",
      label: "Valid Accounts (Enterprise T1078)",
      mitreId: "T1078",
      name: "Valid Accounts",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:3b238f3a-c67a-4a9e-b474-dc3897e00129",
        label: "Scattered Spider",
        type: "threatActor",
      },
    ],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:94cc4cf1-8e3d-457c-926d-c0d75c0ba7bc",
        label: "ZarDoor",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-731f4f55-b6d0-41d1-a7a9-072a66389aea",
      label: "Proxy (Enterprise T1090)",
      mitreId: "T1090",
      name: "Proxy",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:f512de42-f76b-40d2-9923-59e7dbdfec35",
        label: "Sandworm",
        type: "threatActor",
      },
    ],
    delta: 12,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8abdd40c-d79a-4353-80e3-29f8a4229a37",
        label: "BabyShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2ff26425-93b6-46ad-9c39-28eb9dbc3974",
        label: "Cactus",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0266c594-75fe-499b-8aac-400a4cf0d29f",
        label: "ToddleShark",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:94cc4cf1-8e3d-457c-926d-c0d75c0ba7bc",
        label: "ZarDoor",
        type: "malwareFamily",
      },
    ],
    nArticles: 12,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-35dd844a-b219-4e2b-a6bb-efa9a75995a9",
      label: "Scheduled Task/Job (Enterprise T1053)",
      mitreId: "T1053",
      name: "Scheduled Task/Job",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:a43919b9-d766-4ce5-9030-df3de0a5d7d7",
        label: "CronRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-d511a6f6-4a33-41d5-bc95-c343875d1377",
      label: "Command Obfuscation (Enterprise T1027.010)",
      mitreId: "T1027.010",
      name: "Command Obfuscation",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:31592c69-d540-4617-8253-71ae0c45526c",
        label: "SpyNote",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e3b6daca-e963-4a69-aee6-ed4fd653ad58",
      label: "Software Discovery (Enterprise T1518)",
      mitreId: "T1518",
      name: "Software Discovery",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 8,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:4b105625-1bd6-4104-ac5f-4808859c1627",
        label: "BlueKeep",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2ff26425-93b6-46ad-9c39-28eb9dbc3974",
        label: "Cactus",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:b461afd0-f5fd-4c25-8367-4235a6e8b9b1",
        label: "COZYDUKE",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:5e2ebb21-7fb0-41e6-a886-741b9cafaa6b",
        label: "Netcat",
        type: "malwareFamily",
      },
    ],
    nArticles: 8,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
      label: "Exploitation for Client Execution (Enterprise T1203)",
      mitreId: "T1203",
      name: "Exploitation for Client Execution",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 11,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:840c44e4-cd71-4863-b776-850f48153dcd",
        label: "CAKETAP",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cf1a54c7-a76f-4b12-accb-e0447b0dc51c",
        label: "FudModule",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f58b4f63-63f1-45bf-831f-2f5a37d32113",
        label: "ScreenConnect",
        type: "malwareFamily",
      },
    ],
    nArticles: 11,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-212306d8-efa4-44c9-8c2d-ed3d2e224aa0",
      label: "Malware (Enterprise T1587.001)",
      mitreId: "T1587.001",
      name: "Malware",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:588fb91d-59c6-4667-b299-94676d48b17b",
        label: "MimiKatz",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-65f2d882-3f41-4d48-8a06-29af77ec9f90",
      label: "LSASS Memory (Enterprise T1003.001)",
      mitreId: "T1003.001",
      name: "LSASS Memory",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
    ],
    delta: 11,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:a14270e4-2b5e-4a90-9ccd-0b68690dbc3e",
        label: "Lumma Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 11,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-1c4e5d32-1fe9-4116-9d9d-59e3925bd6a2",
      label: "Match Legitimate Name or Location (Enterprise T1036.005)",
      mitreId: "T1036.005",
      name: "Match Legitimate Name or Location",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:2fa2be52-e44f-4998-bde7-c66cfb6f4521",
        label: "AMOS",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d9ff080d-cde0-48da-89db-53435c99446b",
        label: "BRATA",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:13c5f597-d7e4-41c7-8143-060a024a9cac",
        label: "Phemedrone Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:32e9c2ce-08a6-47ee-8636-ea83711930b1",
        label: "SapphireMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e1b2b792-033a-438d-a9c4-4d2adf1abb43",
        label: "SapphireStealer",
        type: "malwareFamily",
      },
    ],
    nArticles: 7,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
      label: "Data from Local System (Enterprise T1005)",
      mitreId: "T1005",
      name: "Data from Local System",
    },
  },
  {
    actors: [],
    delta: 3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:b32ffb50-8ef1-4c78-a71a-bb23089b4de6",
        label: "DCRat",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:7dd329ba-5fd1-4b28-8a55-3ad48bfeb896",
        label: "WogRAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-42e8de7b-37b2-4258-905a-6897815e58e0",
      label: "Masquerading (Enterprise T1036)",
      mitreId: "T1036",
      name: "Masquerading",
    },
  },
  {
    actors: [],
    delta: 9,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2fa2be52-e44f-4998-bde7-c66cfb6f4521",
        label: "AMOS",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:13c5f597-d7e4-41c7-8143-060a024a9cac",
        label: "Phemedrone Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cbb4cfd8-3642-4b04-a199-8e9b4b80fb62",
        label: "RedRum",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 9,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-10ffac09-e42d-4f56-ab20-db94c67d76ff",
      label: "Steal Web Session Cookie (Enterprise T1539)",
      mitreId: "T1539",
      name: "Steal Web Session Cookie",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 6,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:8f29b3f8-06c4-4f35-8d13-3fb19e561953",
        label: "APK",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c94c4f23-20d1-4858-8f94-01a54b213981",
        label: "AsyncRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f58b4f63-63f1-45bf-831f-2f5a37d32113",
        label: "ScreenConnect",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2261f656-9ad0-4eab-bc9c-5e5cc3597bf7",
        label: "Script",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6b8b2abb-0dcc-49b1-a923-f9a4045f66a2",
        label: "Xeno",
        type: "malwareFamily",
      },
    ],
    nArticles: 14,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-d1fcf083-a721-4223-aedf-bf8960798d62",
      label: "Windows Command Shell (Enterprise T1059.003)",
      mitreId: "T1059.003",
      name: "Windows Command Shell",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 11,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:b461afd0-f5fd-4c25-8367-4235a6e8b9b1",
        label: "COZYDUKE",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 12,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-a93494bb-4b80-4ea1-8695-3236a49916fd",
      label: "Brute Force (Enterprise T1110)",
      mitreId: "T1110",
      name: "Brute Force",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-cca0ccb6-a068-4574-a722-b1556f86833a",
      label: "Phishing for Information (Enterprise T1598)",
      mitreId: "T1598",
      name: "Phishing for Information",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:cb145003-727c-4b3c-84af-131345ad3e2e",
        label: "EvilProxy",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-bc76d0a4-db11-4551-9ac4-01a469cfb161",
      label: "Credentials (Enterprise T1589.001)",
      mitreId: "T1589.001",
      name: "Credentials",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:2ff26425-93b6-46ad-9c39-28eb9dbc3974",
        label: "Cactus",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-005a06c6-14bf-4118-afa0-ebcd8aebb0c9",
      label: "Scheduled Task (Enterprise T1053.005)",
      mitreId: "T1053.005",
      name: "Scheduled Task",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:2fa2be52-e44f-4998-bde7-c66cfb6f4521",
        label: "AMOS",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-37b11151-1776-4f8f-b328-30939fbf2ceb",
      label: "AppleScript (Enterprise T1059.002)",
      mitreId: "T1059.002",
      name: "AppleScript",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 5,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:13c5f597-d7e4-41c7-8143-060a024a9cac",
        label: "Phemedrone Stealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:cbb4cfd8-3642-4b04-a199-8e9b4b80fb62",
        label: "RedRum",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-2b742742-28c3-4e1b-bab7-8350d6300fa7",
      label: "Spearphishing Link (Enterprise T1566.002)",
      mitreId: "T1566.002",
      name: "Spearphishing Link",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:5b4ee3ea-eee3-4c8e-8323-85ae32658754",
        label: "APT28",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 5,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:42562c47-08e1-46bc-962c-28d1831d092b",
        label: "NetSupportManager RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:50d322d7-c7e0-4d9b-9996-e5767caa8f1c",
        label: "Rhadamanthys",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-ef67e13e-5598-4adc-bdb2-998225874fa9",
      label: "Malicious Link (Enterprise T1204.001)",
      mitreId: "T1204.001",
      name: "Malicious Link",
    },
  },
  {
    actors: [],
    delta: -3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:992151e9-2d4d-4621-9a2e-f2219f97e55b",
        label: "Pikabot",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-deb98323-e13f-4b0c-8d94-175379069062",
      label: "Software Packing (Enterprise T1027.002)",
      mitreId: "T1027.002",
      name: "Software Packing",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:c94c4f23-20d1-4858-8f94-01a54b213981",
        label: "AsyncRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-232b7f21-adf9-4b42-b936-b9d6f7df856e",
      label: "Malicious File (Enterprise T1204.002)",
      mitreId: "T1204.002",
      name: "Malicious File",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: -3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6cb47609-b03e-43d9-a4c7-8342f1011f3b",
        label: "ANGRYREBEL",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:225fa6cf-dc9c-4b86-873b-cdf1d9dd3738",
        label: "Ghost RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:9b050f86-edad-40ed-9a93-b7c03444bfa5",
        label: "GhostLocker",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0db05333-2214-49c3-b469-927788932aaa",
        label: "GhostMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-9efb1ea7-c37b-4595-9640-b7680cd84279",
      label: "Registry Run Keys / Startup Folder (Enterprise T1547.001)",
      mitreId: "T1547.001",
      name: "Registry Run Keys / Startup Folder",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 5,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:32e9c2ce-08a6-47ee-8636-ea83711930b1",
        label: "SapphireMiner",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:e1b2b792-033a-438d-a9c4-4d2adf1abb43",
        label: "SapphireStealer",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 5,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-58a3e6aa-4453-4cc8-a51f-4befe80b31a8",
      label: "Credentials from Web Browsers (Enterprise T1555.003)",
      mitreId: "T1555.003",
      name: "Credentials from Web Browsers",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:ff611c24-289e-4f2d-88d2-cfbf771a4e4b",
        label: "NjRAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:6ad84f52-0025-4a9d-861a-65c870f47988",
        label: "Stuxnet",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-3b744087-9945-4a6f-91e8-9dbceda417a4",
      label: "Replication Through Removable Media (Enterprise T1091)",
      mitreId: "T1091",
      name: "Replication Through Removable Media",
    },
  },
  {
    actors: [],
    delta: 3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-40597f16-0963-4249-bf4c-ac93b7fb9807",
      label: "Exfiltration Over Web Service (Enterprise T1567)",
      mitreId: "T1567",
      name: "Exfiltration Over Web Service",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:588fb91d-59c6-4667-b299-94676d48b17b",
        label: "MimiKatz",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e358d692-23c0-4a31-9eb6-ecc13a8d7735",
      label: "Remote System Discovery (Enterprise T1018)",
      mitreId: "T1018",
      name: "Remote System Discovery",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-f2877f7f-9a4c-4251-879f-1224e3006bee",
      label: "Kerberoasting (Enterprise T1558.003)",
      mitreId: "T1558.003",
      name: "Kerberoasting",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:17e12216-a303-4a00-8283-d3fe92d0934c",
        label: "Mirai (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:2edd3051-b1b5-47f2-9155-8c97f791dfb7",
        label: "Mirai (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-799ace7f-e227-4411-baa0-8868704f2a69",
      label: "Indicator Removal on Host (Enterprise T1070)",
      mitreId: "T1070",
      name: "Indicator Removal on Host",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 7,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:5e5cd3a6-0348-4c6b-94b1-13ca0d845547",
        label: "Behinder",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:07e88ccf-6027-412b-99bf-0fa1d3cfb174",
        label: "Godzilla Webshell",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:5e2ebb21-7fb0-41e6-a886-741b9cafaa6b",
        label: "Netcat",
        type: "malwareFamily",
      },
    ],
    nArticles: 7,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-5d0d3609-d06d-49e1-b9c9-b544e0c618cb",
      label: "Web Shell (Enterprise T1505.003)",
      mitreId: "T1505.003",
      name: "Web Shell",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-677569f9-a8b0-459e-ab24-7f18091fa7bf",
      label: "Create Process with Token (Enterprise T1134.002)",
      mitreId: "T1134.002",
      name: "Create Process with Token",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:cbb4cfd8-3642-4b04-a199-8e9b4b80fb62",
        label: "RedRum",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-118f61a5-eb3e-4fb6-931f-2096647f4ecd",
      label: "Domain Generation Algorithms (Enterprise T1568.002)",
      mitreId: "T1568.002",
      name: "Domain Generation Algorithms",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:a43919b9-d766-4ce5-9030-df3de0a5d7d7",
        label: "CronRAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-2acf44aa-542f-4366-b4eb-55ef5747759c",
      label: "Cron (Enterprise T1053.003)",
      mitreId: "T1053.003",
      name: "Cron",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:bcaaad6f-0597-4b89-b69b-84a6be2b7bc3",
        label: "Kimsuky",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860643d6-5693-4e4e-ad1f-56c49faa10a7",
        label: "Kimsuky (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d061daca-4415-4b3e-9034-231e37857eed",
        label: "Phobos",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-840a987a-99bd-4a80-a5c9-0cb2baa6cade",
      label: "Mshta (Enterprise T1218.005)",
      mitreId: "T1218.005",
      name: "Mshta",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-09c4c11e-4fa1-4f8c-8dad-3cf8e69ad119",
      label: "Password Guessing (Enterprise T1110.001)",
      mitreId: "T1110.001",
      name: "Password Guessing",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:b2056ff0-00b9-482e-b11c-c771daa5f28a",
        label: "APT29",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 13,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:b461afd0-f5fd-4c25-8367-4235a6e8b9b1",
        label: "COZYDUKE",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
    ],
    nArticles: 18,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-3f18edba-28f4-4bb9-82c3-8aa60dcac5f7",
      label: "Supply Chain Compromise (Enterprise T1195)",
      mitreId: "T1195",
      name: "Supply Chain Compromise",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1f15b789-a424-4ae4-8ff2-62c8f2f6295f",
        label: "ToddlerShark",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-f7c0689c-4dbd-489b-81be-7cb7c7079ade",
      label: "Junk Data (Enterprise T1001.001)",
      mitreId: "T1001.001",
      name: "Junk Data",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:b96acce8-5b4f-4551-80b1-07a1c6090c92",
        label: "SSH-Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-2db31dcd-54da-405d-acef-b9129b816ed6",
      label: "SSH (Enterprise T1021.004)",
      mitreId: "T1021.004",
      name: "SSH",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:395ce468-e879-4861-9e03-ab126a6c53e3",
        label: "xmrig",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:38180550-1f10-4e6b-acd2-143c778ff32f",
        label: "XMRig",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-dfefe2ed-4389-4318-8762-f0272b350a1b",
      label: "Systemd Service (Enterprise T1543.002)",
      mitreId: "T1543.002",
      name: "Systemd Service",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
        label: "404 Keylogger",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:547deef9-67c3-483e-933d-171ee8b6b918",
        label: "Snake",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:d674ffd2-1f27-403b-8fe9-b4af6e303e5c",
        label: "Uroburos (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e5d550f3-2202-4634-85f2-4a200a1d49b3",
      label: "SEO Poisoning (Enterprise T1608.006)",
      mitreId: "T1608.006",
      name: "SEO Poisoning",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-32901740-b42c-4fdd-bc02-345b5dc57082",
      label: "Code Signing (Enterprise T1553.002)",
      mitreId: "T1553.002",
      name: "Code Signing",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
    ],
    delta: 15,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
    ],
    nArticles: 15,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-d742a578-d70e-4d0e-96a6-02a9c30204e6",
      label: "Drive-by Compromise (Enterprise T1189)",
      mitreId: "T1189",
      name: "Drive-by Compromise",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:2894aee2-e0ec-417a-811e-74a68ab967b2",
        label: "Remcos",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:31592c69-d540-4617-8253-71ae0c45526c",
        label: "SpyNote",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-1035cdf2-3e5f-446f-a7a7-e8f6d7925967",
      label: "Audio Capture (Enterprise T1123)",
      mitreId: "T1123",
      name: "Audio Capture",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:62710572-e416-419d-bb1f-81ffc1ddc976",
        label: "BRONZE HIGHLAND",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:171d0590-be92-443f-addb-af5dc2a8034d",
        label: "Evasive Panda",
        type: "threatActor",
      },
    ],
    delta: 10,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d97c2c0c-ef3a-4512-846a-f4cdeee7787a",
        label: "MgBot",
        type: "malwareFamily",
      },
    ],
    nArticles: 10,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-bd369cd9-abb8-41ce-b5bb-fff23ee86c00",
      label: "Compromise Software Supply Chain (Enterprise T1195.002)",
      mitreId: "T1195.002",
      name: "Compromise Software Supply Chain",
    },
  },
  {
    actors: [],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:56e2ea3a-1517-429c-b71a-12f83b1e15a1",
        label: "Fakext",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-544b0346-29ad-41e1-a808-501bb4193f47",
      label: "Browser Session Hijacking (Enterprise T1185)",
      mitreId: "T1185",
      name: "Browser Session Hijacking",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:731d992c-f2e0-4e56-a148-b8df5caee8e3",
        label: "NetfilterRootkit",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-2bee5ffb-7a7a-4119-b1f2-158151b19ac0",
      label: "Application or System Exploitation (Enterprise T1499.004)",
      mitreId: "T1499.004",
      name: "Application or System Exploitation",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:d99e4582-d58f-4972-86be-63807c8259c5",
        label: "BadCandy",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-e01be9c5-e763-4caf-aeb7-000b416aef67",
      label: "Create Account (Enterprise T1136)",
      mitreId: "T1136",
      name: "Create Account",
    },
  },
  {
    actors: [],
    delta: -3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-d45a3d09-b3cf-48f4-9f0f-f521ee5cb05c",
      label: "Data Destruction (Enterprise T1485)",
      mitreId: "T1485",
      name: "Data Destruction",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fd035735-1ab9-419d-a94c-d560612e970b",
        label: "LockBit",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:afce6aba-d4c4-49fa-b9a9-1a70e92e5a0e",
        label: "LockBit (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:0821b5c8-db48-4d0e-a969-384dbd74a6c9",
        label: "LockBit (MacOS)",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-10d51417-ee35-4589-b1ff-b6df1c334e8d",
      label: "External Remote Services (Enterprise T1133)",
      mitreId: "T1133",
      name: "External Remote Services",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-6495ae23-3ab4-43c5-a94f-5638a2c31fd2",
      label: "Clear Windows Event Logs (Enterprise T1070.001)",
      mitreId: "T1070.001",
      name: "Clear Windows Event Logs",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:860e9d03-830e-4410-ac89-75b6eb89e7e5",
        label: "BlackCat (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f82bdc6b-6be7-4c18-ab29-7fd0af163bb2",
        label: "BlackCat (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-f4599aa0-4f85-4a32-80ea-fc39dc965945",
      label: "Dynamic-link Library Injection (Enterprise T1055.001)",
      mitreId: "T1055.001",
      name: "Dynamic-link Library Injection",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:cb145003-727c-4b3c-84af-131345ad3e2e",
        label: "EvilProxy",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-40f5caa0-4cb7-4117-89fc-d421bb493df3",
      label: "Domains (Enterprise T1583.001)",
      mitreId: "T1583.001",
      name: "Domains",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:47e5df57-f0a8-41f9-bcaa-b9f90d094e7d",
        label: "RSOCKS",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-b2d03cea-aec1-45ca-9744-9ee583c1e1cc",
      label: "Credential Stuffing (Enterprise T1110.004)",
      mitreId: "T1110.004",
      name: "Credential Stuffing",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:b8967b3c-3bc9-11e8-8701-8b1ead8c099e",
        label: "APT35",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:c2c64bd3-a325-446f-91a8-b4c0f173a30b",
        label: "APT39",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:86724806-7ec9-4a48-a0a7-ecbde3bf4810",
        label: "Cleaver",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:4e8c1ab7-2841-4823-a5d1-39284fb0969a",
        label: "Zeus",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-df8b2a25-8bdf-4856-953c-a04372b1c161",
      label: "Web Protocols (Enterprise T1071.001)",
      mitreId: "T1071.001",
      name: "Web Protocols",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-1644e709-12d2-41e5-a60f-3470991f5011",
      label: "Security Account Manager (Enterprise T1003.002)",
      mitreId: "T1003.002",
      name: "Security Account Manager",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:1f44c08a-b427-4496-9d6d-909b6bf34b9b",
        label: "Vidar",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-f24faf46-3b26-4dbb-98f2-63460498e433",
      label: "Fallback Channels (Enterprise T1008)",
      mitreId: "T1008",
      name: "Fallback Channels",
    },
  },
  {
    actors: [],
    delta: 1,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1a1d3ea4-972e-4c48-8d85-08d9db8f1550",
        label: "Cobalt Strike",
        type: "malwareFamily",
      },
    ],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-ec8fc7e2-b356-455c-8db5-2e37be158e7d",
      label: "Hidden Files and Directories (Enterprise T1564.001)",
      mitreId: "T1564.001",
      name: "Hidden Files and Directories",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:c2c64bd3-a325-446f-91a8-b4c0f173a30b",
        label: "APT39",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-355be19c-ffc9-46d5-8d50-d6a036c675b6",
      label: "Application Layer Protocol (Enterprise T1071)",
      mitreId: "T1071",
      name: "Application Layer Protocol",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:c2c64bd3-a325-446f-91a8-b4c0f173a30b",
        label: "APT39",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-1ecb2399-e8ba-4f6b-8ba7-5c27d49405cf",
      label: "Boot or Logon Autostart Execution (Enterprise T1547)",
      mitreId: "T1547",
      name: "Boot or Logon Autostart Execution",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:c2c64bd3-a325-446f-91a8-b4c0f173a30b",
        label: "APT39",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-53ac20cd-aca3-406e-9aa0-9fc7fdc60a5a",
      label: "Archive Collected Data (Enterprise T1560)",
      mitreId: "T1560",
      name: "Archive Collected Data",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:b8967b3c-3bc9-11e8-8701-8b1ead8c099e",
        label: "APT35",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-72b74d71-8169-42aa-92e0-e7b04b9f5a08",
      label: "Account Discovery (Enterprise T1087)",
      mitreId: "T1087",
      name: "Account Discovery",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:b8967b3c-3bc9-11e8-8701-8b1ead8c099e",
        label: "APT35",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-00f90846-cbd1-4fc5-9233-df5c2bf2a662",
      label: "Archive via Utility (Enterprise T1560.001)",
      mitreId: "T1560.001",
      name: "Archive via Utility",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-21875073-b0ee-49e3-9077-1e2a885359af",
      label: "Domain Account (Enterprise T1087.002)",
      mitreId: "T1087.002",
      name: "Domain Account",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:86724806-7ec9-4a48-a0a7-ecbde3bf4810",
        label: "Cleaver",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-1996eef1-ced3-4d7f-bf94-33298cabbf72",
      label: "DNS (Enterprise T1071.004)",
      mitreId: "T1071.004",
      name: "DNS",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-25659dd6-ea12-45c4-97e6-381e3e4b593e",
      label: "Local Account (Enterprise T1087.001)",
      mitreId: "T1087.001",
      name: "Local Account",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-a19e86f8-1c0a-4fea-8407-23b73d615776",
      label: "Exfiltration Over Alternative Protocol (Enterprise T1048)",
      mitreId: "T1048",
      name: "Exfiltration Over Alternative Protocol",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-fb8d023d-45be-47e9-bc51-f56bcae6435b",
      label:
        "Exfiltration Over Unencrypted Non-C2 Protocol (Enterprise T1048.003)",
      mitreId: "T1048.003",
      name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:42be2a84-5a5c-4c6d-9864-3f09d75bb0ba",
        label: "OilRig",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-d336b553-5da9-46ca-98a8-0b23f49fb447",
      label: "Windows Credential Manager (Enterprise T1555.004)",
      mitreId: "T1555.004",
      name: "Windows Credential Manager",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-cc7b8c4e-9be0-47ca-b0bb-83915ec3ee2f",
      label: "Data Encoding (Enterprise T1132)",
      mitreId: "T1132",
      name: "Data Encoding",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 34,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:b461afd0-f5fd-4c25-8367-4235a6e8b9b1",
        label: "COZYDUKE",
        type: "malwareFamily",
      },
    ],
    nArticles: 36,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-692074ae-bb62-4a5e-a735-02cb6bde458c",
      label: "Password Spraying (Enterprise T1110.003)",
      mitreId: "T1110.003",
      name: "Password Spraying",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 3,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 3,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-0a3ead4e-6d47-4ccb-854c-a6a4f9d96b22",
      label: "OS Credential Dumping (Enterprise T1003)",
      mitreId: "T1003",
      name: "OS Credential Dumping",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-837f9164-50af-4ac0-8219-379d8a74cefc",
      label: "Credentials In Files (Enterprise T1552.001)",
      mitreId: "T1552.001",
      name: "Credentials In Files",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-04fd5427-79c7-44ea-ae13-11b24778ff1c",
      label: "Standard Encoding (Enterprise T1132.001)",
      mitreId: "T1132.001",
      name: "Standard Encoding",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:4f69ec6d-cb6b-42af-b8e2-920a2aa4be10",
        label: "APT33",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-3257eb21-f9a7-4430-8de1-d8b6e288f529",
      label: "Network Sniffing (Enterprise T1040)",
      mitreId: "T1040",
      name: "Network Sniffing",
    },
  },
  {
    actors: [],
    delta: 4,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fedabc2f-6387-457c-a7de-2e38b18d6695",
        label: "Nerbian RAT",
        type: "malwareFamily",
      },
    ],
    nArticles: 4,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-c21d5a77-d422-4a69-acd7-2c53c1faa34b",
      label: "Non-Application Layer Protocol (Enterprise T1095)",
      mitreId: "T1095",
      name: "Non-Application Layer Protocol",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 1,
    malwares: [],
    nArticles: 1,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-1608f3e1-598a-42f4-a01a-2e252e81728f",
      label: "Email Collection (Enterprise T1114)",
      mitreId: "T1114",
      name: "Email Collection",
    },
  },
  {
    actors: [],
    delta: 2,
    malwares: [
      {
        id: "nlp/f/entity/gz:mal:1faaa5c5-ab4e-4101-b2d9-0e12207d70fc",
        label: "BianLian (Android)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:f6be433e-7ed0-4777-876b-e3e2ba7d5c7f",
        label: "BianLian (Linux)",
        type: "malwareFamily",
      },
      {
        id: "nlp/f/entity/gz:mal:fcc016ad-41a0-4bda-ad88-9542b5f560d9",
        label: "BianLian (Windows)",
        type: "malwareFamily",
      },
    ],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-c8e87b83-edbb-48d4-9295-4974897525b7",
      label: "BITS Jobs (Enterprise T1197)",
      mitreId: "T1197",
      name: "BITS Jobs",
    },
  },
  {
    actors: [
      {
        id: "nlp/f/entity/gz:ta:2ee5ed7a-c4d0-40be-a837-20817474a15b",
        label: "UNC2452",
        type: "threatActor",
      },
    ],
    delta: 2,
    malwares: [],
    nArticles: 2,
    ttp: {
      id: "nlp/f/entity/gz:mi:attack-pattern-81033c3b-16a4-46e4-8fed-9b030dd03c4a",
      label: "Compromise Accounts (Enterprise T1586)",
      mitreId: "T1586",
      name: "Compromise Accounts",
    },
  },
];

export const mockThreatArticleCounts: FeedlyThreatArticleCountGraphs = {
  graphs: [
    {
      articleCountType: "CYBERSECURITY",
      yTipsies: [[], [], []],
      yValues: [151, 224, 82],
    },
  ],
  xLabels: ["2021", "2022", "2023"],
};

export const mockThreatEntityTrends: FeedlyThreatEntityTrends = {
  headerSmallGraphUrl:
    "https://storage.googleapis.com/feedly-ml-public/entity-trends/e0b5e593-ed87-4b5b-94af-4601cacfa350.svg",
  nArticlesPastYear: 81,
};

export const mockThreatRelationShips: FeedlyThreatRelationShips = {
  actors: [],
  industries: [
    {
      articleCount: 3,
      companies: [
        {
          articleCount: 3,
          entity: {
            id: "nlp/f/entity/gz:org:honda",
            label: "Honda",
            type: "org",
          },
          firstMention: "2021-06-17",
        },
      ],
      entity: {
        id: "nlp/f/topic/4011",
        label: "Automotive Industry",
        type: "industryTopic",
      },
    },
    {
      articleCount: 2,
      companies: [
        {
          articleCount: 2,
          entity: {
            id: "nlp/f/entity/gz:org:facebook-incorporated",
            label: "Meta Platforms",
            type: "org",
          },
          firstMention: "2024-03-07",
        },
      ],
      entity: {
        id: "nlp/f/topic/4043",
        label: "Tech Industry",
        type: "industryTopic",
      },
    },
    {
      articleCount: 2,
      companies: [
        {
          articleCount: 2,
          entity: {
            id: "nlp/f/entity/gz:org:enel",
            label: "Enel",
            type: "org",
          },
          firstMention: "2021-08-02",
        },
      ],
      entity: {
        id: "nlp/f/topic/4016",
        label: "Energy Industry",
        type: "industryTopic",
      },
    },
  ],
  ttps: [
    {
      articleCount: 91,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-09a60ea3-a8d1-4ae5-976e-5783248b72a4",
      lastSeen: 1710747214888,
      mitigations: [],
      mitreId: "T1056.001",
      procedureCount: 327,
      technique: "Keylogging",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-212306d8-efa4-44c9-8c2d-ed3d2e224aa0",
      lastSeen: 1689831523140,
      mitigations: [
        {
          description:
            "This category is used for any applicable mitigation activities that apply to techniques occurring before an adversary gains Initial Access, such as Reconnaissance and Resource Development techniques.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-78bb71be-92b4-46de-acd6-5f998fedf1cc",
          label: "Pre-compromise",
          mitreId: "M1056",
        },
      ],
      mitreId: "T1587.001",
      procedureCount: 113,
      technique: "Malware",
      trend: "stable",
    },
    {
      articleCount: 10,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-30973a08-aed9-4edf-8604-9084ce1b5c4f",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1115",
      procedureCount: 77,
      technique: "Clipboard Data",
      trend: "stable",
    },
    {
      articleCount: 22,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-a62a8db3-f23a-4d8f-afd6-9dbc77e7813b",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
        {
          description:
            "Implement configuration changes to software (other than the operating system) to mitigate security risks associated to how the software operates.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b5dbb4c5-b0b1-40b1-80b6-e9e84ab90067",
          label: "Software Configuration",
          mitreId: "M1054",
        },
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
      ],
      mitreId: "T1566",
      procedureCount: 65,
      technique: "Phishing",
      trend: "stable",
    },
    {
      articleCount: 5,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-35dd844a-b219-4e2b-a6bb-efa9a75995a9",
      lastSeen: 1687361504310,
      mitigations: [
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-cc2399fd-3cd3-4319-8d0a-fbd6420cdaf8",
          label: "Audit",
          mitreId: "M1047",
        },
        {
          description:
            "Make configuration changes related to the operating system or a common feature of the operating system that result in system hardening against techniques.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2f316f6c-ae42-44fe-adf8-150989e0f6d3",
          label: "Operating System Configuration",
          mitreId: "M1028",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
      ],
      mitreId: "T1053",
      procedureCount: 61,
      technique: "Scheduled Task/Job",
      trend: "stable",
    },
    {
      articleCount: 16,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-b80d107d-fa0d-4b60-9684-b0433e8bdba0",
      lastSeen: 1683681721529,
      mitigations: [
        {
          description:
            "Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-3efe43d1-6f3f-4fcb-ab39-4a730971f70b",
          label: "Data Backup",
          mitreId: "M1053",
        },
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
      ],
      mitreId: "T1486",
      procedureCount: 57,
      technique: "Data Encrypted for Impact",
      trend: "stable",
    },
    {
      articleCount: 35,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-7385dfaf-6886-4229-9ecd-6fd678040830",
      lastSeen: 1709933178886,
      mitigations: [
        {
          description:
            "Remove or deny access to unnecessary and potentially vulnerable software to prevent abuse by adversaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-eb88d97c-32f1-40be-80f0-d61a4b0b4b31",
          label: "Disable or Remove Feature or Program",
          mitreId: "M1042",
        },
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
        {
          description:
            "Enforce binary and application integrity with digital signature verification to prevent untrusted code from executing.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-590777b3-b475-4c7c-aaf8-f4a73b140312",
          label: "Code Signing",
          mitreId: "M1045",
        },
      ],
      mitreId: "T1059",
      procedureCount: 55,
      technique: "Command and Scripting Interpreter",
      trend: "stable",
    },
    {
      articleCount: 21,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-2e34237d-8574-43f6-aace-ae2915de8597",
      lastSeen: 1709308270966,
      mitigations: [
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
        {
          description:
            "Implement configuration changes to software (other than the operating system) to mitigate security risks associated to how the software operates.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b5dbb4c5-b0b1-40b1-80b6-e9e84ab90067",
          label: "Software Configuration",
          mitreId: "M1054",
        },
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
      ],
      mitreId: "T1566.001",
      procedureCount: 54,
      technique: "Spearphishing Attachment",
      trend: "stable",
    },
    {
      articleCount: 19,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-b3d682b6-98f2-4fb0-aa3b-b4df007ca70a",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
        {
          description:
            "Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-cc2399fd-3cd3-4319-8d0a-fbd6420cdaf8",
          label: "Audit",
          mitreId: "M1047",
        },
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
      ],
      mitreId: "T1027",
      procedureCount: 51,
      technique: "Obfuscated Files or Information",
      trend: "stable",
    },
    {
      articleCount: 5,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-eb062747-2193-45de-8fa2-e62549c37ddf",
      lastSeen: 1683735079303,
      mitigations: [
        {
          description:
            "Make configuration changes related to the operating system or a common feature of the operating system that result in system hardening against techniques.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2f316f6c-ae42-44fe-adf8-150989e0f6d3",
          label: "Operating System Configuration",
          mitreId: "M1028",
        },
        {
          description:
            "Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-cc2399fd-3cd3-4319-8d0a-fbd6420cdaf8",
          label: "Audit",
          mitreId: "M1047",
        },
        {
          description:
            "Prevent access to file shares, remote access to systems, unnecessary services. Mechanisms to limit access may include use of network concentrators, RDP gateways, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-1dcaeb21-9348-42ea-950a-f842aaf1ae1f",
          label: "Limit Access to Resource Over Network",
          mitreId: "M1035",
        },
        {
          description:
            "Architect sections of the network to isolate critical systems, functions, or resources. Use physical and logical segmentation to prevent access to potentially sensitive systems and information. Use a DMZ to contain any internet-facing services that should not be exposed from the internal network. Configure separate virtual private cloud (VPC) instances to isolate critical cloud systems.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-86598de0-b347-4928-9eb0-0acbfc21908c",
          label: "Network Segmentation",
          mitreId: "M1030",
        },
        {
          description:
            "Use two or more pieces of evidence to authenticate to a system; such as username and password in addition to a token from a physical smart card or token generator.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b045d015-6bed-4490-bd38-56b41ece59a0",
          label: "Multi-factor Authentication",
          mitreId: "M1032",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Remove or deny access to unnecessary and potentially vulnerable software to prevent abuse by adversaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-eb88d97c-32f1-40be-80f0-d61a4b0b4b31",
          label: "Disable or Remove Feature or Program",
          mitreId: "M1042",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
      ],
      mitreId: "T1021.001",
      procedureCount: 38,
      technique: "Remote Desktop Protocol",
      trend: "stable",
    },
    {
      articleCount: 12,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-3ccef7ae-cb5e-48f6-8302-897105fbf55c",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1140",
      procedureCount: 38,
      technique: "Deobfuscate/Decode Files or Information",
      trend: "stable",
    },
    {
      articleCount: 13,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-0f20e3cb-245b-4a61-8a91-2d93f7cb0e9b",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1014",
      procedureCount: 34,
      technique: "Rootkit",
      trend: "stable",
    },
    {
      articleCount: 16,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-0259baeb-9f63-4c69-bf10-eb038c390688",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1113",
      procedureCount: 29,
      technique: "Screen Capture",
      trend: "stable",
    },
    {
      articleCount: 8,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-354a7f88-63fb-41b5-a801-ce3b377b36f1",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1082",
      procedureCount: 25,
      technique: "System Information Discovery",
      trend: "stable",
    },
    {
      articleCount: 10,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-e6919abc-99f9-4c6c-95a5-14761e7b2add",
      lastSeen: 1709883563631,
      mitigations: [
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
      ],
      mitreId: "T1105",
      procedureCount: 21,
      technique: "Ingress Tool Transfer",
      trend: "stable",
    },
    {
      articleCount: 5,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-d63a3fb8-9452-4e9d-a60a-54be68d5998c",
      lastSeen: 1709657170132,
      mitigations: [],
      mitreId: "T1070.004",
      procedureCount: 21,
      technique: "File Deletion",
      trend: "stable",
    },
    {
      articleCount: 15,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-3c4a2599-71ee-4405-ba1e-0e28414b4bc5",
      lastSeen: 1710275596064,
      mitigations: [
        {
          description:
            "Use a data loss prevention (DLP) strategy to categorize sensitive data, identify data formats indicative of personal identifiable information (PII), and restrict exfiltration of sensitive data.(Citation: PurpleSec Data Loss Prevention)",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-65401701-019d-44ff-b223-08d520bb0e7b",
          label: "Data Loss Prevention",
          mitreId: "M1057",
        },
      ],
      mitreId: "T1005",
      procedureCount: 19,
      technique: "Data from Local System",
      trend: "stable",
    },
    {
      articleCount: 7,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-970a3432-3237-47ad-bcca-7d8cbb217736",
      lastSeen: 1679530990146,
      mitigations: [
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Remove or deny access to unnecessary and potentially vulnerable software to prevent abuse by adversaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-eb88d97c-32f1-40be-80f0-d61a4b0b4b31",
          label: "Disable or Remove Feature or Program",
          mitreId: "M1042",
        },
        {
          description:
            "Enforce binary and application integrity with digital signature verification to prevent untrusted code from executing.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-590777b3-b475-4c7c-aaf8-f4a73b140312",
          label: "Code Signing",
          mitreId: "M1045",
        },
      ],
      mitreId: "T1059.001",
      procedureCount: 19,
      technique: "PowerShell",
      trend: "stable",
    },
    {
      articleCount: 10,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-b17a1a56-e99c-403c-8948-561df0cffe81",
      lastSeen: 1709827280202,
      mitigations: [
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
        {
          description:
            "Configure Active Directory to prevent use of certain techniques; use SID Filtering, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-e3388c78-2a8d-47c2-8422-c1398b324462",
          label: "Active Directory Configuration",
          mitreId: "M1015",
        },
        {
          description:
            "This mitigation describes any guidance or training given to developers of applications to avoid introducing security weaknesses that an adversary may be able to take advantage of.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-25dc1ce8-eb55-4333-ae30-a7cb4f5894a1",
          label: "Application Developer Guidance",
          mitreId: "M1013",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Configure features related to account use like login attempt lockouts, specific login times, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-f9f9e6ef-bc0a-41ad-ba11-0924e5e84c4c",
          label: "Account Use Policies",
          mitreId: "M1036",
        },
        {
          description: "Set and enforce secure password policies for accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90c218c3-fbf8-4830-98a7-e8cfb7eaa485",
          label: "Password Policies",
          mitreId: "M1027",
        },
      ],
      mitreId: "T1078",
      procedureCount: 19,
      technique: "Valid Accounts",
      trend: "stable",
    },
    {
      articleCount: 7,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-d1fcf083-a721-4223-aedf-bf8960798d62",
      lastSeen: 1711004564365,
      mitigations: [
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
      ],
      mitreId: "T1059.003",
      procedureCount: 16,
      technique: "Windows Command Shell",
      trend: "stable",
    },
    {
      articleCount: 4,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-82caa33e-d11a-433a-94ea-9b5a5fbef81d",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1497",
      procedureCount: 13,
      technique: "Virtualization/Sandbox Evasion",
      trend: "stable",
    },
    {
      articleCount: 7,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-57340c81-c025-4189-8fa0-fc7ede51bae4",
      lastSeen: 1688130386649,
      mitigations: [
        {
          description:
            "Restrict the ability to modify certain hives or keys in the Windows Registry.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a2c36a5d-4058-475e-8e77-fff75e50d3b9",
          label: "Restrict Registry Permissions",
          mitreId: "M1024",
        },
      ],
      mitreId: "T1112",
      procedureCount: 13,
      technique: "Modify Registry",
      trend: "stable",
    },
    {
      articleCount: 9,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-20fb2507-d71c-455d-9b6d-6104461cf26b",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Restrict the ability to modify certain hives or keys in the Windows Registry.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a2c36a5d-4058-475e-8e77-fff75e50d3b9",
          label: "Restrict Registry Permissions",
          mitreId: "M1024",
        },
        {
          description:
            "Architect sections of the network to isolate critical systems, functions, or resources. Use physical and logical segmentation to prevent access to potentially sensitive systems and information. Use a DMZ to contain any internet-facing services that should not be exposed from the internal network. Configure separate virtual private cloud (VPC) instances to isolate critical cloud systems.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-86598de0-b347-4928-9eb0-0acbfc21908c",
          label: "Network Segmentation",
          mitreId: "M1030",
        },
        {
          description:
            "Restrict access by setting directory and file permissions that are not specific to users or privileged accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-987988f0-cf86-4680-a875-2f6456ab2448",
          label: "Restrict File and Directory Permissions",
          mitreId: "M1022",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
      ],
      mitreId: "T1489",
      procedureCount: 12,
      technique: "Service Stop",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-a1b52199-c8c5-438a-9ded-656f1d0888c6",
      lastSeen: 1688130386649,
      mitigations: [
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
      ],
      mitreId: "T1547.006",
      procedureCount: 9,
      technique: "Kernel Modules and Extensions",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-005a06c6-14bf-4118-afa0-ebcd8aebb0c9",
      lastSeen: 1687361504310,
      mitigations: [
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-cc2399fd-3cd3-4319-8d0a-fbd6420cdaf8",
          label: "Audit",
          mitreId: "M1047",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Make configuration changes related to the operating system or a common feature of the operating system that result in system hardening against techniques.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2f316f6c-ae42-44fe-adf8-150989e0f6d3",
          label: "Operating System Configuration",
          mitreId: "M1028",
        },
      ],
      mitreId: "T1053.005",
      procedureCount: 9,
      technique: "Scheduled Task",
      trend: "stable",
    },
    {
      articleCount: 6,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-58a3e6aa-4453-4cc8-a51f-4befe80b31a8",
      lastSeen: 1711004564365,
      mitigations: [
        {
          description: "Set and enforce secure password policies for accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90c218c3-fbf8-4830-98a7-e8cfb7eaa485",
          label: "Password Policies",
          mitreId: "M1027",
        },
      ],
      mitreId: "T1555.003",
      procedureCount: 8,
      technique: "Credentials from Web Browsers",
      trend: "stable",
    },
    {
      articleCount: 7,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-232b7f21-adf9-4b42-b936-b9d6f7df856e",
      lastSeen: 1711004564365,
      mitigations: [
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
      ],
      mitreId: "T1204.002",
      procedureCount: 8,
      technique: "Malicious File",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-9efb1ea7-c37b-4595-9640-b7680cd84279",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1547.001",
      procedureCount: 8,
      technique: "Registry Run Keys / Startup Folder",
      trend: "stable",
    },
    {
      articleCount: 6,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-10ffac09-e42d-4f56-ab20-db94c67d76ff",
      lastSeen: 1711004564365,
      mitigations: [
        {
          description:
            "Implement configuration changes to software (other than the operating system) to mitigate security risks associated to how the software operates.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b5dbb4c5-b0b1-40b1-80b6-e9e84ab90067",
          label: "Software Configuration",
          mitreId: "M1054",
        },
        {
          description:
            "Use two or more pieces of evidence to authenticate to a system; such as username and password in addition to a token from a physical smart card or token generator.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b045d015-6bed-4490-bd38-56b41ece59a0",
          label: "Multi-factor Authentication",
          mitreId: "M1032",
        },
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
      ],
      mitreId: "T1539",
      procedureCount: 7,
      technique: "Steal Web Session Cookie",
      trend: "increasing",
    },
    {
      articleCount: 5,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-40597f16-0963-4249-bf4c-ac93b7fb9807",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Use a data loss prevention (DLP) strategy to categorize sensitive data, identify data formats indicative of personal identifiable information (PII), and restrict exfiltration of sensitive data.(Citation: PurpleSec Data Loss Prevention)",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-65401701-019d-44ff-b223-08d520bb0e7b",
          label: "Data Loss Prevention",
          mitreId: "M1057",
        },
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
      ],
      mitreId: "T1567",
      procedureCount: 7,
      technique: "Exfiltration Over Web Service",
      trend: "stable",
    },
    {
      articleCount: 6,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-8c32eb4d-805f-4fc5-bf60-c4d476c131b5",
      lastSeen: 1678566696942,
      mitigations: [
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
      ],
      mitreId: "T1204",
      procedureCount: 6,
      technique: "User Execution",
      trend: "stable",
    },
    {
      articleCount: 4,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-a10641f4-87b4-45a3-a906-92a149cb2c27",
      lastSeen: 1685021509078,
      mitigations: [
        {
          description:
            "Architect sections of the network to isolate critical systems, functions, or resources. Use physical and logical segmentation to prevent access to potentially sensitive systems and information. Use a DMZ to contain any internet-facing services that should not be exposed from the internal network. Configure separate virtual private cloud (VPC) instances to isolate critical cloud systems.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-86598de0-b347-4928-9eb0-0acbfc21908c",
          label: "Network Segmentation",
          mitreId: "M1030",
        },
        {
          description:
            "Make configuration changes related to the operating system or a common feature of the operating system that result in system hardening against techniques.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2f316f6c-ae42-44fe-adf8-150989e0f6d3",
          label: "Operating System Configuration",
          mitreId: "M1028",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Use two or more pieces of evidence to authenticate to a system; such as username and password in addition to a token from a physical smart card or token generator.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b045d015-6bed-4490-bd38-56b41ece59a0",
          label: "Multi-factor Authentication",
          mitreId: "M1032",
        },
      ],
      mitreId: "T1098",
      procedureCount: 5,
      technique: "Account Manipulation",
      trend: "stable",
    },
    {
      articleCount: 4,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-391d824f-0ef1-47a0-b0ee-c59a75e27670",
      lastSeen: 1709308270966,
      mitigations: [
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
      ],
      mitreId: "T1106",
      procedureCount: 5,
      technique: "Native API",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-60b508a1-6a5e-46b1-821a-9f7b78752abf",
      lastSeen: 1708611601324,
      mitigations: [
        {
          description:
            "Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-cc2399fd-3cd3-4319-8d0a-fbd6420cdaf8",
          label: "Audit",
          mitreId: "M1047",
        },
        {
          description:
            "Restrict access by setting directory and file permissions that are not specific to users or privileged accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-987988f0-cf86-4680-a875-2f6456ab2448",
          label: "Restrict File and Directory Permissions",
          mitreId: "M1022",
        },
        {
          description: "Protect sensitive information with strong encryption.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-feff9142-e8c2-46f4-842b-bd6fb3d41157",
          label: "Encrypt Sensitive Information",
          mitreId: "M1041",
        },
        {
          description: "Set and enforce secure password policies for accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90c218c3-fbf8-4830-98a7-e8cfb7eaa485",
          label: "Password Policies",
          mitreId: "M1027",
        },
      ],
      mitreId: "T1552.004",
      procedureCount: 4,
      technique: "Private Keys",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-a93494bb-4b80-4ea1-8695-3236a49916fd",
      lastSeen: 1685021509078,
      mitigations: [
        {
          description: "Set and enforce secure password policies for accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90c218c3-fbf8-4830-98a7-e8cfb7eaa485",
          label: "Password Policies",
          mitreId: "M1027",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Configure features related to account use like login attempt lockouts, specific login times, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-f9f9e6ef-bc0a-41ad-ba11-0924e5e84c4c",
          label: "Account Use Policies",
          mitreId: "M1036",
        },
        {
          description:
            "Use two or more pieces of evidence to authenticate to a system; such as username and password in addition to a token from a physical smart card or token generator.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b045d015-6bed-4490-bd38-56b41ece59a0",
          label: "Multi-factor Authentication",
          mitreId: "M1032",
        },
      ],
      mitreId: "T1110",
      procedureCount: 4,
      technique: "Brute Force",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-deb98323-e13f-4b0c-8d94-175379069062",
      lastSeen: 1684411922019,
      mitigations: [
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
      ],
      mitreId: "T1027.002",
      procedureCount: 4,
      technique: "Software Packing",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-b8902400-e6c5-4ba2-95aa-2d35b442b118",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
        {
          description:
            "Break and inspect SSL/TLS sessions to look at encrypted web traffic for adversary activity.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-7bb5fae9-53ad-4424-866b-f0ea2a8b731d",
          label: "SSL/TLS Inspection",
          mitreId: "M1020",
        },
      ],
      mitreId: "T1573",
      procedureCount: 4,
      technique: "Encrypted Channel",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-54b4c251-1f0e-4eba-ba6b-dbc7a6f6f06b",
      lastSeen: 1696888886526,
      mitigations: [
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
      ],
      mitreId: "T1071.003",
      procedureCount: 4,
      technique: "Mail Protocols",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-dfebc3b7-d19d-450b-81c7-6dafe4184c04",
      lastSeen: 1663682361131,
      mitigations: [],
      mitreId: "T1564.005",
      procedureCount: 4,
      technique: "Hidden File System",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-1e9eb839-294b-48cc-b0d3-c45555a2a004",
      lastSeen: 1664193295542,
      mitigations: [
        {
          description: "Protect sensitive information with strong encryption.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-feff9142-e8c2-46f4-842b-bd6fb3d41157",
          label: "Encrypt Sensitive Information",
          mitreId: "M1041",
        },
      ],
      mitreId: "T1114.001",
      procedureCount: 4,
      technique: "Local Email Collection",
      trend: "stable",
    },
    {
      articleCount: 4,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-be2dcee9-a7a7-4e38-afd6-21b31ecc3d63",
      lastSeen: 1700587932996,
      mitigations: [
        {
          description:
            "Restrict execution of code to a virtual environment on or in transit to an endpoint system.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b9f0c069-abbe-4a07-a245-2481219a1463",
          label: "Application Isolation and Sandboxing",
          mitreId: "M1048",
        },
        {
          description:
            "Use capabilities to detect and block conditions that may lead to or be indicative of a software exploit occurring.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-d2a24649-9694-4c97-9c62-ce7b270bf6a3",
          label: "Exploit Protection",
          mitreId: "M1050",
        },
      ],
      mitreId: "T1203",
      procedureCount: 4,
      technique: "Exploitation for Client Execution",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-c877e33f-1df6-40d6-b1e7-ce70f16f4979",
      lastSeen: 1710275596064,
      mitigations: [],
      mitreId: "T1614",
      procedureCount: 3,
      technique: "System Location Discovery",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-2db31dcd-54da-405d-acef-b9129b816ed6",
      lastSeen: 1708611601324,
      mitigations: [
        {
          description:
            "Remove or deny access to unnecessary and potentially vulnerable software to prevent abuse by adversaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-eb88d97c-32f1-40be-80f0-d61a4b0b4b31",
          label: "Disable or Remove Feature or Program",
          mitreId: "M1042",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Use two or more pieces of evidence to authenticate to a system; such as username and password in addition to a token from a physical smart card or token generator.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b045d015-6bed-4490-bd38-56b41ece59a0",
          label: "Multi-factor Authentication",
          mitreId: "M1032",
        },
      ],
      mitreId: "T1021.004",
      procedureCount: 3,
      technique: "SSH",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-ac08589e-ee59-4935-8667-d845e38fe579",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Restrict access by setting directory and file permissions that are not specific to users or privileged accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-987988f0-cf86-4680-a875-2f6456ab2448",
          label: "Restrict File and Directory Permissions",
          mitreId: "M1022",
        },
        {
          description:
            "Restrict the ability to modify certain hives or keys in the Windows Registry.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a2c36a5d-4058-475e-8e77-fff75e50d3b9",
          label: "Restrict Registry Permissions",
          mitreId: "M1024",
        },
      ],
      mitreId: "T1562.001",
      procedureCount: 3,
      technique: "Disable or Modify Tools",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-851e071f-208d-4c79-adc6-5974c85c78f3",
      lastSeen: 1683681721529,
      mitigations: [
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
      ],
      mitreId: "T1657",
      procedureCount: 3,
      technique: "Financial Theft",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-e5d550f3-2202-4634-85f2-4a200a1d49b3",
      lastSeen: 1709827280202,
      mitigations: [
        {
          description:
            "This category is used for any applicable mitigation activities that apply to techniques occurring before an adversary gains Initial Access, such as Reconnaissance and Resource Development techniques.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-78bb71be-92b4-46de-acd6-5f998fedf1cc",
          label: "Pre-compromise",
          mitreId: "M1056",
        },
      ],
      mitreId: "T1608.006",
      procedureCount: 3,
      technique: "SEO Poisoning",
      trend: "stable",
    },
    {
      articleCount: 3,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-045d0922-2310-4e60-b5e4-3302302cb3c5",
      lastSeen: 1709308270966,
      mitigations: [
        {
          description:
            "Use capabilities to detect and block conditions that may lead to or be indicative of a software exploit occurring.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-d2a24649-9694-4c97-9c62-ce7b270bf6a3",
          label: "Exploit Protection",
          mitreId: "M1050",
        },
      ],
      mitreId: "T1218.011",
      procedureCount: 3,
      technique: "Rundll32",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-c21d5a77-d422-4a69-acd7-2c53c1faa34b",
      lastSeen: 1684156562886,
      mitigations: [
        {
          description:
            "Use network appliances to filter ingress or egress traffic and perform protocol-based filtering. Configure software on endpoints to filter network traffic.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-20f6a9df-37c4-4e20-9e47-025983b1b39d",
          label: "Filter Network Traffic",
          mitreId: "M1037",
        },
        {
          description:
            "Architect sections of the network to isolate critical systems, functions, or resources. Use physical and logical segmentation to prevent access to potentially sensitive systems and information. Use a DMZ to contain any internet-facing services that should not be exposed from the internal network. Configure separate virtual private cloud (VPC) instances to isolate critical cloud systems.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-86598de0-b347-4928-9eb0-0acbfc21908c",
          label: "Network Segmentation",
          mitreId: "M1030",
        },
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
      ],
      mitreId: "T1095",
      procedureCount: 3,
      technique: "Non-Application Layer Protocol",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-5372c5fe-f424-4def-bcd5-d3a8e770f07b",
      lastSeen: 1669845424712,
      mitigations: [
        {
          description:
            "Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-cc2399fd-3cd3-4319-8d0a-fbd6420cdaf8",
          label: "Audit",
          mitreId: "M1047",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Restrict the ability to modify certain hives or keys in the Windows Registry.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a2c36a5d-4058-475e-8e77-fff75e50d3b9",
          label: "Restrict Registry Permissions",
          mitreId: "M1024",
        },
        {
          description:
            "Restrict access by setting directory and file permissions that are not specific to users or privileged accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-987988f0-cf86-4680-a875-2f6456ab2448",
          label: "Restrict File and Directory Permissions",
          mitreId: "M1022",
        },
      ],
      mitreId: "T1562.004",
      procedureCount: 3,
      technique: "Disable or Modify System Firewall",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-b200542e-e877-4395-875b-cf1a44537ca4",
      lastSeen: 1636038380127,
      mitigations: [
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
      ],
      mitreId: "T1055.012",
      procedureCount: 3,
      technique: "Process Hollowing",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-d74c4a7e-ffbf-432f-9365-7ebf1f787cab",
      lastSeen: 1684057649393,
      mitigations: [
        {
          description:
            "Use network appliances to filter ingress or egress traffic and perform protocol-based filtering. Configure software on endpoints to filter network traffic.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-20f6a9df-37c4-4e20-9e47-025983b1b39d",
          label: "Filter Network Traffic",
          mitreId: "M1037",
        },
      ],
      mitreId: "T1498",
      procedureCount: 3,
      technique: "Network Denial of Service",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-4bed873f-0b7d-41d4-b93a-b6905d1f90b0",
      lastSeen: 1710415840682,
      mitigations: [],
      mitreId: "T1497.003",
      procedureCount: 2,
      technique: "Time Based Evasion",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-9a60a291-8960-4387-8a4a-2ab5c18bb50b",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
      ],
      mitreId: "T1071.002",
      procedureCount: 2,
      technique: "File Transfer Protocols",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-4061e78c-1284-44b4-9116-73e4ac3912f7",
      lastSeen: 1683735079303,
      mitigations: [
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
        {
          description:
            "Use network appliances to filter ingress or egress traffic and perform protocol-based filtering. Configure software on endpoints to filter network traffic.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-20f6a9df-37c4-4e20-9e47-025983b1b39d",
          label: "Filter Network Traffic",
          mitreId: "M1037",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
      ],
      mitreId: "T1219",
      procedureCount: 2,
      technique: "Remote Access Software",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-43e7dc91-05b2-474c-b9ac-2ed4fe101f4d",
      lastSeen: 1685021509078,
      mitigations: [
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to privileged accounts, including SYSTEM and root.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-9bb9e696-bff8-4ae1-9454-961fc7d91d5f",
          label: "Privileged Account Management",
          mitreId: "M1026",
        },
      ],
      mitreId: "T1055",
      procedureCount: 2,
      technique: "Process Injection",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-5d0d3609-d06d-49e1-b9c9-b544e0c618cb",
      lastSeen: 1693395776304,
      mitigations: [
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Remove or deny access to unnecessary and potentially vulnerable software to prevent abuse by adversaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-eb88d97c-32f1-40be-80f0-d61a4b0b4b31",
          label: "Disable or Remove Feature or Program",
          mitreId: "M1042",
        },
      ],
      mitreId: "T1505.003",
      procedureCount: 2,
      technique: "Web Shell",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-2b742742-28c3-4e1b-bab7-8350d6300fa7",
      lastSeen: 1678566696942,
      mitigations: [
        {
          description:
            "Implement configuration changes to software (other than the operating system) to mitigate security risks associated to how the software operates.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-b5dbb4c5-b0b1-40b1-80b6-e9e84ab90067",
          label: "Software Configuration",
          mitreId: "M1054",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
        {
          description:
            "Train users to be aware of access or manipulation attempts by an adversary to reduce the risk of successful spearphishing, social engineering, and other techniques that involve user interaction.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2a4f6c11-a4a7-4cb9-b0ef-6ae1bb3a718a",
          label: "User Training",
          mitreId: "M1017",
        },
        {
          description:
            "Perform audits or scans of systems, permissions, insecure software, insecure configurations, etc. to identify potential weaknesses.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-cc2399fd-3cd3-4319-8d0a-fbd6420cdaf8",
          label: "Audit",
          mitreId: "M1047",
        },
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
      ],
      mitreId: "T1566.002",
      procedureCount: 2,
      technique: "Spearphishing Link",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-830c9528-df21-472c-8c14-a036bf17d665",
      lastSeen: 1710415840682,
      mitigations: [
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
        {
          description:
            "Use intrusion detection signatures to block traffic at network boundaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-12241367-a8b7-49b4-b86e-2236901ba50c",
          label: "Network Intrusion Prevention",
          mitreId: "M1031",
        },
      ],
      mitreId: "T1102",
      procedureCount: 2,
      technique: "Web Service",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-f5d8eed6-48a9-4cdf-a3d7-d1ffa99c3d2a",
      lastSeen: 1594847072604,
      mitigations: [
        {
          description:
            "Take and store data backups from end user systems and critical servers. Ensure backup and storage systems are hardened and kept separate from the corporate network to prevent compromise.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-3efe43d1-6f3f-4fcb-ab39-4a730971f70b",
          label: "Data Backup",
          mitreId: "M1053",
        },
        {
          description:
            "Make configuration changes related to the operating system or a common feature of the operating system that result in system hardening against techniques.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-2f316f6c-ae42-44fe-adf8-150989e0f6d3",
          label: "Operating System Configuration",
          mitreId: "M1028",
        },
        {
          description:
            "Manage the creation, modification, use, and permissions associated to user accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-93e7968a-9074-4eac-8ae9-9f5200ec3317",
          label: "User Account Management",
          mitreId: "M1018",
        },
      ],
      mitreId: "T1490",
      procedureCount: 2,
      technique: "Inhibit System Recovery",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-8f4a33ec-8b1f-4b80-a2f6-642b2e479580",
      lastSeen: 1661252033096,
      mitigations: [],
      mitreId: "T1057",
      procedureCount: 2,
      technique: "Process Discovery",
      trend: "stable",
    },
    {
      articleCount: 1,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-dfd7cc1d-e1d8-4394-a198-97c4cab8aa67",
      lastSeen: 1636038380127,
      mitigations: [
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Remove or deny access to unnecessary and potentially vulnerable software to prevent abuse by adversaries.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-eb88d97c-32f1-40be-80f0-d61a4b0b4b31",
          label: "Disable or Remove Feature or Program",
          mitreId: "M1042",
        },
        {
          description:
            "Restrict use of certain websites, block downloads/attachments, block Javascript, restrict browser extensions, etc.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-21da4fd4-27ad-4e9c-b93d-0b9b14d02c96",
          label: "Restrict Web-Based Content",
          mitreId: "M1021",
        },
        {
          description:
            "Use signatures or heuristics to detect malicious software.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-a6a47a06-08fc-4ec4-bdc3-20373375ebb9",
          label: "Antivirus/Antimalware",
          mitreId: "M1049",
        },
      ],
      mitreId: "T1059.005",
      procedureCount: 2,
      technique: "Visual Basic",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-1c4e5d32-1fe9-4116-9d9d-59e3925bd6a2",
      lastSeen: 1685084207703,
      mitigations: [
        {
          description:
            "Block execution of code on a system through application control, and/or script blocking.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-47e0e9fe-96ce-4f65-8bb1-8be1feacb5db",
          label: "Execution Prevention",
          mitreId: "M1038",
        },
        {
          description:
            "Enforce binary and application integrity with digital signature verification to prevent untrusted code from executing.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-590777b3-b475-4c7c-aaf8-f4a73b140312",
          label: "Code Signing",
          mitreId: "M1045",
        },
        {
          description:
            "Restrict access by setting directory and file permissions that are not specific to users or privileged accounts.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-987988f0-cf86-4680-a875-2f6456ab2448",
          label: "Restrict File and Directory Permissions",
          mitreId: "M1022",
        },
      ],
      mitreId: "T1036.005",
      procedureCount: 2,
      technique: "Match Legitimate Name or Location",
      trend: "stable",
    },
    {
      articleCount: 2,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-91541e7e-b969-40c6-bbd8-1b5352ec2938",
      lastSeen: 1636038380127,
      mitigations: [],
      mitreId: "T1497.002",
      procedureCount: 2,
      technique: "User Activity Based Checks",
      trend: "stable",
    },
    {
      articleCount: 1,
      entityId:
        "nlp/f/entity/gz:mi:attack-pattern-806a49c4-970d-43f9-9acc-ac0ee11e6662",
      lastSeen: 1636038380127,
      mitigations: [
        {
          description:
            "Use capabilities to prevent suspicious behavior patterns from occurring on endpoint systems. This could include suspicious process, file, API call, etc. behavior.",
          entityId:
            "nlp/f/entity/gz:mi:course-of-action-90f39ee1-d5a3-4aaa-9f28-3b42815b0d46",
          label: "Behavior Prevention on Endpoint",
          mitreId: "M1040",
        },
      ],
      mitreId: "T1055.002",
      procedureCount: 1,
      technique: "Portable Executable Injection",
      trend: "stable",
    },
  ],
  vulnerabilities: [
    {
      count: 1,
      entity: {
        id: "vulnerability/m/entity/CVE-2017-0261",
        label: "CVE-2017-0261",
        type: "vulnerability",
      },
      firstMention: "2017-05-09T12:45:04.602000",
      score: 0.05555555555555555,
    },
    {
      count: 1,
      entity: {
        id: "vulnerability/m/entity/CVE-2020-1206",
        label: "CVE-2020-1206",
        type: "vulnerability",
      },
      firstMention: "2020-06-22T10:45:58.735000",
      score: 0.05555555555555555,
    },
    {
      count: 14,
      entity: {
        id: "vulnerability/m/entity/CVE-2017-11882",
        label: "CVE-2017-11882",
        type: "vulnerability",
      },
      firstMention: "2017-11-26T07:02:13.274000",
      score: 0.7777777777777778,
    },
    {
      count: 1,
      entity: {
        id: "vulnerability/m/entity/CVE-2018-0798",
        label: "CVE-2018-0798",
        type: "vulnerability",
      },
      firstMention: "2019-07-03T10:09:12.545000",
      score: 0.05555555555555555,
    },
    {
      count: 1,
      entity: {
        id: "vulnerability/m/entity/CVE-2022-30190",
        label: "CVE-2022-30190",
        type: "vulnerability",
      },
      firstMention: "2022-06-01T02:05:29.527000",
      score: 0.05555555555555555,
    },
  ],
};

export const mockThreatEntity: FeedlyThreatEntity = {
  id: "nlp/f/entity/gz:mal:6b87fada-86b3-449d-826d-a89858121b68",
  knowledgeBaseUrl:
    "https://malpedia.caad.fkie.fraunhofer.de/details/win.404keylogger",
  entitiesToSupersede: [
    "nlp/f/entity/gz:mal:99299e3a-77c0-409b-9b47-7f7d69229b99",
  ],
  searchStrategy: "id",
  enterpriseFeatures: ["LeoSecurity"],
  description:
    "family of malware. The 404 Keylogger, also known as Snake Keylogger, is a modular .NET keylogger and infostealer that was first spotted in late November 2020. It is primarily designed to record users' keystrokes and transmit collected data to threat actors. The malware is typically delivered to target systems via malicious email attachments, infected software downloads, or drive-by downloads. Once installed on a system, the malware operates in the background and collects information as the user interacts with their computer, including taking screenshots and extracting data from the clipboard. The Snake Keylogger is also capable of stealing sensitive information such as logins, passwords, and credentials, and has been observed in ongoing email campaigns aimed at mass distribution of the malware. Additionally, the Snake Keylogger has been found to share code similarities with other .NET keyloggers, suggesting a potential link between different malware families.",
  badges: ["MALPEDIA"],
  leoBehaviorExplanation:
    "Feedly AI will look for malware family 404 Keylogger and its aliases:",
  leoBehaviorExamples: ["Matiex", "Snake Keylogger"],
  hasSalience: true,
  aliases: [
    "Snake Keylogger",
    "Matiex",
    "APT-C-20",
    "Blue Athena",
    "STRONTIUM",
    "SNAKEMACKEREL",
  ],
  popularity: 598,
  type: "malwareFamily",
  label: "404 Keylogger",
  createdAt: "2021-09-28T09:48:43.350890",
  malwareDetails: {
    associatedThreatActors: [],
    malpediaDescription:
      "The 404 Keylogger, also known as Snake Keylogger, is a modular .NET keylogger and infostealer that was first spotted in late November 2020. It is primarily designed to record users' keystrokes and transmit collected data to threat actors. The malware is typically delivered to target systems via malicious email attachments, infected software downloads, or drive-by downloads. Once installed on a system, the malware operates in the background and collects information as the user interacts with their computer, including taking screenshots and extracting data from the clipboard. The Snake Keylogger is also capable of stealing sensitive information such as logins, passwords, and credentials, and has been observed in ongoing email campaigns aimed at mass distribution of the malware. Additionally, the Snake Keylogger has been found to share code similarities with other .NET keyloggers, suggesting a potential link between different malware families.",
    malwareTypes: ["KEYLOGGER"],
  },
  threatActorDetails: {
    associatedMalwares: [
      {
        id: "nlp/f/entity/gz:mal:579cc23d-4ba4-419f-bf8a-f235ed33125e",
        label: "Coreshell",
      },
      {
        id: "nlp/f/entity/gz:mal:8f70eaef-7861-4faf-b2b8-72003386379b",
        label: "CredoMap",
      },
      {
        id: "nlp/f/entity/gz:mal:730a4e94-4f9b-4f34-a1f3-1c97d341332c",
        label: "DriveOcean",
      },
      {
        id: "nlp/f/entity/gz:mal:3fada5b6-0b3d-4b83-97c9-2157c959704c",
        label: "Cannon",
      },
      {
        id: "nlp/f/entity/gz:mal:a8404a31-968a-47e8-8434-533ceaf84c1f",
        label: "X-Agent (Linux)",
      },
      {
        id: "nlp/f/entity/gz:mal:d24882f9-8645-4f6a-8a86-2f85daaad685",
        label: "Computrace",
      },
      {
        id: "nlp/f/entity/gz:mal:c6053700-5f3b-48cc-8176-191393522fc3",
        label: "CaddyWiper",
      },
      {
        id: "nlp/f/entity/gz:mal:33f97c52-0bcd-43f4-88bb-99e7da9f49ae",
        label: "XP PrivEsc",
      },
      {
        id: "nlp/f/entity/gz:mal:0a7d9d22-a26d-4a2b-ab9b-b296176c3ecf",
        label: "X-Agent (Android)",
      },
      {
        id: "nlp/f/entity/gz:mal:d26b5518-8d7f-41a6-b539-231e4962853e",
        label: "Komplex",
      },
      {
        id: "nlp/f/entity/gz:mal:6e33d8cd-f8aa-4be4-9619-867a469a1425",
        label: "OCEANMAP",
      },
      {
        id: "nlp/f/entity/gz:mal:e9b4bec3-ad18-49cc-b6af-c0ffcc283153",
        label: "ArguePatch",
      },
      {
        id: "nlp/f/entity/gz:mal:4a5f2088-18cb-426a-92e2-1eb752c294c0",
        label: "Zebrocy (AutoIT)",
      },
      {
        id: "nlp/f/entity/gz:mal:000e25a4-4623-4afc-883d-ecc15be8f9d0",
        label: "X-Tunnel",
      },
      {
        id: "nlp/f/entity/gz:mal:3b5faa15-e87e-4aaf-b791-2c5e593793e6",
        label: "Koadic",
      },
      {
        id: "nlp/f/entity/gz:mal:1a6c5b4f-9ca9-4201-abad-3f2ce7fa5c91",
        label: "Graphite",
      },
      {
        id: "nlp/f/entity/gz:mal:e6a077cb-42cc-4193-9006-9ceda8c0dff2",
        label: "Downdelph",
      },
      {
        id: "nlp/f/entity/gz:mal:25804d6d-447f-4933-9ba0-876f9d054b68",
        label: "PocoDown",
      },
      {
        id: "nlp/f/entity/gz:mal:6bd20349-1231-4aaa-ba2a-f4b09d3b344c",
        label: "Seduploader",
      },
      {
        id: "nlp/f/entity/gz:mal:0eb52072-a2db-4689-bc2d-ac0ae65bdd8c",
        label: "Mocky LNK",
      },
      {
        id: "nlp/f/entity/gz:mal:15228ae0-26f9-44d8-8d6e-87b0bd2d2aba",
        label: "LoJax",
      },
      {
        id: "nlp/f/entity/gz:mal:e8b38fbd-a7ce-4073-a660-44dfabc1b678",
        label: "X-Agent (Windows)",
      },
      {
        id: "nlp/f/entity/gz:mal:21ab9e14-602a-4a76-a308-dbf5d6a91d75",
        label: "Sedreco",
      },
      {
        id: "nlp/f/entity/gz:mal:5de632a3-bf82-4cef-90fa-e7199fdb932c",
        label: "FusionDrive",
      },
      {
        id: "nlp/f/entity/gz:mal:973124e2-0d84-4be5-9c8e-3ff16bb43b42",
        label: "Zebrocy",
      },
      {
        id: "nlp/f/entity/gz:mal:858f4396-8bc9-4df8-9370-490bbb3b4535",
        label: "X-Agent (MacOS)",
      },
      {
        id: "nlp/f/entity/gz:mal:f92fb48b-2949-45cd-ad40-a2e1d84347f8",
        label: "MASEPIE",
      },
      {
        id: "nlp/f/entity/gz:mal:b79a6b61-f122-4823-a4ab-bbab89fcaf75",
        label: "OLDBAIT",
      },
      {
        id: "nlp/f/entity/gz:mal:430b9f30-5e37-49c8-b4e7-21589f120d89",
        label: "X-Agent (iOS)",
      },
      {
        id: "nlp/f/entity/gz:mal:53089817-6d65-4802-a7d2-5ccc3d919b74",
        label: "XTunnel",
      },
    ],
    country: "RU",
    malpediaDescription:
      "The Sofacy Group (also known as APT28, Pawn Storm, Fancy Bear and Sednit) is a cyber espionage group believed to have ties to the Russian government. Likely operating since 2007, the group is known to target government, military, and security organizations. It has been characterized as an advanced persistent threat.",
    targets: [
      "Afghanistan",
      "Armenia",
      "Asia Pacific Economic Cooperation",
      "Belgium",
      "China",
      "European Commission",
      "France",
      "Georgia",
      "Germany",
      "Hungary",
      "International Association of Athletics Federations",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Mongolia",
      "NATO",
      "OSCE",
      "Pakistan",
      "Poland",
      "Tajikistan",
      "Turkey",
      "Ukraine",
      "United Kingdom",
      "United States",
      "World Anti-Doping Agency",
    ],
  },
};

export const mockThreatCVEs: FeedlyCVE[] = [
  {
    cveid: "CVE-2018-0798",
    id: "vulnerability/m/entity/CVE-2018-0798",
    type: "vulnerability",
    label: "CVE-2018-0798",
    hasSalience: true,
    description:
      'Equation Editor in Microsoft Office 2007, Microsoft Office 2010, Microsoft Office 2013, and Microsoft Office 2016 allows a remote code execution vulnerability due to the way objects are handled in memory, aka "Microsoft Office Memory Corruption Vulnerability".',
    cvssV3: {
      integrityImpact: "HIGH",
      version: "3.0",
      availabilityImpact: "HIGH",
      scope: "UNCHANGED",
      attackVector: "NETWORK",
      userInteraction: "REQUIRED",
      baseScore: 8.8,
      attackComplexity: "LOW",
      confidentialityImpact: "HIGH",
      privilegesRequired: "NONE",
      vectorString: "CVSS:3.0/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
    },
    cvssV2: {
      integrityImpact: "COMPLETE",
      version: "2.0",
      availabilityImpact: "COMPLETE",
      authentication: "NONE",
      accessComplexity: "MEDIUM",
      baseScore: 9.3,
      vectorString: "AV:N/AC:M/Au:N/C:C/I:C/A:C",
      confidentialityImpact: "COMPLETE",
      accessVector: "NETWORK",
    },
    cweIds: [
      {
        cweID: "CWE-787",
        name: "Out-of-bounds Write",
      },
    ],
    smallGraphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2018-0798-small-65cccec7a4852b112e7fcafedb5b1ea9.svg",
    trending: false,
    graphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2018-0798-65cccec7a4852b112e7fcafedb5b1ea9.svg",
    epssScore: "0.948620000",
    patchDetails: [
      {
        title: "portal.msrc.microsoft.com",
        patchAddedDate: "2022-04-06T14:51:18.980054-07:00",
        source: "nvd",
        url: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2018-0798",
      },
    ],
    patched: true,
    feedlyInsertedDate: "2022-04-06T21:51:19.043215+00:00",
    publishedDate: "2018-01-10T01:29:00+00:00",
    publicationDateInfo: [
      {
        publishedDate: "2018-01-10T01:29:00+00:00",
        source: "nvd",
        lastModifiedDate: "2020-08-24T17:37:00+00:00",
      },
    ],
    affectedProducts: [
      {
        vendor: "microsoft",
        products: [
          {
            name: "office",
            vulnerableVersions: [
              "2010-sp2",
              "2016",
              "2016",
              "2007-sp3",
              "2013-sp1",
            ],
          },
          {
            name: "word",
            vulnerableVersions: [
              "2013-sp1",
              "2016",
              "2007-sp3",
              "2010-sp2",
              "2013-sp1",
            ],
          },
          {
            name: "office_compatibility_pack",
          },
        ],
      },
    ],
    vulnerableProducts: {
      vendor: "microsoft",
      products: ["office", "word", "office_compatibility_pack"],
    },
    idMapping: [],
    timeline: [
      {
        event: "firstInsert",
        date: "2022-04-06T21:51:19.043249+00:00",
        source: "nvd",
      },
      {
        event: "trendingSparklineUrl",
        date: "2022-04-22T22:55:58.702827+00:00",
        source: "leo_trend",
      },
    ],
  },
  {
    cveid: "CVE-2017-11882",
    id: "vulnerability/m/entity/CVE-2017-11882",
    type: "vulnerability",
    label: "CVE-2017-11882",
    hasSalience: true,
    description:
      'Microsoft Office 2007 Service Pack 3, Microsoft Office 2010 Service Pack 2, Microsoft Office 2013 Service Pack 1, and Microsoft Office 2016 allow an attacker to run arbitrary code in the context of the current user by failing to properly handle objects in memory, aka "Microsoft Office Memory Corruption Vulnerability". This CVE ID is unique from CVE-2017-11884.',
    cvssV3: {
      integrityImpact: "HIGH",
      version: "3.1",
      availabilityImpact: "HIGH",
      scope: "UNCHANGED",
      attackVector: "LOCAL",
      userInteraction: "REQUIRED",
      baseScore: 7.8,
      attackComplexity: "LOW",
      confidentialityImpact: "HIGH",
      privilegesRequired: "NONE",
      vectorString: "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
    },
    cvssV2: {
      integrityImpact: "COMPLETE",
      version: "2.0",
      availabilityImpact: "COMPLETE",
      authentication: "NONE",
      accessComplexity: "MEDIUM",
      baseScore: 9.3,
      vectorString: "AV:N/AC:M/Au:N/C:C/I:C/A:C",
      confidentialityImpact: "COMPLETE",
      accessVector: "NETWORK",
    },
    cweIds: [
      {
        cweID: "CWE-119",
        name: "Improper Restriction of Operations within the Bounds of a Memory Buffer",
      },
    ],
    smallGraphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2017-11882-small-dea3f46c6b0a40ce9b5801f6909af2f1.svg",
    trending: false,
    graphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2017-11882-dea3f46c6b0a40ce9b5801f6909af2f1.svg",
    epssScore: "0.974640000",
    patchDetails: [
      {
        title: "portal.msrc.microsoft.com",
        patchAddedDate: "2022-04-06T14:48:16.687373-07:00",
        source: "nvd",
        url: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2017-11882",
      },
      {
        title: "0patch.blogspot.com",
        patchAddedDate: "2022-04-06T14:48:16.687525-07:00",
        source: "nvd",
        url: "https://0patch.blogspot.com/2017/11/official-patch-for-cve-2017-11882-meets.html",
      },
    ],
    patched: true,
    newExploits: [
      {
        exploitAddedDate: "2022-04-06T14:48:16.687424-07:00",
        source: "nvd",
        url: "https://0patch.blogspot.com/2017/11/did-microsoft-just-manually-patch-their.html",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687447-07:00",
        source: "nvd",
        url: "https://github.com/embedi/CVE-2017-11882",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687463-07:00",
        source: "nvd",
        url: "https://github.com/0x09AL/CVE-2017-11882-metasploit",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687481-07:00",
        source: "nvd",
        url: "https://www.exploit-db.com/exploits/43163/",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687536-07:00",
        source: "nvd",
        url: "https://0patch.blogspot.com/2017/11/official-patch-for-cve-2017-11882-meets.html",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687550-07:00",
        source: "nvd",
        url: "http://reversingminds-blog.logdown.com/posts/3907313-fileless-attack-in-word-without-macros-cve-2017-11882",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687562-07:00",
        source: "nvd",
        url: "https://github.com/unamer/CVE-2017-11882",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687575-07:00",
        source: "nvd",
        url: "https://researchcenter.paloaltonetworks.com/2017/12/unit42-analysis-of-cve-2017-11882-exploit-in-the-wild/",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687588-07:00",
        source: "nvd",
        url: "https://github.com/rxwx/CVE-2017-11882",
      },
      {
        exploitAddedDate: "2022-04-06T14:48:16.687600-07:00",
        source: "nvd",
        url: "https://web.archive.org/web/20181104111128/https://embedi.com/blog/skeleton-closet-ms-office-vulnerability-you-didnt-know-about/",
      },
    ],
    exploits: [
      "https://0patch.blogspot.com/2017/11/did-microsoft-just-manually-patch-their.html",
      "https://github.com/embedi/CVE-2017-11882",
      "https://github.com/0x09AL/CVE-2017-11882-metasploit",
      "https://www.exploit-db.com/exploits/43163/",
      "https://0patch.blogspot.com/2017/11/official-patch-for-cve-2017-11882-meets.html",
      "http://reversingminds-blog.logdown.com/posts/3907313-fileless-attack-in-word-without-macros-cve-2017-11882",
      "https://github.com/unamer/CVE-2017-11882",
      "https://researchcenter.paloaltonetworks.com/2017/12/unit42-analysis-of-cve-2017-11882-exploit-in-the-wild/",
      "https://github.com/rxwx/CVE-2017-11882",
      "https://web.archive.org/web/20181104111128/https://embedi.com/blog/skeleton-closet-ms-office-vulnerability-you-didnt-know-about/",
    ],
    feedlyInsertedDate: "2022-04-06T21:48:16.759769+00:00",
    publishedDate: "2017-11-15T03:29:00+00:00",
    publicationDateInfo: [
      {
        publishedDate: "2017-11-15T03:29:00+00:00",
        source: "nvd",
        lastModifiedDate: "2021-03-16T17:21:00+00:00",
      },
    ],
    affectedProducts: [
      {
        vendor: "microsoft",
        products: [
          {
            name: "office",
            vulnerableVersions: ["2013-sp1", "2010-sp2", "2016", "2007-sp3"],
          },
        ],
      },
    ],
    vulnerableProducts: {
      vendor: "microsoft",
      products: ["office"],
    },
    idMapping: [
      {
        id: "CAPEC-10",
        name: "Buffer Overflow via Environment Variables",
      },
      {
        id: "CAPEC-100",
        name: "Overflow Buffers",
      },
      {
        id: "CAPEC-123",
        name: "Buffer Manipulation",
      },
      {
        id: "CAPEC-14",
        name: "Client-side Injection-induced Buffer Overflow",
      },
      {
        id: "CAPEC-24",
        name: "Filter Failure through Buffer Overflow",
      },
      {
        id: "CAPEC-42",
        name: "MIME Conversion",
      },
      {
        id: "CAPEC-44",
        name: "Overflow Binary Resource File",
      },
      {
        id: "CAPEC-45",
        name: "Buffer Overflow via Symbolic Links",
      },
      {
        id: "CAPEC-46",
        name: "Overflow Variables and Tags",
      },
      {
        id: "CAPEC-47",
        name: "Buffer Overflow via Parameter Expansion",
      },
      {
        id: "CAPEC-8",
        name: "Buffer Overflow in an API Call",
      },
      {
        id: "CAPEC-9",
        name: "Buffer Overflow in Local Command-Line Utilities",
      },
    ],
    timeline: [
      {
        event: "firstInsert",
        date: "2022-04-06T21:48:16.759854+00:00",
        source: "nvd",
      },
      {
        event: "trendingSparklineUrl",
        date: "2022-04-06T23:52:38.627597+00:00",
        source: "leo_trend",
      },
    ],
  },
  {
    cveid: "CVE-2020-1206",
    id: "vulnerability/m/entity/CVE-2020-1206",
    type: "vulnerability",
    label: "CVE-2020-1206",
    hasSalience: true,
    description:
      "An information disclosure vulnerability exists in the way that the Microsoft Server Message Block 3.1.1 (SMBv3) protocol handles certain requests, aka 'Windows SMBv3 Client/Server Information Disclosure Vulnerability'.",
    cvssV3: {
      integrityImpact: "NONE",
      version: "3.1",
      availabilityImpact: "NONE",
      scope: "UNCHANGED",
      attackVector: "NETWORK",
      userInteraction: "NONE",
      baseScore: 7.5,
      attackComplexity: "LOW",
      confidentialityImpact: "HIGH",
      privilegesRequired: "NONE",
      vectorString: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N",
    },
    cvssV2: {
      integrityImpact: "NONE",
      version: "2.0",
      availabilityImpact: "NONE",
      authentication: "NONE",
      accessComplexity: "LOW",
      baseScore: 5,
      vectorString: "AV:N/AC:L/Au:N/C:P/I:N/A:N",
      confidentialityImpact: "PARTIAL",
      accessVector: "NETWORK",
    },
    cweIds: [
      {
        cweID: "CWE-908",
        name: "Use of Uninitialized Resource",
      },
    ],
    smallGraphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2020-1206-small-026d6905cb77db9b2cc747dc69bc990f.svg",
    trending: false,
    graphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2020-1206-026d6905cb77db9b2cc747dc69bc990f.svg",
    epssScore: "0.875870000",
    patchDetails: [
      {
        title: "portal.msrc.microsoft.com",
        patchAddedDate: "2022-04-06T14:51:35.730449-07:00",
        source: "nvd",
        url: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-1206",
      },
    ],
    patched: true,
    newExploits: [
      {
        exploitAddedDate: "2022-04-06T14:51:35.730482-07:00",
        source: "nvd",
        url: "http://packetstormsecurity.com/files/158053/SMBleed-Uninitialized-Kernel-Memory-Read-Proof-Of-Concept.html",
      },
    ],
    exploits: [
      "http://packetstormsecurity.com/files/158053/SMBleed-Uninitialized-Kernel-Memory-Read-Proof-Of-Concept.html",
    ],
    feedlyInsertedDate: "2022-04-06T21:51:35.860084+00:00",
    publishedDate: "2020-06-09T20:15:00+00:00",
    publicationDateInfo: [
      {
        publishedDate: "2020-06-09T20:15:00+00:00",
        source: "nvd",
        lastModifiedDate: "2021-07-21T11:39:00+00:00",
      },
    ],
    affectedProducts: [
      {
        vendor: "microsoft",
        products: [
          {
            name: "windows_10",
            vulnerableVersions: ["1903", "1909", "2004"],
          },
          {
            name: "windows_server_2016",
            vulnerableVersions: ["1903", "1909", "2004"],
          },
        ],
      },
    ],
    vulnerableProducts: {
      vendor: "microsoft",
      products: ["windows_10", "windows_server_2016"],
    },
    idMapping: [],
    timeline: [
      {
        event: "firstInsert",
        date: "2022-04-06T21:51:35.860127+00:00",
        source: "nvd",
      },
      {
        event: "trendingSparklineUrl",
        date: "2022-05-02T16:00:16.591716+00:00",
        source: "leo_trend",
      },
    ],
  },
  {
    cveid: "CVE-2017-0261",
    id: "vulnerability/m/entity/CVE-2017-0261",
    type: "vulnerability",
    label: "CVE-2017-0261",
    hasSalience: true,
    description:
      'Microsoft Office 2010 SP2, Office 2013 SP1, and Office 2016 allow a remote code execution vulnerability when the software fails to properly handle objects in memory, aka "Office Remote Code Execution Vulnerability". This CVE ID is unique from CVE-2017-0262 and CVE-2017-0281.',
    cvssV3: {
      integrityImpact: "HIGH",
      version: "3.0",
      availabilityImpact: "HIGH",
      scope: "UNCHANGED",
      attackVector: "LOCAL",
      userInteraction: "REQUIRED",
      baseScore: 7.8,
      attackComplexity: "LOW",
      confidentialityImpact: "HIGH",
      privilegesRequired: "NONE",
      vectorString: "CVSS:3.0/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
    },
    cvssV2: {
      integrityImpact: "COMPLETE",
      version: "2.0",
      availabilityImpact: "COMPLETE",
      authentication: "NONE",
      accessComplexity: "MEDIUM",
      baseScore: 9.3,
      vectorString: "AV:N/AC:M/Au:N/C:C/I:C/A:C",
      confidentialityImpact: "COMPLETE",
      accessVector: "NETWORK",
    },
    cweIds: [
      {
        cweID: "CWE-416",
        name: "Use After Free",
      },
    ],
    smallGraphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2017-0261-small-b2d0722bdeb4fe4e0583559fd98f107f.svg",
    trending: false,
    graphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2017-0261-b2d0722bdeb4fe4e0583559fd98f107f.svg",
    epssScore: "0.960750000",
    patchDetails: [
      {
        title: "portal.msrc.microsoft.com",
        patchAddedDate: "2022-04-06T14:49:09.992523-07:00",
        source: "nvd",
        url: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2017-0261",
      },
    ],
    patched: true,
    newExploits: [
      {
        exploitAddedDate: "2022-05-05T22:12:06.124945+00:00",
        source: "google-0day-advisory",
        url: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2017-0261",
      },
    ],
    exploits: [
      "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2017-0261",
    ],
    proofOfExploits: [
      "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2017-0261",
    ],
    feedlyInsertedDate: "2022-04-06T21:49:10.051838+00:00",
    feedlyUpdatedDate: "2024-03-26T05:11:35.962693+00:00",
    publishedDate: "2017-05-12T14:29:00+00:00",
    publicationDateInfo: [
      {
        publishedDate: "2017-05-12T14:29:00+00:00",
        source: "nvd",
        lastModifiedDate: "2019-10-03T00:03:00+00:00",
      },
    ],
    affectedProducts: [
      {
        vendor: "microsoft",
        products: [
          {
            name: "office",
            vulnerableVersions: ["2016", "2013-sp1", "2010-sp2"],
          },
        ],
      },
    ],
    vulnerableProducts: {
      vendor: "microsoft",
      products: ["office"],
    },
    idMapping: [],
  },
  {
    cveid: "CVE-2022-30190",
    id: "vulnerability/m/entity/CVE-2022-30190",
    type: "vulnerability",
    label: "CVE-2022-30190",
    hasSalience: true,
    advisoryUrl:
      "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-30190",
    description:
      '<p>A remote code execution vulnerability exists when MSDT is called using the URL protocol from a calling application such as Word. An attacker who successfully exploits this vulnerability can run arbitrary code with the privileges of the calling application. The attacker can then install programs, view, change, or delete data, or create new accounts in the context allowed by the user’s rights.</p>\n<p>Please see the <a href="https://aka.ms/CVE-2022-30190-Guidance">MSRC Blog Entry</a> for important information about steps you can take to protect your system from this vulnerability.</p>\n',
    cvssCategoryEstimate: "HIGH",
    cvssV3: {
      integrityImpact: "HIGH",
      version: "3.1",
      availabilityImpact: "HIGH",
      scope: "UNCHANGED",
      attackVector: "LOCAL",
      userInteraction: "REQUIRED",
      baseScore: 7.8,
      attackComplexity: "LOW",
      confidentialityImpact: "HIGH",
      privilegesRequired: "NONE",
      vectorString: "CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H",
    },
    cvssV2: {
      integrityImpact: "COMPLETE",
      version: "2.0",
      availabilityImpact: "COMPLETE",
      authentication: "NONE",
      accessComplexity: "MEDIUM",
      baseScore: 9.3,
      vectorString: "AV:N/AC:M/Au:N/C:C/I:C/A:C",
      confidentialityImpact: "COMPLETE",
      accessVector: "NETWORK",
    },
    cweIds: [
      {
        cweID: "CWE-610",
        name: "Externally Controlled Reference to a Resource in Another Sphere",
      },
    ],
    smallGraphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2022-30190-small-718f65191e1b1f121dbe72b4cc1b13f7.svg",
    trending: true,
    graphUrl:
      "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2022-30190-718f65191e1b1f121dbe72b4cc1b13f7.svg",
    epssScore: "0.972510000",
    patchDetails: [
      {
        title: "Microsoft",
        patchAddedDate: "2022-05-30T00:00:00-07:00",
        source: "microsoft",
        url: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-30190",
      },
    ],
    patched: true,
    newExploits: [
      {
        exploitAddedDate: "2022-05-30T00:00:00-07:00",
        source: "microsoft",
        url: "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-30190",
      },
      {
        exploitAddedDate: "2022-06-03T08:18:57.176732-07:00",
        source: "google-0day-advisory",
        url: "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-30190",
      },
      {
        exploitAddedDate: "2022-06-07T11:20:32.957527-07:00",
        source: "nvd",
        url: "http://packetstormsecurity.com/files/167438/Microsoft-Office-Word-MSDTJS-Code-Execution.html",
      },
      {
        exploitAddedDate: "2022-06-14T14:12:04.049204-07:00",
        source: "cisa_exploited_vulnerability",
        url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
      },
    ],
    exploits: [
      "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2022-30190",
      "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-30190",
      "http://packetstormsecurity.com/files/167438/Microsoft-Office-Word-MSDTJS-Code-Execution.html",
      "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
    ],
    proofOfExploits: [
      "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2022-30190",
    ],
    feedlyInsertedDate: "2022-05-30T23:30:22.627294+00:00",
    feedlyUpdatedDate: "2024-03-26T05:11:10.534944+00:00",
    publishedDate: "2022-05-30T07:00:00+00:00",
    publicationDateInfo: [
      {
        publishedDate: "2022-05-30T07:00:00+00:00",
        source: "microsoft",
      },
      {
        publishedDate: "2022-06-01T20:15:00+00:00",
        feedlyInsertedDate: "2022-06-01T20:20:07.277699+00:00",
        source: "nvd",
        lastModifiedDate: "2022-06-01T20:15:00+00:00",
        feedlyUpdatedDate: "2022-06-01T20:20:12.231145+00:00",
      },
    ],
    affectedProducts: [
      {
        vendor: "microsoft",
        products: [
          {
            name: "windows_10",
            vulnerableVersions: [
              {
                version: "20h2",
              },
              {
                version: "21h1",
              },
              {
                version: "21h2",
              },
              {
                version: "1607",
              },
              {
                version: "1809",
              },
            ],
          },
          {
            name: "windows_11",
            vulnerableVersions: [],
          },
          {
            name: "windows_7",
            vulnerableVersions: [],
          },
          {
            name: "windows_8.1",
            vulnerableVersions: [],
          },
          {
            name: "windows_rt_8.1",
            vulnerableVersions: [],
          },
          {
            name: "windows_server_2008",
            vulnerableVersions: [
              {
                version: "r2-sp1",
              },
            ],
          },
          {
            name: "windows_server_2012",
            vulnerableVersions: [
              {
                version: "r2",
              },
            ],
          },
          {
            name: "windows_server_2016",
            vulnerableVersions: [],
          },
          {
            name: "windows_server_2019",
            vulnerableVersions: [],
          },
          {
            name: "windows_server_2022",
            vulnerableVersions: [],
          },
        ],
      },
    ],
    vulnerableProducts: {
      vendor: "microsoft",
      products: [
        "windows_10",
        "windows_11",
        "windows_7",
        "windows_8.1",
        "windows_rt_8.1",
        "windows_server_2008",
        "windows_server_2012",
        "windows_server_2016",
        "windows_server_2019",
        "windows_server_2022",
      ],
    },
    idMapping: [
      {
        id: "CAPEC-219",
        name: "XML Routing Detour Attacks",
      },
    ],
    timeline: [
      {
        event: "cvssCategoryEstimate",
        date: "2022-05-30T23:36:01.825184+00:00",
        source: "leo_cvss",
      },
    ],
    tweets: [
      {
        tweetAddedDate: "2022-05-30T21:24:23.073430-07:00",
        screen_name: "k8em0",
        full_text:
          'RT @GossiTheDog: Microsoft have assigned CVE-2022-30190 to this. \n\nThe blog references how Protected Mode "prevents" the attack which is...…',
        id: "1531491667726938113",
      },
      {
        tweetAddedDate: "2022-05-31T06:40:10.647502-07:00",
        screen_name: "hackerfantastic",
        full_text:
          'CVE-2022-30190 "Microsoft Windows Support Diagnostic Tool (MSDT) Remote Code Execution Vulnerability" has mitigations and workarounds, details https://t.co/0enpSNToRx &amp; workarounds https://t.co/ZpQ9oJZUaN',
        id: "1531631519680299008",
      },
      {
        tweetAddedDate: "2022-05-31T12:30:22.607871-07:00",
        screen_name: "hackerfantastic",
        full_text:
          'This thesis paper on Electron security vulnerabilities which included CVE-2022-30190 will never stop being funny, also implies you could use "search-ms:" URI handler in a similar OLEObject fashion but connect with a remote CIFS share via a UNC path to start an EXE. � https://t.co/CcM3TjHaxb',
        id: "1531718297724526592",
      },
      {
        tweetAddedDate: "2022-05-31T12:40:18.298165-07:00",
        screen_name: "dangoodin001",
        full_text:
          "This is every bit as bad as it sounds, only worse.\n\n-- 0 click\n-- 0 day\n-- in a core windows application\n-- hard to detect\n\nThe requirements are fairly specific, but they occur often enough to make CVE-2022-30190 the ideal means to detonate payloads on Windows machines. https://t.co/WmcIhPsKXq",
        id: "1531722186708246528",
      },
      {
        tweetAddedDate: "2022-05-31T18:40:06.491766-07:00",
        screen_name: "hackerfantastic",
        full_text:
          "Note that this is not CVE-2022-30190 but uses the same OLEObject vector as CVE-2021-40444 and CVE-2022-30190, however as it requires additional user interaction and an outbound UNC connection the CVSS risk score is reduced. It is also currently unpatched but mitigation steps work",
        id: "1531811993988091904",
      },
      {
        tweetAddedDate: "2022-05-31T18:40:06.491766-07:00",
        screen_name: "hackerfantastic",
        full_text:
          "Note that this is not CVE-2022-30190 but uses the same OLEObject vector as CVE-2021-40444 and CVE-2022-30190, however as it requires additional user interaction and an outbound UNC connection the CVSS risk score is reduced. It is also currently unpatched but mitigation steps work",
        id: "1531811993988091904",
      },
      {
        tweetAddedDate: "2022-06-01T09:50:09.449309-07:00",
        screen_name: "BrianHonan",
        full_text:
          "RT @enisa_eu: #Follina CVE-2022-30190: #ENISA advises to implement the #eusirtsnetwork members alerts asap.\n\nFor the CSIRT's Network member…",
        id: "1532039547399376897",
      },
      {
        tweetAddedDate: "2022-06-01T18:20:14.949156-07:00",
        screen_name: "thegrugq",
        full_text:
          'RT @GossiTheDog: Microsoft have assigned CVE-2022-30190 to this. \n\nThe blog references how Protected Mode "prevents" the attack which is...…',
        id: "1531566144867270656",
      },
      {
        tweetAddedDate: "2022-06-01T20:10:08.864200-07:00",
        screen_name: "security4all",
        full_text:
          'RT @0patch: Free Micropatches For "Follina" Microsoft Diagnostic Tool Remote Code Execution 0day (CVE-2022-30190) #Follina\nhttps://t.co/lyN…',
        id: "1532197301250584576",
      },
      {
        tweetAddedDate: "2022-06-02T12:10:18.867876-07:00",
        screen_name: "thegrugq",
        full_text:
          "RT @campuscodi: Nice timeline for the CVE-2022-30190 (Folina) zero-day (via Fortinet)\n\nhttps://t.co/XPsgSs0EA7 https://t.co/ysNdEWBpx1",
        id: "1532439165396168704",
      },
      {
        tweetAddedDate: "2022-06-06T03:20:10.867426-07:00",
        screen_name: "e_kaspersky",
        full_text:
          "CVE-2022-30190 (Follina) vulnerability in MSDT: description and counteraction � https://t.co/w2gvX6wv5c https://t.co/oWTbRAWaTS",
        id: "1533752627363581952",
      },
      {
        tweetAddedDate: "2022-06-07T16:00:10.343787-07:00",
        screen_name: "hackerfantastic",
        full_text:
          "RT @j00sean: Tonight while testing PDF Readers, i found a way to trigger CVE-2022-30190 aka #Follina bug in Foxit PDF Reader. This doesn't…",
        id: "1534308202556407809",
      },
      {
        tweetAddedDate: "2022-06-14T12:10:10.847653-07:00",
        screen_name: "ryanaraine",
        full_text:
          "RT @EduardKovacs: Microsoft has finally patched the Windows vulnerability known as Follina and CVE-2022-30190, two years after its root cau…",
        id: "1536786118066114560",
      },
      {
        tweetAddedDate: "2022-06-15T06:12:18.573377-07:00",
        screen_name: "hackerfantastic",
        full_text:
          "RT @80vul: https://t.co/EZlw4Vr9dV The official patch for CVE-2022-30190 is released. Added regular filtering to the RunScript function, wh…",
        id: "1537059360353959937",
      },
      {
        tweetAddedDate: "2022-06-15T11:20:10.195248-07:00",
        screen_name: "hackerfantastic",
        full_text:
          "RT @wdormann: Interestingly, if you have June's update installed, you can choose to make your system vulnerable to Follina / CVE-2022-30190…",
        id: "1537135460929404928",
      },
      {
        tweetAddedDate: "2022-06-16T10:20:11.649094-07:00",
        screen_name: "thegrugq",
        full_text:
          "RT @EduardKovacs: Microsoft has finally patched the Windows vulnerability known as Follina and CVE-2022-30190, two years after its root cau…",
        id: "1536793271443521536",
      },
      {
        tweetAddedDate: "2022-06-20T12:50:08.285226-07:00",
        screen_name: "ToolsWatch",
        full_text:
          "Dont mess with the #Follina CVE-2022-30190 !! Official patch is released by #Microsoft.  Patch Now. \nCheck our tons of IoVs (Indicators of Vulnerability)  (Yara, exploits, scanners signatures....)\nGet Your Trial https://t.co/RADgg19w4N https://t.co/OKQzHqX2XI",
        id: "1538971919298531335",
      },
      {
        tweetAddedDate: "2022-06-21T00:20:07.168172-07:00",
        screen_name: "ToolsWatch",
        full_text:
          "RT @vFeed_IO: Dont mess with the #Follina CVE-2022-30190 !! Official patch is released by #Microsoft.  Patch Now. \nCheck our tons of IoVs (…",
        id: "1539144968970940422",
      },
      {
        tweetAddedDate: "2022-06-22T18:40:08.566181-07:00",
        screen_name: "MalwareInfosec",
        full_text:
          "RT @nao_sec: DOCX -&gt; CVE-2022-30190 -&gt; #WarzoneRAT + #SnakeKeylogger. This sample is using Script Encoder and zipfldr.dll #LOLBAS�\nhttps://…",
        id: "1539783459647811584",
      },
      {
        tweetAddedDate: "2022-06-23T10:00:09.918355-07:00",
        screen_name: "hackerfantastic",
        full_text:
          "RT @mkolsek: Anyone still having a working Windows Phone, care to scan this Follina/CVE-2022-30190 code and report what happens? https://t.…",
        id: "1540014648291991554",
      },
      {
        tweetAddedDate: "2022-06-23T12:20:09.871178-07:00",
        screen_name: "ToolsWatch",
        full_text:
          "We keep watching the CVE-2022-30190 (Follina) ! It got extended with hundreds of new IoVs (Indicators of Vulnerability). Fuel your vulnerability intelligence solutions with @vFeed_IO JSON / Database Feed ! https://t.co/p3JvgSRsHb",
        id: "1540051058252292096",
      },
      {
        tweetAddedDate: "2022-06-24T03:10:09.383428-07:00",
        screen_name: "ToolsWatch",
        full_text:
          "RT @vFeed_IO: We keep watching the CVE-2022-30190 (Follina) ! It got extended with hundreds of new IoVs (Indicators of Vulnerability). Fuel…",
        id: "1540276018245734401",
      },
      {
        tweetAddedDate: "2022-07-11T04:50:07.545729-07:00",
        screen_name: "ToolsWatch",
        full_text:
          "[ALERT] Be careful of a new malware #Rozena that exploits CVE-2022-30190 #Follina to trigger back a remote shell connection.\nWe collected hundreds of IoVs (Indicators of Vulnerability).\nPatch Now if not done yet !!! https://t.co/ROkX4Vnanw",
        id: "1546461277769318401",
      },
      {
        tweetAddedDate: "2022-07-11T05:10:26.971972-07:00",
        screen_name: "msuiche",
        full_text:
          "RT @DmitriyMelikov: Apparently this is the very first sample (#Follina) found in the wild. (CVE-2022-30190). It ended up in InQuest Labs. 2…",
        id: "1546464900763062273",
      },
    ],
  },
];

export const mockCVEEvents: FeedlyCVEEvent[] = [
  {
    id: "c16d754d-0ed6-5fb3-a34a-756f7d5ced6d",
    type: "trending",
    ts: 1713849241915,
    updated: 1713824051490,
    trending: false,
  },
  {
    id: "a60991b0-8770-5d4e-9c5e-cc9e6b3d3b12",
    type: "trending",
    ts: 1713824473381,
    updated: 1713824476143,
    trending: true,
  },
  {
    id: "ebd156c9-70c5-540d-8222-e8265624a65f",
    type: "vulnerability:cvssScoreUpdate",
    ts: 1713568883906,
    updated: 1713568885602,
    score: 10.0,
    sourceName: "nvd",
    update: true,
  },
  {
    id: "1cefdcc4-3890-5278-a6cc-b5d7f06cfc58",
    type: "vulnerability:cvssScoreUpdate",
    ts: 1713482402318,
    updated: 1713482403995,
    score: 10.0,
    sourceName: "nvd",
    update: true,
  },
  {
    id: "c4e6d2d4-8a6d-5b6a-b017-a64026736b82",
    type: "vulnerability:cvssScoreUpdate",
    ts: 1713402301727,
    updated: 1713402302943,
    score: 10.0,
    sourceName: "nvd",
    update: true,
  },
  {
    id: "197cfe5f-ec74-5c29-b42e-9dbb5f412dae",
    type: "vulnerability:epssScoreUpdate",
    ts: 1713307495154,
    updated: 1713307495544,
    percentile: 0.72356,
    score: 0.00371,
    update: true,
  },
  {
    id: "90ef2ccd-bd00-5cb6-915e-12c1e3bc36c3",
    type: "relationship:cveExploit",
    ts: 1713000434085,
    updated: 1713180823877,
    cveId: "vulnerability/m/entity/CVE-2024-3400",
    entryId:
      "zwUJFVdnktlsCRyWGJ/if2dTo03NYy+gE/Px51ybzi4=_18ed6c849a5:1716972:5c6f62c1",
    sourceName: "The Hacker News",
    threatId: "nlp/f/entity/gz:mal:1824c463-77df-43af-a055-d94567918f6b",
    threatLabel: "UPSTYLE",
  },
  {
    id: "829f0ad5-9c63-51ef-aaa0-155edc1dccf0",
    type: "relationship:cveExploit",
    ts: 1712961212337,
    updated: 1713819931447,
    cveId: "vulnerability/m/entity/CVE-2024-3400",
    entryId:
      "vb4kz62CGq8opQT7QE/OkoFSdcYi5R8nXM+/xvSncYs=_18ed471cfb1:184ccab:5edf391c",
    sourceName: "Ars Technica - All content",
    threatId: "nlp/f/entity/gz:ta:ee8b8fc4-59f4-4442-a4e6-3686d09c6509",
    threatLabel: "UTA0218",
  },
  {
    id: "bec3b497-1f41-5be0-9ef1-a8183c140996",
    type: "vulnerability:cvssScoreUpdate",
    ts: 1712942459839,
    updated: 1712942460493,
    score: 10.0,
    sourceName: "nvd",
    update: true,
  },
  {
    id: "43876946-7982-5c51-a34c-36a3fc649075",
    type: "threatIntelligenceReport",
    ts: 1712941277083,
    updated: 1712941305412,
    entryId:
      "vjSeYVi2IR+mt/jALIk+rk6xX+aJoQENuU0ENjWY3Y4=_18ed3419f9b:1726af8:5edf391c",
    summary:
      "The critical command injection vulnerability CVE-2024-3400 in Palo Alto Networks PAN-OS software allows unauthenticated attackers to execute code with root privileges on the firewall, with a CVSS score of 10.0. Palo Alto Networks and Unit 42 are actively tracking this vulnerability and collaborating with researchers, partners, and customers to share information and provide protections and mitigations. Customers can refer to Palo Alto Networks' security advisory for guidance on mitigating the vulnerability, and the Next-Generation Firewall with Advanced Threat Prevention subscription can help block exploitation via a specific Threat Prevention signature.",
  },
  {
    id: "55005db8-2c5f-5bdf-82fb-ac2eec32a598",
    type: "vulnerability:scannerInclusion",
    ts: 1712927719889,
    updated: 1712927720615,
    moduleId: "193255",
    scannerName: "Nessus",
    url: "https://www.tenable.com/plugins/nessus/193255",
  },
  {
    id: "8b85318f-a288-5d30-9f08-d9bb64b39e26",
    type: "vulnerability:epssScoreUpdate",
    ts: 1712914647945,
    updated: 1712914648211,
    percentile: 0.07969,
    score: 4.3e-4,
    update: false,
  },
  {
    id: "ecb2bcda-dd5e-5782-bddb-83186a65ce4d",
    type: "firstArticle",
    ts: 1712910091108,
    updated: 1712910093936,
    entryId:
      "Tj1H1XF2A6x6O8dNvzJvGXVpT8gdtcqPUqMgRe+rBsc=_18ed165c364:14fe8b4:5edf391c",
    sourceName: "Help Net Security",
  },
  {
    id: "95a143b5-34d5-5aef-948f-e9f4aa783f51",
    type: "vulnerability:exploitation",
    ts: 1712910091108,
    updated: 1712910093936,
    entryId:
      "Tj1H1XF2A6x6O8dNvzJvGXVpT8gdtcqPUqMgRe+rBsc=_18ed165c364:14fe8b4:5edf391c",
    sourceName: "Help Net Security",
    url: "https://www.helpnetsecurity.com/2024/04/12/cve-2024-3400/",
  },
  {
    id: "143387b2-2859-5615-8943-6d7590695a8e",
    type: "vulnerability:cveAssigned",
    ts: 1712909706230,
    updated: 1712910064219,
  },
  {
    id: "84f99c34-238c-59b0-9aed-4caf0d46c5ad",
    type: "vulnerability:scannerInclusion",
    ts: 1712908380000,
    updated: 1712927725275,
    moduleId: "731378",
    scannerName: "Qualys",
  },
  {
    id: "5291e652-f144-54c8-841e-7ffec56fe2e3",
    type: "vulnerability:exploitation",
    ts: 1712903101093,
    updated: 1712928301586,
    sourceName: "CISA Known Exploited Vulnerability",
    url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
  },
  {
    id: "9c881d6b-9b06-5f1f-891c-ab5c2904517d",
    type: "vulnerability:exploitation",
    ts: 1712880000000,
    updated: 1713363025582,
    sourceName: "inthewild.io",
    url: "https://unit42.paloaltonetworks.com/cve-2024-3400/",
  },
];

export const mockCVE: FeedlyCVE = {
  cveid: "CVE-2024-3400",
  id: "vulnerability/m/entity/CVE-2024-3400",
  type: "vulnerability",
  label: "CVE-2024-3400",
  hasSalience: true,
  description:
    "A command injection vulnerability in the GlobalProtect feature of Palo Alto Networks PAN-OS software for specific PAN-OS versions and distinct feature configurations may enable an unauthenticated attacker to execute arbitrary code with root privileges on the firewall.\n\nFixes for PAN-OS 10.2, PAN-OS 11.0, and PAN-OS 11.1 are in development and are expected to be released by April 14, 2024. Cloud NGFW, Panorama appliances, and Prisma Access are not impacted by this vulnerability. All other versions of PAN-OS are also not impacted.",
  cvssV3: {
    integrityImpact: "HIGH",
    version: "3.1",
    availabilityImpact: "HIGH",
    scope: "UNCHANGED",
    attackVector: "NETWORK",
    userInteraction: "NONE",
    baseScore: 7.6,
    attackComplexity: "LOW",
    confidentialityImpact: "HIGH",
    privilegesRequired: "NONE",
    vectorString: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H",
  },
  cweIds: [
    {
      cweID: "CWE-77",
      name: "Improper Neutralization of Special Elements used in a Command ('Command Injection')",
    },
    {
      cweID: "CWE-20",
      name: "Improper Input Validation",
    },
  ],
  smallGraphUrl:
    "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2024-3400-small-7c60f9b2ae1acd3410ca6907f3242775.svg",
  graphUrl:
    "https://storage.googleapis.com/feedly-ml-public/cve-trends/card-graphs/v2.0/CVE-2024-3400-7c60f9b2ae1acd3410ca6907f3242775.svg",
  trending: true,
  epssScore: "0.000430000",
  patchDetails: [
    {
      title: "security.paloaltonetworks.com",
      patchAddedDate: "2024-04-15T13:20:01.686561-07:00",
      source: "nvd",
      url: "https://security.paloaltonetworks.com/CVE-2024-3400",
    },
    {
      title: "unit42.paloaltonetworks.com",
      patchAddedDate: "2024-04-15T13:20:01.686605-07:00",
      source: "nvd",
      url: "https://unit42.paloaltonetworks.com/cve-2024-3400/",
    },
  ],
  patched: true,
  newExploits: [
    {
      exploitAddedDate: "2024-04-15T13:20:01.686618-07:00",
      source: "nvd",
      url: "https://unit42.paloaltonetworks.com/cve-2024-3400/",
    },
    {
      exploitAddedDate: "2024-04-15T13:20:01.686630-07:00",
      source: "nvd",
      url: "https://www.volexity.com/blog/2024/04/12/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400/",
    },
  ],
  exploits: [
    "https://unit42.paloaltonetworks.com/cve-2024-3400/",
    "https://www.volexity.com/blog/2024/04/12/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400/",
  ],
  proofOfExploits: [
    "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
    "https://unit42.paloaltonetworks.com/cve-2024-3400/",
  ],
  detectedBy: [
    {
      detectionId: "193255",
      scannerName: "nessus",
    },
    {
      detectionId: "731378",
      scannerName: "qualys",
    },
  ],
  feedlyInsertedDate: "2024-04-12T07:55:17.354356+00:00",
  feedlyUpdatedDate: "2024-04-19T23:21:23.906874+00:00",
  publishedDate: "2024-04-12T08:15:06.230000+00:00",
  publicationDateInfo: [
    {
      publishedDate: "2024-04-12T08:15:06.230000+00:00",
      feedlyInsertedDate: "2024-04-12T08:21:03.974827+00:00",
      source: "nvd",
      lastModifiedDate: "2024-04-12T08:15:06.230000+00:00",
      feedlyUpdatedDate: "2024-04-12T12:45:58.176846+00:00",
    },
    {
      publishedDate: "2024-04-12T00:00:00+00:00",
      source: "inTheWild",
    },
  ],
  affectedProducts: [
    {
      vendor: "paloaltonetworks",
      products: [
        {
          name: "pan-os",
          vulnerableVersions: [
            {
              version: "10.2.0",
            },
            {
              version: "11.0.0",
            },
            {
              version: "11.1.0",
            },
          ],
        },
      ],
    },
  ],
  vulnerableProducts: {
    vendor: "paloaltonetworks",
    products: ["pan-os"],
  },
  idMapping: [
    {
      id: "CAPEC-136",
      name: "LDAP Injection",
    },
    {
      id: "CAPEC-15",
      name: "Command Delimiters",
    },
    {
      id: "CAPEC-183",
      name: "IMAP/SMTP Command Injection",
    },
    {
      id: "CAPEC-248",
      name: "Command Injection",
    },
    {
      id: "CAPEC-40",
      name: "Manipulating Writeable Terminal Devices",
    },
    {
      id: "CAPEC-43",
      name: "Exploiting Multiple Input Interpretation Layers",
    },
    {
      id: "CAPEC-75",
      name: "Manipulating Writeable Configuration Files",
    },
    {
      id: "CAPEC-76",
      name: "Manipulating Web Input to File System Calls",
    },
    {
      id: "CAPEC-10",
      name: "Buffer Overflow via Environment Variables",
    },
    {
      id: "CAPEC-101",
      name: "Server Side Include (SSI) Injection",
    },
    {
      id: "CAPEC-104",
      name: "Cross Zone Scripting",
    },
    {
      id: "CAPEC-108",
      name: "Command Line Execution through SQL Injection",
    },
    {
      id: "CAPEC-109",
      name: "Object Relational Mapping Injection",
    },
    {
      id: "CAPEC-110",
      name: "SQL Injection through SOAP Parameter Tampering",
    },
    {
      id: "CAPEC-120",
      name: "Double Encoding",
    },
    {
      id: "CAPEC-13",
      name: "Subverting Environment Variable Values",
    },
    {
      id: "CAPEC-135",
      name: "Format String Injection",
    },
    {
      id: "CAPEC-136",
      name: "LDAP Injection",
    },
    {
      id: "CAPEC-14",
      name: "Client-side Injection-induced Buffer Overflow",
    },
    {
      id: "CAPEC-153",
      name: "Input Data Manipulation",
    },
    {
      id: "CAPEC-182",
      name: "Flash Injection",
    },
    {
      id: "CAPEC-209",
      name: "XSS Using MIME Type Mismatch",
    },
    {
      id: "CAPEC-22",
      name: "Exploiting Trust in Client",
    },
    {
      id: "CAPEC-23",
      name: "File Content Injection",
    },
    {
      id: "CAPEC-230",
      name: "Serialized Data with Nested Payloads",
    },
    {
      id: "CAPEC-231",
      name: "Oversized Serialized Data Payloads",
    },
    {
      id: "CAPEC-24",
      name: "Filter Failure through Buffer Overflow",
    },
    {
      id: "CAPEC-250",
      name: "XML Injection",
    },
    {
      id: "T1562.003",
      name: "Impair Command History Logging",
    },
    {
      id: "T1574.006",
      name: "Dynamic Linker Hijacking",
    },
    {
      id: "T1574.007",
      name: "Path Interception by PATH Environment Variable",
    },
  ],
  executiveSummary: {
    impact:
      "This vulnerability could allow an unauthenticated attacker to fully compromise the firewall and gain complete control over it. The attacker could steal sensitive data, disrupt network operations, and use the compromised device to launch further attacks.",
    exploitation:
      "This vulnerability is being actively exploited in the wild, as confirmed by the security vendor Palo Alto Networks and the cybersecurity firm Volexity. Proof-of-concept exploits are publicly available.",
    description:
      "A command injection vulnerability in the GlobalProtect feature of Palo Alto Networks PAN-OS software for specific PAN-OS versions and distinct feature configurations may enable an unauthenticated attacker to execute arbitrary code with root privileges on the firewall.",
    patch:
      "Patches for PAN-OS versions 10.2, 11.0, and 11.1 are in development and expected to be released by April 14, 2024. Cloud NGFW, Panorama appliances, and Prisma Access are not impacted.",
    mitigation:
      "Apply the patches as soon as they are available. As a temporary mitigation, restrict access to the GlobalProtect interface to trusted networks and implement strict network segmentation to limit exposure.",
    processing_time_s: 7.377258,
  },
  stats: {
    firstEntryId:
      "mU9aShOep98rDW1nQCNiv3cMlp723zT42aQKl0teiNk=_18ed119de48:13f94db:e56ebecb",
    timeSeries: {
      "1495548000000": [
        {
          url: "https://isc.sans.edu/diary.html",
          firstEntryId:
            "iYw81stLMOD1qwH2jkphNrHV/+mUdotfb4TjP9Y46X0=_15c359ba2c1:1ccc66e:bb404dd5",
          age: 0,
          timestamp: 1712905117256,
        },
      ],
      "1712901600000": [
        {
          url: "https://security.paloaltonetworks.com/CVE-2024-3400",
          firstEntryId:
            "mU9aShOep98rDW1nQCNiv3cMlp723zT42aQKl0teiNk=_18ed119de48:13f94db:e56ebecb",
          age: 0,
          timestamp: 1712905117256,
          sourceType: ["VendorReference"],
        },
      ],
      "1712905200000": [
        {
          url: "https://securityonline.info/cve-2024-3400-cvss-10-critical-0-day-flaw-in-palo-alto-networks-firewall-software-exploited-in-the-wild",
          firstEntryId:
            "OeARe+brJH9QqcR8PYVODl1A9BeqofYPauy7n81UkOo=_18ed12719b8:127e26a:5c6f62c1",
          age: 867184,
          timestamp: 1712905984440,
        },
        {
          url: "https://vulners.com/cve/CVE-2024-3400",
          firstEntryId:
            "xWZziCrrViWFDSaIp6ZwF4HAub6tmGdHV5RFGIB7r5c=_18ed12a818f:14093c9:e56ebecb",
          age: 1090375,
          timestamp: 1712906207631,
        },
        {
          url: "https://www.helpnetsecurity.com/2024/04/12/cve-2024-3400",
          firstEntryId:
            "QNNieqdW7BwzzsNvXgdw0iz1P5m8tDFA9QI1jPfVtVc=_18ed13a856c:128eb9b:5c6f62c1",
          age: 2139940,
          timestamp: 1712907257196,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c233z9/cve20243400_panos_os_command_injection",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18ed13aebf4:14186b0:e56ebecb",
          age: 2166188,
          timestamp: 1712907283444,
        },
        {
          url: "https://infosec.exchange/@zeljkazorz/112257142079851416",
          firstEntryId:
            "Fz8PK/kKXottzcyzUv5WBSoIJ+2hi3IxMl6TZVjjxdA=_18ed14849ea:14e22de:5edf391c",
          age: 3042210,
          timestamp: 1712908159466,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed14a968b:1427e33:e56ebecb",
          age: 3192899,
          timestamp: 1712908310155,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://social.skynetcloud.site/@jos1264/112257132400915986",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ed14ba7de:1428a62:e56ebecb",
          age: 3262870,
          timestamp: 1712908380126,
        },
        {
          url: "https://infosec.exchange/@itowner/112257145204420018",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ed14bca88:1428c68:e56ebecb",
          age: 3271744,
          timestamp: 1712908389000,
        },
      ],
      "1712908800000": [
        {
          url: "https://infosec.exchange/@H3liumb0y/112257185264804172",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ed1526695:12a286d:5c6f62c1",
          age: 3704909,
          timestamp: 1712908822165,
        },
        {
          url: "https://infosec.exchange/@harrysintonen/112257184849684599",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed1539984:14ec584:5edf391c",
          age: 3783484,
          timestamp: 1712908900740,
        },
        {
          url: "https://www.reddit.com/r/sysadmin/comments/1c23979/massive_panos_global_protect_vulnerability",
          firstEntryId:
            "b8er/iMgK/b9vCK5nKAMe/ukdMm8pv/4WqS1gOBQFAg=_18ed1548eda:14ed53f:5edf391c",
          age: 3846290,
          timestamp: 1712908963546,
        },
        {
          url: "https://www.reddit.com/r/fortinet/comments/1c23gxx/fortinet_cves_are_annoying_but_id_much_prefer_an",
          firstEntryId:
            "wUur5POWMM91YagQyX79ZonF/U+0PnO/9xmR87mO+lg=_18ed155a7b6:143209f:e56ebecb",
          age: 3918190,
          timestamp: 1712909035446,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-firewalls-under-attack-hotfixes-incoming-cve-2024-3400",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed15eab8d:143a910:e56ebecb",
          age: 4508997,
          timestamp: 1712909626253,
        },
        {
          url: "https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories/os-command-injection-vulnerability-in-globalprotect-gateway",
          firstEntryId:
            "va7Ug60ajSgWzdpVoXM8Pghi1W+0Z1uLm9M9CEKc2a0=_18ed1638f87:143f5ce:e56ebecb",
          age: 4829503,
          timestamp: 1712909946759,
        },
        {
          url: "https://www.ncsc.govt.nz/news/cve-palo-alto-globalprotect-gateway",
          firstEntryId:
            "+DCxBYzEWrA+tg7bZldpnrjT+Py7pLyRgBA7Q3dtvtw=_18ed1669172:14420f2:e56ebecb",
          age: 5026602,
          timestamp: 1712910143858,
        },
        {
          url: "https://nvd.nist.gov/vuln/detail/CVE-2024-3400",
          firstEntryId:
            "inc7KTW6tRXECIiKg2Kr4mB2jkKsYdCHKWAWnDJW2YA=_18ed1681de2:12b6b66:5c6f62c1",
          age: 5128090,
          timestamp: 1712910245346,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-networks-firewalls-under-attack-hotfixes-incoming-cve-2024-3400-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed16b4388:1506b3b:5edf391c",
          age: 5334336,
          timestamp: 1712910451592,
        },
        {
          url: "https://old.reddit.com/r/sysadmin/comments/1c23979/massive_panos_global_protect_vulnerability",
          firstEntryId:
            "0aiHWIwZY/cXC9QcdWCRbEJtPOeU/ssoWDBATyosnhw=_18ed172d084:150f2f9:5edf391c",
          age: 5829180,
          timestamp: 1712910946436,
        },
        {
          url: "https://www.reddit.com/r/networking/comments/1c23rtx/cve_10_command_injection_vuln_in_globalprotect",
          firstEntryId:
            "VgkxAa6MdVioE/oy0uZshxpdJoTe8FLHiZ3UECdMO6U=_18ed173a322:144f14a:e56ebecb",
          age: 5883098,
          timestamp: 1712911000354,
        },
        {
          url: "https://vuldb.com",
          firstEntryId:
            "7qKZVZJFfnQufDWyVZB0wMJMf7aECV4G4iVUAGeWTjM=_18ed178ad71:12c6bde:5c6f62c1",
          age: 6213417,
          timestamp: 1712911330673,
        },
        {
          url: "https://thehackernews.com/2024/04/zero-day-alert-critical-palo-alto.html",
          firstEntryId:
            "5Z9G0WTF3GtvYqzUA1MwH904zn5l5tsyDD8jI9kfoZ0=_18ed1865a21:1522962:5edf391c",
          age: 7109593,
          timestamp: 1712912226849,
        },
      ],
      "1712912400000": [
        {
          url: "https://cert.europa.eu/publications/security-advisories/2024-037",
          firstEntryId:
            "O6+GDcmCe1nxFMWxvZsYM4KafbJ8l4Dy0UBf9rzjlZw=_18ed18d4830:1468b33:e56ebecb",
          age: 7563752,
          timestamp: 1712912681008,
        },
        {
          url: "https://cyberplace.social/@GossiTheDog/112257455436025603",
          firstEntryId:
            "Xrh+ELNhA2jGcuchWvKG9pIPzOtK2ia/s1yVCpJX7CE=_18ed18fb3dd:12dc92b:5c6f62c1",
          age: 7722389,
          timestamp: 1712912839645,
        },
        {
          url: "https://infosec.exchange/@h4sh/112257462797903359",
          firstEntryId:
            "/4LBMLNgsFJeSzVpZl0IutvX+GLdXoOXrfI2n2uAt2I=_18ed1947e7e:15310a4:5edf391c",
          age: 8036406,
          timestamp: 1712913153662,
        },
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/12/palo-alto-networks-firewalls-under-attack-hotfixes-incoming-cve-2024-3400",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18ed195e301:12e27c2:5c6f62c1",
          age: 8127673,
          timestamp: 1712913244929,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/tid-95187-is-not-on-my-signature-list/m-p/583497",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed19a8216:1476fa5:e56ebecb",
          age: 8430542,
          timestamp: 1712913547798,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://mastodon.green/@fthy/112257533908359801",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed1a2de4b:1480739:e56ebecb",
          age: 8978435,
          timestamp: 1712914095691,
        },
        {
          url: "https://www.cybersecurity-help.cz/vdb/SB2024041225",
          firstEntryId:
            "RYRjHGVzrClyjZXn0jva8gL0rp3ezlLReoL5fxnD6wA=_18ed1a7d8ff:1485f0c:e56ebecb",
          age: 9304759,
          timestamp: 1712914422015,
        },
        {
          url: "https://infosec.exchange/@_r_netsec/112257596575309455",
          firstEntryId:
            "JWmYnDlkY7kZVdNIG4bZJR0fWFPH4pOiNeD7UMJQtAs=_18ed1b40458:1493632:e56ebecb",
          age: 10102288,
          timestamp: 1712915219544,
        },
      ],
      "1712916000000": [
        {
          url: "https://www.tenable.com/plugins/pipeline/issues/168404",
          firstEntryId:
            "gbSjCOel3C/OxhMfDHtIBRMOjVqnmMz7qleIq9pEwTw=_18ed1d4be92:13223e4:5c6f62c1",
          age: 12247114,
          timestamp: 1712917364370,
          sourceType: ["Vendor"],
        },
        {
          url: "https://techcratic.com/index.php/2024/04/12/critical-palo-alto-networks-pan-os-flaw-under-active-attack/cybersecurity/cybersecurity",
          firstEntryId:
            "xwXdpPQEccMs7bEye/J1zhbpsDTvYDEOkGOQRNMtfuQ=_18ed1dd8558:1583260:5edf391c",
          age: 12822288,
          timestamp: 1712917939544,
        },
        {
          url: "https://www.itsecuritynews.info/zero-day-alert-critical-palo-alto-networks-pan-os-flaw-under-active-attack",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed1e8b8e0:14cdd63:e56ebecb",
          age: 13556376,
          timestamp: 1712918673632,
        },
        {
          url: "https://infosec.exchange/@palebluedot/112257286730451856",
          firstEntryId:
            "7X40YByfy5J77gWcu4Vum40mPyeOQdiY0Ybx1Tn2imQ=_18ed1f0c733:133eb86:5c6f62c1",
          age: 14084331,
          timestamp: 1712919201587,
        },
        {
          url: "https://www.securityweek.com/palo-alto-networks-warns-of-exploited-firewall-vulnerability",
          firstEntryId:
            "OCNmtsBfUVVxBwlbibzHvHeZc1NiFWsbQ+vh9PI4SyI=_18ed1f2d782:14d9ca6:e56ebecb",
          age: 14219578,
          timestamp: 1712919336834,
        },
      ],
      "1712919600000": [
        {
          url: "https://talkback.sh/resource/6cc52753-e85f-4cf3-acf0-31de517f7fab",
          firstEntryId:
            "2cUeU5Gsn7L4AP2WASqDrv4wFIhZenznlK1+3AnF3C8=_18ed1f8bdcf:134701e:5c6f62c1",
          age: 14606215,
          timestamp: 1712919723471,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/tid-95187-is-not-on-my-signature-list/td-p/583497",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed1f8dcdd:13472e3:5c6f62c1",
          age: 14614165,
          timestamp: 1712919731421,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://infosec.exchange/@raptor/112257904010603253",
          firstEntryId:
            "t1XuaEjz46lZYZon25NcMk8fQqiPIK3l8iNtUQdLvIg=_18ed1fdf83a:14e678a:e56ebecb",
          age: 14948850,
          timestamp: 1712920066106,
        },
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/12/zero-day-alert-critical-palo-alto-networks-pan-os-flaw-under-active-attack",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18ed1feb482:14e7748:e56ebecb",
          age: 14997050,
          timestamp: 1712920114306,
        },
        {
          url: "https://www.tenable.com/plugins/nessus/193255",
          firstEntryId:
            "Er16MsP7t8EUpUFiWq4aSO+BK6WTx29J40WvvDSz3Pk=_18ed1ff6e66:15a9060:5edf391c",
          age: 15044638,
          timestamp: 1712920161894,
          sourceType: ["Vendor"],
        },
        {
          url: "https://www.infosecurity-magazine.com/news/palo-alto-critical-zero-day",
          firstEntryId:
            "l1iMlCmzigscLcHz0mVG5PUmj5Rk4Dz2MSLVKSiv3uc=_18ed2053be0:1354082:5c6f62c1",
          age: 15424920,
          timestamp: 1712920542176,
        },
        {
          url: "https://gixtools.net/2024/04/zero-day-alert-critical-palo-alto-networks-pan-os-flaw-under-active-attack",
          firstEntryId:
            "BCdqAscORYyZ9EV/TNQVWcswN20kb7K8ta8vg1rVysM=_18ed2098187:1358740:5c6f62c1",
          age: 15704895,
          timestamp: 1712920822151,
        },
        {
          url: "https://allinfosecnews.com/item/zero-day-alert-critical-palo-alto-networks-pan-os-flaw-under-active-attack-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed20f380c:14f9f5e:e56ebecb",
          age: 16079300,
          timestamp: 1712921196556,
        },
        {
          url: "https://www.reddit.com/r/blueteamsec/comments/1c26l77/cve20243400_panos_os_command_injection",
          firstEntryId:
            "0x1krWVFiOy2l5dBauocR6LEjIR9c79vLcoHkesD1vA=_18ed2159ad2:13648e2:5c6f62c1",
          age: 16497802,
          timestamp: 1712921615058,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-warns-about-critical-zero-day-in-pan-os",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed21ec52f:15cb56c:5edf391c",
          age: 17098471,
          timestamp: 1712922215727,
        },
        {
          url: "https://infosec.exchange/@ravirockks/112258056427255270",
          firstEntryId:
            "M1He8COGeHXdOJaBO9ealb3WsbOZlqsCDm3QJVDZVfw=_18ed2200e90:150c304:e56ebecb",
          age: 17182792,
          timestamp: 1712922300048,
        },
        {
          url: "https://infosec.exchange/@simontsui/112258070672531989",
          firstEntryId:
            "tQrcdE0E7m6/RFHZguugjyI+kFthN0Yvf9ZAv8hPm8E=_18ed2206606:1370ab2:5c6f62c1",
          age: 17205182,
          timestamp: 1712922322438,
        },
        {
          url: "https://news.google.com/atom/articles/CBMiSGh0dHBzOi8vdGhlaGFja2VybmV3cy5jb20vMjAyNC8wNC96ZXJvLWRheS1hbGVydC1jcml0aWNhbC1wYWxvLWFsdG8uaHRtbNIBAA",
          firstEntryId:
            "GU4Gv869BEkqemMYeOsjgsGYEEm/zPq051F5+WO4kJg=_18ed2290400:15d7fb4:5edf391c",
          age: 17769912,
          timestamp: 1712922887168,
        },
        {
          url: "https://www.circl.lu/pub/tr-84",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ed229a2a0:15d8d30:5edf391c",
          age: 17810520,
          timestamp: 1712922927776,
        },
        {
          url: "https://socradar.io/critical-os-command-injection-vulnerability-in-palo-altos-globalprotect-gateway-cve-2024-3400-the-patch-is-not-available-yet",
          firstEntryId:
            "N50kAYeik9hq90WbIbs/RO4NFUovY63PaYRHdmf2wBw=_18ed22a7b21:137ae54:5c6f62c1",
          age: 17865945,
          timestamp: 1712922983201,
        },
        {
          url: "https://malware.news/t/critical-os-command-injection-vulnerability-in-palo-alto-s-globalprotect-gateway-cve-2024-3400-the-patch-is-not-available-yet/80789",
          firstEntryId:
            "ugarbDVLNOKrWjpMH+YgNeJ2QFaLzw4mdjaGUSDlDCA=_18ed22bed78:15daed3:5edf391c",
          age: 17960752,
          timestamp: 1712923078008,
        },
      ],
      "1712923200000": [
        {
          url: "https://talkback.sh/resource/f708b46e-63ce-4c35-85c3-d4d948cc0d37",
          firstEntryId:
            "nKesiCLbGJVw6X5R+sYcbNieanfzkq4lBhdwoHRc6Cc=_18ed22edfcc:137eee9:5c6f62c1",
          age: 18153860,
          timestamp: 1712923271116,
        },
        {
          url: "https://medium.com/@digital.human/critical-zero-day-vulnerability-identified-as-cve-2024-3400-in-its-pan-os-firewall-011e8e48969c",
          firstEntryId:
            "nzM+OuwC4KfUToKdquQ8wGhB3K+u+e6+Yu+67bDdnnQ=_18ed2382296:2b698e:5cb2435b",
          age: 18760782,
          timestamp: 1712923878038,
        },
        {
          url: "https://ctoatncsc.substack.com/p/cto-at-ncsc-summary-week-ending-april-6e7",
          firstEntryId:
            "sFdyC6d3V8aSBBMnnRETxp7FepGlPxQ7l7/1WeN6d6g=_18ed23f9973:15f14cc:5edf391c",
          age: 19249963,
          timestamp: 1712924367219,
        },
        {
          url: "http://www.security-database.com/detail.php?alert=CVE-2024-3400",
          firstEntryId:
            "Dg0HRXhZ9E/hHhDNKhSKWoqRcrjOmi9d/g9s05ljstI=_18ed240ec68:13923ca:5c6f62c1",
          age: 19336736,
          timestamp: 1712924453992,
        },
        {
          url: "https://allinfosecnews.com/item/critical-os-command-injection-vulnerability-in-palo-altos-globalprotect-gateway-cve-2024-3400-the-patch-is-not-available-yet-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed2444625:1534a21:e56ebecb",
          age: 19556317,
          timestamp: 1712924673573,
        },
        {
          url: "https://www.tesorion.nl/en/posts/pan-os-globalprotect-gateway-vulnerability",
          firstEntryId:
            "eoHlJKt+sa9+iBbd9thkjNxaNOrZl7IS+ywXWgTI654=_18ed248826f:15fae4b:5edf391c",
          age: 19833895,
          timestamp: 1712924951151,
        },
        {
          url: "https://infosec.exchange/@jbhall56/112258343991660242",
          firstEntryId:
            "ncOfFWELWC4KmgwVsnGksy4LJNJ1kt2jjs2SRezwZ5g=_18ed260990e:161855d:5edf391c",
          age: 21412550,
          timestamp: 1712926529806,
        },
        {
          url: "https://old.reddit.com/r/blueteamsec/comments/1c26l77/cve20243400_panos_os_command_injection",
          firstEntryId:
            "wo4F9hdBqOhsNQE3NelkfdeKOw4f0x/7Kt8RZWdmtZ8=_18ed26405d7:161c0a0:5edf391c",
          age: 21637007,
          timestamp: 1712926754263,
        },
      ],
      "1712926800000": [
        {
          url: "https://infosec.exchange/@h4sh/112258351630281710",
          firstEntryId:
            "/4LBMLNgsFJeSzVpZl0IutvX+GLdXoOXrfI2n2uAt2I=_18ed266a37a:13bb5ea:5c6f62c1",
          age: 21808434,
          timestamp: 1712926925690,
        },
        {
          url: "https://blog.rapid7.com/2024/04/12/etr-cve-2024-3400-critical-command-injection-vulnerability-in-palo-alto-networks-firewalls-2",
          firstEntryId:
            "HuD9t7CwZvIMAKO0qBLrpBYGteNNTt/63CLcMQTNV6w=_18ed267ed76:13bccd4:5c6f62c1",
          age: 21892910,
          timestamp: 1712927010166,
        },
        {
          url: "https://www.rapid7.com/blog/post/2024/04/12/etr-cve-2024-3400-critical-command-injection-vulnerability-in-palo-alto-networks-firewalls-2",
          firstEntryId:
            "O7rdNJDxQD8YAePZZ7X+Zza7cYmU+4LqK0bl/Tirllo=_18ed26913f1:155ea09:e56ebecb",
          age: 21968297,
          timestamp: 1712927085553,
          sourceType: ["Vulnerability", "Vendor"],
        },
        {
          url: "https://www.cyber.gc.ca/en/alerts-advisories/palo-alto-networks-security-advisory-av24-198",
          firstEntryId:
            "ICJ9wBSdPmLHTQ0c7M315bX8H++qkO/Q/5sNS2GOtOI=_18ed269ea99:16229d2:5edf391c",
          age: 22023249,
          timestamp: 1712927140505,
        },
        {
          url: "https://vulners.com/rapid7blog/RAPID7BLOG:26FEB6D8B9CAB5030636FB1D175AD84A",
          firstEntryId:
            "Xd0aPXvYBJTZqdixdN2RNf2VS4Zwx2lieo+L9qmSRn0=_18ed2701b7e:13c5be6:5c6f62c1",
          age: 22428982,
          timestamp: 1712927546238,
        },
        {
          url: "https://infosec.exchange/@penquester/112258407057305227",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed270e269:1569430:e56ebecb",
          age: 22479905,
          timestamp: 1712927597161,
        },
        {
          url: "https://digital.nhs.uk/cyber-alerts/2024/cc-4477",
          firstEntryId:
            "JdRephQPvBnXlI9a0JfWyVOdnDF/K6XAYACrHAfXN4k=_18ed273f081:162d8b4:5edf391c",
          age: 22680121,
          timestamp: 1712927797377,
        },
        {
          url: "https://buttondown.email/grugq/archive/april-12-2024",
          firstEntryId:
            "NAWb1kidaYqkaZB6yL328qXzyQvPRS29TA4JBQ97UeM=_18ed27d6b07:13d472e:5c6f62c1",
          age: 23301311,
          timestamp: 1712928418567,
        },
        {
          url: "https://feedly.com/i/cve/CVE-2024-3400",
          firstEntryId:
            "SavH0FexlZ34g7oq0ZWi8qeYDPsdUHH22M2QINZbT7Q=_18ed27d7ed7:157735b:e56ebecb",
          age: 23306383,
          timestamp: 1712928423639,
        },
        {
          url: "https://allinfosecnews.com/item/cve-2024-3400-critical-command-injection-vulnerability-in-palo-alto-networks-firewalls-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed27ee558:163b0d1:5edf391c",
          age: 23398160,
          timestamp: 1712928515416,
        },
        {
          url: "https://www.reddit.com/r/msp/comments/1c28kty/awareness_post_cve20243400_cvss_10_os_command",
          firstEntryId:
            "jGRZF9jrRwqt5ZVTpTNrEn6Kb0/RZu9SaH+4p8587aI=_18ed285e4d6:164435d:5edf391c",
          age: 23856782,
          timestamp: 1712928974038,
        },
        {
          url: "https://www.metacurity.com/p/cisa-says-russian-hackers-compromised-agencies-using-stolen-microsoft-emails",
          firstEntryId:
            "EouNlpTK+OBJVYQPavpkXZrtX72oYsV8j2x3yP8gUL0=_18ed285f7c0:1580fcf:e56ebecb",
          age: 23861624,
          timestamp: 1712928978880,
        },
        {
          url: "https://blog.boll.ch/pan-security-advisory-cve-2024-3400-pan-os-os-command-injection-vulnerability-in-globalprotect-gateway",
          firstEntryId:
            "xJijqjflicHV6HshPA6ZDDggmcBxW2M5EAtOXWh78Eg=_18ed2864981:1644aa8:5edf391c",
          age: 23882553,
          timestamp: 1712928999809,
        },
        {
          url: "https://insights.integrity360.com/advisory-cve-2024-3400-pan-os-os-command-injection-vulnerability-in-globalprotect-gateway",
          firstEntryId:
            "ztJAyrRxPv2RaDKjATBfMf8D7y/hyYxmOx5rU+awIho=_18ed288f060:13e1092:5c6f62c1",
          age: 24056344,
          timestamp: 1712929173600,
        },
        {
          url: "https://www.csa.gov.sg/alerts-advisories/alerts/2024/al-2024-040",
          firstEntryId:
            "Iv+MiXCkgS1W6S2hG7xBpR0PYbEqXioFsfGvapExc68=_18ed28cbebf:13e4f86:5c6f62c1",
          age: 24305783,
          timestamp: 1712929423039,
        },
        {
          url: "https://www.cssf.lu/fr/2024/04/vulnerabilite-critique-sur-palo-alto-networks-pan-os-cve-2024-3400",
          firstEntryId:
            "YK0kzht5yL8782BFNLfe/KISJJCOY0eGaePC05OO7LI=_18ed291a919:16516ff:5edf391c",
          age: 24627921,
          timestamp: 1712929745177,
        },
        {
          url: "https://www.cssf.lu/en/2024/04/critical-vulnerability-on-palo-alto-networks-pan-os-cve-2024-3400",
          firstEntryId:
            "/vxRUPFgkmq2dPmdAT4nGn4c2aEPOYm6c6jIvz/jab4=_18ed292c148:13ebc4b:5c6f62c1",
          age: 24699648,
          timestamp: 1712929816904,
        },
        {
          url: "https://www.auscert.org.au:443/bulletins/ESB-2024.2280",
          firstEntryId:
            "sSxFRaZmXCcQAGqUJAYPvSEfpvP4AbaQyHJSZDBR2V4=_18ed2941d81:1654418:5edf391c",
          age: 24788793,
          timestamp: 1712929906049,
        },
        {
          url: "https://www.thestack.technology/palo-alto-networks-cvss-10-bug-in-pan-os-is-being-exploited-in-the-wild",
          firstEntryId:
            "36XoNrBakyvwRY8iCi+7QVNCyMCNVu6q2BLxzaUUWO8=_18ed2945869:13ed98c:5c6f62c1",
          age: 24803873,
          timestamp: 1712929921129,
        },
        {
          url: "http://www.auscert.org.au/bulletins/ESB-2024.2280",
          firstEntryId:
            "6MhMKfRuisolv5l2FNV3Ew+cQVcBliQax2qWYAFL/Fc=_18ed2984860:13f21f4:5c6f62c1",
          age: 25061912,
          timestamp: 1712930179168,
        },
        {
          url: "https://cyber.gc.ca/en/alerts-advisories/palo-alto-networks-security-advisory-av24-198",
          firstEntryId:
            "5JCEAs7jmNkNyzrTpnoAuoLi4R/0Z/clpmWQLDyGqow=_18ed2995993:165a9dc:5edf391c",
          age: 25131851,
          timestamp: 1712930249107,
          sourceType: ["Vulnerability"],
        },
      ],
      "1712930400000": [
        {
          url: "https://threatprotect.qualys.com/2024/04/12/pan-os-os-command-injection-vulnerability-exploited-in-the-wild-cve-2024-3400",
          firstEntryId:
            "a/DInyXHg7C55XQYGO5r+FbTn5PTxdT6IwikRfK+AOU=_18ed2a19271:166459f:5edf391c",
          age: 25670697,
          timestamp: 1712930787953,
        },
        {
          url: "https://www.crn.com/news/security/2024/palo-alto-networks-discloses-exploitation-of-critical-zero-day-flaw-impacting-pan-os",
          firstEntryId:
            "zSiW+5UM5wvxQTPCxr2N65r3wql/zvOJQuXiXxcN17k=_18ed2aaacb6:140643a:5c6f62c1",
          age: 26267246,
          timestamp: 1712931384502,
        },
        {
          url: "https://www.reddit.com/r/InfoSecNews/comments/1c29jsm/cve20243400_panos_os_command_injection",
          firstEntryId:
            "ycoqf+mSOVTtSUkyHCqEoThu01HZIuVSFCRG++/0eWE=_18ed2ab2d60:166ff41:5edf391c",
          age: 26300184,
          timestamp: 1712931417440,
        },
        {
          url: "https://noc.social/@AAKL/112258683240504715",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed2b3d294:167a444:5edf391c",
          age: 26866764,
          timestamp: 1712931984020,
        },
        {
          url: "https://www.cisa.gov/news-events/alerts/2024/04/12/cisa-adds-one-known-exploited-vulnerability-catalog",
          firstEntryId:
            "/9tK1+PkL9SHw1UXR/tIOEwDFLMtGXx7KBlyg14ujVQ=_18ed2ba2c17:1682907:5edf391c",
          age: 27282895,
          timestamp: 1712932400151,
        },
        {
          url: "https://www.cybersecurity-help.cz/blog/3929.html",
          firstEntryId:
            "RYRjHGVzrClyjZXn0jva8gL0rp3ezlLReoL5fxnD6wA=_18ed2c0ae46:168a30e:5edf391c",
          age: 27709438,
          timestamp: 1712932826694,
        },
        {
          url: "https://www.itsecuritynews.info/cisa-adds-one-known-exploited-vulnerability-to-catalog-42",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18ed2c48a86:168f1d5:5edf391c",
          age: 27962430,
          timestamp: 1712933079686,
        },
        {
          url: "https://packetstormsecurity.com/news/view/35776/Palo-Alto-Networks-Warns-Of-Exploited-Firewall-Vulnerability.html",
          firstEntryId:
            "KDl0BkGTqinlaH/s0OKdvD6D4/YB/KaNuePDv2cGnl4=_18ed2c57c68:1424c31:5c6f62c1",
          age: 28024352,
          timestamp: 1712933141608,
          sourceType: ["Vendor"],
        },
        {
          url: "https://infosec.exchange/@simontsui/112258768114192899",
          firstEntryId:
            "tQrcdE0E7m6/RFHZguugjyI+kFthN0Yvf9ZAv8hPm8E=_18ed2c59bbb:15c86a9:e56ebecb",
          age: 28032371,
          timestamp: 1712933149627,
        },
        {
          url: "https://news.ycombinator.com/item?id=40012712",
          firstEntryId:
            "nEwtlrpKe3HQY8+T7kpSirK/7ngYUjnK+JPE5IoDsxo=_18ed2c757ad:169317b:5edf391c",
          age: 28146021,
          timestamp: 1712933263277,
        },
        {
          url: "https://noise.getoto.net/2024/04/12/cve-2024-3400-critical-command-injection-vulnerability-in-palo-alto-networks-firewalls",
          firstEntryId:
            "mFhZq5iL5FiF7y35ysfc59GG8bZv0DNwFtI/KwC+Znw=_18ed2c80b33:1693cc9:5edf391c",
          age: 28191979,
          timestamp: 1712933309235,
        },
        {
          url: "https://noc.social/@AAKL/112258795832090081",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed2c86cbd:1428513:5c6f62c1",
          age: 28216949,
          timestamp: 1712933334205,
        },
        {
          url: "https://rss-mstdn.studiofreesia.com/@ycombinator/112258795240479552",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ed2c97d60:1695508:5edf391c",
          age: 28286744,
          timestamp: 1712933404000,
        },
        {
          url: "https://www.reddit.com/r/crowdstrike/comments/1c29xcg/20240412_situational_awareness_cve20243400",
          firstEntryId:
            "bR8VXQm3TXFmkoEKXPb2TviOMoCRHkXv75V1wgc7JOw=_18ed2caf424:15ce4c8:e56ebecb",
          age: 28382684,
          timestamp: 1712933499940,
        },
        {
          url: "https://infosec.exchange/@simontsui/112258760520812709",
          firstEntryId:
            "B20uH4as61LDoWsdB3zFJjjD2lDyCIvEucb3G4skVxA=_18ed2cecb98:169b0c0:5edf391c",
          age: 28634448,
          timestamp: 1712933751704,
        },
        {
          url: "https://therecord.media/vpn-zero-day-palo-alto-networks",
          firstEntryId:
            "gQZX+BuAWXXBI2/jGbBlc+V3bZI7/zIHYuUB/iaix5A=_18ed2ced2dd:15d4c88:e56ebecb",
          age: 28636309,
          timestamp: 1712933753565,
        },
        {
          url: "https://www.ionix.io/blog/cve-2024-3400-pan-os-command-injection-vulnerability-globalprotect-gateway",
          firstEntryId:
            "vuawC2a2aU9XDJLqPbZD0QdTAziQXc4tAEUggXy2DzE=_18ed2cf8e1d:169bee3:5edf391c",
          age: 28684245,
          timestamp: 1712933801501,
        },
        {
          url: "https://www.cert.be/en/advisory/warning-cve-2024-3400-globalprotect-gateway-actively-exploited-patch-immediately",
          firstEntryId:
            "xGvxVf5WMzoKvtjzY81iiK70RiWYNFFxN6z3SswhFAs=_18ed2d10e7b:15d716f:e56ebecb",
          age: 28782643,
          timestamp: 1712933899899,
        },
        {
          url: "https://cert.be/nl/advisory/warning-cve-2024-3400-globalprotect-gateway-actively-exploited-patch-immediately",
          firstEntryId:
            "AaZD4FBryJCYwV4D3Mnel6Pc6H5sJZ5k2H/BvF1NK/Q=_18ed2d18407:15d7f47:e56ebecb",
          age: 28812735,
          timestamp: 1712933929991,
        },
        {
          url: "https://www.cert.be/nl/advisory/warning-cve-2024-3400-globalprotect-gateway-actively-exploited-patch-immediately",
          firstEntryId:
            "kz5e+My6zgPoFGCSUiXG5jz7tGpd1WNrVwpIQl7IFA8=_18ed2d1ebf8:1432a06:5c6f62c1",
          age: 28839344,
          timestamp: 1712933956600,
        },
      ],
      "1712934000000": [
        {
          url: "https://cert.be/en/advisory/warning-cve-2024-3400-globalprotect-gateway-actively-exploited-patch-immediately",
          firstEntryId:
            "Okqh+NyYVbplIVVvOPAEmj8vQ+mlq/Cj5IDFes2JojY=_18ed2d39208:16a0343:5edf391c",
          age: 28947392,
          timestamp: 1712934064648,
        },
        {
          url: "https://www.cert.be/fr/advisory/warning-cve-2024-3400-globalprotect-gateway-actively-exploited-patch-immediately",
          firstEntryId:
            "RhAyxxJBBHzwE4JRfzg6qTziWv63kA8mqf4B5rCoFkg=_18ed2d5096d:1436d39:5c6f62c1",
          age: 29043493,
          timestamp: 1712934160749,
        },
        {
          url: "https://mastodon.social/@substandardnerd/112258849242931197",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed2d6a5fc:1438584:5c6f62c1",
          age: 29149108,
          timestamp: 1712934266364,
        },
        {
          url: "https://mstdn.social/@hkrn/112258748126760575",
          firstEntryId:
            "ZFR8iSQqbnd56MgEgX51lTdlk3i1WPnFYDcH5ulv3Ng=_18ed2da2e55:143be9a:5c6f62c1",
          age: 29380621,
          timestamp: 1712934497877,
        },
        {
          url: "https://www.techtarget.com/searchsecurity/news/366580732/Palo-Alto-Networks-discloses-RCE-zero-day-vulnerability",
          firstEntryId:
            "W19lArdLkjvg2nanPAB9JjfjeCX58qH2wKgfz/2eDu4=_18ed2e67c59:15eee41:e56ebecb",
          age: 30187025,
          timestamp: 1712935304281,
        },
        {
          url: "https://infosec.exchange/@simontsui/112258933046047874",
          firstEntryId:
            "B20uH4as61LDoWsdB3zFJjjD2lDyCIvEucb3G4skVxA=_18ed2eac9d7:15f4f38:e56ebecb",
          age: 30469007,
          timestamp: 1712935586263,
        },
        {
          url: "https://unsafe.sh/go-234007.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed2f692ae:145d077:5c6f62c1",
          age: 31241318,
          timestamp: 1712936358574,
        },
        {
          url: "https://buaq.net/go-234007.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ed2f6fdc1:1604c89:e56ebecb",
          age: 31268729,
          timestamp: 1712936385985,
        },
        {
          url: "https://infosec.exchange/@wdormann/112258511739717609",
          firstEntryId:
            "GZkAKsZRkS7QPZ3PnoyF5ydWqnoHDEjavHO7+p7phoI=_18ed2fd8054:160cc57:e56ebecb",
          age: 31695372,
          timestamp: 1712936812628,
        },
      ],
      "1712937600000": [
        {
          url: "https://www.redpacketsecurity.com/cisa-cisa-adds-one-known-exploited-vulnerability-to-catalog-12-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18ed30cf5aa:1477cdf:5c6f62c1",
          age: 32708450,
          timestamp: 1712937825706,
        },
        {
          url: "https://old.reddit.com/r/InfoSecNews/comments/1c29jsm/cve20243400_panos_os_command_injection",
          firstEntryId:
            "wo4F9hdBqOhsNQE3NelkfdeKOw4f0x/7Kt8RZWdmtZ8=_18ed312d449:16ef93a:5edf391c",
          age: 33093121,
          timestamp: 1712938210377,
        },
        {
          url: "https://gbhackers.com/alert-palo-alto-rce-zero-day-vulnerability-actively-exploited-in-the-wild",
          firstEntryId:
            "Q4wiXXFi8jS6j6t0RmDrzdtXMuNdo6w12oeV7+BzkPA=_18ed313a4a6:16f061b:5edf391c",
          age: 33146462,
          timestamp: 1712938263718,
        },
        {
          url: "https://www.obrela.com/advisory/cve-2024-3400-pan-os",
          firstEntryId:
            "lpsauPrnkawbOC3XFTCeujTCh3jpaa2CGdnbgRAR554=_18ed31b7e4d:162e8cd:e56ebecb",
          age: 33660933,
          timestamp: 1712938778189,
        },
        {
          url: "https://dailydarkweb.net/critical-os-command-injection-vulnerability-cve-2024-3400-found-in-palo-altos-globalprotect-gateway",
          firstEntryId:
            "248LXICIibnbSovx2utpUzKTdMoGPkBOxKig5DYRyok=_18ed31db591:1488b72:5c6f62c1",
          age: 33806153,
          timestamp: 1712938923409,
        },
        {
          url: "https://cybersecuritynews.com/pan-os-zero-day-under-active-attack",
          firstEntryId:
            "dPvRlqjEqW4KvdfQYEuMbvkBHPwGLtNdq11EprXJGRE=_18ed31ea066:1489b64:5c6f62c1",
          age: 33866270,
          timestamp: 1712938983526,
        },
        {
          url: "https://infosec.exchange/@simontsui/112259210525861523",
          firstEntryId:
            "tQrcdE0E7m6/RFHZguugjyI+kFthN0Yvf9ZAv8hPm8E=_18ed32a6fb1:16415fe:e56ebecb",
          age: 34640233,
          timestamp: 1712939757489,
        },
        {
          url: "https://infosec.exchange/@da_667/112258567849497216",
          firstEntryId:
            "hO1+MbvB8dcDs7mhSeGfFOkUXG7t3v7UNKcqaNnD2NU=_18ed32e4ebc:149cbf1:5c6f62c1",
          age: 34893940,
          timestamp: 1712940011196,
        },
        {
          url: "https://www.tenable.com/blog/cve-2024-3400-zero-day-vulnerability-in-palo-alto-networks-pan-os-globalprotect-gateway",
          firstEntryId:
            "Hfp+7CLvGzPreeIuG/7x31hd/8xPPXKaJqyjFZy8NDE=_18ed336a291:164e632:e56ebecb",
          age: 35439689,
          timestamp: 1712940556945,
          sourceType: ["Vendor"],
        },
        {
          url: "https://www.itsecuritynews.info/alert-palo-alto-rce-zero-day-vulnerability-actively-exploited-in-the-wild",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed3373a72:171abad:5edf391c",
          age: 35478570,
          timestamp: 1712940595826,
        },
        {
          url: "https://www.runzero.com/blog/palo-alto-networks",
          firstEntryId:
            "GESnbk/bXauxZl8dYAVVK7VJsZsitezuqMJI5L85vnM=_18ed33e4816:1658675:e56ebecb",
          age: 35940814,
          timestamp: 1712941058070,
        },
      ],
      "1712941200000": [
        {
          url: "https://unit42.paloaltonetworks.com/cve-2024-3400",
          firstEntryId:
            "vjSeYVi2IR+mt/jALIk+rk6xX+aJoQENuU0ENjWY3Y4=_18ed3419f9b:1726af8:5edf391c",
          age: 36159827,
          timestamp: 1712941277083,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.volexity.com/blog/2024/04/12/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400",
          firstEntryId:
            "qdaYh95lFNFddOlKTCMjBs8jHH+3he8pOAvC0dj3VuE=_18ed34511f1:165f2d2:e56ebecb",
          age: 36385705,
          timestamp: 1712941502961,
        },
        {
          url: "https://www.youtube.com/watch?v=iZ2tUmAkFV0",
          firstEntryId:
            "xy7oaDLSGFedFUxzmBbNn0uu24rfMbiDpJa1jJQ66NE=_18ed345bdc1:14b4c50:5c6f62c1",
          age: 36429689,
          timestamp: 1712941546945,
        },
        {
          url: "https://malware.news/t/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400/80812",
          firstEntryId:
            "LNpcjUMKmQexwVgF2HfeIU2a9mSM/aKVHu+Ysyy8NWM=_18ed346393c:172b40d:5edf391c",
          age: 36461300,
          timestamp: 1712941578556,
        },
        {
          url: "https://cyberfeed.io/article/9eff05c27f67de2cba90fc0d21d57974",
          firstEntryId:
            "AP2Lx0Wu8XDQ9ONNS6kSGN/o8g3bQj21vpegepzn2hc=_18ed34ce9ea:1732b4d:5edf391c",
          age: 36899746,
          timestamp: 1712942017002,
        },
        {
          url: "https://mstdn.social/@cyberfeed/112259354922303584",
          firstEntryId:
            "t5Paw3z4tuEP9Bgv1VBytboFy0WEKjkctSw72To6Omc=_18ed34e25e8:1668d5e:e56ebecb",
          age: 36980640,
          timestamp: 1712942097896,
        },
        {
          url: "https://twit.social/@2KKyle/112259350663238040",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ed34e89c2:16694fc:e56ebecb",
          age: 37006202,
          timestamp: 1712942123458,
        },
        {
          url: "https://www.itsecuritynews.info/threat-brief-operation-midnighteclipse-post-exploitation-activity-related-to-cve-2024-3400",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed351d1ff:166c97d:e56ebecb",
          age: 37221303,
          timestamp: 1712942338559,
        },
        {
          url: "https://infosec.exchange/@trisha_m_clay/112259386622539794",
          firstEntryId:
            "hwxvY7we3KnESfHluwhrWPQggPiVZSz0G/odDFhUh1w=_18ed357b921:173e740:5edf391c",
          age: 37608153,
          timestamp: 1712942725409,
        },
        {
          url: "https://allinfosecnews.com/item/alert-palo-alto-rce-zero-day-vulnerability-actively-exploited-in-the-wild-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed35a555f:1741755:5edf391c",
          age: 37779223,
          timestamp: 1712942896479,
        },
        {
          url: "https://censys.com/cve-2024-3400",
          firstEntryId:
            "cgVzIbM0Epe/Iw2nSXQmqZ1XMckQEqO8nP8m6bRC/Ys=_18ed36159e8:174974e:5edf391c",
          age: 38239136,
          timestamp: 1712943356392,
        },
        {
          url: "https://www.axonius.com/blog/cve-2024-3400",
          firstEntryId:
            "MHbyfer+Hl9zIeZ31xy3WOUtV1POnx7zuj8r6hQgKEw=_18ed3644a4b:14d2b26:5c6f62c1",
          age: 38431747,
          timestamp: 1712943549003,
        },
        {
          url: "https://unsafe.sh/go-234034.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed36a4585:16889bd:e56ebecb",
          age: 38823741,
          timestamp: 1712943940997,
        },
        {
          url: "https://infosec.exchange/@volexity/112259495681752358",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18ed36c14a8:14da6c7:5c6f62c1",
          age: 38942304,
          timestamp: 1712944059560,
        },
        {
          url: "https://buaq.net/go-234034.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ed36dd8d8:17593d8:5edf391c",
          age: 39058064,
          timestamp: 1712944175320,
        },
        {
          url: "https://unsafe.sh/go-234041.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed3711010:175c7e9:5edf391c",
          age: 39268808,
          timestamp: 1712944386064,
        },
      ],
      "1712944800000": [
        {
          url: "https://talkback.sh/resource/360ec798-ae38-4984-b36a-db7c62458679",
          firstEntryId:
            "nKesiCLbGJVw6X5R+sYcbNieanfzkq4lBhdwoHRc6Cc=_18ed3778afe:1695443:e56ebecb",
          age: 39693494,
          timestamp: 1712944810750,
        },
        {
          url: "https://www.wilderssecurity.com/threads/palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-2024-3400-12-apr-2024.453943",
          firstEntryId:
            "Re0ordCJbSvwui/KxBXh/SuS6lFs/TyVAX/pwst5/c4=_18ed3784179:1695fe9:e56ebecb",
          age: 39740209,
          timestamp: 1712944857465,
        },
        {
          url: "https://ciso2ciso.com/zero-day-alert-critical-palo-alto-networks-pan-os-flaw-under-active-attack-sourcethehackernews-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ed37b717c:17674d4:5edf391c",
          age: 39949108,
          timestamp: 1712945066364,
        },
        {
          url: "https://cyberplace.social/@GossiTheDog/112259563668919214",
          firstEntryId:
            "Xrh+ELNhA2jGcuchWvKG9pIPzOtK2ia/s1yVCpJX7CE=_18ed37cf462:14ea152:5c6f62c1",
          age: 40048154,
          timestamp: 1712945165410,
        },
        {
          url: "https://www.csoonline.com/article/2089594/attackers-exploit-critical-zero-day-flaw-in-palo-alto-networks-firewalls.html",
          firstEntryId:
            "Vy06FQ3uO1t9MDBrd3uXGsqrB7bvt4aX7iJHcnuBAH4=_18ed389d469:16a97d4:e56ebecb",
          age: 40891937,
          timestamp: 1712946009193,
        },
        {
          url: "https://mastodon.social/@alexandreborges/112259633947950550",
          firstEntryId:
            "B20uH4as61LDoWsdB3zFJjjD2lDyCIvEucb3G4skVxA=_18ed38f8c45:16aef55:e56ebecb",
          age: 41266685,
          timestamp: 1712946383941,
        },
        {
          url: "https://threathorizon.org/blog/2024/04/critical-zero-day-vulnerability-affecting-palo-alto-gateways",
          firstEntryId:
            "L7myM9IaOU4vlI7M6D5Qkz2R2Ir0rZVk+VROFVGnbhw=_18ed395d208:16b5ec8:e56ebecb",
          age: 41677760,
          timestamp: 1712946795016,
        },
        {
          url: "https://projecthyphae.com/threat/firewall-fiasco-cve-2024-3400",
          firstEntryId:
            "dXGWvN7iYa+6dpc2Q9wWnRxIzgXSxVPS74W5OjB0aKU=_18ed397fc5c:1505ff5:5c6f62c1",
          age: 41819668,
          timestamp: 1712946936924,
        },
        {
          url: "https://fieldeffect.com/blog/zero-day-in-palo-alto-firewalls-exploited-in-the-wild",
          firstEntryId:
            "0N+WIpXqwlNuVKaQIeLHWQH6zwSwXmiQSC1QDk7MrCc=_18ed3a6d444:1514ba8:5c6f62c1",
          age: 42792444,
          timestamp: 1712947909700,
        },
      ],
      "1712948400000": [
        {
          url: "https://www.redpacketsecurity.com/cisa-palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-12-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18ed3af9e37:16d2806:e56ebecb",
          age: 43368431,
          timestamp: 1712948485687,
        },
        {
          url: "https://www.helpnetsecurity.com/2024/04/12/palo-alto-networks-firewalls-cve-2024-3400-exploited",
          firstEntryId:
            "Cy3k14swJCzV5u/XVecDtGZ68eoPG1CcU69tviliRR0=_18ed3b42bef:17a1b4c:5edf391c",
          age: 43666855,
          timestamp: 1712948784111,
        },
        {
          url: "https://mastodon.social/@RedPacketSecurity/112259789481371968",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18ed3b4d4eb:1520ebb:5c6f62c1",
          age: 43710115,
          timestamp: 1712948827371,
        },
        {
          url: "https://securityboulevard.com/2024/04/how-to-find-palo-alto-network-firewalls-running-pan-os-11-1-11-0-and-10-2",
          firstEntryId:
            "+UmN509yuKtDmz+80MmChT/n2QPEX+3GPD9283d7jeE=_18ed3b64f50:17a381b:5edf391c",
          age: 43806984,
          timestamp: 1712948924240,
        },
        {
          url: "https://infosec.town/notes/9s0lxmk5g8ny1rt2",
          firstEntryId:
            "UJwGzaRId8pmwD+MpZyECryelRHuBVnKhGaYjdzf01M=_18ed3b9bd42:16de8b3:e56ebecb",
          age: 44031738,
          timestamp: 1712949148994,
        },
        {
          url: "https://duo.com/decipher/palo-alto-networks-discloses-critical-pan-os-zero-day",
          firstEntryId:
            "ZRhjQp3WIf+4clZJx1/PW3POah6zD0m2RFUGquo7Q34=_18ed3ba454a:17a7179:5edf391c",
          age: 44066562,
          timestamp: 1712949183818,
          sourceType: ["Vendor"],
        },
        {
          url: "https://malware.news/t/palo-alto-networks-discloses-critical-pan-os-zero-day/80814",
          firstEntryId:
            "tln/RgdbhTE7lkp1QinACL+ab1pmoomH5ck8KZfsynk=_18ed3baf54d:17a7beb:5edf391c",
          age: 44111621,
          timestamp: 1712949228877,
        },
        {
          url: "https://www.reddit.com/r/blueteamsec/comments/1c2hi5j/threat_brief_operation_midnighteclipse",
          firstEntryId:
            "T8Gn8hJy9MDXgPPEWPf3eKFiC22pQg9/jkwNHgMRBDU=_18ed3c47633:16e8a2e:e56ebecb",
          age: 44734443,
          timestamp: 1712949851699,
        },
        {
          url: "https://www.reddit.com/r/cybersecurity/comments/1c2grid/volexity_writeup_cve_20243400",
          firstEntryId:
            "Lmz4YPiBiCTPjM8K+CLq5rmjE7ULuMS3ASuO3vPsQzg=_18ed3c487e0:17b0727:5edf391c",
          age: 44738968,
          timestamp: 1712949856224,
        },
        {
          url: "https://www.systemtek.co.uk/2024/04/os-command-injection-vulnerability-in-palo-alto-globalprotect-gateway-cve-2024-3400",
          firstEntryId:
            "ywu3HhN5dSNyiCa8sR30snw5OIvz4jizgOCFTsH6dS0=_18ed3c782cb:152fe0f:5c6f62c1",
          age: 44934275,
          timestamp: 1712950051531,
        },
        {
          url: "https://allinfosecnews.com/item/cve-2024-3400-exploited-unit-42-volexity-share-more-details-about-the-attacks-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed3c99c62:17b8a82:5edf391c",
          age: 45071898,
          timestamp: 1712950189154,
        },
        {
          url: "https://unifiedguru.com/palo-alto-networks-warns-about-critical-zero-day-in-pan-os",
          firstEntryId:
            "c58NxBnGuUwNiDk7RlmWo31g/6wlm7QJP87PPRv98A0=_18ed3d0ed7a:16f477f:e56ebecb",
          age: 45551410,
          timestamp: 1712950668666,
        },
        {
          url: "https://old.reddit.com/r/blueteamsec/comments/1c2hi5j/threat_brief_operation_midnighteclipse",
          firstEntryId:
            "wo4F9hdBqOhsNQE3NelkfdeKOw4f0x/7Kt8RZWdmtZ8=_18ed3d170f1:17c00df:5edf391c",
          age: 45585065,
          timestamp: 1712950702321,
        },
        {
          url: "https://github.com/bigsclowns/CVE-2024-3400-POC",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ed3d21a9b:153a0c4:5c6f62c1",
          age: 45628499,
          timestamp: 1712950745755,
        },
        {
          url: "https://infosec.exchange/@da_667/112259449321002392",
          firstEntryId:
            "hO1+MbvB8dcDs7mhSeGfFOkUXG7t3v7UNKcqaNnD2NU=_18ed3d3bb6a:16f6d6c:e56ebecb",
          age: 45735202,
          timestamp: 1712950852458,
        },
        {
          url: "https://infosec.exchange/@corbeaucrypto/112259960206284565",
          firstEntryId:
            "wQViR7OCDGjsyLsKBPRC162Wbso9hg/LyTXDS7OBm1E=_18ed3d7f6cc:17c686c:5edf391c",
          age: 46012548,
          timestamp: 1712951129804,
        },
        {
          url: "https://social.skynetcloud.site/@jos1264/112259943884606589",
          firstEntryId:
            "S1uJzGX260YfxCJNH+//RXBPIIlV8oW7NRBKJwL9eVw=_18ed3d7f9c2:16faf1e:e56ebecb",
          age: 46013306,
          timestamp: 1712951130562,
        },
        {
          url: "https://www.blumira.com/cve-2024-3400-palo-alto-vulnerabilities-in-globalprotect-gateway-lead-to-rce",
          firstEntryId:
            "MCN7U8TnDmKqjBFPstRcYg3mVA0SppGp0PE7c7Hn2w4=_18ed3da30d7:17c8b24:5edf391c",
          age: 46158479,
          timestamp: 1712951275735,
        },
        {
          url: "https://www.itsecuritynews.info/cve-2024-3400-exploited-unit-42-volexity-share-more-details-about-the-attacks",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed3dbe7aa:16fe398:e56ebecb",
          age: 46270818,
          timestamp: 1712951388074,
        },
        {
          url: "https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/cve-2024-3400-pan-os-command-injection-vulnerability-in-globalprotect-gateway",
          firstEntryId:
            "eljf55K/iP+D5QJx72mPH/FNrtvN42P6GhZSsXdM40A=_18ed3dcb3a5:16feff6:e56ebecb",
          age: 46323037,
          timestamp: 1712951440293,
          sourceType: ["Vendor"],
        },
        {
          url: "https://fortiguard.fortinet.com/threat-signal-report/5423",
          firstEntryId:
            "/UsDkRrKn4c2lkSIwNIDEdUGzwUpidRrahbCBcLbc1M=_18ed3dd5755:1544427:5c6f62c1",
          age: 46364941,
          timestamp: 1712951482197,
        },
        {
          url: "https://swecyb.com/@nopatience/112260003940476982",
          firstEntryId:
            "UJwGzaRId8pmwD+MpZyECryelRHuBVnKhGaYjdzf01M=_18ed3e12591:17cfc26:5edf391c",
          age: 46614345,
          timestamp: 1712951731601,
        },
        {
          url: "https://www.securityweek.com/state-sponsored-hackers-exploit-zero-day-to-backdoor-palo-alto-networks-firewalls",
          firstEntryId:
            "OCNmtsBfUVVxBwlbibzHvHeZc1NiFWsbQ+vh9PI4SyI=_18ed3e1c6e7:17d062f:5edf391c",
          age: 46655647,
          timestamp: 1712951772903,
        },
        {
          url: "https://www.thecyberwhy.com/p/the-cyber-why-what-we-read-this-week-671",
          firstEntryId:
            "cGycxsUatrHJc8Nze10GaVaI8KL+gU+DQxyTvApoPyU=_18ed3e2e82b:1705d59:e56ebecb",
          age: 46729699,
          timestamp: 1712951846955,
        },
      ],
      "1712952000000": [
        {
          url: "https://talkback.sh/resource/9240f3ed-9822-44f4-8fba-f024d8a4e345",
          firstEntryId:
            "PHqrwWLsqAc+meWiTJ8KCHgis4nBIL6oq5a0ZIQuBzY=_18ed3e5da56:17d3dcc:5edf391c",
          age: 46922766,
          timestamp: 1712952040022,
        },
        {
          url: "https://news.ycombinator.com/item?id=40016985",
          firstEntryId:
            "cnbGCPjJjpLm0qtw2aDBkoc5a9q8sWExHaeYNUQcfLI=_18ed3e66eba:1708c19:e56ebecb",
          age: 46960754,
          timestamp: 1712952078010,
        },
        {
          url: "https://social.raytec.co/@techbot/112260028101360921",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed3e6a8ef:1708e78:e56ebecb",
          age: 46975655,
          timestamp: 1712952092911,
        },
        {
          url: "https://buaq.net/go-234066.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ed3e9ed76:17d863e:5edf391c",
          age: 47189806,
          timestamp: 1712952307062,
        },
        {
          url: "https://unsafe.sh/go-234066.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed3ea9c59:154ef86:5c6f62c1",
          age: 47234577,
          timestamp: 1712952351833,
        },
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/12/cve-2024-3400-exploited-unit-42-volexity-share-more-details-about-the-attacks",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18ed3f22b53:1555649:5c6f62c1",
          age: 47729931,
          timestamp: 1712952847187,
        },
        {
          url: "https://infosec.exchange/@threatcodex/112260081306125179",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ed3f958bf:1719c5d:e56ebecb",
          age: 48200311,
          timestamp: 1712953317567,
        },
        {
          url: "https://www.reddit.com/r/UIC/comments/1c2j52y/threat_brief_operation_midnighteclipse",
          firstEntryId:
            "thZ6p6+jlF70HJsGcCHPQUXbsqwMlO5r3B+FgctnMSY=_18ed3fba732:17e7e75:5edf391c",
          age: 48351466,
          timestamp: 1712953468722,
        },
        {
          url: "https://infosec.exchange/@pixelnull/112260116114359751",
          firstEntryId:
            "pemFoNaQNjE4Hvvqkj32rZxtL4NMjUDvYpxzCJ0njt0=_18ed3fc1356:171bfab:e56ebecb",
          age: 48379150,
          timestamp: 1712953496406,
        },
        {
          url: "https://www.cyber.gc.ca/en/alerts-advisories/al24-005-vulnerability-impacting-pan-os-globalprotect-gateway",
          firstEntryId:
            "Zi4aIkU7OvtngADwBPj79SwMqkUOFtXC60JshrRElrc=_18ed3fd030a:155d342:5c6f62c1",
          age: 48440514,
          timestamp: 1712953557770,
        },
        {
          url: "https://allinfosecnews.com/item/pan-os-critical-flaw-in-globalprotect-gateway-cve-2024-3400-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed3fe54de:17ea486:5edf391c",
          age: 48526998,
          timestamp: 1712953644254,
        },
        {
          url: "https://www.varonis.com/blog/pan-os-zero-day",
          firstEntryId:
            "nzau4VLmlS7Q3K/KFJcO8PCAWfjQIQCQaqAbbbowDgk=_18ed4016e26:1560f57:5c6f62c1",
          age: 48730078,
          timestamp: 1712953847334,
        },
        {
          url: "https://arstechnica.com/security/2024/04/highly-capable-hackers-root-corporate-networks-by-exploiting-firewall-0-day",
          firstEntryId:
            "/dgx2OdJ5UmHZB7HCRPvtRIM976LJAJVigy02wL5Ilg=_18ed411f192:17302c3:e56ebecb",
          age: 49812298,
          timestamp: 1712954929554,
        },
        {
          url: "https://www.cisecurity.org/advisory/a-vulnerability-in-pan-os-could-allow-for-arbitrary-code-execution_2024-038",
          firstEntryId:
            "h+vWAtXeQkYyc/lFKto1sCOlJRGGFEAsYDgu2LPT6dQ=_18ed416102e:1733ff4:e56ebecb",
          age: 50082278,
          timestamp: 1712955199534,
        },
      ],
      "1712955600000": [
        {
          url: "https://www.reddit.com/r/InfoSecNews/comments/1c2jwdn/zeroday_alert_critical_palo_alto_networks_panos",
          firstEntryId:
            "ycoqf+mSOVTtSUkyHCqEoThu01HZIuVSFCRG++/0eWE=_18ed42a5628:1581c1b:5c6f62c1",
          age: 51410912,
          timestamp: 1712956528168,
        },
        {
          url: "https://fedia.io/m/cybersecurity@sh.itjust.works/t/707358/CVE-2024-3400-exploited-Unit-42-Volexity-share-more-details-about-the",
          firstEntryId:
            "eqcGg6rpIG+HziZwHX3fUUop+VdQmM1FwAVi5P02hro=_18ed42b6f85:158297f:5c6f62c1",
          age: 51482941,
          timestamp: 1712956600197,
        },
        {
          url: "https://allinfosecnews.com/item/volexity-write-up-cve-2024-3400-2024-04-12",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed432c154:174c336:e56ebecb",
          age: 51962636,
          timestamp: 1712957079892,
        },
        {
          url: "https://technewstube.com/ars-technica/1631877/highly-capable-hackers-root-corporate-networks-exploiting",
          firstEntryId:
            "aHTVOmdgeVAWpEbPKNqKHvGG36ussMLWBa4rluv8ioo=_18ed43b014a:175382b:e56ebecb",
          age: 52503298,
          timestamp: 1712957620554,
        },
        {
          url: "https://infosec.exchange/@securopean/112257390497662525",
          firstEntryId:
            "cukwrK2uU4Hh6R6HOaHWKj1lvRQURnwcCFrInUGtBg0=_18ed44449c5:15958a3:5c6f62c1",
          age: 53111677,
          timestamp: 1712958228933,
        },
      ],
      "1712959200000": [
        {
          url: "https://infosec.exchange/@h4sh/112260479396044204",
          firstEntryId:
            "/4LBMLNgsFJeSzVpZl0IutvX+GLdXoOXrfI2n2uAt2I=_18ed45446bf:15a2400:5c6f62c1",
          age: 54159479,
          timestamp: 1712959276735,
        },
        {
          url: "https://cvecrowd.com",
          firstEntryId:
            "B20uH4as61LDoWsdB3zFJjjD2lDyCIvEucb3G4skVxA=_18ed45a9231:183a0be:5edf391c",
          age: 54572009,
          timestamp: 1712959689265,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184/page/2",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed45c6393:176ea68:e56ebecb",
          age: 54691147,
          timestamp: 1712959808403,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://old.reddit.com/r/InfoSecNews/comments/1c2jwdn/zeroday_alert_critical_palo_alto_networks_panos",
          firstEntryId:
            "1/+B2P3MbGUxRYoL+Cw86Q13trJNjpMqv2hS0LRcJdk=_18ed46015be:183de5e:5edf391c",
          age: 54933366,
          timestamp: 1712960050622,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c2l3o6/threat_brief_operation_midnighteclipse",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ed461fcfe:183f6be:5edf391c",
          age: 55058102,
          timestamp: 1712960175358,
        },
        {
          url: "https://mastodon.online/@vwbusguy/112260560857056434",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed464072b:1841ae8:5edf391c",
          age: 55191779,
          timestamp: 1712960309035,
        },
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-12",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed4661e12:15b09a5:5c6f62c1",
          age: 55328714,
          timestamp: 1712960445970,
        },
        {
          url: "https://infosec.exchange/@defaultvlan/112260607599265208",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed4714d8f:15b9221:5c6f62c1",
          age: 56061767,
          timestamp: 1712961179023,
        },
        {
          url: "https://www.theregister.com/2024/04/12/palo_alto_pan_flaw",
          firstEntryId:
            "UOOth3ByXZESgiM95RgM1pSDiYRVW66JI0Fm8r/o14U=_18ed47cad9a:1855a7e:5edf391c",
          age: 56807250,
          timestamp: 1712961924506,
        },
        {
          url: "https://www.tenable.com/cve/CVE-2024-3400",
          firstEntryId:
            "mAtqIxn50GPmAsdYA1qG5ihtQkDy6/Df5jzxZqf6MYI=_18ed4863479:185cf9a:5edf391c",
          age: 57431601,
          timestamp: 1712962548857,
          sourceType: ["Vendor"],
        },
        {
          url: "https://www.scmagazine.com/news/palo-alto-networks-pan-os-critical-0-day-exploited-no-patch-yet",
          firstEntryId:
            "AUwlBlc4C7SbG/RxwkWpWqh5F3Tx6hJQgVeaMawqEDw=_18ed48739ff:1792633:e56ebecb",
          age: 57498551,
          timestamp: 1712962615807,
        },
      ],
      "1712962800000": [
        {
          url: "https://nationalcybersecurity.com/highly-capable-hackers-root-corporate-networks-by-exploiting-firewall-0-day-hacking-cybersecurity-infosec-comptia-pentest-hacker",
          firstEntryId:
            "pzXpZmEcBTizRFYZn4TZ7MOAKfW4RKwW3II7qd0B/+8=_18ed4a340b2:15d8c52:5c6f62c1",
          age: 59335274,
          timestamp: 1712964452530,
        },
        {
          url: "https://fortiguard.fortinet.com/outbreak-alert/pan-os-globalprotect-attack",
          firstEntryId:
            "isKcMKPqbWRV4LdPiGNxKPxKjyus9I3eybr5CNIYhbQ=_18ed4a6b2f9:17a869c:e56ebecb",
          age: 59561137,
          timestamp: 1712964678393,
        },
        {
          url: "https://hackerattacks.einnews.com/article/703322477/lXJNpOVcwNCbPjhD?ref=rss&ecode=DtSkePn36FXIO0Uu",
          firstEntryId:
            "PCgw/b3JJ9XygcnMEkQ31zFL5XrrLW23Di6ocvJ9RfY=_18ed4b00e52:17ae776:e56ebecb",
          age: 60174346,
          timestamp: 1712965291602,
        },
      ],
      "1712966400000": [
        {
          url: "https://www.orangecyberdefense.com/se/kunskap/nyheter/default-title",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ed4c26db4:17b990d:e56ebecb",
          age: 61378412,
          timestamp: 1712966495668,
        },
        {
          url: "https://www.youtube.com/watch?v=6pWAuy32HO0",
          firstEntryId:
            "1KucPt2oPxQBHhxf2XSK7yL8t6RPAbE9J19qe60xkZM=_18ed4c3c772:1888102:5edf391c",
          age: 61466922,
          timestamp: 1712966584178,
        },
        {
          url: "https://www.apextechservices.com/topics/articles/459253-palo-alto-networks-discloses-critical-zero-day-exploit.htm",
          firstEntryId:
            "CcT0qo0kH7NCRWLrg6cJT3BNjKNrMz4fndkQaeRiGzU=_18ed4c5669d:17bba82:e56ebecb",
          age: 61573205,
          timestamp: 1712966690461,
        },
        {
          url: "https://www.reddit.com/r/threatintel/comments/1c2jwud/zeroday_alert_critical_palo_alto_networks_panos",
          firstEntryId:
            "3JVBoK4svA9XW3g9//Qax/CZao3jMl96H6KZcoYC8yU=_18ed4cc0290:15f2ac3:5c6f62c1",
          age: 62006344,
          timestamp: 1712967123600,
        },
        {
          url: "https://mstdn.social/@hkrn/112260609959927384",
          firstEntryId:
            "ZFR8iSQqbnd56MgEgX51lTdlk3i1WPnFYDcH5ulv3Ng=_18ed4d3f6f4:15f7eca:5c6f62c1",
          age: 62527660,
          timestamp: 1712967644916,
        },
      ],
      "1712970000000": [
        {
          url: "https://techcratic.com/index.php/2024/04/12/highly-capable-hackers-root-corporate-networks-by-exploiting-firewall-0-day/ars-technica/ars-technica",
          firstEntryId:
            "xwXdpPQEccMs7bEye/J1zhbpsDTvYDEOkGOQRNMtfuQ=_18ed50f98f1:18c03ea:5edf391c",
          age: 66435753,
          timestamp: 1712971553009,
        },
        {
          url: "https://www.newsminimalist.com/articles/f60eb5bd-5539-4398-b255-01095240d136",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ed5148d7a:17f4b5e:e56ebecb",
          age: 66760498,
          timestamp: 1712971877754,
        },
        {
          url: "https://www.reddit.com/r/crowdstrike/comments/1c2qgwo/crowdstrike_exposes_cve20243400",
          firstEntryId:
            "bR8VXQm3TXFmkoEKXPb2TviOMoCRHkXv75V1wgc7JOw=_18ed526cfc9:162b403:5c6f62c1",
          age: 67957121,
          timestamp: 1712973074377,
        },
        {
          url: "https://healsecurity.com/cve-2024-3400-exploited-unit-42-volexity-share-more-details-about-the-attacks",
          firstEntryId:
            "8Cns9GQd1kOqrAzP31rDT7JbFVB4amIG0VrvYfMiJeQ=_18ed529ded9:1801627:e56ebecb",
          age: 68157585,
          timestamp: 1712973274841,
        },
        {
          url: "https://exchange.xforce.ibmcloud.com/report/details/guid:a5ada306c56555cad92c350f15342da2",
          firstEntryId:
            "lBdsQVehp8ABHSRhzrVrnB1/ssPPcn6712TIhhG5k6s=_18ed52e8e52:1804747:e56ebecb",
          age: 68464650,
          timestamp: 1712973581906,
          sourceType: ["Vendor"],
        },
      ],
      "1712973600000": [
        {
          url: "https://thecyberthrone.in/2024/04/13/paloalto-pan-os-critical-command-injection-vulnerability",
          firstEntryId:
            "+FhtXLPlJNX87IWVqHPTF94lc+DozwDLi164s1flptk=_18ed52ef1fa:162fa3e:5c6f62c1",
          age: 68490162,
          timestamp: 1712973607418,
        },
        {
          url: "https://www.redpacketsecurity.com/cisa-palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-13-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18ed52ff84b:18d4280:5edf391c",
          age: 68557315,
          timestamp: 1712973674571,
        },
        {
          url: "https://macmegasite.com/2024/04/12/highly-capable-hackers-root-corporate-networks-by-exploiting-firewall-0-day",
          firstEntryId:
            "ShsV10KEWdcx9mxydsR27ekSpvmI1nLBOJTwJ79eRqw=_18ed5484be3:18e4a53:5edf391c",
          age: 70151579,
          timestamp: 1712975268835,
        },
        {
          url: "https://exchange.xforce.ibmcloud.com/report/details/guid:c4378b412c7fbd8493370677361d37c6",
          firstEntryId:
            "lBdsQVehp8ABHSRhzrVrnB1/ssPPcn6712TIhhG5k6s=_18ed54f1256:18e8b9b:5edf391c",
          age: 70595598,
          timestamp: 1712975712854,
          sourceType: ["Vendor"],
        },
      ],
      "1712977200000": [
        {
          url: "https://www.threatshub.org/blog/zero-day-exploited-right-now-in-palo-alto-networks-globalprotect-gateways",
          firstEntryId:
            "/d9kNdX3X+lE2UWuQ2O5qyVZ6zzhrPidh1dYQ18BEmM=_18ed56d61b4:18f87ac:5edf391c",
          age: 72581996,
          timestamp: 1712977699252,
        },
      ],
      "1712980800000": [
        {
          url: "https://ioc.exchange/@83r71n/112262096942933823",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ed5c89f87:1680e9d:5c6f62c1",
          age: 78561599,
          timestamp: 1712983678855,
        },
      ],
      "1712984400000": [
        {
          url: "https://klse.i3investor.com/web/blog/detail/future_tech/2024-04-13-story-h-183835976-Zero_day_exploited_right_now_in_Palo_Alto_Networks_GlobalProtect_gatewa",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ed5d59fca:1937e2c:5edf391c",
          age: 79413634,
          timestamp: 1712984530890,
        },
        {
          url: "https://healsecurity.com/palo-alto-rce-zero-day-vulnerability-actively-exploited-in-the-wild",
          firstEntryId:
            "8Cns9GQd1kOqrAzP31rDT7JbFVB4amIG0VrvYfMiJeQ=_18ed5e47bcf:186e8d5:e56ebecb",
          age: 80387463,
          timestamp: 1712985504719,
        },
        {
          url: "https://infosec.exchange/@joshbuker/112262214620676309",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ed5e97bd0:1944553:5edf391c",
          age: 80715144,
          timestamp: 1712985832400,
        },
        {
          url: "https://www.zscaler.com/blogs/security-research/another-cve-pan-os-zero-day-another-reason-consider-zero-trust-0",
          firstEntryId:
            "pYaiuMSatLATTD61MNDanwn734L7nQjhGhol19/8XKA=_18ed5ea2aae:1691fc6:5c6f62c1",
          age: 80759910,
          timestamp: 1712985877166,
        },
      ],
      "1712988000000": [
        {
          url: "https://ioc.exchange/@83r71n/112262288481051586",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ed60dc48a:16a558a:5c6f62c1",
          age: 83093058,
          timestamp: 1712988210314,
        },
        {
          url: "https://vulners.com/githubexploit/78761E4F-557C-5DE8-9E4D-F67235BBF933",
          firstEntryId:
            "Xd0aPXvYBJTZqdixdN2RNf2VS4Zwx2lieo+L9qmSRn0=_18ed61166ee:195dc08:5edf391c",
          age: 83331238,
          timestamp: 1712988448494,
        },
        {
          url: "https://www.getinfosec.news/54582116/cve-2024-3400-critical-command-injection-vulnerability-in-palo-alto-networks-firewalls",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ed6412d09:197bb9d:5edf391c",
          age: 86462145,
          timestamp: 1712991579401,
        },
      ],
      "1712995200000": [
        {
          url: "https://beyondmachines.net/event_details/palo-alto-networks-alerts-of-critical-pan-os-firewall-software-zero-day-used-in-attacks-m-3-h-z-5/gD2P6Ple2L",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ed67cc733:19a60c9:5edf391c",
          age: 90368235,
          timestamp: 1712995485491,
        },
        {
          url: "https://talkback.sh/resource/c0c16c84-127c-4f40-8fe9-4eb05ea861d9",
          firstEntryId:
            "PHqrwWLsqAc+meWiTJ8KCHgis4nBIL6oq5a0ZIQuBzY=_18ed67e9c44:18d422b:e56ebecb",
          age: 90488316,
          timestamp: 1712995605572,
        },
        {
          url: "https://thehackernews.com/2024/04/hackers-deploy-python-backdoor-in-palo.html",
          firstEntryId:
            "5Z9G0WTF3GtvYqzUA1MwH904zn5l5tsyDD8jI9kfoZ0=_18ed6913ff8:18e129d:e56ebecb",
          age: 91709872,
          timestamp: 1712996827128,
        },
        {
          url: "https://blog.netmanageit.com/hackers-deploy-python-backdoor-in-palo-alto-zero-day-attack",
          firstEntryId:
            "DjLqObdHZsoV/G+ilaJM4jhEcnZ3FpjCLBHKHGWiWc0=_18ed6977de8:19b96e2:5edf391c",
          age: 92118944,
          timestamp: 1712997236200,
        },
        {
          url: "https://beyondmachines.net/event_details/palo-alto-networks-alerts-of-critical-pan-os-firewall-software-zero-day-used-in-attacks-m-3-h-z-5",
          firstEntryId:
            "L7myM9IaOU4vlI7M6D5Qkz2R2Ir0rZVk+VROFVGnbhw=_18ed69de6b9:19be129:5edf391c",
          age: 92538993,
          timestamp: 1712997656249,
        },
      ],
      "1712998800000": [
        {
          url: "https://vulners.com/thn/THN:32A6F98E25681594A3398F627FD03EEA",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18ed6be6925:19d474c:5edf391c",
          age: 94669533,
          timestamp: 1712999786789,
        },
        {
          url: "https://infosec.exchange/@h4sh/112263143186056195",
          firstEntryId:
            "/4LBMLNgsFJeSzVpZl0IutvX+GLdXoOXrfI2n2uAt2I=_18ed6c1e1de:1712eff:5c6f62c1",
          age: 94897046,
          timestamp: 1713000014302,
        },
        {
          url: "https://www.getinfosec.news/54589007/cve-2024-3400-pan-os-command-injection-vulnerability-in-globalprotect-gateway",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ed6c4ecc5:1714bc4:5c6f62c1",
          age: 95096445,
          timestamp: 1713000213701,
        },
        {
          url: "https://nationalcybersecurity.com/hackers-deploy-python-backdoor-in-palo-alto-zero-day-attack-hacking-cybersecurity-infosec-comptia-pentest-hacker",
          firstEntryId:
            "pzXpZmEcBTizRFYZn4TZ7MOAKfW4RKwW3II7qd0B/+8=_18ed6c7cbc0:1907245:e56ebecb",
          age: 95284600,
          timestamp: 1713000401856,
        },
      ],
      "1713002400000": [
        {
          url: "https://infosec-mashup.santolaria.net/p/infosec-mashup-week-152024",
          firstEntryId:
            "44EPb1h3qLhy9Oid5lNcyvy3a3BnRWZrKgxL8ut7CSE=_18ed6e8ab85:191db9d:e56ebecb",
          age: 97439037,
          timestamp: 1713002556293,
        },
        {
          url: "https://news.google.com/rss/articles/CBMiOmh0dHBzOi8vd3d3LmNyb3dkc3RyaWtlLmNvbS9ibG9nL2NyaXRpY2FsLXBhbi1vcy16ZXJvLWRheS_SAQA?oc=5",
          firstEntryId:
            "pqo0kL9QUKZLLEA9XL/LCgRJrBBXAtLjLWtY+TxXiTg=_18ed6e96090:191e7d9:e56ebecb",
          age: 97485384,
          timestamp: 1713002602640,
        },
        {
          url: "https://github.com/trickest/cve/commit/c66b84b2aee259d1b29a0717c2afd0c6d6e3fcb9",
          firstEntryId:
            "EUGB/u+RmzQLYPqVdzClwVfqP2uvdPjW6Wli7vnbU4I=_18ed6ec2eea:172ec01:5c6f62c1",
          age: 97669282,
          timestamp: 1713002786538,
        },
        {
          url: "https://www.getinfosec.news/54592662/cve-2024-3400-exploited-unit-42-volexity-share-more-details-about-the-attacks",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ed71350a8:1a13592:5edf391c",
          age: 100233824,
          timestamp: 1713005351080,
        },
      ],
      "1713006000000": [
        {
          url: "https://buaq.net/go-234105.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ed71e65c5:174ef2f:5c6f62c1",
          age: 100960125,
          timestamp: 1713006077381,
        },
        {
          url: "https://unsafe.sh/go-234105.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed71ee8d1:1948486:e56ebecb",
          age: 100993673,
          timestamp: 1713006110929,
        },
        {
          url: "https://www.getinfosec.news/54594207/alert-palo-alto-rce-zero-day-vulnerability-actively-exploited-in-the-wild",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ed734fcb7:175df49:5c6f62c1",
          age: 102440559,
          timestamp: 1713007557815,
        },
      ],
      "1713009600000": [
        {
          url: "https://talkback.sh/resource/59261456-dda8-4b7b-b5fd-a760a7a0470d",
          firstEntryId:
            "2cUeU5Gsn7L4AP2WASqDrv4wFIhZenznlK1+3AnF3C8=_18ed754d39d:1a4380a:5edf391c",
          age: 104527189,
          timestamp: 1713009644445,
        },
        {
          url: "https://vulners.com/githubexploit/210FA360-8209-5A9D-A49D-B93F4BB6C552",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18ed75b1a8f:1a47996:5edf391c",
          age: 104938567,
          timestamp: 1713010055823,
        },
        {
          url: "https://www.bleepingcomputer.com/news/security/palo-alto-networks-zero-day-exploited-since-march-to-backdoor-firewalls",
          firstEntryId:
            "/JzT/GAy1c6k/LBmuq92T1+zA0ZWAgk6oaGxG5MIl24=_18ed777962b:1a5d46c:5edf391c",
          age: 106805219,
          timestamp: 1713011922475,
        },
      ],
      "1713013200000": [
        {
          url: "https://ciso2ciso.com/zero-day-exploited-right-now-in-palo-alto-networks-globalprotect-gateways-source-go-theregister-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ed78ecac0:199ca52:e56ebecb",
          age: 108326008,
          timestamp: 1713013443264,
        },
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/13/palo-alto-networks-zero-day-exploited-since-march-to-backdoor-firewalls",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18ed794e9ff:19a1156:e56ebecb",
          age: 108727223,
          timestamp: 1713013844479,
        },
        {
          url: "https://blog.netmanageit.com/palo-alto-networks-zero-day-exploited-since-march-to-backdoor-firewalls",
          firstEntryId:
            "DjLqObdHZsoV/G+ilaJM4jhEcnZ3FpjCLBHKHGWiWc0=_18ed79a4868:19a4dc6:e56ebecb",
          age: 109079072,
          timestamp: 1713014196328,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-networks-zero-day-exploited-since-march-to-backdoor-firewalls-2024-04-13",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed7a25f4d:17a7d2a:5c6f62c1",
          age: 109609221,
          timestamp: 1713014726477,
        },
        {
          url: "https://isc.sans.edu/diary/rss/30834",
          firstEntryId:
            "0F4cXjhiHMt9nhQEwQxU1upWINuhKgo8lM5Ak7O5tRs=_18ed7ad2955:17b0036:5c6f62c1",
          age: 110316301,
          timestamp: 1713015433557,
        },
        {
          url: "https://isc.sans.edu/diary/0",
          firstEntryId:
            "iiEj0VuZGDJdUz+sN47XumHfVeLCVxGTcayMzmmBbTM=_18ed7ad301c:19b3e5e:e56ebecb",
          age: 110318036,
          timestamp: 1713015435292,
        },
        {
          url: "https://isc.sans.edu/diary/30834",
          firstEntryId:
            "74q9lJ/bCOboy8PQErMnv12yqyIFXdEZWfy7UEUgKQM=_18ed7afa7b4:1a89884:5edf391c",
          age: 110479724,
          timestamp: 1713015596980,
        },
        {
          url: "https://buttondown.email/grugq/archive/april-13-2024",
          firstEntryId:
            "NAWb1kidaYqkaZB6yL328qXzyQvPRS29TA4JBQ97UeM=_18ed7b0fcb8:1a8a66b:5edf391c",
          age: 110567024,
          timestamp: 1713015684280,
        },
        {
          url: "https://github.com/shamo0/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ed7b591d0:1a8dcc8:5edf391c",
          age: 110867336,
          timestamp: 1713015984592,
        },
      ],
      "1713016800000": [
        {
          url: "https://github.com/DrewskyDev/CVE-2024-3400/issues/3",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18ed7c8136f:1a9c99c:5edf391c",
          age: 112080167,
          timestamp: 1713017197423,
        },
        {
          url: "https://malware.news/t/critical-palo-alto-globalprotect-vulnerability-exploited-cve-2024-3400-sat-apr-13th/80823",
          firstEntryId:
            "ugarbDVLNOKrWjpMH+YgNeJ2QFaLzw4mdjaGUSDlDCA=_18ed7da4801:17d1021:5c6f62c1",
          age: 113273273,
          timestamp: 1713018390529,
        },
        {
          url: "https://www.itsecuritynews.info/critical-palo-alto-globalprotect-vulnerability-exploited-cve-2024-3400-sat-apr-13th",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ed7dbe73a:1aabcbc:5edf391c",
          age: 113379570,
          timestamp: 1713018496826,
        },
        {
          url: "https://larbi-ouiyzme.medium.com/cve-2024-3400-vulnerability-in-palo-alto-networks-severity-10-critical-001875a2bc4c",
          firstEntryId:
            "QLf/zNqlL91uSf2pKRCymuWCKdri3rtb2wKLHKkN52g=_18ed7eb745f:1ab8563:5edf391c",
          age: 114398743,
          timestamp: 1713019515999,
        },
        {
          url: "https://www.ironcastle.net/critical-palo-alto-globalprotect-vulnerability-exploited-cve-2024-3400-sat-apr-13th",
          firstEntryId:
            "9WabeWuJ3Zql0kvPTQ2G9ef4VJjD/jACIO4eLLotTNs=_18ed7ec5a47:1ab9045:5edf391c",
          age: 114457599,
          timestamp: 1713019574855,
        },
      ],
      "1713020400000": [
        {
          url: "https://buaq.net/go-234138.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ed80f7904:1a00bac:e56ebecb",
          age: 116759228,
          timestamp: 1713021876484,
        },
        {
          url: "https://unsafe.sh/go-234138.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed80f8d01:1a00c72:e56ebecb",
          age: 116764345,
          timestamp: 1713021881601,
        },
        {
          url: "https://nitter.privacydev.net/1ZRR4H/status/1778920968078975262",
          firstEntryId:
            "UfHqrxGZtOfMOfhZne0ud0mMtOEOhGdpWk1xh8KkOr8=_18ed8135e1d:1a033bd:e56ebecb",
          age: 117014485,
          timestamp: 1713022131741,
        },
      ],
      "1713024000000": [
        {
          url: "https://github.com/0x0d3ad/CVE-2024-3400/issues/1",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18ed83591ff:1af9d28:5edf391c",
          age: 119255991,
          timestamp: 1713024373247,
        },
        {
          url: "https://vulners.com/githubexploit/F82CC5EE-8CD2-5954-9157-A7AA516D2160",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18ed838f6b6:1afc752:5edf391c",
          age: 119478382,
          timestamp: 1713024595638,
        },
      ],
      "1713031200000": [
        {
          url: "https://ciso2ciso.com/hackers-deploy-python-backdoor-in-palo-alto-zero-day-attack-sourcethehackernews-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ed8a2cc21:1863550:5c6f62c1",
          age: 126414297,
          timestamp: 1713031531553,
        },
      ],
      "1713034800000": [
        {
          url: "https://ciso2ciso.com/palo-alto-networks-zero-day-exploited-since-march-to-backdoor-firewalls-source-www-bleepingcomputer-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ed8d769b8:1a9d129:e56ebecb",
          age: 129862512,
          timestamp: 1713034979768,
        },
      ],
      "1713038400000": [
        {
          url: "https://isc.sans.edu/podcastdetail/8938",
          firstEntryId:
            "LnTiuqNsg4PTruEgUUOGx+3szIOr4xHuGIhm9w8600I=_18ed90e77e8:1ac1b90:e56ebecb",
          age: 133470624,
          timestamp: 1713038587880,
        },
        {
          url: "https://mstdn.ca/@rfwaveio/112265705785389136",
          firstEntryId:
            "B20uH4as61LDoWsdB3zFJjjD2lDyCIvEucb3G4skVxA=_18ed911ae7d:18a7fbf:5c6f62c1",
          age: 133681205,
          timestamp: 1713038798461,
        },
        {
          url: "https://allinfosecnews.com/item/isc-stormcast-for-sunday-april-14th-2024-2024-04-13",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ed922c6d3:1ba8aad:5edf391c",
          age: 134801547,
          timestamp: 1713039918803,
        },
      ],
      "1713042000000": [
        {
          url: "https://github.com/0x0d3ad/CVE-2024-3400",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ed9516379:1bc8108:5edf391c",
          age: 137856305,
          timestamp: 1713042973561,
        },
        {
          url: "https://gridinsoft.com/blogs/critical-pan-os-command-injection-flaw-exploited",
          firstEntryId:
            "+kuc6zFbvIy7DkdhZjYltRWrW5wgOfEBIs1dCi95BmM=_18ed976050c:1bdffce:5edf391c",
          age: 140256964,
          timestamp: 1713045374220,
        },
      ],
      "1713045600000": [
        {
          url: "https://lab.wallarm.com/palo-alto-devices-api-exploit-causing-critical-infrastructure-and-enterprise-epidemics",
          firstEntryId:
            "77uoo7Gd+aHSbd1IUoxBOAnm4e0EXsvosEYePp5o79c=_18ed97a2b9d:18e3ca2:5c6f62c1",
          age: 140528981,
          timestamp: 1713045646237,
        },
        {
          url: "https://owlysec.com/cybercrime/hackers-utilize-python-backdoor-in-zero-day-attack-targeting-palo-alto-systems",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ed97a3419:18e3cf1:5c6f62c1",
          age: 140531153,
          timestamp: 1713045648409,
        },
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-13",
          firstEntryId:
            "KF1ZiSPP12feFAVgQnTMiYX5WCC8n4Y14j8P8O+f10s=_18ed97c279d:1be40e0:5edf391c",
          age: 140659029,
          timestamp: 1713045776285,
        },
      ],
      "1713049200000": [
        {
          url: "https://www.redpacketsecurity.com/cisa-palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-14-04-2024",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18ed9b3e546:1b26c6b:e56ebecb",
          age: 144312062,
          timestamp: 1713049429318,
        },
        {
          url: "https://news.tuxmachines.org/n/2024/04/13/Security_Leftovers_and_Windows_TCO.1.shtml",
          firstEntryId:
            "TseNKzib4elY5qG1ABQlRm6+GlZu9xbszvzmnVMfOaA=_18ed9c4bbb2:1b30046:e56ebecb",
          age: 145415530,
          timestamp: 1713050532786,
        },
        {
          url: "https://buaq.net/go-234161.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ed9ddf09e:1c23d85:5edf391c",
          age: 147067478,
          timestamp: 1713052184734,
        },
        {
          url: "https://unsafe.sh/go-234161.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed9e22e6f:1c26e3b:5edf391c",
          age: 147345447,
          timestamp: 1713052462703,
        },
      ],
      "1713052800000": [
        {
          url: "https://www.linkedin.com/posts/zscaler_another-cve-pan-os-zero-day-another-reason-activity-7185054230028726272-fNcz",
          firstEntryId:
            "L7myM9IaOU4vlI7M6D5Qkz2R2Ir0rZVk+VROFVGnbhw=_18eda137f13:1b60a01:e56ebecb",
          age: 150577355,
          timestamp: 1713055694611,
        },
      ],
      "1713056400000": [
        {
          url: "https://www.publicnow.com/view/60E4F0ACF395BEF367BA539886EFA97475E755E5",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18eda37bb70:1b769e1:e56ebecb",
          age: 152952104,
          timestamp: 1713058069360,
        },
      ],
      "1713060000000": [
        {
          url: "https://github.com/trickest/cve/commit/75c89532da25684f755f8c11ce13bc247aa258b0",
          firstEntryId:
            "EUGB/u+RmzQLYPqVdzClwVfqP2uvdPjW6Wli7vnbU4I=_18eda587d50:1c6dc10:5edf391c",
          age: 155098888,
          timestamp: 1713060216144,
        },
        {
          url: "https://www.hacking.reviews/2024/04/zero-day-alert-critical-palo-alto.html",
          firstEntryId:
            "D5YAlbXWHyT2jNvPDNzLWUpUt4yimnflHrZBDIAmUbU=_18eda61bdf0:1b8c603:e56ebecb",
          age: 155705256,
          timestamp: 1713060822512,
        },
        {
          url: "https://pinsystem.co.uk/highly-capable-hackers-root-corporate-networks-by-exploiting-firewall-0-day",
          firstEntryId:
            "L7myM9IaOU4vlI7M6D5Qkz2R2Ir0rZVk+VROFVGnbhw=_18eda62438f:1c73354:5edf391c",
          age: 155739463,
          timestamp: 1713060856719,
        },
        {
          url: "https://www.hacking.reviews/2024/04/hackers-deploy-python-backdoor-in-palo.html",
          firstEntryId:
            "D5YAlbXWHyT2jNvPDNzLWUpUt4yimnflHrZBDIAmUbU=_18eda761943:1b9849e:e56ebecb",
          age: 157039355,
          timestamp: 1713062156611,
        },
      ],
      "1713067200000": [
        {
          url: "https://pike.link/WPzCe",
          firstEntryId:
            "c+yxt84FLvVY8RvCKPBd9Bgx6tSXjLIffqE7swR85+Y=_18edaeb51fe:1bd8b28:e56ebecb",
          age: 164721590,
          timestamp: 1713069838846,
        },
      ],
      "1713070800000": [
        {
          url: "https://medium.com/@thespycollection/spy-news-2024-week-15-07c34a438b5f",
          firstEntryId:
            "4Q1FxiO8c/jR6LOnwZK64YNl+2XKdQecLE3sFVPo9K4=_18edafef84e:11f16b:2c836299",
          age: 166009350,
          timestamp: 1713071126606,
        },
        {
          url: "https://www.securitricks.com/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400-friday-april-12-2024",
          firstEntryId:
            "tUYiorMm4zxs/RpXB4DP31p4h+3sxcSWkikYLGZY/lo=_18edb095626:1be91f6:e56ebecb",
          age: 166688734,
          timestamp: 1713071805990,
        },
      ],
      "1713078000000": [
        {
          url: "https://www.getinfosec.news/54638638/palo-alto-networks-zero-day-exploited-since-march-to-backdoor-firewalls",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18edb760eed:1c29b18:e56ebecb",
          age: 173813925,
          timestamp: 1713078931181,
        },
        {
          url: "https://securityboulevard.com/2024/04/how-to-track-and-stop-cve-2024-3400-palo-alto-devices-api-exploit-causing-critical-infrastructure-and-enterprise-epidemics",
          firstEntryId:
            "BiBk+eJXxAE5qaap795griUJDwLW2+8wlwPgrJtN3ck=_18edb8b8adf:19f8316:5c6f62c1",
          age: 175221911,
          timestamp: 1713080339167,
        },
        {
          url: "https://www.getinfosec.news/54639380/isc-stormcast-for-sunday-april-14th-2024",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18edb906134:1d2510e:5edf391c",
          age: 175538924,
          timestamp: 1713080656180,
        },
      ],
      "1713081600000": [
        {
          url: "https://www.helpnetsecurity.com/2024/04/14/week-in-review-palo-alto-networks-firewalls-under-attack-microsoft-patches-two-exploited-zero-days",
          firstEntryId:
            "QNNieqdW7BwzzsNvXgdw0iz1P5m8tDFA9QI1jPfVtVc=_18edba04e42:1d2f58d:5edf391c",
          age: 176582650,
          timestamp: 1713081699906,
        },
        {
          url: "https://www.itsecuritynews.info/how-to-track-and-stop-cve-2024-3400-palo-alto-devices-api-exploit-causing-critical-infrastructure-and-enterprise-epidemics",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18edbac595e:1a0c2fc:5c6f62c1",
          age: 177371926,
          timestamp: 1713082489182,
        },
        {
          url: "https://www.reddit.com/r/blueteamsec/comments/1c3o54p/palo_alto_networks_releases_guidance_for",
          firstEntryId:
            "T8Gn8hJy9MDXgPPEWPf3eKFiC22pQg9/jkwNHgMRBDU=_18edbb4f1cd:1c5235d:e56ebecb",
          age: 177935237,
          timestamp: 1713083052493,
        },
        {
          url: "https://buaq.net/go-234170.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18edbbf33aa:1a17841:5c6f62c1",
          age: 178607458,
          timestamp: 1713083724714,
        },
        {
          url: "https://www.itsecuritynews.info/week-in-review-palo-alto-networks-firewalls-under-attack-microsoft-patches-two-exploited-zero-days",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18edbc663e5:1d48ce2:5edf391c",
          age: 179078557,
          timestamp: 1713084195813,
        },
      ],
      "1713085200000": [
        {
          url: "https://ciso2ciso.com/how-to-track-and-stop-cve-2024-3400-palo-alto-devices-api-exploit-causing-critical-infrastructure-and-enterprise-epidemics-source-securityboulevard-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18edbd83bc3:1c69602:e56ebecb",
          age: 180247931,
          timestamp: 1713085365187,
        },
        {
          url: "https://www.cyberarrow.io/blog/hackers-deployed-python-backdoor-in-zero-day-attack-on-palo-alto",
          firstEntryId:
            "L7myM9IaOU4vlI7M6D5Qkz2R2Ir0rZVk+VROFVGnbhw=_18edbf8a7dc:1c7f5b6:e56ebecb",
          age: 182372756,
          timestamp: 1713087490012,
        },
      ],
      "1713088800000": [
        {
          url: "https://talkback.sh/resource/2208d112-f80c-4b9e-b870-7f356d97d358",
          firstEntryId:
            "PHqrwWLsqAc+meWiTJ8KCHgis4nBIL6oq5a0ZIQuBzY=_18edc0fed71:1c8ef7e:e56ebecb",
          age: 183897897,
          timestamp: 1713089015153,
        },
        {
          url: "https://github.com/trickest/cve/commit/e5063a4c744aa69c6109ffda798e82d983efbd90",
          firstEntryId:
            "EUGB/u+RmzQLYPqVdzClwVfqP2uvdPjW6Wli7vnbU4I=_18edc12dbb8:1a4af06:5c6f62c1",
          age: 184089968,
          timestamp: 1713089207224,
        },
      ],
      "1713092400000": [
        {
          url: "https://www.getinfosec.news/54647452/week-in-review-palo-alto-networks-firewalls-under-attack-microsoft-patches-two-exploited-zero-days",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18edc541ce6:1cbed7f:e56ebecb",
          age: 188366494,
          timestamp: 1713093483750,
        },
      ],
      "1713096000000": [
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c3raho/gp_portal_added_to_cve20243400",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18edc95a306:1ddeb12:5edf391c",
          age: 192660670,
          timestamp: 1713097777926,
        },
      ],
      "1713099600000": [
        {
          url: "https://www.news4hackers.com/a-python-backdoor-is-employed-in-a-zero-day-attack-on-palo-alto-networks",
          firstEntryId:
            "PYUR4kXIjc9hgaGY6DShRleE7ebN5IZBTaridiisEdk=_18edcbbf313:1d0bd85:e56ebecb",
          age: 195171531,
          timestamp: 1713100288787,
        },
        {
          url: "https://healsecurity.com/how-to-track-and-stop-cve-2024-3400-palo-alto-devices-api-exploit-causing-critical-infrastructure-and-enterprise-epidemics",
          firstEntryId:
            "8Cns9GQd1kOqrAzP31rDT7JbFVB4amIG0VrvYfMiJeQ=_18edcbd7343:1aba376:5c6f62c1",
          age: 195269883,
          timestamp: 1713100387139,
        },
        {
          url: "https://www.reddit.com/r/SecOpsDaily/comments/1c3nm3l/zeroday_exploitation_of_unauthenticated_remote",
          firstEntryId:
            "PuIE2BFn/4CBYAx3LJzIqSmvypFDm2KOKBQavOrnQAE=_18edccb762e:1d16a0a:e56ebecb",
          age: 196188134,
          timestamp: 1713101305390,
        },
        {
          url: "https://buttondown.email/grugq/archive/april-14-2024",
          firstEntryId:
            "NAWb1kidaYqkaZB6yL328qXzyQvPRS29TA4JBQ97UeM=_18edccca2b8:1ac3925:5c6f62c1",
          age: 196265072,
          timestamp: 1713101382328,
        },
      ],
      "1713103200000": [
        {
          url: "https://medium.com/@simone.kraus/analyzing-zero-days-like-operation-midnighteclips-cve-2024-3400-with-the-help-of-the-m3tid-bfddbc228dc9",
          firstEntryId:
            "YkwwnLzCs3cGTypvGilhGccHhd30PqMa3FJLFQV6n64=_18edd0412e4:1e33f21:5edf391c",
          age: 199898268,
          timestamp: 1713105015524,
        },
      ],
      "1713106800000": [
        {
          url: "https://cybersecuritynews.com/cyber-security-news-weekly-round-up-april",
          firstEntryId:
            "15jqf0Y1ST57V5KpIdSVltoIjcgaFC6Uo95SITS/qJ8=_18edd27dcf9:1d5bbf5:e56ebecb",
          age: 202243761,
          timestamp: 1713107361017,
        },
        {
          url: "https://advisories.checkpoint.com/defense/advisories/public/2024/cpai-2024-0196.html",
          firstEntryId:
            "KsPesp7e9jtheoq5Hun0g8EH1DvA9HGg79qWYl2MEU8=_18edd3083f4:1d61a2e:e56ebecb",
          age: 202810796,
          timestamp: 1713107928052,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/query-regarding-cve-2024-3400/td-p/583630",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18edd34809d:1e590d7:5edf391c",
          age: 203072085,
          timestamp: 1713108189341,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://nationalcybersecurity.com/cyber-security-news-weekly-round-up-vulnerabilities-threats-new-stories-hacking-cybersecurity-infosec-comptia-pentest-ransomware",
          firstEntryId:
            "F7bkPlYEoobiigWoylVQUnoAnnQnVuT9Vll4g7FP0Gg=_18edd41ab67:1b16749:5c6f62c1",
          age: 203935007,
          timestamp: 1713109052263,
        },
        {
          url: "https://lifeboat.com/blog/2024/04/hackers-deploy-python-backdoor-in-palo-alto-zero-day-attack",
          firstEntryId:
            "j4SI5XqxZyRUMMK+/fbSMyyHN1GqrP4Rxuqp75N2IlY=_18edd4fa2f3:1d790da:e56ebecb",
          age: 204850347,
          timestamp: 1713109967603,
        },
        {
          url: "https://www.secguro.com/nordic-it-cybersecurity-conference-2024-help-net-security",
          firstEntryId:
            "+/dvbu1K92Ql580feK04cAxhHPygr0pTg973sm3wB6o=_18edd505738:1e70c1c:5edf391c",
          age: 204896496,
          timestamp: 1713110013752,
        },
      ],
      "1713114000000": [
        {
          url: "https://mailchi.mp/weekinsecurity/this-week-in-security-april-14-2024-edition",
          firstEntryId:
            "TYBq8cyOVP9aiBj6rO44ZjmmyOB4+EIxBx1Qp1mSR94=_18edd9a7d39:1eab700:5edf391c",
          age: 209755889,
          timestamp: 1713114873145,
        },
      ],
      "1713117600000": [
        {
          url: "https://vulners.com/githubexploit/43FCABFE-FFD3-5751-AE2E-D9D2B1323BB2",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18eddcd4b87:1dda0fc:e56ebecb",
          age: 213085503,
          timestamp: 1713118202759,
        },
        {
          url: "https://nationalcybersecurity.com/week-in-review-palo-alto-networks-firewalls-under-attack-microsoft-patches-two-exploited-zero-days-hacking-cybersecurity-infosec-comptia-pentest-ransomware",
          firstEntryId:
            "pzXpZmEcBTizRFYZn4TZ7MOAKfW4RKwW3II7qd0B/+8=_18eddedffa3:1ee7cb7:5edf391c",
          age: 215228763,
          timestamp: 1713120346019,
        },
      ],
      "1713121200000": [
        {
          url: "https://github.com/kerberoshacker/CVE-2024-3400-POC",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ede1ee974:1e11e92:e56ebecb",
          age: 218434348,
          timestamp: 1713123551604,
        },
        {
          url: "https://mandos.io/newsletter/brief-47-palo-alto-zero-day-exploited-ai-powered-malware-ciso-burnout-and-the-value-of-mentorship",
          firstEntryId:
            "hsFa0j9dAVDSjh120fxfGNNuii1SQqn+UTEfiHjXjxk=_18ede2f0af5:1e1d7fb:e56ebecb",
          age: 219491501,
          timestamp: 1713124608757,
        },
      ],
      "1713132000000": [
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-14",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18edeb3d34d:1e6ffcd:e56ebecb",
          age: 228193541,
          timestamp: 1713133310797,
        },
      ],
      "1713135600000": [
        {
          url: "https://mastodon.social/@RedPacketSecurity/112272059797185853",
          firstEntryId:
            "1iffYOFZqFSo2N0mykHY7POj7jgSReETVUAZLnZwqws=_18eded96621:1c13e18:5c6f62c1",
          age: 230655961,
          timestamp: 1713135773217,
        },
        {
          url: "https://www.facebook.com/467773418726516/posts/842420587928462",
          firstEntryId:
            "6FOG0FQhTEeZfDIL06cBcSQ9fw73Ym9gNii7XsqKGW8=_18ededb69b1:1e8976a:e56ebecb",
          age: 230787945,
          timestamp: 1713135905201,
          sourceType: ["Vulnerability", "Vendor"],
        },
        {
          url: "https://infosec.exchange/@simontsui/112272161217701989",
          firstEntryId:
            "B20uH4as61LDoWsdB3zFJjjD2lDyCIvEucb3G4skVxA=_18edeefad69:1e9569e:e56ebecb",
          age: 232116001,
          timestamp: 1713137233257,
        },
      ],
      "1713139200000": [
        {
          url: "http://catless.ncl.ac.uk/Risks/34/17",
          firstEntryId:
            "AihRPHRlvhc1KAZq3Z+CO/UoJFC04U5+fag0tgntvw0=_18edf102a54:1fa2643:5edf391c",
          age: 234245132,
          timestamp: 1713139362388,
        },
        {
          url: "https://techcommunity.microsoft.com/t5/microsoft-defender-vulnerability/defender-support-for-cve-2024-3400-affecting-palo-alto-networks/ba-p/4113917",
          firstEntryId:
            "CtWtUBTdHwjNHQUP1hwONHLHniKqXg6za/IGSLZXQX4=_18edf16a43e:1c35b41:5c6f62c1",
          age: 234669558,
          timestamp: 1713139786814,
        },
        {
          url: "https://seclists.org/risks/2024/q2/5",
          firstEntryId:
            "cIoxuLdUgLqiQjBEif1q7cPvx7+7YiKWtdrF6u5NBUc=_18edf1bdb59:1eaeb7e:e56ebecb",
          age: 235011345,
          timestamp: 1713140128601,
        },
        {
          url: "https://www.cyberdaily.au/security/10424-acsc-circulates-critical-alert-over-palo-alto-pan-os-firewall-bug",
          firstEntryId:
            "g+rmTrAGtt9QBfggi76jqkonH+ICxTq4uvJMVbq7bzE=_18edf2fb7b7:1ebb4cf:e56ebecb",
          age: 236312943,
          timestamp: 1713141430199,
        },
        {
          url: "https://cybersecurityboard.com/how-to-track-and-stop-cve-2024-3400-palo-alto-devices-api-exploit-causing-critical-infrastructure-and-enterprise-epidemics",
          firstEntryId:
            "DOvTUNy7xQ/a27SWlGJjPHmhcUYOnrDAHXHMuQhMoxo=_18edf3a24a0:1fbdd0f:5edf391c",
          age: 236996184,
          timestamp: 1713142113440,
        },
      ],
      "1713146400000": [
        {
          url: "https://community.spiceworks.com/t/palo-alto-issues-security-advisory-for-perfect-10-zero-day-exploit/1065190",
          firstEntryId:
            "zhok9F6yGg4aWA58joJLMHUfuBnoIIyRvViwBKw0m5U=_18edf7e0389:1ee946a:e56ebecb",
          age: 241444161,
          timestamp: 1713146561417,
        },
        {
          url: "https://www.hkcert.org/tc/security-news/palo-alto-networks-warns-of-exploited-firewall-vulnerability",
          firstEntryId:
            "9f00Wz/ZMvHGzAulXVa2Q7dAwKqEQ55NTk0opdN7APY=_18edf811c2a:1c7426b:5c6f62c1",
          age: 241647074,
          timestamp: 1713146764330,
        },
        {
          url: "https://www.hkcert.org/security-news/palo-alto-networks-warns-of-exploited-firewall-vulnerability",
          firstEntryId:
            "m1wPb12lP6HKBZSRyKHW5Yeq28TfjE5u1bc829M9jTo=_18edf831ea1:1c755b2:5c6f62c1",
          age: 241778777,
          timestamp: 1713146896033,
        },
        {
          url: "https://www.hkcert.org/security-bulletin/palo-alto-products-remote-code-execution-vulnerability_20240415",
          firstEntryId:
            "EJgrFOBBr8+2/8a1x2u54cKu8JJC0ddtC1FsB85sIpA=_18edf9366b9:1ff7f85:5edf391c",
          age: 242845809,
          timestamp: 1713147963065,
        },
      ],
      "1713150000000": [
        {
          url: "https://www.redpacketsecurity.com/palo-alto-products-remote-code-execution-vulnerability-15-04-2024",
          firstEntryId:
            "mV+z/SnAKVPDiZi+STIjoaD0B7qT7v1/XuIf2cAXG4w=_18edfb47b2e:1f0df7f:e56ebecb",
          age: 245013734,
          timestamp: 1713150130990,
        },
        {
          url: "https://www.govcert.gov.hk/en/alerts_detail.php?id=1270",
          firstEntryId:
            "jd41LPszu78aGYJ4sdEYcDm33yoQrZC8X6cpjSF2RqA=_18edfdc31a1:1ca91ef:5c6f62c1",
          age: 247616345,
          timestamp: 1713152733601,
        },
      ],
      "1713153600000": [
        {
          url: "https://infosec.exchange/@h4sh/112273229776567475",
          firstEntryId:
            "/4LBMLNgsFJeSzVpZl0IutvX+GLdXoOXrfI2n2uAt2I=_18edfed9e26:203255b:5edf391c",
          age: 248758238,
          timestamp: 1713153875494,
        },
        {
          url: "https://github.com/search?q=CVE-2024-3400&type=repositories",
          firstEntryId:
            "/4LBMLNgsFJeSzVpZl0IutvX+GLdXoOXrfI2n2uAt2I=_18edff44448:2037a4b:5edf391c",
          age: 249193984,
          timestamp: 1713154311240,
        },
        {
          url: "https://news.risky.biz/risky-biz-news-palo-alto-networks-scrambles-to-push-zero-day-patch",
          firstEntryId:
            "ou/qMWN7MKkICefbeKM8HodVOLLExrx7WdEyMBKLtH0=_18ee008a119:1f45aef:e56ebecb",
          age: 250528465,
          timestamp: 1713155645721,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/running-11-1-2-in-production/td-p/582129",
          firstEntryId:
            "NvsugYR7z66ob3rOpGJMqR3QyMdiQneH/nXdcEpUsek=_18ee00b6a46:2047c7e:5edf391c",
          age: 250711038,
          timestamp: 1713155828294,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.auscert.org.au:443/bulletins/ESB-2024.2280.2",
          firstEntryId:
            "sSxFRaZmXCcQAGqUJAYPvSEfpvP4AbaQyHJSZDBR2V4=_18ee00b806b:1f47c9b:e56ebecb",
          age: 250716707,
          timestamp: 1713155833963,
        },
        {
          url: "https://thecyberexpress.com/palo-alto-networks-new-firewall-vulnerability",
          firstEntryId:
            "GS1SLs38rtTBgUhfmV0D4pNmGFeQShNwrlaAYgpinXs=_18ee00cd20e:1cc8067:5c6f62c1",
          age: 250803142,
          timestamp: 1713155920398,
        },
        {
          url: "https://vulners.com/githubexploit/A59054B9-6D1C-5E19-9AFC-E254AB3906EE",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18ee00dfc8a:1cc8c12:5c6f62c1",
          age: 250879554,
          timestamp: 1713155996810,
        },
        {
          url: "https://vulners.com/githubexploit/DB73FDB1-198D-582C-972B-2482493D0307",
          firstEntryId:
            "Xd0aPXvYBJTZqdixdN2RNf2VS4Zwx2lieo+L9qmSRn0=_18ee0131776:204e288:5edf391c",
          age: 251214126,
          timestamp: 1713156331382,
        },
      ],
      "1713157200000": [
        {
          url: "https://www.securitricks.com/latest-vulnerabilities-monday-april-15-2024-weekend",
          firstEntryId:
            "tUYiorMm4zxs/RpXB4DP31p4h+3sxcSWkikYLGZY/lo=_18ee024c84d:205a6d7:5edf391c",
          age: 252373509,
          timestamp: 1713157490765,
        },
        {
          url: "https://osintcorp.net/palo-alto-networks-warns-about-critical-zero-day-in-pan-os",
          firstEntryId:
            "U1gqQ2iNqzX70utj+glyeaTeCMMdnaa4gLcmoURj2qU=_18ee0350166:2068524:5edf391c",
          age: 253436702,
          timestamp: 1713158553958,
        },
        {
          url: "https://www.getinfosec.news/54688002/how-to-track-and-stop-cve-2024-3400-palo-alto-devices-api-exploit-causing-critical-infrastructure-and-enterprise-epidemics",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ee037b81a:206a857:5edf391c",
          age: 253614546,
          timestamp: 1713158731802,
        },
        {
          url: "https://malware.news/t/another-cve-pan-os-zero-day-another-reason-to-consider-zero-trust/80826",
          firstEntryId:
            "AGzmcN2M5nmSWEXxvk304E/0imlfcvoaD69xQVzidRg=_18ee052e09f:2080590:5edf391c",
          age: 255394391,
          timestamp: 1713160511647,
        },
      ],
      "1713160800000": [
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c4doqq/patches_for_cve20243400_are_out_1029h1_1104h1",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ee0585a8a:2084886:5edf391c",
          age: 255753282,
          timestamp: 1713160870538,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/query-for-cve-2024-3400/td-p/583685",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee08a6ecb:20aed72:5edf391c",
          age: 259035267,
          timestamp: 1713164152523,
          sourceType: ["VendorReference"],
        },
      ],
      "1713164400000": [
        {
          url: "https://soc.cyber.wa.gov.au/advisories/20240415001-PaloAlto-Networks-PAN-OS-Command-Injection-Vulnerability",
          firstEntryId:
            "jD02VgpPkzGefBP8/RyBdXHrDW2kuSRbpwXDRKWUCPM=_18ee08e67e4:20b2288:5edf391c",
          age: 259295644,
          timestamp: 1713164412900,
        },
        {
          url: "https://github.com/MurrayR0123/CVE-2024-3400-Compromise-Checker",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ee0b6b0f7:1fd198f:e56ebecb",
          age: 261935791,
          timestamp: 1713167053047,
        },
        {
          url: "https://meterpreter.org/operation-midnighteclipse-hacker-targets-pan-os-flaw-cve-2024-3400",
          firstEntryId:
            "JG5eWJ48yrPopULYNK4AabZPfBnt7PeyX3MSEZNN15w=_18ee0c10bfb:20e16b6:5edf391c",
          age: 262614451,
          timestamp: 1713167731707,
        },
      ],
      "1713168000000": [
        {
          url: "https://mrhacker.co/cyber-attack/zero-day-alert-critical-palo-alto-networks-pan-os-flaw-under-active-attack",
          firstEntryId:
            "kGwx8oO9RnKLYcN144s4D39mEsvACHdRudyn8+gm7bM=_18ee0c8f20a:20e9861:5edf391c",
          age: 263132098,
          timestamp: 1713168249354,
        },
        {
          url: "https://thehackernews.com/2024/04/palo-alto-networks-releases-urgent.html",
          firstEntryId:
            "gj0WliA2ZQRGmqb8oJkIwMj7hU+MJsyOpKEDCStqoxQ=_18ee0d5dbf9:1d64541:5c6f62c1",
          age: 263978417,
          timestamp: 1713169095673,
        },
        {
          url: "https://www.ncert.gov.ph/2024/04/15/critical-vulnerability-in-palo-alto-global-protect-cve-2024-3400",
          firstEntryId:
            "XGSdlFe1JLLz6C/PfMPdykTl2azXFVx8Os7pn1dq3aQ=_18ee0db0f25:1ff43b1:e56ebecb",
          age: 264319197,
          timestamp: 1713169436453,
        },
        {
          url: "https://cyberfeed.io/article/be2afe13663582356ff9c0c00e225ad3",
          firstEntryId:
            "AP2Lx0Wu8XDQ9ONNS6kSGN/o8g3bQj21vpegepzn2hc=_18ee0db957b:1ff4c00:e56ebecb",
          age: 264353587,
          timestamp: 1713169470843,
        },
        {
          url: "https://www.hacking.reviews/2024/04/palo-alto-networks-releases-urgent.html",
          firstEntryId:
            "D5YAlbXWHyT2jNvPDNzLWUpUt4yimnflHrZBDIAmUbU=_18ee0e4092a:1ffc59b:e56ebecb",
          age: 264907490,
          timestamp: 1713170024746,
        },
        {
          url: "https://buttondown.email/BagheeraAltered/archive/cybersecurity-newsletter-april-15th-2024",
          firstEntryId:
            "P3HE11Rgpm+Cqv73wXXy+1ej48a0KeVK8mIKdpZyRtU=_18ee0f8bb3e:1d85b9a:5c6f62c1",
          age: 266263798,
          timestamp: 1713171381054,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-releases-urgent-fixes-for-exploited-pan-os-vulnerability",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ee0f9469f:211c64f:5edf391c",
          age: 266299479,
          timestamp: 1713171416735,
        },
        {
          url: "https://medium.com/@elniak/cve-2024-3400-a-critical-vulnerability-in-pan-os-firewalls-a7f8c66a10d2",
          firstEntryId:
            "S2EL40KQ4+scFcF5XPWGrVMtkqM8tqpw+ZQfOIXNWyI=_18ee0f977bc:1d8644d:5c6f62c1",
          age: 266312052,
          timestamp: 1713171429308,
        },
      ],
      "1713171600000": [
        {
          url: "https://infosecwriteups.com/cve-2024-3400-a-critical-vulnerability-in-pan-os-firewalls-a7f8c66a10d2?source=rss------cybersecurity-5",
          firstEntryId:
            "QLf/zNqlL91uSf2pKRCymuWCKdri3rtb2wKLHKkN52g=_18ee1025418:9fcde4:fbeaa2c7",
          age: 266892752,
          timestamp: 1713172010008,
        },
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/15/palo-alto-networks-releases-urgent-fixes-for-exploited-pan-os-vulnerability",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18ee106d9ec:212aa76:5edf391c",
          age: 267189156,
          timestamp: 1713172306412,
        },
        {
          url: "https://gixtools.net/2024/04/palo-alto-networks-releases-urgent-fixes-for-exploited-pan-os-vulnerability",
          firstEntryId:
            "BCdqAscORYyZ9EV/TNQVWcswN20kb7K8ta8vg1rVysM=_18ee10d66d6:2028054:e56ebecb",
          age: 267618446,
          timestamp: 1713172735702,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-networks-releases-urgent-fixes-for-exploited-pan-os-vulnerability-2024-04-15",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee118b0ff:1da6857:5c6f62c1",
          age: 268358327,
          timestamp: 1713173475583,
        },
        {
          url: "https://www.techradar.com/pro/security/major-palo-alto-security-flaw-is-being-exploited-via-python-zero-day-backdoor",
          firstEntryId:
            "tiQs9dBAdFPwC8yS+Wwb4yO6YNZCgH66JDb7pcz7Bkc=_18ee11bd0d4:203768d:e56ebecb",
          age: 268563084,
          timestamp: 1713173680340,
        },
        {
          url: "https://community.fortinet.com/t5/FortiRecon/Outbreak-Alert-PAN-OS-OS-Command-Injection-Vulnerability-in/ta-p/309752",
          firstEntryId:
            "2Ffl2QJOh8ZJvFOKL/adzEgekJbmbachZ9lq4JgRiTw=_18ee127ce2f:1db5771:5c6f62c1",
          age: 269348839,
          timestamp: 1713174466095,
        },
        {
          url: "https://infosec.exchange/@VirusBulletin/112274618026940356",
          firstEntryId:
            "DtVL+wZCdeauSVVNBgQM3p5UT6IVlYNOfjaNLvCIphQ=_18ee12c23b1:2048c9e:e56ebecb",
          age: 269632873,
          timestamp: 1713174750129,
        },
        {
          url: "https://securityboulevard.com/2024/04/another-cve-pan-os-zero-day-another-reason-to-consider-zero-trust",
          firstEntryId:
            "+UmN509yuKtDmz+80MmChT/n2QPEX+3GPD9283d7jeE=_18ee12e5483:204afbb:e56ebecb",
          age: 269776443,
          timestamp: 1713174893699,
        },
        {
          url: "https://www.securityweek.com/palo-alto-networks-releases-fixes-for-firewall-zero-day-as-first-attribution-attempts-emerge",
          firstEntryId:
            "e7ihszNcS+6wQ01E+EtjaaG8GmOihcrGqT/kJZGRaUU=_18ee131e87f:215abc6:5edf391c",
          age: 270010935,
          timestamp: 1713175128191,
        },
      ],
      "1713175200000": [
        {
          url: "https://cyberfeed.io/article/645c8965998cf211da566e7bf3cc0135",
          firstEntryId:
            "AP2Lx0Wu8XDQ9ONNS6kSGN/o8g3bQj21vpegepzn2hc=_18ee1342baf:215e3a0:5edf391c",
          age: 270159207,
          timestamp: 1713175276463,
        },
        {
          url: "https://unsafe.sh/go-234293.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ee13d9f66:21690f0:5edf391c",
          age: 270778654,
          timestamp: 1713175895910,
        },
        {
          url: "https://buaq.net/go-234293.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ee14091eb:216c208:5edf391c",
          age: 270971811,
          timestamp: 1713176089067,
        },
        {
          url: "https://masto.deoan.org/@neurovagrant/112274774184547280",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18ee15074f7:1de093f:5c6f62c1",
          age: 272012975,
          timestamp: 1713177130231,
        },
        {
          url: "https://hackersonlineclub.com/palo-alto-networks-fixes-critical-zero-day-vulnerability-in-pan-os",
          firstEntryId:
            "DM6bKS6VT3ZLOaCcNxsJMsLCXV6Q43gJb8LEkffHhQY=_18ee1519d88:2180a5c:5edf391c",
          age: 272088896,
          timestamp: 1713177206152,
        },
        {
          url: "https://www.cybersecurity-help.cz/blog/3932.html",
          firstEntryId:
            "RYRjHGVzrClyjZXn0jva8gL0rp3ezlLReoL5fxnD6wA=_18ee153c56c:21836f7:5edf391c",
          age: 272230180,
          timestamp: 1713177347436,
        },
        {
          url: "https://malpedia.caad.fkie.fraunhofer.de/library/f3f1b3d4-1aad-47ce-881a-bff67c399a69",
          firstEntryId:
            "qBlgSzzKuAMx/ICflZAjxwlRgoacV6RAk+0DTidk/p8=_18ee168989b:219a7b5:5edf391c",
          age: 273594963,
          timestamp: 1713178712219,
        },
      ],
      "1713178800000": [
        {
          url: "https://infosec.exchange/@securestep9/112274968257538266",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ee17fc819:1e1351b:5c6f62c1",
          age: 275114449,
          timestamp: 1713180231705,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-networks-releases-fixes-for-firewall-zero-day-as-first-attribution-attempts-emerge-2024-04-15",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee1828343:1e15e98:5c6f62c1",
          age: 275293435,
          timestamp: 1713180410691,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-releases-fixes-for-firewall-zero-day-as-first-attribution-attempts-emerge",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ee18503bc:20ad637:e56ebecb",
          age: 275457396,
          timestamp: 1713180574652,
        },
        {
          url: "https://securityaffairs.com/161844/apt/palo-alto-pan-os-python-backdoor.html",
          firstEntryId:
            "GkT9Omj3/TrwoD60ExVW8HF3NDmBHkgAwZ5RH/vWE4U=_18ee18e5c00:21c7870:5edf391c",
          age: 276069816,
          timestamp: 1713181187072,
        },
      ],
      "1713182400000": [
        {
          url: "https://infosec.exchange/@simontsui/112275143300577187",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18ee1a66a35:21e306e:5edf391c",
          age: 277646317,
          timestamp: 1713182763573,
        },
        {
          url: "https://talkback.sh/resource/fe35807c-f78e-4d75-adb1-805ed9d18038",
          firstEntryId:
            "2cUeU5Gsn7L4AP2WASqDrv4wFIhZenznlK1+3AnF3C8=_18ee1a71c61:21e3efd:5edf391c",
          age: 277691929,
          timestamp: 1713182809185,
        },
        {
          url: "https://buaq.net/go-234313.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ee1b0db42:20dfc1f:e56ebecb",
          age: 278330618,
          timestamp: 1713183447874,
        },
        {
          url: "https://unsafe.sh/go-234313.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ee1b2cd90:1e49e42:5c6f62c1",
          age: 278458184,
          timestamp: 1713183575440,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-releases-fixes-for-firewall-zero-day-as-attribution-attempts-emerge",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ee1c10884:1e58b47:5c6f62c1",
          age: 279390780,
          timestamp: 1713184508036,
        },
        {
          url: "https://aboutdfir.com/infosec-news-nuggets-4-15-2024",
          firstEntryId:
            "lUg5+q8wzaCNCQCJiUY2+bOd30RXOs0hFm5xZereN0M=_18ee1d3a0d1:1e6eb82:5c6f62c1",
          age: 280609417,
          timestamp: 1713185726673,
        },
        {
          url: "https://www.itsecuritynews.info/threat-actors-exploited-palo-alto-pan-os-issue-to-deploy-a-python-backdoor",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18ee1d64bc8:1e716e4:5c6f62c1",
          age: 280784256,
          timestamp: 1713185901512,
        },
      ],
      "1713186000000": [
        {
          url: "https://www.bleepingcomputer.com/news/security/palo-alto-networks-fixes-zero-day-exploited-to-backdoor-firewalls",
          firstEntryId:
            "pqo0kL9QUKZLLEA9XL/LCgRJrBBXAtLjLWtY+TxXiTg=_18ee1d81344:22202ae:5edf391c",
          age: 280900860,
          timestamp: 1713186018116,
        },
        {
          url: "https://infosec.exchange/@threatcodex/112275361037924176",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ee1df1b12:222910d:5edf391c",
          age: 281361610,
          timestamp: 1713186478866,
        },
        {
          url: "https://github.com/bb33bb/CVE-2024-3400",
          firstEntryId:
            "9JV30J+4YWZ9rB4DdeM2ABEhO7jhki6X4EW7xHtaYnE=_18ee1e8971e:21243a3:e56ebecb",
          age: 281983190,
          timestamp: 1713187100446,
        },
        {
          url: "https://allinfosecnews.com/item/threat-actors-exploited-palo-alto-pan-os-issue-to-deploy-a-python-backdoor-2024-04-15",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee1f4286d:2242ac7:5edf391c",
          age: 282741285,
          timestamp: 1713187858541,
        },
        {
          url: "https://securityaffairs.com/161855/hacking/palo-alto-networks-pan-os-bug-known-exploited-vulnerabilities-catalog.html",
          firstEntryId:
            "GkT9Omj3/TrwoD60ExVW8HF3NDmBHkgAwZ5RH/vWE4U=_18ee1f84e32:213814a:e56ebecb",
          age: 283013098,
          timestamp: 1713188130354,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/how-can-i-see-if-my-fw-has-already-been-exploited-by-the-cve/td-p/583724",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee20b1857:225d87c:5edf391c",
          age: 284244495,
          timestamp: 1713189361751,
          sourceType: ["VendorReference"],
        },
      ],
      "1713189600000": [
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/how-can-i-see-if-my-fw-has-already-been-exploited-by-the-cve/td-p/583729",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee211f426:1eb70b3:5c6f62c1",
          age: 284693982,
          timestamp: 1713189811238,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://smartermsp.com/cybersecurity-threat-advisory-critical-vulnerability-in-palo-alto-pan-os",
          firstEntryId:
            "mBwvef86ZKS9r8ADkWLwBk2ZFCFLpKOb4gUQ959qSdY=_18ee21ba129:22736b0:5edf391c",
          age: 285328097,
          timestamp: 1713190445353,
        },
        {
          url: "https://security.paloaltonetworks.com",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18ee21bb20d:2273a26:5edf391c",
          age: 285332421,
          timestamp: 1713190449677,
        },
        {
          url: "https://unsafe.sh/go-234360.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ee2283310:216fbfa:e56ebecb",
          age: 286151880,
          timestamp: 1713191269136,
        },
        {
          url: "https://buaq.net/go-234360.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ee22848d0:22837b5:5edf391c",
          age: 286157448,
          timestamp: 1713191274704,
        },
        {
          url: "https://www.infosecurity-magazine.com/news/palo-alto-networks-zero-day-flaw",
          firstEntryId:
            "iv4FCgRbjUtEtcLKU2jA+KVEesTQC9lp4tVCNBy2dJ8=_18ee22a4a47:1ed3987:5c6f62c1",
          age: 286288895,
          timestamp: 1713191406151,
        },
        {
          url: "https://osintcorp.net/palo-alto-networks-zero-day-flaw-exploited-in-targeted-attacks",
          firstEntryId:
            "U1gqQ2iNqzX70utj+glyeaTeCMMdnaa4gLcmoURj2qU=_18ee22df1de:1ed8664:5c6f62c1",
          age: 286528406,
          timestamp: 1713191645662,
        },
        {
          url: "https://www.crn.com/news/security/2024/palo-alto-networks-patches-critical-exploited-vulnerability-in-pan-os",
          firstEntryId:
            "k6jrqqRkfm5HLx2/jTsQhpIPkFZ7hDHLNF9FcNhvybA=_18ee2327b9d:217e40a:e56ebecb",
          age: 286825813,
          timestamp: 1713191943069,
        },
      ],
      "1713193200000": [
        {
          url: "https://www.spiceworks.com/it-security/endpoint-security/news/palo-alto-zero-day-flaw-exploited-python-backdoor",
          firstEntryId:
            "wo7PygdSh3J2c3wlmawiT3ov06+yaG3POoWWBaQDovE=_18ee2472b41:22aa4ca:5edf391c",
          age: 288181497,
          timestamp: 1713193298753,
        },
        {
          url: "https://www.itsecuritynews.info/cisa-adds-palo-alto-networks-pan-os-command-injection-flaw-to-its-known-exploited-vulnerabilities-catalog",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18ee2474cae:22aa7be:5edf391c",
          age: 288190054,
          timestamp: 1713193307310,
        },
        {
          url: "https://www.avertium.com/resources/threat-reports/palo-alto-vulnerability-exploited-in-the-wild",
          firstEntryId:
            "6TUDyKHmNxQDonYLo1yJcROGcDjCmGHSRJrnmfngpPo=_18ee25fc1a9:21b40ae:e56ebecb",
          age: 289792865,
          timestamp: 1713194910121,
        },
        {
          url: "https://community.fortinet.com/t5/FortiAnalyzer/Technical-Tip-Using-FortiAnalyzer-to-detect-activities-related/ta-p/309838",
          firstEntryId:
            "nRgh55Koyeb5tvcCbhW6ucy/IgWuF+McHgSZBp/Ta50=_18ee2639c98:22cd941:5edf391c",
          age: 290045520,
          timestamp: 1713195162776,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-networks-zero-day-flaw-exploited-in-targeted-attacks-2024-04-15",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee264db33:1f18f42:5c6f62c1",
          age: 290127083,
          timestamp: 1713195244339,
        },
        {
          url: "https://tldr.tech/infosec/2024-04-15",
          firstEntryId:
            "rdH4KF9eXwI+qDya1/jmAwHWEqdIrV6kmWJnPTBk+TQ=_18ee269ff1f:1f20a4d:5c6f62c1",
          age: 290463959,
          timestamp: 1713195581215,
        },
        {
          url: "https://packetstormsecurity.com/news/view/35782/Palo-Alto-Networks-Releases-Fixes-For-Firewall-Zero-Day-As-Attribution-Attempts-Emerge.html",
          firstEntryId:
            "QG2Qk2t7OTmVk/dS5fYCOhTf8A6TgGX7eSLoBlxU3ao=_18ee26fd2c6:22dc712:5edf391c",
          age: 290845822,
          timestamp: 1713195963078,
          sourceType: ["Vendor"],
        },
      ],
      "1713196800000": [
        {
          url: "https://devopsforum.uk/topic/62314-major-palo-alto-security-flaw-is-being-exploited-via-python-zero-day-backdoor",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ee28acc77:22ff417:5edf391c",
          age: 292613679,
          timestamp: 1713197730935,
        },
        {
          url: "https://lists.cert.at/pipermail/daily/2024-April/004341.html",
          firstEntryId:
            "LdISGHbSY0VvTsVyesOo3y6iDKf+Xy4Os7z1hu6hiIk=_18ee29f6c92:1f5e019:5c6f62c1",
          age: 293965386,
          timestamp: 1713199082642,
        },
        {
          url: "https://therecord.media/palo-alto-networks-fixes-vpn-zero-day",
          firstEntryId:
            "O+intuloJ/KscS+CRB0vEX956V9VT5wFdYzEcCxAqc0=_18ee2af0c1f:23335a4:5edf391c",
          age: 294989271,
          timestamp: 1713200106527,
        },
      ],
      "1713200400000": [
        {
          url: "https://authlab.com/community/state-backed-hackers-actively-exploiting-zero-day-vulnerabilities-in-palo-alto-networks-firewall-supported-by-national-government",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ee2b5078d:2223a65:e56ebecb",
          age: 295381317,
          timestamp: 1713200498573,
        },
        {
          url: "https://www.greynoise.io/blog/cve-2024-3400-command-injection-vulnerability-palo-alto-networks-pan-os",
          firstEntryId:
            "27g6IzhvKoWv3DYKn0n4RBUzpXldZtLWYRrklZPYWCA=_18ee2bf2173:222ec06:e56ebecb",
          age: 296043307,
          timestamp: 1713201160563,
        },
        {
          url: "https://www.bleepingcomputer.com/news/security/palo-alto-networks-fixes-zero-day-exploited-to-backdoor-firewalls?web_view=true",
          firstEntryId:
            "qA7bP5OsRCsrHif1pHcLJpUTiUnH1zM6O78v8An3i5U=_18ee2c18776:2231a13:e56ebecb",
          age: 296200494,
          timestamp: 1713201317750,
        },
        {
          url: "https://infosec.exchange/@chort/112276477725088603",
          firstEntryId:
            "5XztaGwd0j5tG3Gl/9NOMRpN98wwOkMYjG5rvDilvyA=_18ee2de687e:1fa69a3:5c6f62c1",
          age: 298093110,
          timestamp: 1713203210366,
        },
        {
          url: "https://infosec.exchange/@greynoise/112276505306954175",
          firstEntryId:
            "FgnrHwNNAtC4m2t5gQDLy5N0jWcr3HplD9frTUumfzM=_18ee2e5d3af:2374680:5edf391c",
          age: 298579303,
          timestamp: 1713203696559,
        },
        {
          url: "https://mastodon.social/@snoopgod/112276188630027880",
          firstEntryId:
            "PG89KKMWL5uXnbUoQ+7kMu+/0+MLoJMp7EVhtQb3aww=_18ee2e7c4df:1fafd8d:5c6f62c1",
          age: 298706583,
          timestamp: 1713203823839,
        },
      ],
      "1713204000000": [
        {
          url: "https://talkback.sh/resource/1db4b87e-f144-41b5-bf82-10bdda2e7c9f",
          firstEntryId:
            "2cUeU5Gsn7L4AP2WASqDrv4wFIhZenznlK1+3AnF3C8=_18ee2efb0e2:22659f8:e56ebecb",
          age: 299225754,
          timestamp: 1713204343010,
        },
        {
          url: "https://ciso2ciso.com/palo-alto-networks-releases-urgent-fixes-for-exploited-pan-os-vulnerability-sourcethehackernews-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ee2f16b89:1fb9a12:5c6f62c1",
          age: 299339073,
          timestamp: 1713204456329,
        },
        {
          url: "https://thecyberpost.com/news/palo-alto-networks-releases-fixes-for-zero-day-as-attackers-swarm-vpn-vulnerability",
          firstEntryId:
            "21E8ZoE91PF8mdoj117QvnpzvhwHA5gLRyJBpS/63w0=_18ee2fb5ada:22732b9:e56ebecb",
          age: 299990162,
          timestamp: 1713205107418,
        },
        {
          url: "https://www.hackread.com/palo-alto-patche-0-day-cve-2024-3400-python-backdoor",
          firstEntryId:
            "DiLIGeMe09VfoBZiLGOfrsF8Nr7sjY5sBxFo6X3NH+w=_18ee30723dc:1fceaa0:5c6f62c1",
          age: 300762516,
          timestamp: 1713205879772,
        },
        {
          url: "https://www.aha.org/h-isac-green-reports/2024-04-12-hc3-tlp-clear-sector-alert-palo-alto-networks-firewalls",
          firstEntryId:
            "fZzLLlVHza5xJqlH4N373tshXlIS+2d058fen5RKrX0=_18ee30b3e8c:22834ae:e56ebecb",
          age: 301031492,
          timestamp: 1713206148748,
        },
        {
          url: "https://old.reddit.com/r/InfoSecNews/comments/1c4tom7/palo_alto_patches_0day_cve20243400_exploited_by",
          firstEntryId:
            "1/+B2P3MbGUxRYoL+Cw86Q13trJNjpMqv2hS0LRcJdk=_18ee312d565:23a5ec4:5edf391c",
          age: 301528861,
          timestamp: 1713206646117,
        },
        {
          url: "https://buaq.net/go-234402.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ee315c8e0:1fdd695:5c6f62c1",
          age: 301722264,
          timestamp: 1713206839520,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c4qkzs/additional_sources_bumping_into_the_threat",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ee31673d5:23aa0f8:5edf391c",
          age: 301766029,
          timestamp: 1713206883285,
        },
        {
          url: "https://unsafe.sh/go-234402.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ee31a3d3a:2290f60:e56ebecb",
          age: 302014194,
          timestamp: 1713207131450,
        },
      ],
      "1713207600000": [
        {
          url: "https://www.itsecuritynews.info/palo-alto-patches-0-day-cve-2024-3400-exploited-by-python-backdoor",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18ee3238a94:23b8cd5:5edf391c",
          age: 302623820,
          timestamp: 1713207741076,
        },
        {
          url: "https://vulners.com/hackread/HACKREAD:3D7668E0A648FCD496C0A6CBDD4669DC",
          firstEntryId:
            "Xd0aPXvYBJTZqdixdN2RNf2VS4Zwx2lieo+L9qmSRn0=_18ee327d091:22a0295:e56ebecb",
          age: 302903881,
          timestamp: 1713208021137,
        },
        {
          url: "https://vulnera.com/newswire/palo-alto-networks-addresses-actively-exploited-zero-day-vulnerability-in-pan-os-firewalls",
          firstEntryId:
            "fHw/pxWHd05zGOS4Qs4kHlH8dy7epdhYRlEN3zpimxU=_18ee328b77d:22a10aa:e56ebecb",
          age: 302962997,
          timestamp: 1713208080253,
        },
        {
          url: "https://vulnera.com/newswire/cisa-adds-critical-palo-alto-networks-pan-os-flaw-to-known-exploited-vulnerabilities-catalog",
          firstEntryId:
            "fHw/pxWHd05zGOS4Qs4kHlH8dy7epdhYRlEN3zpimxU=_18ee32fd30e:22a8425:e56ebecb",
          age: 303428806,
          timestamp: 1713208546062,
        },
        {
          url: "https://social.skynetcloud.site/@jos1264/112276812765457444",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ee33adabc:22b279c:e56ebecb",
          age: 304151668,
          timestamp: 1713209268924,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-patches-0-day-cve-2024-3400-exploited-by-python-backdoor-2024-04-15",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee34001cf:22b799c:e56ebecb",
          age: 304489351,
          timestamp: 1713209606607,
        },
        {
          url: "https://github.com/kerberoshacker2/CVE-2024-3400-POC",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ee349cab1:22c130b:e56ebecb",
          age: 305130601,
          timestamp: 1713210247857,
        },
        {
          url: "https://www.darkreading.com/cyberattacks-data-breaches/palo-alto-network-issues-hot-fixes-for-zero-day-bug-in-its-firewall-os",
          firstEntryId:
            "qqnVoz+aAqQVrcyIEDLk8jBbpdDq5ONlqP4k/swOalU=_18ee34ab461:200dc47:5c6f62c1",
          age: 305190425,
          timestamp: 1713210307681,
        },
      ],
      "1713211200000": [
        {
          url: "https://www.reddit.com/r/InfoSecNews/comments/1c4tom7/palo_alto_patches_0day_cve20243400_exploited_by",
          firstEntryId:
            "EocB/s+RfkTYXL02pjF9oyUqQaIR3VKg2qUJUDxGfqI=_18ee35c7a10:23f44c1:5edf391c",
          age: 306355144,
          timestamp: 1713211472400,
        },
        {
          url: "https://fieldeffect.com/blog/palo-alto-releasing-updates-zero-day",
          firstEntryId:
            "0N+WIpXqwlNuVKaQIeLHWQH6zwSwXmiQSC1QDk7MrCc=_18ee35ea3fd:23f6105:5edf391c",
          age: 306496949,
          timestamp: 1713211614205,
        },
        {
          url: "https://thecyberwire.com/newsletters/daily-briefing/13/73",
          firstEntryId:
            "ugkPma5hmuhBxvcHwRYJwyDumubN5X51F/rFlkCAPPI=_18ee388a531:2045e60:5c6f62c1",
          age: 309249769,
          timestamp: 1713214367025,
        },
      ],
      "1713214800000": [
        {
          url: "https://www.enigmasoftware.com/cve20243400vulnerability-removal",
          firstEntryId:
            "hA2sYryzQzdz1JERuJ6J10dV2OK7rKF9T8ocMyn2cxk=_18ee3952151:2050400:5c6f62c1",
          age: 310067977,
          timestamp: 1713215185233,
        },
        {
          url: "https://www.esecurityplanet.com/threats/vulnerability-recap-april-15-2024",
          firstEntryId:
            "cK2znBMZ62E3Oqp63Zy+ftqCXvt4P3qmjKYWRvmiS6A=_18ee3a43084:2437e90:5edf391c",
          age: 311054908,
          timestamp: 1713216172164,
        },
        {
          url: "https://www.bankinfosecurity.com/likely-state-hackers-exploiting-palo-alto-firewall-0-day-a-24866",
          firstEntryId:
            "Y0XwPVpDHJI1hmDtLHr/tTsDHzvd7a3E27Xwi7zGfqM=_18ee3bea9c7:2072649:5c6f62c1",
          age: 312789887,
          timestamp: 1713217907143,
        },
      ],
      "1713218400000": [
        {
          url: "https://www.techopedia.com/news/hackers-target-palo-alto-firewalls-in-operation-midnighteclipse",
          firstEntryId:
            "jbVEWvnFXyheq/6boic23LwXx5kmE38Ad56VPJKT6CA=_18ee3ca77c9:207b97e:5c6f62c1",
          age: 313563521,
          timestamp: 1713218680777,
        },
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-15",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18ee3caaede:2338786:e56ebecb",
          age: 313577622,
          timestamp: 1713218694878,
        },
      ],
      "1713222000000": [
        {
          url: "https://www.redpacketsecurity.com/cisa-cisa-adds-one-known-exploited-vulnerability-to-catalog-16-04-2024",
          firstEntryId:
            "mV+z/SnAKVPDiZi+STIjoaD0B7qT7v1/XuIf2cAXG4w=_18ee3fde08b:20a34bd:5c6f62c1",
          age: 316932675,
          timestamp: 1713222049931,
        },
        {
          url: "https://www.criticalinsight.com/vulnerabilities/cve-2024-3400-zero-day-exploitation-of-unauthenticated-remote-code-execution-on-palo-alto",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ee3feeea4:2363431:e56ebecb",
          age: 317001820,
          timestamp: 1713222119076,
        },
        {
          url: "https://mastodon.social/@RedPacketSecurity/112277720055353952",
          firstEntryId:
            "1iffYOFZqFSo2N0mykHY7POj7jgSReETVUAZLnZwqws=_18ee400da00:236609c:e56ebecb",
          age: 317127608,
          timestamp: 1713222244864,
        },
      ],
      "1713225600000": [
        {
          url: "https://isc.sans.edu/diary/rss/30838",
          firstEntryId:
            "0F4cXjhiHMt9nhQEwQxU1upWINuhKgo8lM5Ak7O5tRs=_18ee435a299:24b0460:5edf391c",
          age: 320586833,
          timestamp: 1713225704089,
        },
        {
          url: "https://www.coalitioninc.com/blog/palo-alto-panos-zero-day",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ee43748f8:20ca500:5c6f62c1",
          age: 320694960,
          timestamp: 1713225812216,
        },
        {
          url: "https://arcticwolf.com/resources/blog/cve-2024-3400",
          firstEntryId:
            "Nc4EgBTnRbKIdrgLuFo2DKVpbhVyko3mM9T6qpJLI18=_18ee438b73d:20cb66d:5c6f62c1",
          age: 320788725,
          timestamp: 1713225905981,
        },
        {
          url: "https://infosec.exchange/@sans_isc/112277959018539455",
          firstEntryId:
            "74q9lJ/bCOboy8PQErMnv12yqyIFXdEZWfy7UEUgKQM=_18ee43a37b5:20cc757:5c6f62c1",
          age: 320887149,
          timestamp: 1713226004405,
        },
        {
          url: "https://arcticwolf.com/resources/blog-uk/cve-2024-3400-follow-up",
          firstEntryId:
            "ckXBo5tB/R2yBz+acW5WnsmZHCRYW7Whb27pvGh4+Y4=_18ee43b0b67:20cd307:5c6f62c1",
          age: 320941343,
          timestamp: 1713226058599,
        },
        {
          url: "https://arcticwolf.com/resources/blog-uk/cve-2024-3400-critical-vulnerability-globalprotect",
          firstEntryId:
            "HF7spu2/TOY6Hr85bDKp0Toyq4eykMhXi8Bqn9hLZ/w=_18ee43b4f73:20cdde7:5c6f62c1",
          age: 320958763,
          timestamp: 1713226076019,
        },
        {
          url: "https://isc.sans.edu/diary/30838",
          firstEntryId:
            "QM3zHujXblTG0KsROC8zcxgH0lIRGG84j7fp00HrGhE=_18ee43db1be:20cffb8:5c6f62c1",
          age: 321114998,
          timestamp: 1713226232254,
        },
        {
          url: "https://malware.news/t/cve-2024-3400-critical-vulnerability-in-globalprotect-feature-of-pan-os-being-actively-exploited/80875",
          firstEntryId:
            "ugarbDVLNOKrWjpMH+YgNeJ2QFaLzw4mdjaGUSDlDCA=_18ee43f591b:24b7c12:5edf391c",
          age: 321223379,
          timestamp: 1713226340635,
        },
        {
          url: "https://malware.news/t/quick-palo-alto-networks-global-protect-vulnerablity-update-cve-2024-3400-mon-apr-15th/80877",
          firstEntryId:
            "tln/RgdbhTE7lkp1QinACL+ab1pmoomH5ck8KZfsynk=_18ee450311e:20de3f9:5c6f62c1",
          age: 322327254,
          timestamp: 1713227444510,
        },
        {
          url: "https://allinfosecnews.com/item/cve-2024-3400-critical-vulnerability-in-globalprotect-feature-of-pan-os-being-actively-exploited-2024-04-16",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee4532ce5:23a5913:e56ebecb",
          age: 322522781,
          timestamp: 1713227640037,
        },
        {
          url: "https://www.itsecuritynews.info/quick-palo-alto-networks-global-protect-vulnerablity-update-cve-2024-3400-mon-apr-15th",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ee453b401:24c8984:5edf391c",
          age: 322557369,
          timestamp: 1713227674625,
        },
        {
          url: "https://cybersecurityboard.com/vulnerability-recap-41524-palo-alto-microsoft-ivanti-exploits",
          firstEntryId:
            "DOvTUNy7xQ/a27SWlGJjPHmhcUYOnrDAHXHMuQhMoxo=_18ee4572437:24cb5a3:5edf391c",
          age: 322782703,
          timestamp: 1713227899959,
        },
        {
          url: "https://www.ironcastle.net/quick-palo-alto-networks-global-protect-vulnerablity-update-cve-2024-3400-mon-apr-15th",
          firstEntryId:
            "9WabeWuJ3Zql0kvPTQ2G9ef4VJjD/jACIO4eLLotTNs=_18ee45dc0ab:24d09a2:5edf391c",
          age: 323215971,
          timestamp: 1713228333227,
        },
        {
          url: "http://archive.is/9KJTj",
          firstEntryId:
            "dU1gz1T5rLwJhDCzjKDxsFkvo1ct0sJ4Rg5g45tHI5U=_18ee4671a21:23b6fd6:e56ebecb",
          age: 323828697,
          timestamp: 1713228945953,
        },
      ],
      "1713229200000": [
        {
          url: "https://ciso2ciso.com/palo-alto-network-issues-hotfixes-for-zero-day-bug-in-its-firewall-os-source-www-darkreading-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ee46e32ab:24df430:5edf391c",
          age: 324293731,
          timestamp: 1713229410987,
        },
        {
          url: "https://buaq.net/go-234457.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ee479818d:20ff5b1:5c6f62c1",
          age: 325034821,
          timestamp: 1713230152077,
        },
        {
          url: "https://unsafe.sh/go-234457.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ee47bda5e:24ea468:5edf391c",
          age: 325188630,
          timestamp: 1713230305886,
        },
        {
          url: "https://infosec.exchange/@simontsui/112278281094396373",
          firstEntryId:
            "tQrcdE0E7m6/RFHZguugjyI+kFthN0Yvf9ZAv8hPm8E=_18ee48215f1:2105246:5c6f62c1",
          age: 325597097,
          timestamp: 1713230714353,
        },
        {
          url: "https://allinfosecnews.com/item/quick-palo-alto-networks-global-protect-vulnerablity-update-cve-2024-3400-mon-apr-15th-2024-04-16",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee48767ec:23cf8ad:e56ebecb",
          age: 325945764,
          timestamp: 1713231063020,
        },
      ],
      "1713232800000": [
        {
          url: "https://isc.sans.edu/podcastdetail/8940",
          firstEntryId:
            "X/bNDZKG0sMIyKlL+T17lkgYhmNzDDgdJvePu5uBUQk=_18ee4a20a98:23e1712:e56ebecb",
          age: 327691344,
          timestamp: 1713232808600,
        },
        {
          url: "https://allinfosecnews.com/item/isc-stormcast-for-tuesday-april-16th-2024-2024-04-16",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee4bbbcb7:212cb67:5c6f62c1",
          age: 329375343,
          timestamp: 1713234492599,
        },
        {
          url: "https://infosec.exchange/@thedxt/112278467607455062",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ee4be07cc:251b761:5edf391c",
          age: 329525636,
          timestamp: 1713234642892,
        },
      ],
      "1713236400000": [
        {
          url: "https://ciso2ciso.com/palo-alto-networks-zero-day-flaw-exploited-in-targeted-attacks-source-www-infosecurity-magazine-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ee4de4407:2534dc0:5edf391c",
          age: 331638207,
          timestamp: 1713236755463,
        },
        {
          url: "https://thecyberthrone.in/2024/04/16/patch-released-cve-2024-3400-added-to-kev-catalog",
          firstEntryId:
            "+FhtXLPlJNX87IWVqHPTF94lc+DozwDLi164s1flptk=_18ee4e75325:214baca:5c6f62c1",
          age: 332231901,
          timestamp: 1713237349157,
        },
      ],
      "1713240000000": [
        {
          url: "https://ciso2ciso.com/palo-alto-networks-fixes-zero-day-exploited-to-backdoor-firewalls-source-www-bleepingcomputer-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ee5142621:255b3a2:5edf391c",
          age: 335169497,
          timestamp: 1713240286753,
        },
        {
          url: "https://www.getinfosec.news/54742557/cisa-adds-palo-alto-networks-pan-os-command-injection-flaw-to-its-known-exploited-vulnerabilities-catalog",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ee527a6ac:256b29d:5edf391c",
          age: 336447588,
          timestamp: 1713241564844,
        },
        {
          url: "https://medium.com/@rst_cloud/rst-ti-report-digest-15-apr-2024-e578f6692ea9",
          firstEntryId:
            "m2mY0OhMMS3yqfbmAIkiSk7q+af5nmuBmDPJDaLIEBY=_18ee5297d41:256c428:5edf391c",
          age: 336568057,
          timestamp: 1713241685313,
        },
        {
          url: "https://www.getinfosec.news/54742558/threat-actors-exploited-palo-alto-pan-os-issue-to-deploy-a-python-backdoor",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ee52e8499:256fde8:5edf391c",
          age: 336897617,
          timestamp: 1713242014873,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c57m94/more_patches_for_cve20243400_1027h8_and_1028h3",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ee53d989c:257b916:5edf391c",
          age: 337885780,
          timestamp: 1713243003036,
        },
      ],
      "1713247200000": [
        {
          url: "https://cubic-lighthouse.com/2024/04/16/palo-alto-firewall-vulnerability-cvss-10/news",
          firstEntryId:
            "UitpcYeLFiADMPIBYLIGaPjDMtcalXO6cE6Sic+8Cmw=_18ee5884e4b:248f394:e56ebecb",
          age: 342781955,
          timestamp: 1713247899211,
        },
        {
          url: "https://www.getinfosec.news/54743910/palo-alto-patches-0-day-cve-2024-3400-exploited-by-python-backdoor",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ee5aed47d:25dc7c6:5edf391c",
          age: 345306677,
          timestamp: 1713250423933,
        },
      ],
      "1713250800000": [
        {
          url: "https://hadess.io/threat-intel-roundup-putty-nexperia-globalprotect-palo-alto-ebook",
          firstEntryId:
            "ipjZJwD9XR+wbccvYHGv2W0k/o+HxTwOCt79gpA/tTs=_18ee5c5ae58:25f406d:5edf391c",
          age: 346804240,
          timestamp: 1713251921496,
        },
        {
          url: "https://www.computing.co.uk/news/4197549/palo-alto-networks-patches-critical-vulnerability-active-exploitation",
          firstEntryId:
            "t2u1XsS6c+caLvgG6/s0yVjFxQuR/TMrheFu2wJn2Kc=_18ee5d0a995:24d053c:e56ebecb",
          age: 347523917,
          timestamp: 1713252641173,
        },
        {
          url: "https://www.getinfosec.news/54750184/isc-stormcast-for-tuesday-april-16th-2024",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ee5d0ae92:21fe623:5c6f62c1",
          age: 347525194,
          timestamp: 1713252642450,
        },
      ],
      "1713254400000": [
        {
          url: "https://www.hivepro.com/threat-advisory/zero-day-flaw-in-palo-alto-networks-pan-os-patched-after-active-exploitation",
          firstEntryId:
            "jqVtF1g5MWeNV+CBAGpbCLCWWTp9CUxuL7XeoNGYfBc=_18ee5f0eaea:261dfed:5edf391c",
          age: 349637794,
          timestamp: 1713254755050,
        },
        {
          url: "https://www.getinfosec.news/54743841/palo-alto-networks-releases-urgent-fixes-for-exploited-pan-os-vulnerability",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ee605f4c7:2633368:5edf391c",
          age: 351016575,
          timestamp: 1713256133831,
        },
        {
          url: "https://truefort.com/cve-2024-3400",
          firstEntryId:
            "fZPAxJSs1SKi5ehg7rcg7tK9hvG2EldKFYL0htkfnaE=_18ee614363e:2642468:5edf391c",
          age: 351950838,
          timestamp: 1713257068094,
        },
      ],
      "1713258000000": [
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/query-for-cve-2024-3400/m-p/583862",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee628bd51:2250646:5c6f62c1",
          age: 353296137,
          timestamp: 1713258413393,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.itpro.com/security/palo-alto-networks-issues-fixes-for-critical-pan-os-software-flaw",
          firstEntryId:
            "pq0yIi/+p6MspRFHOKGyajjU5ZrtsL4oZxyBYOLSEcs=_18ee62c8bda:265c5a4:5edf391c",
          age: 353545618,
          timestamp: 1713258662874,
        },
      ],
      "1713261600000": [
        {
          url: "https://github.com/trickest/cve/commit/1d9034069ec9053611b3039b3814255220a2009d",
          firstEntryId:
            "EUGB/u+RmzQLYPqVdzClwVfqP2uvdPjW6Wli7vnbU4I=_18ee65c98cc:255fef9:e56ebecb",
          age: 356694660,
          timestamp: 1713261811916,
        },
        {
          url: "https://www.firecompass.com/blog/cvss-score-10-critical-palo-alto-pan-os-code-execution-vulnerability-cve-2024-3400",
          firstEntryId:
            "DmbP9MASVmB24o534iZwCCgoBwWM14PTZOA1AlAjykk=_18ee6827189:26c3fec:5edf391c",
          age: 359174977,
          timestamp: 1713264292233,
        },
        {
          url: "https://platoblockchain.net/palo-alto-network-issues-hot-fixes-for-zero-day-bug-in-its-firewall-os",
          firstEntryId:
            "ztRmdbSc0/AHHnYX2f/MXz2UpFf0M7HIGtC0C0SXeKE=_18ee684b298:258ea4e:e56ebecb",
          age: 359322704,
          timestamp: 1713264439960,
        },
        {
          url: "https://truefort.com/cybersecurity-vulnerabilities",
          firstEntryId:
            "fZPAxJSs1SKi5ehg7rcg7tK9hvG2EldKFYL0htkfnaE=_18ee6888fa5:2592f9e:e56ebecb",
          age: 359575901,
          timestamp: 1713264693157,
        },
      ],
      "1713265200000": [
        {
          url: "https://mastodon.social/@jbzfn/112280507279489901",
          firstEntryId:
            "7X40YByfy5J77gWcu4Vum40mPyeOQdiY0Ybx1Tn2imQ=_18ee69cdecf:25a8f63:e56ebecb",
          age: 360906887,
          timestamp: 1713266024143,
        },
        {
          url: "https://infosec.exchange/@sans_isc/112280753511967574",
          firstEntryId:
            "74q9lJ/bCOboy8PQErMnv12yqyIFXdEZWfy7UEUgKQM=_18ee6c55209:22f6048:5c6f62c1",
          age: 363557825,
          timestamp: 1713268675081,
        },
      ],
      "1713268800000": [
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/10-2-8-dp-dp-hardware-packet-buffer-exhaustion-bug/td-p/583103",
          firstEntryId:
            "NvsugYR7z66ob3rOpGJMqR3QyMdiQneH/nXdcEpUsek=_18ee6eb92e8:273d4a5:5edf391c",
          age: 366064800,
          timestamp: 1713271182056,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.metacurity.com/p/researchers-stopped-xz-utilstype-malicious-actors-targeting-three-javascript-projects",
          firstEntryId:
            "EouNlpTK+OBJVYQPavpkXZrtX72oYsV8j2x3yP8gUL0=_18ee6f29c7b:2745cad:5edf391c",
          age: 366526003,
          timestamp: 1713271643259,
        },
        {
          url: "https://infosec.place/objects/c4ef56f3-8dce-488b-a019-d98aaab56e35",
          firstEntryId:
            "cgqRKcP23ylf6UvOZqmzmn4uOfWc2BxFyLtV0NpugXk=_18ee6f9cf9a:2331285:5c6f62c1",
          age: 366997842,
          timestamp: 1713272115098,
        },
      ],
      "1713272400000": [
        {
          url: "https://www.metacurity.com/p/researchers-stopped-xz-utilstype-malicious-actors-targeting-three-javascript-projects-1",
          firstEntryId:
            "wzpjC4YTOauBUSTU0AVKKBChOfD+cWWXAI/eavSzbH4=_18ee704a4cc:2620a9b:e56ebecb",
          age: 367707780,
          timestamp: 1713272825036,
        },
        {
          url: "https://sploitus.com/exploit?id=DB73FDB1-198D-582C-972B-2482493D0307",
          firstEntryId:
            "uUk9xP+WETRwnqcC8VI2L9INeKT7jusZsDwLpdGutOw=_18ee7073816:275d9f0:5edf391c",
          age: 367876558,
          timestamp: 1713272993814,
        },
        {
          url: "https://labs.watchtowr.com/palo-alto-putting-the-protecc-in-globalprotect-cve-2024-3400",
          firstEntryId:
            "3qdDFtu+1Qds9CopM8yVYIw8wPo+uAgwQbUQFs+KvgY=_18ee7258598:236563f:5c6f62c1",
          age: 369862480,
          timestamp: 1713274979736,
        },
        {
          url: "https://infosec.exchange/@simontsui/112281208697374732",
          firstEntryId:
            "B20uH4as61LDoWsdB3zFJjjD2lDyCIvEucb3G4skVxA=_18ee72c2e3f:278de98:5edf391c",
          age: 370298871,
          timestamp: 1713275416127,
        },
      ],
      "1713279600000": [
        {
          url: "https://old.reddit.com/r/netsec/comments/1c5gxfl/palo_alto_putting_the_protecc_in_globalprotect",
          firstEntryId:
            "1/+B2P3MbGUxRYoL+Cw86Q13trJNjpMqv2hS0LRcJdk=_18ee78c54b3:44dfc:5edf391c",
          age: 376600171,
          timestamp: 1713281717427,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c5gwsl/new_applications_and_threats_content_update_8835",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ee7901377:49c21:5edf391c",
          age: 376845615,
          timestamp: 1713281962871,
        },
        {
          url: "https://news.ycombinator.com/item?id=40053453",
          firstEntryId:
            "cnbGCPjJjpLm0qtw2aDBkoc5a9q8sWExHaeYNUQcfLI=_18ee79786a6:33662:5c6f62c1",
          age: 377333854,
          timestamp: 1713282451110,
        },
        {
          url: "https://cyberplace.social/@GossiTheDog/112281675483577324",
          firstEntryId:
            "Xrh+ELNhA2jGcuchWvKG9pIPzOtK2ia/s1yVCpJX7CE=_18ee7985ffc:54928:5edf391c",
          age: 377389492,
          timestamp: 1713282506748,
        },
        {
          url: "https://www.cybersecuritydive.com/news/palo-alto-networks-firewalls-exploits/713331",
          firstEntryId:
            "dg2ydw6+jmTTaTr7hKmtIeGwl/OZCgk5CbNMBJAYC5w=_18ee79db4c9:487ca:e56ebecb",
          age: 377738881,
          timestamp: 1713282856137,
        },
      ],
      "1713283200000": [
        {
          url: "https://infosec.exchange/@wdormann/112281624451926406",
          firstEntryId:
            "GZkAKsZRkS7QPZ3PnoyF5ydWqnoHDEjavHO7+p7phoI=_18ee7a7573e:54f3a:e56ebecb",
          age: 378370294,
          timestamp: 1713283487550,
        },
        {
          url: "https://infosec.exchange/@chort/112281779397747110",
          firstEntryId:
            "5XztaGwd0j5tG3Gl/9NOMRpN98wwOkMYjG5rvDilvyA=_18ee7b46b80:7add6:5edf391c",
          age: 379227448,
          timestamp: 1713284344704,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-putting-the-protecc-in-globalprotect-cve-2024-3400-watchtowr-labs-2024-04-16",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee7be87b5:6194f:5c6f62c1",
          age: 379890029,
          timestamp: 1713285007285,
        },
        {
          url: "https://cert.at/de/tagesberichte/2024/4/tagesberichte-16042024",
          firstEntryId:
            "OLHDPysEEkFMfxefyTGmhE9/YTWte56OJ7dv+5qcHqg=_18ee7cbdb01:7d0b:e56ebecb",
          age: 380763321,
          timestamp: 1713285880577,
        },
        {
          url: "https://b2b-cyber-security.de/en/bsi-warns-palo-alto-firewalls-with-critical-vulnerability",
          firstEntryId:
            "Iv+MiXCkgS1W6S2hG7xBpR0PYbEqXioFsfGvapExc68=_18ee7ce8bcf:ca32:e56ebecb",
          age: 380939655,
          timestamp: 1713286056911,
        },
        {
          url: "https://lists.cert.at/pipermail/daily/2024-April/004342.html",
          firstEntryId:
            "LdISGHbSY0VvTsVyesOo3y6iDKf+Xy4Os7z1hu6hiIk=_18ee7d3cf12:21ac8:5edf391c",
          age: 381284554,
          timestamp: 1713286401810,
        },
        {
          url: "https://mstdn.social/@hkrn/112281925855046235",
          firstEntryId:
            "ZFR8iSQqbnd56MgEgX51lTdlk3i1WPnFYDcH5ulv3Ng=_18ee7d5f883:16bee:e56ebecb",
          age: 381426235,
          timestamp: 1713286543491,
        },
        {
          url: "https://infosec.exchange/@da_667/112281327798560356",
          firstEntryId:
            "hO1+MbvB8dcDs7mhSeGfFOkUXG7t3v7UNKcqaNnD2NU=_18ee7d8551d:288a1:5edf391c",
          age: 381581013,
          timestamp: 1713286698269,
        },
      ],
      "1713286800000": [
        {
          url: "https://infosec.exchange/@aircooledcafe/112281994205136840",
          firstEntryId:
            "IHunDRq+Y354DvOswToQzHrrWGi7QYcfedrpxC+QDeo=_18ee7e2fe66:293bd:e56ebecb",
          age: 382279710,
          timestamp: 1713287396966,
        },
        {
          url: "https://www.reddit.com/r/blueteamsec/comments/1c5kg11/palo_alto_putting_the_protecc_in_globalprotect",
          firstEntryId:
            "T8Gn8hJy9MDXgPPEWPf3eKFiC22pQg9/jkwNHgMRBDU=_18ee7f00d5f:278b5:5c6f62c1",
          age: 383135511,
          timestamp: 1713288252767,
        },
        {
          url: "https://www.reddit.com/r/UIC/comments/1c5ld60/palo_alto_putting_the_protecc_in_globalprotect",
          firstEntryId:
            "thZ6p6+jlF70HJsGcCHPQUXbsqwMlO5r3B+FgctnMSY=_18ee80a5635:427c1:5c6f62c1",
          age: 384858093,
          timestamp: 1713289975349,
        },
      ],
      "1713290400000": [
        {
          url: "https://infosec.exchange/@threatcodex/112282316100930318",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18ee82e6505:89285:5edf391c",
          age: 387221181,
          timestamp: 1713292338437,
        },
        {
          url: "https://www.bleepingcomputer.com/news/security/exploit-released-for-palo-alto-pan-os-bug-used-in-attacks-patch-now",
          firstEntryId:
            "n9dPOELWwN6V5/2vRbhNH75Z47CIP9w+xFofhOcv0qE=_18ee8328a6f:8d5de:5edf391c",
          age: 387492903,
          timestamp: 1713292610159,
        },
        {
          url: "https://honeypot.net/post/palo-altos-exploited-python-code",
          firstEntryId:
            "OEJuT90f9HTPtI+ycBEQVew43VnPQmaHQNjt/qLXAw8=_18ee83606e8:853f6:e56ebecb",
          age: 387721376,
          timestamp: 1713292838632,
        },
        {
          url: "https://exchange.xforce.ibmcloud.com/report/details/guid:893b8bfcc4116fa192948ed26f838f94",
          firstEntryId:
            "lBdsQVehp8ABHSRhzrVrnB1/ssPPcn6712TIhhG5k6s=_18ee84492b5:94dd1:e56ebecb",
          age: 388674669,
          timestamp: 1713293791925,
          sourceType: ["Vendor"],
        },
      ],
      "1713294000000": [
        {
          url: "https://www.cert.europa.eu/publications/security-advisories/2024-037",
          firstEntryId:
            "VbozAvqAvoWsniUMtIv7KCm9kqIxWiChU2GDK77RpoU=_18ee84c585f:9c970:e56ebecb",
          age: 389184023,
          timestamp: 1713294301279,
        },
        {
          url: "https://memia.substack.com/p/ministry-of-imaginationfeelings-about",
          firstEntryId:
            "bUv/fUSr1Ay2ohSFVbp65BWbmUecWQkYkF4CEzSnfEc=_18ee86f4792:a338f:5c6f62c1",
          age: 391473482,
          timestamp: 1713296590738,
        },
        {
          url: "https://stack.watch/vuln/CVE-2024-3400",
          firstEntryId:
            "nBYLgXguBV04bb3+zqfloWmVl3nI1XVXPytIYJQT244=_18ee86f844d:cfa95:5edf391c",
          age: 391489029,
          timestamp: 1713296606285,
        },
        {
          url: "https://github.com/W01fh4cker/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ee86f9707:c4a35:e56ebecb",
          age: 391493823,
          timestamp: 1713296611079,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c5jfg2/suggestions_on_cve20243400",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18ee86fc7ae:cff3c:5edf391c",
          age: 391506278,
          timestamp: 1713296623534,
        },
        {
          url: "https://infosec.place/objects/579b6845-351a-41be-a227-03c25b1bb7b5",
          firstEntryId:
            "cgqRKcP23ylf6UvOZqmzmn4uOfWc2BxFyLtV0NpugXk=_18ee8759598:d51b3:5edf391c",
          age: 391886672,
          timestamp: 1713297003928,
        },
        {
          url: "https://infosec.exchange/@decio/112282632004085538",
          firstEntryId:
            "TelEBCCJMjHw73+2w7W0H4KBEnXD/SzWZbgmrE2xY9E=_18ee877e23e:ab1c8:5c6f62c1",
          age: 392037366,
          timestamp: 1713297154622,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/cortex-xdr-discussions/missing-xql-preset-queries/td-p/583931",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee8781daa:ab407:5c6f62c1",
          age: 392052578,
          timestamp: 1713297169834,
          sourceType: ["VendorReference"],
        },
      ],
      "1713297600000": [
        {
          url: "https://old.reddit.com/r/blueteamsec/comments/1c5kg11/palo_alto_putting_the_protecc_in_globalprotect",
          firstEntryId:
            "wo4F9hdBqOhsNQE3NelkfdeKOw4f0x/7Kt8RZWdmtZ8=_18ee8aead23:102e0b:e56ebecb",
          age: 395628251,
          timestamp: 1713300745507,
        },
      ],
      "1713301200000": [
        {
          url: "https://infosec.exchange/@h4sh/112282941622897587",
          firstEntryId:
            "/4LBMLNgsFJeSzVpZl0IutvX+GLdXoOXrfI2n2uAt2I=_18ee8bfdfe2:11b2a8:5edf391c",
          age: 396755354,
          timestamp: 1713301872610,
        },
        {
          url: "https://isc.sans.edu/diary/30844",
          firstEntryId:
            "74q9lJ/bCOboy8PQErMnv12yqyIFXdEZWfy7UEUgKQM=_18ee8c00738:113197:e56ebecb",
          age: 396765424,
          timestamp: 1713301882680,
        },
        {
          url: "https://blog.xiid.com/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400-8e72446efb4b",
          firstEntryId:
            "CIcgRyRpRkpjuVxlOqGo2oXDguoGVLC1BlwYi1+5qYM=_18ee8c38c3f:ec5bf:5c6f62c1",
          age: 396996087,
          timestamp: 1713302113343,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/tac-p/583938",
          firstEntryId:
            "GCf1fgM5ECgw+RPmqqf01vtZcHm58GHOATDouWorCw8=_18ee8cc68e8:f317d:5c6f62c1",
          age: 397576864,
          timestamp: 1713302694120,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.crn.com/news/security/2024/5-things-to-know-about-the-latest-firewall-vpn-attacks",
          firstEntryId:
            "zSiW+5UM5wvxQTPCxr2N65r3wql/zvOJQuXiXxcN17k=_18ee8ccc46c:11edf2:e56ebecb",
          age: 397600292,
          timestamp: 1713302717548,
        },
        {
          url: "https://malware.news/t/palo-alto-networks-globalprotect-exploit-public-and-widely-exploited-cve-2024-3400-tue-apr-16th/80926",
          firstEntryId:
            "AGzmcN2M5nmSWEXxvk304E/0imlfcvoaD69xQVzidRg=_18ee8ce3c92:12892c:5edf391c",
          age: 397696586,
          timestamp: 1713302813842,
        },
        {
          url: "https://community.emergingthreats.net/t/ruleset-update-summary-2024-04-16-v10576/1571",
          firstEntryId:
            "mIIU4iONQITomug5RELWrUb1iPVhPT2fDjfin55ygeI=_18ee8d0a08e:122817:e56ebecb",
          age: 397853254,
          timestamp: 1713302970510,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c5rem7/cve20243400_advisory_updated_disabling_telemetry",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18ee8df5f7f:12fc14:e56ebecb",
          age: 398819639,
          timestamp: 1713303936895,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-globalprotect-exploit-public-and-widely-exploited-cve-2024-3400-tue-apr-16th",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18ee8e34b25:13302c:e56ebecb",
          age: 399076573,
          timestamp: 1713304193829,
        },
        {
          url: "https://securityboulevard.com/2024/04/unpacking-the-surge-in-cybersecurity-vulnerabilities",
          firstEntryId:
            "506o0PW3+lskGSG3xrHW2MQ7ENvosm1xnKk0kn+1ZBo=_18ee8e53ac0:104518:5c6f62c1",
          age: 399203448,
          timestamp: 1713304320704,
        },
        {
          url: "https://infosec.place/objects/d26b6bb2-b99c-476c-a12d-a83f0ad6a870",
          firstEntryId:
            "cgqRKcP23ylf6UvOZqmzmn4uOfWc2BxFyLtV0NpugXk=_18ee8e8a64d:140d1c:5edf391c",
          age: 399427589,
          timestamp: 1713304544845,
        },
      ],
      "1713304800000": [
        {
          url: "https://thisweekhealth.com/news_story/palo-alto-networks-to-fix-exploited-globalprotect-zero-day",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ee8ed9767:13e789:e56ebecb",
          age: 399751455,
          timestamp: 1713304868711,
        },
        {
          url: "https://infosec.exchange/@chort/112283134007552459",
          firstEntryId:
            "5XztaGwd0j5tG3Gl/9NOMRpN98wwOkMYjG5rvDilvyA=_18ee8ee67cb:13f46e:e56ebecb",
          age: 399804803,
          timestamp: 1713304922059,
        },
        {
          url: "https://www.reddit.com/r/cybersecurity/comments/1c5s0bt/palo_alto_cve20243400_mitigations_not_effective",
          firstEntryId:
            "50zTe/d5Rug0tpAXwJpgZ9FLFP+y6an5oTipQ8QNdXs=_18ee8f28ae6:143f35:e56ebecb",
          age: 400075934,
          timestamp: 1713305193190,
        },
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-16",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ee8fe39d3:151d67:e56ebecb",
          age: 400841611,
          timestamp: 1713305958867,
        },
        {
          url: "https://www.reddit.com/r/blueteamsec/comments/1c5s5ri/palo_alto_cve20243400_mitigations_not_effective",
          firstEntryId:
            "T8Gn8hJy9MDXgPPEWPf3eKFiC22pQg9/jkwNHgMRBDU=_18ee902e05b:15f50e:5edf391c",
          age: 401146387,
          timestamp: 1713306263643,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-networks-globalprotect-exploit-public-and-widely-exploited-cve-2024-3400-tue-apr-16th-2024-04-16",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee90b9d96:160957:e56ebecb",
          age: 401719118,
          timestamp: 1713306836374,
        },
        {
          url: "https://nationalcybersecurity.com/unpacking-the-surge-in-cybersecurity-vulnerabilities-hacking-cybersecurity-infosec-comptia-pentest-ransomware",
          firstEntryId:
            "F7bkPlYEoobiigWoylVQUnoAnnQnVuT9Vll4g7FP0Gg=_18ee9129a93:16a538:e56ebecb",
          age: 402177099,
          timestamp: 1713307294355,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c5smuy/cve20243400_new_poc",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18ee9168942:177d57:5edf391c",
          age: 402434810,
          timestamp: 1713307552066,
        },
        {
          url: "https://unsafe.sh/go-234663.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ee9177a93:170211:e56ebecb",
          age: 402496587,
          timestamp: 1713307613843,
        },
        {
          url: "https://infosec.exchange/@chort/112283323783426331",
          firstEntryId:
            "5XztaGwd0j5tG3Gl/9NOMRpN98wwOkMYjG5rvDilvyA=_18ee91784dd:170282:e56ebecb",
          age: 402499221,
          timestamp: 1713307616477,
        },
        {
          url: "https://www.ironcastle.net/palo-alto-networks-globalprotect-exploit-public-and-widely-exploited-cve-2024-3400-tue-apr-16th",
          firstEntryId:
            "9WabeWuJ3Zql0kvPTQ2G9ef4VJjD/jACIO4eLLotTNs=_18ee917bd17:17061b:e56ebecb",
          age: 402513615,
          timestamp: 1713307630871,
        },
        {
          url: "https://buaq.net/go-234663.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ee9180331:1709ea:e56ebecb",
          age: 402531561,
          timestamp: 1713307648817,
        },
        {
          url: "https://nationalcybersecurity.com/likely-state-hackers-exploiting-palo-alto-firewall-zero-day-hacking-cybersecurity-infosec-comptia-pentest-hacker",
          firstEntryId:
            "F7bkPlYEoobiigWoylVQUnoAnnQnVuT9Vll4g7FP0Gg=_18ee9199432:17aa3e:5edf391c",
          age: 402634218,
          timestamp: 1713307751474,
        },
      ],
      "1713308400000": [
        {
          url: "https://infosec.exchange/@netalexx/112283352568897471",
          firstEntryId:
            "SXP6QxnxOcaPLHx+drq1fcH57IFN2lds7+svg7JQ7ns=_18ee923d28c:18587c:5edf391c",
          age: 403305540,
          timestamp: 1713308422796,
        },
        {
          url: "https://ciso2ciso.com/exploit-released-for-palo-alto-pan-os-bug-used-in-attacks-patch-now-source-www-bleepingcomputer-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ee928eadb:18b099:5edf391c",
          age: 403639443,
          timestamp: 1713308756699,
        },
        {
          url: "https://infosec.exchange/@cR0w/112283402023755465",
          firstEntryId:
            "o6LfjZ0B4cwgl3XmYCQP/ENgjlgF/30ZBk1nZXK/bek=_18ee92f7432:1886bd:e56ebecb",
          age: 404067818,
          timestamp: 1713309185074,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-cve-2024-3400-mitigations-not-effective-2024-04-16",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee9421b9a:19bd58:e56ebecb",
          age: 405290322,
          timestamp: 1713310407578,
        },
      ],
      "1713312000000": [
        {
          url: "http://www.auscert.org.au/bulletins/ESB-2024.2280.3",
          firstEntryId:
            "6MhMKfRuisolv5l2FNV3Ew+cQVcBliQax2qWYAFL/Fc=_18ee95ff53d:1c4dd3:5edf391c",
          age: 407246581,
          timestamp: 1713312363837,
        },
        {
          url: "https://talkback.sh/resource/5347916d-934f-4668-993d-c8678b0c9e38",
          firstEntryId:
            "PHqrwWLsqAc+meWiTJ8KCHgis4nBIL6oq5a0ZIQuBzY=_18ee9600a18:1c4f52:5edf391c",
          age: 407251920,
          timestamp: 1713312369176,
        },
        {
          url: "https://www.auscert.org.au:443/bulletins/ESB-2024.2280.3",
          firstEntryId:
            "sSxFRaZmXCcQAGqUJAYPvSEfpvP4AbaQyHJSZDBR2V4=_18ee9628e3b:1c7ddf:5edf391c",
          age: 407416819,
          timestamp: 1713312534075,
        },
        {
          url: "https://seclists.org/snort/2024/q2/16",
          firstEntryId:
            "iQNjzUltFIT1Qjd5XdVDqfQ7GTppFtVf6v694qQFHZY=_18ee96acb68:122431:5c6f62c1",
          age: 407956768,
          timestamp: 1713313074024,
        },
        {
          url: "https://old.reddit.com/r/cybersecurity/comments/1c5s0bt/palo_alto_cve20243400_mitigations_not_effective",
          firstEntryId:
            "wo4F9hdBqOhsNQE3NelkfdeKOw4f0x/7Kt8RZWdmtZ8=_18ee9773d16:1d2169:e56ebecb",
          age: 408772302,
          timestamp: 1713313889558,
        },
        {
          url: "https://cybersecurityboard.com/palo-alto-networks-globalprotect-exploit-public-and-widely-exploited-cve-2024-3400",
          firstEntryId:
            "DOvTUNy7xQ/a27SWlGJjPHmhcUYOnrDAHXHMuQhMoxo=_18ee97c7ee7:1d761c:e56ebecb",
          age: 409116831,
          timestamp: 1713314234087,
        },
        {
          url: "https://www.ctfiot.com/174006.html",
          firstEntryId:
            "46zngy9Jny8qDMrr2TuIUWaumtGnte7WUf8BPMGZJtg=_18ee9814a0e:1e92de:5edf391c",
          age: 409430982,
          timestamp: 1713314548238,
        },
        {
          url: "https://kolektiva.social/@youranonriots/112283781473911226",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18ee987d805:1efa30:5edf391c",
          age: 409860541,
          timestamp: 1713314977797,
        },
        {
          url: "https://www.reddit.com/r/crowdstrike/comments/1c5tfyl/base64_decoding",
          firstEntryId:
            "k8SrH2Zs3LSHALUGidf3gvAPUVCPo1/8k+4m+bjRwi8=_18ee98b70fb:1e6e9f:e56ebecb",
          age: 410096307,
          timestamp: 1713315213563,
        },
        {
          url: "https://cybersecurityboard.com/exploit-released-for-palo-alto-pan-os-bug-used-in-attacks-patch-now",
          firstEntryId:
            "DOvTUNy7xQ/a27SWlGJjPHmhcUYOnrDAHXHMuQhMoxo=_18ee98bd54e:12980b:5c6f62c1",
          age: 410121990,
          timestamp: 1713315239246,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/tac-p/583955",
          firstEntryId:
            "GCf1fgM5ECgw+RPmqqf01vtZcHm58GHOATDouWorCw8=_18ee98fc06f:12a48b:5c6f62c1",
          age: 410378791,
          timestamp: 1713315496047,
          sourceType: ["VendorReference"],
        },
      ],
      "1713315600000": [
        {
          url: "https://eclypsium.com/blog/apt-just-means-another-path-traversal",
          firstEntryId:
            "R658CBx1yubGQBCjMC1wFh/0cCg03LtBcX5i9CAUmcY=_18ee9b1cb71:20f651:e56ebecb",
          age: 412609833,
          timestamp: 1713317727089,
        },
        {
          url: "https://malware.news/t/apt-just-means-another-path-traversal/80930",
          firstEntryId:
            "tln/RgdbhTE7lkp1QinACL+ab1pmoomH5ck8KZfsynk=_18ee9b225be:20f9da:e56ebecb",
          age: 412632950,
          timestamp: 1713317750206,
        },
        {
          url: "https://github.com/ihebski/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ee9b8dcd7:223cf6:5edf391c",
          age: 413073039,
          timestamp: 1713318190295,
        },
        {
          url: "https://infosec.exchange/@simontsui/112284040583706057",
          firstEntryId:
            "tQrcdE0E7m6/RFHZguugjyI+kFthN0Yvf9ZAv8hPm8E=_18ee9bdfda6:21a4cf:e56ebecb",
          age: 413409118,
          timestamp: 1713318526374,
        },
        {
          url: "https://www.ctfiot.com/174012.html",
          firstEntryId:
            "46zngy9Jny8qDMrr2TuIUWaumtGnte7WUf8BPMGZJtg=_18ee9bed785:21b7a6:e56ebecb",
          age: 413464893,
          timestamp: 1713318582149,
        },
      ],
      "1713319200000": [
        {
          url: "https://isc.sans.edu/podcastdetail/8942",
          firstEntryId:
            "X/bNDZKG0sMIyKlL+T17lkgYhmNzDDgdJvePu5uBUQk=_18ee9c87b6c:228994:e56ebecb",
          age: 414096676,
          timestamp: 1713319213932,
        },
        {
          url: "https://news.ycombinator.com/item?id=40059723",
          firstEntryId:
            "BJ+OB7xsnTtbl9t6waqoNndhJMgt8hlQ9PvzR8Tfgns=_18ee9ddde67:247745:5edf391c",
          age: 415498271,
          timestamp: 1713320615527,
        },
        {
          url: "https://allinfosecnews.com/item/isc-stormcast-for-wednesday-april-17th-2024-2024-04-17",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ee9e61740:24f205:5edf391c",
          age: 416037112,
          timestamp: 1713321154368,
        },
        {
          url: "https://infosec.exchange/@hdm/112284229894206093",
          firstEntryId:
            "aK0F69+thWluSgJd130XBmdsuyWgPYvcIpEGDMAUG24=_18ee9ed608d:258fbd:5edf391c",
          age: 416514629,
          timestamp: 1713321631885,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c5ym7n/affect_cve20243400_panos_in_vpn_clientless_service",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ee9ef100d:24d66a:e56ebecb",
          age: 416625093,
          timestamp: 1713321742349,
        },
      ],
      "1713322800000": [
        {
          url: "https://www.cyberdaily.au/security/10439-act-now-acsc-releases-updated-critical-alert-over-palo-alto-pan-os-firewall-vulnerability",
          firstEntryId:
            "HB3ZzSd03RqWW4mrGbz2VEshDDUZRM2mRysnQJLSt6U=_18eea13db92:271d0c:e56ebecb",
          age: 419036490,
          timestamp: 1713324153746,
        },
        {
          url: "https://news.ycombinator.com/item?id=40060119",
          firstEntryId:
            "BJ+OB7xsnTtbl9t6waqoNndhJMgt8hlQ9PvzR8Tfgns=_18eea1bdf32:279b2c:e56ebecb",
          age: 419561706,
          timestamp: 1713324678962,
        },
      ],
      "1713326400000": [
        {
          url: "https://bluefire-redteam.com/cve-2024-3400-pan-os-vulnerability-palo-alto-networks-releases-urgent-fix",
          firstEntryId:
            "luLtfxU5qcSyQydhM0Wb5Ltt4G6GRepmSN8IVd6hbDQ=_18eea3d9445:29984c:e56ebecb",
          age: 421770749,
          timestamp: 1713326888005,
        },
        {
          url: "https://news.risky.biz/risky-biz-news-putty-crypto-bug-exposes-private-keys-may-lead-to-supply-chain-attacks",
          firstEntryId:
            "ou/qMWN7MKkICefbeKM8HodVOLLExrx7WdEyMBKLtH0=_18eea526db4:15451a:5c6f62c1",
          age: 423137132,
          timestamp: 1713328254388,
        },
      ],
      "1713330000000": [
        {
          url: "https://old.reddit.com/r/blueteamsec/comments/1c5s5ri/palo_alto_cve20243400_mitigations_not_effective",
          firstEntryId:
            "wo4F9hdBqOhsNQE3NelkfdeKOw4f0x/7Kt8RZWdmtZ8=_18eea871dea:2e838b:e56ebecb",
          age: 426590114,
          timestamp: 1713331707370,
        },
        {
          url: "https://securityaffairs.com/161936/hacking/exploit-code-cve-2024-3400-palo-alto-pan-os.html",
          firstEntryId:
            "GkT9Omj3/TrwoD60ExVW8HF3NDmBHkgAwZ5RH/vWE4U=_18eea9aaba7:3093f5:5edf391c",
          age: 427871583,
          timestamp: 1713332988839,
        },
        {
          url: "https://risky.biz/RB745",
          firstEntryId:
            "x/T8Ra+RZToE+sMBkkfsvDxKkicKRr0j8a3MjalfOgs=_18eeaa0901c:303f93:e56ebecb",
          age: 428257748,
          timestamp: 1713333375004,
        },
      ],
      "1713333600000": [
        {
          url: "https://vulners.com/githubexploit/02081E6F-DB31-5181-99C3-ECC516E93929",
          firstEntryId:
            "Xd0aPXvYBJTZqdixdN2RNf2VS4Zwx2lieo+L9qmSRn0=_18eeaafcb88:321126:5edf391c",
          age: 429256000,
          timestamp: 1713334373256,
        },
        {
          url: "https://www.itsecuritynews.info/researchers-released-exploit-code-for-actively-exploited-palo-alto-pan-os-bug",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18eead6bc19:34f105:5edf391c",
          age: 431807953,
          timestamp: 1713336925209,
        },
      ],
      "1713337200000": [
        {
          url: "https://unsafe.sh/go-234731.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18eeae9e720:357b5b:e56ebecb",
          age: 433064152,
          timestamp: 1713338181408,
        },
        {
          url: "https://buaq.net/go-234731.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18eeaed3523:3692a7:5edf391c",
          age: 433280731,
          timestamp: 1713338397987,
        },
        {
          url: "https://allinfosecnews.com/item/researchers-released-exploit-code-for-actively-exploited-palo-alto-pan-os-bug-2024-04-17",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18eeaf8cd0c:36b53d:e56ebecb",
          age: 434040516,
          timestamp: 1713339157772,
        },
        {
          url: "https://www.getinfosec.news/54810268/isc-stormcast-for-wednesday-april-17th-2024",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18eeb02b689:3852d3:5edf391c",
          age: 434690113,
          timestamp: 1713339807369,
        },
        {
          url: "https://github.com/index2014/CVE-2024-3400-Checker",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18eeb0598cd:388a1d:5edf391c",
          age: 434879109,
          timestamp: 1713339996365,
        },
        {
          url: "https://kill-the-newsletter.com/alternates/we4qplwdxlmmq90f.html",
          firstEntryId:
            "ZSFQ3tq0fjhh+/P8rKd3Wg0EBYZHF5dwBG3rH8GoBuE=_18eeb05c53b:379fe4:e56ebecb",
          age: 434890483,
          timestamp: 1713340007739,
        },
      ],
      "1713340800000": [
        {
          url: "https://www.smarttech247.com/news/threat-report-palo-alto-patch-april-2024",
          firstEntryId:
            "GcXHz++G9A6RSf/5jBaWg34GU3pzjHfV6zwEqhlaf5U=_18eeb149f37:185f4c:5c6f62c1",
          age: 435863791,
          timestamp: 1713340981047,
        },
        {
          url: "https://www.redpacketsecurity.com/cisa-cisa-adds-one-known-exploited-vulnerability-to-catalog-17-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18eeb15730e:39e366:5edf391c",
          age: 435918022,
          timestamp: 1713341035278,
        },
        {
          url: "https://mastodon.social/@RedPacketSecurity/112285505183638660",
          firstEntryId:
            "1iffYOFZqFSo2N0mykHY7POj7jgSReETVUAZLnZwqws=_18eeb18ab33:3924a2:e56ebecb",
          age: 436129003,
          timestamp: 1713341246259,
        },
        {
          url: "https://gbhackers.com/midnighteclipse-zero-day-exploit",
          firstEntryId:
            "Q4wiXXFi8jS6j6t0RmDrzdtXMuNdo6w12oeV7+BzkPA=_18eeb26a010:3a48a4:e56ebecb",
          age: 437043656,
          timestamp: 1713342160912,
        },
        {
          url: "https://www.techzine.eu/news/security/118878/exploit-in-palo-altos-pan-os-actively-abused-by-malicious-hacker-group",
          firstEntryId:
            "e7ihszNcS+6wQ01E+EtjaaG8GmOihcrGqT/kJZGRaUU=_18eeb272000:3a50e9:e56ebecb",
          age: 437076408,
          timestamp: 1713342193664,
        },
        {
          url: "https://www.itsecuritynews.info/operation-midnighteclipse-hackers-actively-exploiting-palo-alto-networks-zero-day-flaw",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18eeb43e696:3ded23:5edf391c",
          age: 438962254,
          timestamp: 1713344079510,
        },
      ],
      "1713344400000": [
        {
          url: "https://www.redpacketsecurity.com/palo-alto-products-remote-code-execution-vulnerability-17-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18eeb4c0708:3d8d85:e56ebecb",
          age: 439494848,
          timestamp: 1713344612104,
        },
        {
          url: "https://www.helpnetsecurity.com/2024/04/17/cve-2024-3400-attacks",
          firstEntryId:
            "wxwU1Y0vzHuLOQCjW/t4Jw2mEQgFsssq8HF0R0KAwyo=_18eeb64f5d7:3fc63a:e56ebecb",
          age: 441128847,
          timestamp: 1713346246103,
        },
        {
          url: "https://allinfosecnews.com/item/operation-midnighteclipse-hackers-actively-exploiting-palo-alto-networks-zero-day-flaw-2024-04-17",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18eeb65cd9d:41003f:5edf391c",
          age: 441184085,
          timestamp: 1713346301341,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-firewalls-public-exploits-rising-attacks-ineffective-mitigation",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18eeb7cdd8c:43054f:5edf391c",
          age: 442695492,
          timestamp: 1713347812748,
        },
        {
          url: "https://www.securityweek.com/exploitation-of-palo-alto-firewall-vulnerability-picking-up-after-poc-release",
          firstEntryId:
            "OCNmtsBfUVVxBwlbibzHvHeZc1NiFWsbQ+vh9PI4SyI=_18eeb7dbe5a:422d48:e56ebecb",
          age: 442753042,
          timestamp: 1713347870298,
        },
      ],
      "1713348000000": [
        {
          url: "https://ioc.exchange/@wall_e/112286002563887777",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18eeb8a1c72:4441a3:5edf391c",
          age: 443563562,
          timestamp: 1713348680818,
        },
        {
          url: "https://www.reddit.com/r/sysadmin/comments/1c66aj2/palo_alto_cve20243400_mitigations_not_effective",
          firstEntryId:
            "mkX0O272CNMB3qnIM7uaH6l+2toGqP2zz1v7vIDgIiE=_18eeb9a0f3a:44e1ee:e56ebecb",
          age: 444608754,
          timestamp: 1713349726010,
        },
        {
          url: "https://social.skynetcloud.site/@jos1264/112286014324081400",
          firstEntryId:
            "jPlA0CvCl7j4zHAU6aPEp8BljLMmrDYV1AsIPtPccgk=_18eeb9be773:4509be:e56ebecb",
          age: 444729643,
          timestamp: 1713349846899,
        },
        {
          url: "https://socprime.com/blog/cve-2024-3400-detection-a-maximum-severity-command-injection-pan-os-zero-day-vulnerability-in-globalprotect-software",
          firstEntryId:
            "BTMfDBmgP7Mp4dP9Wug8wgxSnzVZBI3C4cgyCfl2YAM=_18eeba12550:1b1e77:5c6f62c1",
          age: 445073160,
          timestamp: 1713350190416,
        },
        {
          url: "https://cubic-lighthouse.com/2024/04/17/cvss-10-palo-alto-backdoor-zero-day-patch/short-news",
          firstEntryId:
            "UitpcYeLFiADMPIBYLIGaPjDMtcalXO6cE6Sic+8Cmw=_18eeba61fa7:460f4a:e56ebecb",
          age: 445399391,
          timestamp: 1713350516647,
        },
        {
          url: "https://securityboulevard.com/2024/04/apt-just-means-another-path-traversal",
          firstEntryId:
            "ptGW5PmiCp5Zf8VvmSVKerKQS9RP1XoHozdGduqeMB4=_18eebb0e074:480eb0:5edf391c",
          age: 446104108,
          timestamp: 1713351221364,
        },
      ],
      "1713351600000": [
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/17/palo-alto-firewalls-public-exploits-rising-attacks-ineffective-mitigation",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18eebc03b9a:4971a8:5edf391c",
          age: 447110482,
          timestamp: 1713352227738,
        },
        {
          url: "https://www.youtube.com/watch?v=zV9SsNUw7OQ",
          firstEntryId:
            "3hRwpwNNCseDIl6KrppgiZ59RXmZUC7BnGlrGl//oa4=_18eebc60a47:4a01f8:5edf391c",
          age: 447491071,
          timestamp: 1713352608327,
        },
        {
          url: "https://gate15.global/weekly-security-sprint-ep-60-copy",
          firstEntryId:
            "qdH7e8Amj9ftxCfr0Yv9xgCdur6aHwDDYvKpCDhmyAs=_18eebd4c746:4b6e0e:5edf391c",
          age: 448456958,
          timestamp: 1713353574214,
        },
        {
          url: "https://infosec.place/users/buherator",
          firstEntryId:
            "gUuQjJKP3WYWbOSFsN5p7FerQIEpXjaPrA0wNbIjAJ0=_18eebe011ec:4c9ea1:5edf391c",
          age: 449196964,
          timestamp: 1713354314220,
        },
      ],
      "1713355200000": [
        {
          url: "https://www.itsecuritynews.info/exploitation-of-palo-alto-firewall-vulnerability-picking-up-after-poc-release",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18eebedcc2a:4de6f6:5edf391c",
          age: 450096610,
          timestamp: 1713355213866,
        },
        {
          url: "https://www.detectionengineering.net/p/det-eng-weekly-66-i-sense-sisense",
          firstEntryId:
            "zCA9pGADeTWffD4DfjOTnlGBqqiej6w0Lyq7tWl7oVs=_18eebf44ece:4df184:e56ebecb",
          age: 450523270,
          timestamp: 1713355640526,
        },
        {
          url: "https://vulners.com/githubexploit/5A899418-9216-54F5-ACEC-E7524A5E4F48",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18eebf8c0da:4ee963:5edf391c",
          age: 450814610,
          timestamp: 1713355931866,
        },
        {
          url: "https://old.reddit.com/r/sysadmin/comments/1c66aj2/palo_alto_cve20243400_mitigations_not_effective",
          firstEntryId:
            "0aiHWIwZY/cXC9QcdWCRbEJtPOeU/ssoWDBATyosnhw=_18eec0653f5:4fa2ab:e56ebecb",
          age: 451704237,
          timestamp: 1713356821493,
        },
        {
          url: "https://infosec.exchange/@jbhall56/112286566424454591",
          firstEntryId:
            "ncOfFWELWC4KmgwVsnGksy4LJNJ1kt2jjs2SRezwZ5g=_18eec0c0d0c:502056:e56ebecb",
          age: 452079300,
          timestamp: 1713357196556,
        },
      ],
      "1713358800000": [
        {
          url: "https://infosec.exchange/@threatcodex/112286691013332810",
          firstEntryId:
            "YaLfFqJNbyKEDem8JjhuzNKUD5Xmgcsq2w7S47JGA8c=_18eec2ab79b:53312a:e56ebecb",
          age: 454089043,
          timestamp: 1713359206299,
        },
        {
          url: "https://github.com/golang/vulndb/issues/2730",
          firstEntryId:
            "Xrh+ELNhA2jGcuchWvKG9pIPzOtK2ia/s1yVCpJX7CE=_18eec364961:54647a:e56ebecb",
          age: 454847257,
          timestamp: 1713359964513,
        },
        {
          url: "https://www.theregister.com/2024/04/17/researchers_exploit_code_for",
          firstEntryId:
            "D8yc1qZmHgLecxuR+qWJrgjSlgGZ6ZthRujg5ntX2RQ=_18eec4272dd:55ffd1:5edf391c",
          age: 455644309,
          timestamp: 1713360761565,
        },
        {
          url: "https://on2it.net/cve-2024-3400-pan-os-frequently-asked-questions",
          firstEntryId:
            "fy5aYiTFEu3pxVfhcgwp0krOFhlbc6T4hqETCtRmRPo=_18eec466556:566866:5edf391c",
          age: 455902990,
          timestamp: 1713361020246,
        },
        {
          url: "https://github.com/ZephrFish/CVE-2024-3400-Canary",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18eec49abcc:56b982:5edf391c",
          age: 456117636,
          timestamp: 1713361234892,
        },
        {
          url: "https://infosec.exchange/@ntkramer/112286861614280334",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18eec4f4a6a:56d1d0:e56ebecb",
          age: 456485922,
          timestamp: 1713361603178,
        },
        {
          url: "https://noc.social/@AAKL/112286858676238752",
          firstEntryId:
            "CnEuTfnBM2VRdj31zFQOjX+IQr5+8lPqQ0CKzqSv684=_18eec4fed18:56de9d:e56ebecb",
          age: 456527568,
          timestamp: 1713361644824,
        },
      ],
      "1713362400000": [
        {
          url: "https://infosec.exchange/@da_667/112286832319336181",
          firstEntryId:
            "hO1+MbvB8dcDs7mhSeGfFOkUXG7t3v7UNKcqaNnD2NU=_18eec5f8d0c:586586:e56ebecb",
          age: 457551556,
          timestamp: 1713362668812,
        },
        {
          url: "https://inthewild.io/vuln/CVE-2024-3400",
          firstEntryId:
            "hI4ltQzF2VBy1mjjK7aOlHJk2ZuA15Z0Alm11KKG6v4=_18eec674eeb:59b188:5edf391c",
          age: 458059939,
          timestamp: 1713363177195,
        },
        {
          url: "https://www.cysecurity.news/2024/04/zero-day-exploitation-of-palo-alto.html",
          firstEntryId:
            "hKxARfAp8BfxHzRywxJumiOWvuXas1mA4lxvyB4l0Pw=_18eec692705:59dcc9:5edf391c",
          age: 458180797,
          timestamp: 1713363298053,
        },
        {
          url: "https://www.heise.de/en/news/Palo-Alto-Firewalls-Increased-attacks-and-emergence-of-proofs-of-concept-9688357.html",
          firstEntryId:
            "4T/PghRC/a6v9T0ejBegX/GEsjAgMJyc8lNw9n5H4TY=_18eec7996cc:5af6f5:e56ebecb",
          age: 459257988,
          timestamp: 1713364375244,
        },
        {
          url: "https://www.thestack.technology/pan-os-pwnage-howler-disabling-telemetry-actually-no-help",
          firstEntryId:
            "709L47eFHvpDKb1vhzuaoQTX3phaezj1/XzO92WodqU=_18eec7b3c13:1f4b99:5c6f62c1",
          age: 459365835,
          timestamp: 1713364483091,
        },
        {
          url: "https://www.metacurity.com/p/cybercrims-dangle-300-tmoble-verizon-employees-perform-sim-swaps",
          firstEntryId:
            "wzpjC4YTOauBUSTU0AVKKBChOfD+cWWXAI/eavSzbH4=_18eec8ce517:5d03e5:e56ebecb",
          age: 460523215,
          timestamp: 1713365640471,
        },
      ],
      "1713366000000": [
        {
          url: "https://infosec.exchange/@chort/112287176442865530",
          firstEntryId:
            "5XztaGwd0j5tG3Gl/9NOMRpN98wwOkMYjG5rvDilvyA=_18eec9b74c1:5f2af2:5edf391c",
          age: 461477497,
          timestamp: 1713366594753,
        },
        {
          url: "https://infosec.exchange/@hdm/112287238288517723",
          firstEntryId:
            "aK0F69+thWluSgJd130XBmdsuyWgPYvcIpEGDMAUG24=_18eecad1ab8:60daec:5edf391c",
          age: 462634096,
          timestamp: 1713367751352,
        },
        {
          url: "https://infosec.exchange/@simontsui/112287285321273232",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18eecb28011:6152db:5edf391c",
          age: 462987721,
          timestamp: 1713368104977,
        },
        {
          url: "https://vulnera.com/newswire/exploit-code-released-for-critical-pan-os-vulnerability-immediate-patching-urged",
          firstEntryId:
            "fHw/pxWHd05zGOS4Qs4kHlH8dy7epdhYRlEN3zpimxU=_18eecbafc81:61d696:e56ebecb",
          age: 463543865,
          timestamp: 1713368661121,
        },
        {
          url: "https://www.reddit.com/r/InfoSecNews/comments/1c6d7du/palo_alto_putting_the_protecc_in_globalprotect",
          firstEntryId:
            "EocB/s+RfkTYXL02pjF9oyUqQaIR3VKg2qUJUDxGfqI=_18eecc8ce00:633376:e56ebecb",
          age: 464449464,
          timestamp: 1713369566720,
        },
      ],
      "1713369600000": [
        {
          url: "https://old.reddit.com/r/InfoSecNews/comments/1c6d7du/palo_alto_putting_the_protecc_in_globalprotect",
          firstEntryId:
            "wo4F9hdBqOhsNQE3NelkfdeKOw4f0x/7Kt8RZWdmtZ8=_18eecced5b4:63c92d:e56ebecb",
          age: 464844652,
          timestamp: 1713369961908,
        },
        {
          url: "https://blog.badsectorlabs.com/last-week-in-security-lwis-2024-04-16.html",
          firstEntryId:
            "vB6o3SRzCC/WzRgUUueJRrPxEu8REFILcxg3Afxt2yo=_18eeccf30a2:63d2e1:e56ebecb",
          age: 464867930,
          timestamp: 1713369985186,
        },
        {
          url: "https://www.threatshub.org/blog/exploit-code-for-palo-alto-networks-zero-day-now-public",
          firstEntryId:
            "/d9kNdX3X+lE2UWuQ2O5qyVZ6zzhrPidh1dYQ18BEmM=_18eecd35c0c:643b7e:e56ebecb",
          age: 465141188,
          timestamp: 1713370258444,
        },
        {
          url: "https://techcrunch.com/2024/04/17/palo-alto-networks-firewall-bug-under-attack-brings-fresh-havoc-to-thousands-of-companies",
          firstEntryId:
            "UslGFgEa1SwhsmM8T/h65ij0OTSAMRk+l0DmHGctP5c=_18eecd5c3e1:64d75e:5edf391c",
          age: 465298841,
          timestamp: 1713370416097,
        },
        {
          url: "https://packetstormsecurity.com/files/178099/paloalto-exec.txt",
          firstEntryId:
            "KDl0BkGTqinlaH/s0OKdvD6D4/YB/KaNuePDv2cGnl4=_18eecd9510f:6561dd:5edf391c",
          age: 465531591,
          timestamp: 1713370648847,
          sourceType: ["Vendor"],
        },
        {
          url: "https://www.hackread.com/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "sOIOjCjJnkKXFo6UBysC+QGfvnItWZBqUDPLveEI2Yw=_18eecdcb413:65315b:e56ebecb",
          age: 465753547,
          timestamp: 1713370870803,
        },
        {
          url: "https://www.hackread.com/xiid-sealedtunnel-unfazed-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "EfpOW7f4qEYW83Rt94rSqTCwTpFJ85YCQxDURNKlCoc=_18eecdcdfe4:65387a:e56ebecb",
          age: 465764764,
          timestamp: 1713370882020,
        },
        {
          url: "https://www.nextbigfuture.com/2024/04/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400.html",
          firstEntryId:
            "zPd5SSUGabQKyZS38CmFNwnSR8CvvBqDQ0JATgUZf5Q=_18eecddf256:65593e:e56ebecb",
          age: 465835022,
          timestamp: 1713370952278,
        },
        {
          url: "https://cybersecuritymarket.com/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "ScZYzDrQvpDIKYpUwCd7Jg6ZpXkawsudIS2KItU2GV4=_18eece0274e:6599f5:e56ebecb",
          age: 465979654,
          timestamp: 1713371096910,
        },
        {
          url: "https://techstartups.com/2024/04/17/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "rJTuODe5EJXvKxZSSnjFNoY7cO07zirlHVB64FmergA=_18eece0a62e:65a6ea:e56ebecb",
          age: 466012134,
          timestamp: 1713371129390,
        },
        {
          url: "https://www.isstories.com/2024/04/17/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "vk+WxDbM2ICJHo4Amg7cEuX43qXnMlCrPLxvbE46ZxM=_18eecec66b8:66c244:e56ebecb",
          age: 466782320,
          timestamp: 1713371899576,
        },
        {
          url: "https://social.skynetcloud.site/@jos1264/112287547665936901",
          firstEntryId:
            "CRoMYt6J42TpeOUa6T1O6oI+/vPLwCmqFAxAIHk7LnU=_18eecf05a55:6728f5:e56ebecb",
          age: 467041293,
          timestamp: 1713372158549,
        },
        {
          url: "https://www.thenetworkdna.com/2024/04/pan-os-os-command-injection.html",
          firstEntryId:
            "XC3+LpMPuJVHfVEiGZ2qDtLBhNIT5Yic3P0G4jILuiY=_18eecf63124:6881a0:5edf391c",
          age: 467423964,
          timestamp: 1713372541220,
        },
        {
          url: "https://infosec.exchange/@jerry/112287566233574603",
          firstEntryId:
            "323lbzmCsLkXRHxad1uYPLgWEAs00jrB2cw02HDGG0Q=_18eecf843b7:68b6da:5edf391c",
          age: 467559791,
          timestamp: 1713372677047,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c6e5uu/cve20243400_cloud_firewalls_vulnerable",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18eecf97e65:21d82d:5c6f62c1",
          age: 467640349,
          timestamp: 1713372757605,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/0000000000...84ff83d982",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eecfb7d31:691209:5edf391c",
          age: 467771113,
          timestamp: 1713372888369,
        },
        {
          url: "https://zephyrnet.com/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400-tech-startups",
          firstEntryId:
            "DC1DusD2C00F4h+kToP/eOxScBW+7b0xPnIQkZb1jEo=_18eecfe37cf:688c4a:e56ebecb",
          age: 467949959,
          timestamp: 1713373067215,
        },
      ],
      "1713373200000": [
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/84ff83d982...f14cd995f3",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eed038e1b:697fb2:e56ebecb",
          age: 468299731,
          timestamp: 1713373416987,
        },
        {
          url: "https://www.itsecuritynews.info/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18eed048376:69e41f:5edf391c",
          age: 468362542,
          timestamp: 1713373479798,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/62d98457a4...ea78815402",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eed096658:6ab7b0:5edf391c",
          age: 468682768,
          timestamp: 1713373800024,
        },
        {
          url: "https://sploitus.com/exploit?id=PACKETSTORM:178099",
          firstEntryId:
            "uUk9xP+WETRwnqcC8VI2L9INeKT7jusZsDwLpdGutOw=_18eed0985b4:6a2c9c:e56ebecb",
          age: 468690796,
          timestamp: 1713373808052,
        },
        {
          url: "https://vulners.com/hackread/HACKREAD:9CABCB5D463A9901CFDDDD1EAA446387",
          firstEntryId:
            "Xd0aPXvYBJTZqdixdN2RNf2VS4Zwx2lieo+L9qmSRn0=_18eed0bd3b6:6af550:5edf391c",
          age: 468841838,
          timestamp: 1713373959094,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/1d9363d3ff...6a492f0f6d",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eed0ef0a1:6b3c48:5edf391c",
          age: 469045849,
          timestamp: 1713374163105,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/bb3ce62c24...0696de6664",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eed17e973:6b8007:e56ebecb",
          age: 469633835,
          timestamp: 1713374751091,
        },
        {
          url: "https://buttondown.email/grugq/archive/april-17-2024",
          firstEntryId:
            "NAWb1kidaYqkaZB6yL328qXzyQvPRS29TA4JBQ97UeM=_18eed18e5ec:6c3122:5edf391c",
          age: 469698468,
          timestamp: 1713374815724,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/0696de6664...c7972b527c",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eed1f10dc:6cc870:5edf391c",
          age: 470102676,
          timestamp: 1713375219932,
        },
      ],
      "1713376800000": [
        {
          url: "https://infosecwriteups.com/cve-2024-3400-a-critical-vulnerability-in-pan-os-firewalls-a7f8c66a10d2?source=rss----7b722bfd1b8d--bug_bounty",
          firstEntryId:
            "2tABGSunRQeNJaaWL/zuN2t1bq5Frbwl7+nuERlTy5k=_18eed3f17ea:6e7cef:5edf391c",
          age: 472201634,
          timestamp: 1713377318890,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c6f0j8/panorama_appliances_are_not_impacted_by_this",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18eed402915:6e4d5d:e56ebecb",
          age: 472271565,
          timestamp: 1713377388821,
        },
        {
          url: "https://buaq.net/go-234866.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18eed46138c:6f0f36:e56ebecb",
          age: 472659268,
          timestamp: 1713377776524,
        },
        {
          url: "https://cybersecuritynews.com/critical-firewall-vulnerability",
          firstEntryId:
            "TUUqTqS5PmAnvMYxpxsJW4lVFUYs0KVkqWEL+fdotps=_18eed481a91:2342ea:5c6f62c1",
          age: 472792137,
          timestamp: 1713377909393,
        },
        {
          url: "https://markets.businessinsider.com/news/currencies/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400-1033259031",
          firstEntryId:
            "L7myM9IaOU4vlI7M6D5Qkz2R2Ir0rZVk+VROFVGnbhw=_18eed4cc3f1:236b98:5c6f62c1",
          age: 473097641,
          timestamp: 1713378214897,
        },
        {
          url: "https://gbhackers.com/critical-firewall-vulnerability",
          firstEntryId:
            "Q4wiXXFi8jS6j6t0RmDrzdtXMuNdo6w12oeV7+BzkPA=_18eed52b4d2:70afbd:5edf391c",
          age: 473486986,
          timestamp: 1713378604242,
        },
        {
          url: "https://infosec.exchange/@cR0w/112287970920051475",
          firstEntryId:
            "o6LfjZ0B4cwgl3XmYCQP/ENgjlgF/30ZBk1nZXK/bek=_18eed569222:7117f5:5edf391c",
          age: 473740250,
          timestamp: 1713378857506,
        },
        {
          url: "https://allinfosecnews.com/item/cve-20243400-a-critical-vulnerability-in-pan-os-firewalls-2024-04-17",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18eed56ded1:713e68:e56ebecb",
          age: 473759881,
          timestamp: 1713378877137,
        },
        {
          url: "http://www.cyberkendra.com/2024/04/cve-2024-3400-palo-alto-networks.html",
          firstEntryId:
            "zcRirLmwriL0X893IkcGls5ob9qkbAvWsls6NbcWHic=_18eed6c0120:730ae6:e56ebecb",
          age: 475144920,
          timestamp: 1713380262176,
        },
        {
          url: "https://www.cyberkendra.com/2024/04/cve-2024-3400-palo-alto-networks.html",
          firstEntryId:
            "OXGw9E9Zr5U+6eQlfn0tmrQjjUcckIhJfa22qfqeOIo=_18eed6d6838:7351e3:5edf391c",
          age: 475236848,
          timestamp: 1713380354104,
        },
        {
          url: "https://klse.i3investor.com/web/blog/detail/future_tech/2024-04-17-story-h-183716043-Exploit_code_for_Palo_Alto_Networks_zero_day_now_public",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18eed6e10f4:7362e8:5edf391c",
          age: 475280044,
          timestamp: 1713380397300,
        },
      ],
      "1713380400000": [
        {
          url: "https://www.itsecuritynews.info/zero-day-exploitation-of-palo-alto-networks-firewall-allows-backdoor-installation",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18eed7089bb:73a01c:5edf391c",
          age: 475442035,
          timestamp: 1713380559291,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c6hhmt/tsf_before_upgrade",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18eed774720:743c91:5edf391c",
          age: 475883736,
          timestamp: 1713381000992,
        },
        {
          url: "https://hackernoon.com/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "kokHztnMh5aN8+W+ks+BFlGYHL9+YPZKQ7qHWGQwPwM=_18eed77d2b7:740535:e56ebecb",
          age: 475919471,
          timestamp: 1713381036727,
        },
        {
          url: "https://allinfosecnews.com/item/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400-2024-04-17--1",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18eed8a2eb5:75f263:5edf391c",
          age: 477122669,
          timestamp: 1713382239925,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/temp/upload-manifest/209846764-1713377988",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eed989fb4:772d74:5edf391c",
          age: 478069100,
          timestamp: 1713383186356,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/7e651f7661...96ed011ef1",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eed9fe6f1:24eb94:5c6f62c1",
          age: 478546089,
          timestamp: 1713383663345,
        },
        {
          url: "https://infosecwriteups.com/cve-2024-3400-a-critical-vulnerability-in-pan-os-firewalls-a7f8c66a10d2",
          firstEntryId:
            "GO/ExSzFEYKECCaw7/UhbjqMz0KBvFnhOpBzAhXaA/o=_18eeda0e417:77d51b:5edf391c",
          age: 478610895,
          timestamp: 1713383728151,
        },
      ],
      "1713384000000": [
        {
          url: "https://www.enterprisesecuritytech.com/post/widespread-vulnerabilities-in-cybersecurity-software-expose-risks-beyond-palo-alto-networks",
          firstEntryId:
            "+BwWtu8C6pDS6ReTwgzOg/g5ZPbW8+NYRaqjYawwWW0=_18eedcb6449:7b0931:e56ebecb",
          age: 481396225,
          timestamp: 1713386513481,
        },
        {
          url: "https://github.com/ak1t4/CVE-2024-3400/compare/4ac6078a67...4c1c9ecf1c",
          firstEntryId:
            "GoEdfMUlTBXunj3NtrpvzraL/KmrZ/s2Yq1SQoLKamk=_18eedd5f971:7bcf8e:e56ebecb",
          age: 482089769,
          timestamp: 1713387207025,
        },
      ],
      "1713387600000": [
        {
          url: "https://www.youtube.com/watch?v=S1oU_bypMUE",
          firstEntryId:
            "olrhdW4OUj71ZwF/t3sBCiF+CHwra1USZkvRGhRDnQ8=_18eede102fd:7ccb41:5edf391c",
          age: 482813109,
          timestamp: 1713387930365,
        },
        {
          url: "https://sploitus.com/exploit?id=1337DAY-ID-39564",
          firstEntryId:
            "g3c3uqnYWAxGdH4v4IZcr/yluDS8l6KCs29aH0+cGWo=_18eede1b102:25f5be:5c6f62c1",
          age: 482857658,
          timestamp: 1713387974914,
        },
        {
          url: "https://www.picussecurity.com/resource/blog/cve-2024-3400-palo-alto-pan-os-command-injection-vulnerability-explained",
          firstEntryId:
            "4Qghfl1fiG/tkzg+TgNOjFyT4cdIDkUZMXHOhRfrvuI=_18eede5d4f9:7cff53:e56ebecb",
          age: 483129009,
          timestamp: 1713388246265,
        },
        {
          url: "https://securityboulevard.com/2024/04/cve-2024-3400-palo-alto-networks-zero-day-exploited-in-the-wild",
          firstEntryId:
            "YJh9S8uRsE1zXoVcDid4JH2RrzBVE5q3ux9wNUHZA+8=_18eedf0b9d9:7de5f3:e56ebecb",
          age: 483842961,
          timestamp: 1713388960217,
        },
        {
          url: "https://latesthackingnews.com/2024/04/17/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "25DTAexDkMCj2jeFMbz5gQ6kap45swsYQ4T3ezU1LTU=_18eedffef9c:7f296b:5edf391c",
          age: 484839764,
          timestamp: 1713389957020,
        },
      ],
      "1713391200000": [
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-17",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18eee172351:80f0c4:5edf391c",
          age: 486360329,
          timestamp: 1713391477585,
        },
        {
          url: "https://mastodon.social/@campuscodi/112288868555813515",
          firstEntryId:
            "33bpJLSz6tNkDyUO9q88blZt0AUSXoZolAOTjRlD70g=_18eee26fba1:823215:e56ebecb",
          age: 487398745,
          timestamp: 1713392516001,
        },
        {
          url: "https://mastodon.social/@snoopgod/112288732538888212",
          firstEntryId:
            "ftEg9kkgdekeWtCAL4vyEGLtcaXJxByEodw3D8MZTao=_18eee405fc6:83c3d9:5edf391c",
          age: 489062782,
          timestamp: 1713394180038,
        },
      ],
      "1713394800000": [
        {
          url: "https://www.redpacketsecurity.com/cisa-palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-18-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18eee4b39d1:8479c8:5edf391c",
          age: 489773961,
          timestamp: 1713394891217,
        },
        {
          url: "https://mastodon.social/@RedPacketSecurity/112289044555044351",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18eee4c0c3c:848604:5edf391c",
          age: 489827828,
          timestamp: 1713394945084,
        },
        {
          url: "https://www.facebook.com/467773418726516/posts/844494857721035",
          firstEntryId:
            "6FOG0FQhTEeZfDIL06cBcSQ9fw73Ym9gNii7XsqKGW8=_18eee5db6fc:859adb:5edf391c",
          age: 490985652,
          timestamp: 1713396102908,
          sourceType: ["Vulnerability", "Vendor"],
        },
      ],
      "1713398400000": [
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c6ntjw/cve_20243400_remediation_guidance",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18eee8667ef:888895:e56ebecb",
          age: 493652391,
          timestamp: 1713398769647,
        },
      ],
      "1713402000000": [
        {
          url: "https://www.zscaler.com/blogs/security-research/look-cve-2024-3400-activity-and-upstyle-backdoor-technical-analysis",
          firstEntryId:
            "ddVelp76vh2mHJXD1a2g2Wo4KgoyAHsFBmNnVNkLmNw=_18eeec4fc94:293e20:5c6f62c1",
          age: 497753676,
          timestamp: 1713402870932,
        },
        {
          url: "https://infosec.exchange/@simontsui/112289616408083706",
          firstEntryId:
            "CoIqzDERS/4OJMp31pEAHWxx1OxUYeFH61qQMdBJQM8=_18eeed0f857:8d6bc8:5edf391c",
          age: 498539023,
          timestamp: 1713403656279,
        },
        {
          url: "https://isc.sans.edu/diary/rss/30852",
          firstEntryId:
            "0F4cXjhiHMt9nhQEwQxU1upWINuhKgo8lM5Ak7O5tRs=_18eeedaf3f9:8df044:5edf391c",
          age: 499193265,
          timestamp: 1713404310521,
        },
        {
          url: "https://isc.sans.edu/diary/30852",
          firstEntryId:
            "74q9lJ/bCOboy8PQErMnv12yqyIFXdEZWfy7UEUgKQM=_18eeedc17a8:8e82b2:e56ebecb",
          age: 499267936,
          timestamp: 1713404385192,
        },
        {
          url: "https://github.com/retkoussa/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18eeedc90c6:8e0660:5edf391c",
          age: 499298942,
          timestamp: 1713404416198,
        },
      ],
      "1713405600000": [
        {
          url: "https://isc.sans.edu/podcastdetail/8944",
          firstEntryId:
            "LnTiuqNsg4PTruEgUUOGx+3szIOr4xHuGIhm9w8600I=_18eeeeef99a:8f9c4c:e56ebecb",
          age: 500505426,
          timestamp: 1713405622682,
        },
        {
          url: "https://allinfosecnews.com/item/isc-stormcast-for-thursday-april-18th-2024-2024-04-18",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18eef0d492b:916e3d:e56ebecb",
          age: 502491875,
          timestamp: 1713407609131,
        },
        {
          url: "https://www.ironcastle.net/a-vuln-is-a-vuln-unless-the-cve-for-it-is-after-feb-12-2024-wed-apr-17th",
          firstEntryId:
            "9WabeWuJ3Zql0kvPTQ2G9ef4VJjD/jACIO4eLLotTNs=_18eef1af383:9233a6:e56ebecb",
          age: 503387451,
          timestamp: 1713408504707,
        },
      ],
      "1713409200000": [
        {
          url: "https://www.redpacketsecurity.com/palo-alto-products-remote-code-execution-vulnerability-18-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18eef2620e3:92c186:e56ebecb",
          age: 504119963,
          timestamp: 1713409237219,
        },
        {
          url: "https://community.fortinet.com/t5/FortiSIEM-Discussions/Tuning-FortiSIEM-Rule-CVE-2024-3400-PAN-OS-OS-Command-Injection/m-p/310272",
          firstEntryId:
            "Q6cbx/pG8M73P8yT5eqn/V9NPh7Dfob6ciCNfHNXRY0=_18eef4209bd:93ea48:5edf391c",
          age: 505949045,
          timestamp: 1713411066301,
        },
        {
          url: "https://securityboulevard.com/2024/04/palo-alto-networks-pan-os-command-injection-vulnerability-cve-2024-3400",
          firstEntryId:
            "VixGQn7BQOoDmp2HbThPwlidx2XQo8WkrEnyMwEsVd0=_18eef4a5fdf:953c9f:e56ebecb",
          age: 506495383,
          timestamp: 1713411612639,
        },
      ],
      "1713412800000": [
        {
          url: "https://www.orangecyberdefense.com/global/blog/cybersecurity/threat-level-5/5-cve-2024-3400-critical-0day-in-palo-altos-globalprotect-gateway-exploited-in-the-wild",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18eef5fd935:9680c4:e56ebecb",
          age: 507902701,
          timestamp: 1713413019957,
        },
        {
          url: "https://ciso2ciso.com/exploit-code-for-palo-alto-networks-zero-day-now-public-source-go-theregister-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18eef6350f7:95fb2f:5edf391c",
          age: 508129967,
          timestamp: 1713413247223,
        },
        {
          url: "https://thecyberpost.com/tools/exploits-cve/palo-alto-os-command-injection-proof-of-concept",
          firstEntryId:
            "21E8ZoE91PF8mdoj117QvnpzvhwHA5gLRyJBpS/63w0=_18eef67dd11:96397a:5edf391c",
          age: 508427977,
          timestamp: 1713413545233,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-pan-os-command-injection-vulnerability-cve-2024-3400",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18eef7c8528:987aac:e56ebecb",
          age: 509781728,
          timestamp: 1713414898984,
        },
        {
          url: "https://buaq.net/go-234977.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18eef8a1a0b:98809a:5edf391c",
          age: 510671811,
          timestamp: 1713415789067,
        },
        {
          url: "https://unsafe.sh/go-234977.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18eef8b5f60:989311:5edf391c",
          age: 510755096,
          timestamp: 1713415872352,
        },
      ],
      "1713416400000": [
        {
          url: "https://www.getinfosec.news/54859379/palo-alto-firewalls-public-exploits-rising-attacks-ineffective-mitigation",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18eef96d247:9a23ed:e56ebecb",
          age: 511505407,
          timestamp: 1713416622663,
        },
        {
          url: "https://www.getinfosec.news/54860215/researchers-released-exploit-code-for-actively-exploited-palo-alto-pan-os-bug",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18eef9e6579:9a9810:e56ebecb",
          age: 512001841,
          timestamp: 1713417119097,
        },
        {
          url: "https://www.getinfosec.news/54860574/operation-midnighteclipse-hackers-actively-exploiting-palo-alto-networks-zero-day-flaw",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18eefa5b9de:9a401a:5edf391c",
          age: 512482198,
          timestamp: 1713417599454,
        },
        {
          url: "https://www.getinfosec.news/54860683/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18eefacf189:9b9c67:e56ebecb",
          age: 512955201,
          timestamp: 1713418072457,
        },
        {
          url: "https://news.risky.biz/corporate-freeloading-makes-open-source-vulnerable",
          firstEntryId:
            "ou/qMWN7MKkICefbeKM8HodVOLLExrx7WdEyMBKLtH0=_18eefb2ae2e:9c000d:e56ebecb",
          age: 513331174,
          timestamp: 1713418448430,
        },
        {
          url: "https://www.getinfosec.news/54861676/palo-alto-networks-pan-os-command-injection-vulnerability-cve-2024-3400",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18eefc1d654:9c2532:5edf391c",
          age: 514324492,
          timestamp: 1713419441748,
        },
        {
          url: "https://www.getinfosec.news/54862045/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18eefc8f109:2ca354:5c6f62c1",
          age: 514790081,
          timestamp: 1713419907337,
        },
      ],
      "1713420000000": [
        {
          url: "https://healsecurity.com/unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "8Cns9GQd1kOqrAzP31rDT7JbFVB4amIG0VrvYfMiJeQ=_18eefceb759:9dbabc:e56ebecb",
          age: 515168529,
          timestamp: 1713420285785,
        },
        {
          url: "https://ciso2ciso.com/researchers-released-exploit-code-for-actively-exploited-palo-alto-pan-os-bug-source-securityaffairs-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18eefd0d4b4:9cf500:5edf391c",
          age: 515307116,
          timestamp: 1713420424372,
        },
      ],
      "1713423600000": [
        {
          url: "https://talkback.sh/resource/9367437a-906a-4f38-bc5b-f7fe5f452e9f",
          firstEntryId:
            "nKesiCLbGJVw6X5R+sYcbNieanfzkq4lBhdwoHRc6Cc=_18ef005b503:a1f4dc:e56ebecb",
          age: 518772411,
          timestamp: 1713423889667,
        },
        {
          url: "https://malware.news/t/a-look-at-cve-2024-3400-activity-and-upstyle-backdoor-technical-analysis/80990",
          firstEntryId:
            "LNpcjUMKmQexwVgF2HfeIU2a9mSM/aKVHu+Ysyy8NWM=_18ef00c6ac4:a1cd43:5edf391c",
          age: 519212156,
          timestamp: 1713424329412,
        },
        {
          url: "https://allinfosecnews.com/item/a-look-at-cve-2024-3400-activity-and-upstyle-backdoor-technical-analysis-2024-04-18",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ef01df518:a31efb:5edf391c",
          age: 520361680,
          timestamp: 1713425478936,
        },
      ],
      "1713430800000": [
        {
          url: "https://ciso2ciso.com/palo-alto-networks-pan-os-command-injection-vulnerability-cve-2024-3400-source-securityboulevard-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ef07203ea:aaf486:e56ebecb",
          age: 525870498,
          timestamp: 1713430987754,
        },
        {
          url: "https://healsecurity.com/palo-alto-networks-pan-os-command-injection-vulnerability-cve-2024-3400",
          firstEntryId:
            "8Cns9GQd1kOqrAzP31rDT7JbFVB4amIG0VrvYfMiJeQ=_18ef0a3ec0f:afb944:e56ebecb",
          age: 529141191,
          timestamp: 1713434258447,
        },
      ],
      "1713434400000": [
        {
          url: "https://www.reddit.com/r/SecOpsDaily/comments/1c6l2xz/cve20243400_attackerkb",
          firstEntryId:
            "PuIE2BFn/4CBYAx3LJzIqSmvypFDm2KOKBQavOrnQAE=_18ef0cac257:30ee08:5c6f62c1",
          age: 531686415,
          timestamp: 1713436803671,
        },
      ],
      "1713438000000": [
        {
          url: "https://buaq.net/go-235037.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ef0e9f093:b669bb:e56ebecb",
          age: 533729867,
          timestamp: 1713438847123,
        },
        {
          url: "https://unsafe.sh/go-235037.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ef0eaf5e9:b586f9:5edf391c",
          age: 533796769,
          timestamp: 1713438914025,
        },
        {
          url: "https://medium.com/@report_99285/pwn-enterprises-with-zero-day-exploitation-of-a-vulnerability-cve-2024-3400-on-pan-os-os-command-8625112e9df5",
          firstEntryId:
            "sczeuIBVnPLRAGIox+nEuIpP6qVhLB/xwbfpq2/5nE4=_18ef0f0cdf3:8702ca:fbeaa2c7",
          age: 534179755,
          timestamp: 1713439297011,
        },
      ],
      "1713448800000": [
        {
          url: "https://mrhacker.co/vulnerabilities/palo-alto-networks-releases-urgent-fixes-for-exploited-pan-os-vulnerability",
          firstEntryId:
            "KoLGqAJpJYb6mxhYbkVsIep8p6wvg1X5flnoPi02qCo=_18ef182ab9a:c55500:e56ebecb",
          age: 543739218,
          timestamp: 1713448856474,
        },
        {
          url: "https://gbhackers.com/palo-alto-zeroday-exploited-in-wild",
          firstEntryId:
            "AUwlBlc4C7SbG/RxwkWpWqh5F3Tx6hJQgVeaMawqEDw=_18ef19b2f9e:c7e784:e56ebecb",
          age: 545345878,
          timestamp: 1713450463134,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-zeroday-exploited-in-the-wild-following-poc-release",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ef1a7ae5c:c949de:e56ebecb",
          age: 546164756,
          timestamp: 1713451282012,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/tsf-file-upload/td-p/584230",
          firstEntryId:
            "IAEit3mpaMEyDLBAsYmHB84Wds29glzXBL3gFVwQQlw=_18ef1b370a8:359380:5c6f62c1",
          age: 546935392,
          timestamp: 1713452052648,
          sourceType: ["VendorReference"],
        },
      ],
      "1713452400000": [
        {
          url: "https://blog.exploits.club/exploits-club-weekly-newsletter-17",
          firstEntryId:
            "3PEccIMBjiS/92J/8KeZShCeYr0udMVc6okf+fMqEPo=_18ef1be7ae0:ca4f70:5edf391c",
          age: 547658904,
          timestamp: 1713452776160,
        },
        {
          url: "https://exchange.xforce.ibmcloud.com/report/details/guid:9c7b1128108695e4fed5efeab1ac2d49",
          firstEntryId:
            "lBdsQVehp8ABHSRhzrVrnB1/ssPPcn6712TIhhG5k6s=_18ef1e6d568:cf907a:e56ebecb",
          age: 550303520,
          timestamp: 1713455420776,
          sourceType: ["Vendor"],
        },
        {
          url: "https://www.cybersecuritydive.com/news/palo-alto-networks-firewall-exploits-grow/713605",
          firstEntryId:
            "dg2ydw6+jmTTaTr7hKmtIeGwl/OZCgk5CbNMBJAYC5w=_18ef1e706ff:ce961c:5edf391c",
          age: 550316215,
          timestamp: 1713455433471,
        },
      ],
      "1713456000000": [
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/intermittent-inet-connectivity-after-updating-to-10-2-8-h3/td-p/584240",
          firstEntryId:
            "IAEit3mpaMEyDLBAsYmHB84Wds29glzXBL3gFVwQQlw=_18ef1fa22fd:370f17:5c6f62c1",
          age: 551568565,
          timestamp: 1713456685821,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://redskyalliance.org/xindustry/fixes-for-zero-day-as-attackers-swarm-vpn-vulnerability",
          firstEntryId:
            "91heEr9X7JQvTMGXzJJUKifczrTOEe98JDv/l4GcX2U=_18ef1fd1937:d0c0f2:5edf391c",
          age: 551762671,
          timestamp: 1713456879927,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-zeroday-exploited-in-the-wild-following-poc-release-2024-04-18",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ef20ff2da:d3f390:e56ebecb",
          age: 552998034,
          timestamp: 1713458115290,
        },
      ],
      "1713463200000": [
        {
          url: "https://global.factiva.com/redir/default.aspx?p=sta&napc=z&ep=AL&ft=g&aid=9KAU000400&ns=18&fid=302794545&fn=Factiva%2FTietoturva&cat=b&an=BC10758020240418ek4h00009",
          firstEntryId:
            "78Hp1L3W7z08bcC4K/met9/iSNXef7awXAHIfW5QQa8=_18ef269a7ff:dbf528:5edf391c",
          age: 558877111,
          timestamp: 1713463994367,
        },
        {
          url: "https://vulners.com/githubexploit/14C59CE0-8AF0-5659-A36D-47D91DEBF010",
          firstEntryId:
            "Xd0aPXvYBJTZqdixdN2RNf2VS4Zwx2lieo+L9qmSRn0=_18ef26f742a:dcc5db:e56ebecb",
          age: 559257058,
          timestamp: 1713464374314,
        },
        {
          url: "https://vulners.com/githubexploit/64C6A665-1056-54C4-A65B-D2454D1344FB",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18ef2715715:dcae4f:5edf391c",
          age: 559380685,
          timestamp: 1713464497941,
        },
      ],
      "1713466800000": [
        {
          url: "https://readme.synack.com/changelog-sandworm-becomes-apt44",
          firstEntryId:
            "YeNhNF4yLnd1UoA+1sAdpB38u982Tsqn4GyIurzQ4Fk=_18ef2b68d44:e32cbd:e56ebecb",
          age: 563916540,
          timestamp: 1713469033796,
        },
        {
          url: "https://github.com/swaybs/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ef2b86d1a:e30901:5edf391c",
          age: 564039378,
          timestamp: 1713469156634,
        },
        {
          url: "https://news.tuxmachines.org/n/2024/04/18/Security_Leftovers.1.shtml",
          firstEntryId:
            "TseNKzib4elY5qG1ABQlRm6+GlZu9xbszvzmnVMfOaA=_18ef2c289b4:e3e064:5edf391c",
          age: 564702060,
          timestamp: 1713469819316,
        },
      ],
      "1713474000000": [
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-18",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18ef336e6c7:ed7a29:e56ebecb",
          age: 572328063,
          timestamp: 1713477445319,
        },
        {
          url: "https://quointelligence.eu/2024/04/weekly-threat-intelligence-snapshot-week-16-2024",
          firstEntryId:
            "p8yAa2hWS/16bHKYwh9JkezNeOLXJ5agh+tA9LrlOaI=_18ef338b984:ed1068:5edf391c",
          age: 572447548,
          timestamp: 1713477564804,
        },
      ],
      "1713477600000": [
        {
          url: "https://malware.news/t/threat-intelligence-snapshot-week-16-2024/81037",
          firstEntryId:
            "tln/RgdbhTE7lkp1QinACL+ab1pmoomH5ck8KZfsynk=_18ef33a8f4c:edb5ff:e56ebecb",
          age: 572567812,
          timestamp: 1713477685068,
        },
      ],
      "1713481200000": [
        {
          url: "https://www.redpacketsecurity.com/cisa-palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-19-04-2024",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18ef3713772:f183b9:e56ebecb",
          age: 576149802,
          timestamp: 1713481267058,
        },
        {
          url: "https://cyberplace.social/@GossiTheDog/112294744601373933",
          firstEntryId:
            "Xrh+ELNhA2jGcuchWvKG9pIPzOtK2ia/s1yVCpJX7CE=_18ef37d2db0:f24482:e56ebecb",
          age: 576933736,
          timestamp: 1713482050992,
        },
      ],
      "1713488400000": [
        {
          url: "https://github.com/Ravaan21/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ef402bcbf:fb28a5:5edf391c",
          age: 585686647,
          timestamp: 1713490803903,
        },
        {
          url: "https://www.getinfosec.news/54912335/isc-stormcast-for-thursday-april-18th-2024",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ef408ed7d:fb8c51:e56ebecb",
          age: 586092341,
          timestamp: 1713491209597,
        },
      ],
      "1713495600000": [
        {
          url: "https://www.redpacketsecurity.com/palo-alto-products-remote-code-execution-vulnerability-19-04-2024",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18ef44f2c3a:ffc4bf:e56ebecb",
          age: 590695922,
          timestamp: 1713495813178,
        },
        {
          url: "https://www.forwardnetworks.com/blog/2024/04/15/cve-2024-3400-are-you-at-risk-find-out-in-seconds-with-forward-enterprise",
          firstEntryId:
            "m3OiiQoegm6H76Pyy39g+wV2/ellGHvHFTc0EqzXHz4=_18ef4621418:100d7ad:e56ebecb",
          age: 591934928,
          timestamp: 1713497052184,
        },
      ],
      "1713499200000": [
        {
          url: "https://buaq.net/go-235212.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ef49877a6:1046690:5edf391c",
          age: 595499358,
          timestamp: 1713500616614,
        },
        {
          url: "https://unsafe.sh/go-235212.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ef49b0631:104908e:5edf391c",
          age: 595666921,
          timestamp: 1713500784177,
        },
      ],
      "1713502800000": [
        {
          url: "https://www.smarttech247.com/news/cybersecurity-week-in-review-17-04-24",
          firstEntryId:
            "GcXHz++G9A6RSf/5jBaWg34GU3pzjHfV6zwEqhlaf5U=_18ef4bcc3e4:106bd86:5edf391c",
          age: 597878172,
          timestamp: 1713502995428,
        },
        {
          url: "https://www.getinfosec.news/54921066/palo-alto-zeroday-exploited-in-the-wild-following-poc-release",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ef4e35b52:1096244:e56ebecb",
          age: 600407306,
          timestamp: 1713505524562,
        },
      ],
      "1713506400000": [
        {
          url: "https://www.getinfosec.news/54922251/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ef4fbb0a0:10b065f:5edf391c",
          age: 602002008,
          timestamp: 1713507119264,
        },
        {
          url: "https://github.com/Simpsonpt/AppSecEzine/commit/4b62264a57aad5c5adaae87ad1672a500168cc1f",
          firstEntryId:
            "quERmYSKjHgqXLNlvI4nBDHr4SfJ67EbayDkoAQa410=_18ef514cab2:10cc22c:e56ebecb",
          age: 603647082,
          timestamp: 1713508764338,
        },
      ],
      "1713510000000": [
        {
          url: "https://www.picussecurity.com/resource/blog/april-19-top-threat-actors-malware-vulnerabilities-and-exploits",
          firstEntryId:
            "4Qghfl1fiG/tkzg+TgNOjFyT4cdIDkUZMXHOhRfrvuI=_18ef55afb9b:1125c15:e56ebecb",
          age: 608247123,
          timestamp: 1713513364379,
        },
      ],
      "1713513600000": [
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c7r1i3/not_effected_by_cve20243400_when_not_using_gp",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ef5672546:1136912:e56ebecb",
          age: 609044222,
          timestamp: 1713514161478,
        },
      ],
      "1713517200000": [
        {
          url: "https://infosec.exchange/@shadowserver/112297066779077063",
          firstEntryId:
            "0J2dzSmxs0p6Oe3YF7wCVUOhJsAAcGKHyYj9Dr7YcBQ=_18ef59ca059:44db94:5c6f62c1",
          age: 612549137,
          timestamp: 1713517666393,
        },
        {
          url: "https://www.hipaajournal.com/palo-alto-networks-updatedsecurity-advisort-cve-2024-3400",
          firstEntryId:
            "hgXm4l9pl+F1bgZFwXejTG+7hyX8WdkUS9x3XF7/Iys=_18ef59fa337:118692d:5edf391c",
          age: 612746479,
          timestamp: 1713517863735,
        },
      ],
      "1713528000000": [
        {
          url: "https://www.lawfaremedia.org/article/corporate-freeloading-makes-open-source-vulnerable",
          firstEntryId:
            "XNXfD93OItYLJb3NATgRekY+DPOhn1GmlJQk8R4YCCE=_18ef642255b:12782a9:5edf391c",
          age: 623396627,
          timestamp: 1713528513883,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c7vsg1/cve_20243400_breach_impact",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ef662f5a7:12a38d8:e56ebecb",
          age: 625547103,
          timestamp: 1713530664359,
        },
      ],
      "1713531600000": [
        {
          url: "https://infosec.exchange/@chrismerkel/112298171952628645",
          firstEntryId:
            "W5SrGubrzxgKuLMOokTGIX6Y2oq6ED5pj9i4W146cBM=_18ef699fa29:12fe33e:e56ebecb",
          age: 629152737,
          timestamp: 1713534269993,
        },
        {
          url: "https://github.com/pwnj0hn/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ef69bea31:1300b1c:e56ebecb",
          age: 629279721,
          timestamp: 1713534396977,
        },
        {
          url: "https://www.cybersecurity-help.cz/blog/3947.html",
          firstEntryId:
            "RYRjHGVzrClyjZXn0jva8gL0rp3ezlLReoL5fxnD6wA=_18ef6a339cd:49bbbf:5c6f62c1",
          age: 629758853,
          timestamp: 1713534876109,
        },
        {
          url: "https://gritdaily.com/xiid-sealedtunnel-unfazed-by-yet-another-critical-firewall-vulnerability-cve-2024-3400",
          firstEntryId:
            "lN04dNNZ3COICseig3UbtJH3fRT4bAylPuFT8ICJgCw=_18ef6a3db7d:130f071:5edf391c",
          age: 629800245,
          timestamp: 1713534917501,
        },
      ],
      "1713535200000": [
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/cve-2024-2400-ioc-s/td-p/584343",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ef6cdcf7e:134bd11:5edf391c",
          age: 632549686,
          timestamp: 1713537666942,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/cve-2024-3400-ioc-s/m-p/584343",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ef6d4c5a5:135cb21:e56ebecb",
          age: 633005917,
          timestamp: 1713538123173,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/cve-2024-3400-ioc-s/td-p/584343",
          firstEntryId:
            "9Bmf9IEojwpKIVI7cXJmK0hztc3DBessEd5LlEou+8A=_18ef6d56246:135d92e:e56ebecb",
          age: 633046014,
          timestamp: 1713538163270,
          sourceType: ["VendorReference"],
        },
      ],
      "1713538800000": [
        {
          url: "https://blackkite.com/blog/focus-friday-a-comprehensive-analysis-of-cve-2024-3400-and-its-risksfocus-friday-a-comprehensive-analysis-of-cve-2024-3400-and-its-risks",
          firstEntryId:
            "BjSkZVzPHvSO3W/+cSRG7vyveJphY8sK4u2seeJqsi8=_18ef6e321b1:1373a60:e56ebecb",
          age: 633946985,
          timestamp: 1713539064241,
        },
        {
          url: "https://blackkite.com/blog/focus-friday-a-comprehensive-analysis-of-cve-2024-3400-and-its-risks",
          firstEntryId:
            "M+t4G9O9wbiaK+zmSnu62Y7esGTIr8ASD1odCfVthfA=_18ef6e3a687:136cd9f:5edf391c",
          age: 633980991,
          timestamp: 1713539098247,
        },
        {
          url: "https://unsafe.sh/go-235342.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ef6e40e7f:1375497:e56ebecb",
          age: 634007607,
          timestamp: 1713539124863,
        },
        {
          url: "https://buaq.net/go-235342.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ef6e63c00:137911a:e56ebecb",
          age: 634150328,
          timestamp: 1713539267584,
        },
        {
          url: "https://bishopfox.com/blog/pan-os-cve-2024-3400-patch-your-palo-alto-firewalls",
          firstEntryId:
            "VmtkKP3EVRmKAYtVlri68Np90ZUlQuZq+Qp7IrbgpW8=_18ef6efdd3c:13870ac:e56ebecb",
          age: 634781428,
          timestamp: 1713539898684,
        },
        {
          url: "https://www.bleepingcomputer.com/news/security/22-500-palo-alto-firewalls-possibly-vulnerable-to-ongoing-attacks",
          firstEntryId:
            "n9dPOELWwN6V5/2vRbhNH75Z47CIP9w+xFofhOcv0qE=_18ef6f9fcf1:138b063:5edf391c",
          age: 635444905,
          timestamp: 1713540562161,
        },
        {
          url: "https://blog.netmanageit.com/22-500-palo-alto-firewalls-possibly-vulnerable-to-ongoing-attacks",
          firstEntryId:
            "DjLqObdHZsoV/G+ilaJM4jhEcnZ3FpjCLBHKHGWiWc0=_18ef6fc5d66:1398f54:e56ebecb",
          age: 635600670,
          timestamp: 1713540717926,
        },
        {
          url: "https://infosec.exchange/@BleepingComputer/112298588274593871",
          firstEntryId:
            "/JzT/GAy1c6k/LBmuq92T1+zA0ZWAgk6oaGxG5MIl24=_18ef6fd7087:139a4cd:e56ebecb",
          age: 635671103,
          timestamp: 1713540788359,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c7zdxk/guidance_on_doing_factory_reset_and_restore_on",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ef70ae81c:13af0dd:e56ebecb",
          age: 636553684,
          timestamp: 1713541670940,
        },
        {
          url: "https://battle-updates.com/update/c2-tactical-communications-ai-cyber-ew-cloud-computing-and-homeland-security-update-277",
          firstEntryId:
            "W693WeincKE66aYgy6VVJI3gno5dvhWHQX5qL8POiao=_18ef70b4fc5:13a73df:5edf391c",
          age: 636580221,
          timestamp: 1713541697477,
        },
      ],
      "1713542400000": [
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/19/22500-palo-alto-firewalls-possibly-vulnerable-to-ongoing-attacks",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18ef720c4d4:13d13eb:5edf391c",
          age: 637986444,
          timestamp: 1713543103700,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c80ulh/cve20243400_a_guide_for_identifying_if_youve_been",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18ef7259df0:13db0d3:e56ebecb",
          age: 638304168,
          timestamp: 1713543421424,
        },
        {
          url: "https://infosec.exchange/@simontsui/112298826659479405",
          firstEntryId:
            "tQrcdE0E7m6/RFHZguugjyI+kFthN0Yvf9ZAv8hPm8E=_18ef730e758:13eb79a:e56ebecb",
          age: 639043856,
          timestamp: 1713544161112,
        },
        {
          url: "https://allinfosecnews.com/item/22500-palo-alto-firewalls-possibly-vulnerable-to-ongoing-attacks-2024-04-19",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18ef73a3bbe:4cadc4:5c6f62c1",
          age: 639655286,
          timestamp: 1713544772542,
        },
        {
          url: "https://infosec.exchange/@wdormann/112298304737341188",
          firstEntryId:
            "GZkAKsZRkS7QPZ3PnoyF5ydWqnoHDEjavHO7+p7phoI=_18ef73c1d5d:13fd3a7:5edf391c",
          age: 639778581,
          timestamp: 1713544895837,
        },
      ],
      "1713546000000": [
        {
          url: "https://blog.polyswarm.io/operation-midnighteclipse-leverages-cve-2024-3400",
          firstEntryId:
            "rAAKQp5oPDWtq9KxuO44DdurAFgTTEW/zVl84rJRJmE=_18ef757d814:1433df4:e56ebecb",
          age: 641595852,
          timestamp: 1713546713108,
        },
        {
          url: "https://unsafe.sh/go-235381.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ef75be86a:142fe4e:5edf391c",
          age: 641862178,
          timestamp: 1713546979434,
        },
        {
          url: "https://buaq.net/go-235381.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ef75cd617:1431961:5edf391c",
          age: 641923023,
          timestamp: 1713547040279,
        },
        {
          url: "https://github.com/rapid7/metasploit-framework/commit/4733d1dc041123d9d7f27a0bee956b14d1199dc8",
          firstEntryId:
            "cyVSxNFquSznMYUu29YWvoKMPd97rBRd2L7kl0gjlLw=_18ef77ccf73:145c733:5edf391c",
          age: 644018475,
          timestamp: 1713549135731,
        },
      ],
      "1713549600000": [
        {
          url: "https://www.enterprisesecuritytech.com/post/thousands-of-firewalls-remain-vulnerable-to-critical-cve-2024-3400-exploit",
          firstEntryId:
            "+BwWtu8C6pDS6ReTwgzOg/g5ZPbW8+NYRaqjYawwWW0=_18ef78d0542:1473612:5edf391c",
          age: 645080826,
          timestamp: 1713550198082,
        },
        {
          url: "https://github.com/rapid7/metasploit-framework/commit/dce1a0b4d0b4e2fe421049ae04a72db872f85eda",
          firstEntryId:
            "cyVSxNFquSznMYUu29YWvoKMPd97rBRd2L7kl0gjlLw=_18ef7927ad2:1479fed:5edf391c",
          age: 645438602,
          timestamp: 1713550555858,
        },
      ],
      "1713553200000": [
        {
          url: "https://raw.githubusercontent.com/rapid7/metasploit-framework/41e19d775938d49cc9847546070d6e552d8709c0/modules/exploits/linux/http/panos_telemetry_cmd_exec.rb",
          firstEntryId:
            "Nt16m+Y/69iBq8yF9kpeUtujAtdn7zfCP2eJANFXGF0=_18ef7c81802:14ce7fb:e56ebecb",
          age: 648952250,
          timestamp: 1713554069506,
        },
        {
          url: "https://github.com/HackingLZ/panrapidcheck",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18ef7e03349:14eb791:e56ebecb",
          age: 650532097,
          timestamp: 1713555649353,
        },
      ],
      "1713556800000": [
        {
          url: "https://talkback.sh/resource/e2a39683-8ed1-4589-8a3b-c29617913a37",
          firstEntryId:
            "nKesiCLbGJVw6X5R+sYcbNieanfzkq4lBhdwoHRc6Cc=_18ef7f70d83:15073a0:e56ebecb",
          age: 652029755,
          timestamp: 1713557147011,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c86kah/iocs_appear_to_have_changed_for_cve20243400",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18ef8042d3f:1511d25:5edf391c",
          age: 652889847,
          timestamp: 1713558007103,
        },
        {
          url: "https://www.paloaltonetworks.ca/blog/2024/04/more-on-the-pan-os-cve",
          firstEntryId:
            "99xXdwXviGhbcEu77tmIz/tOKt1whjx/N0iVG0IgJUE=_18ef808dee2:151c390:e56ebecb",
          age: 653197466,
          timestamp: 1713558314722,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.paloaltonetworks.com/blog/2024/04/more-on-the-pan-os-cve",
          firstEntryId:
            "EiZBK3qaVKhdV9kRAiOJP0J+y4Lehr23sqz8kMSJ6i0=_18ef809bd48:501636:5c6f62c1",
          age: 653254400,
          timestamp: 1713558371656,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.itsecuritynews.info/more-on-the-pan-os-cve-2024-3400",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ef81352fe:1524bbf:5edf391c",
          age: 653882550,
          timestamp: 1713558999806,
        },
      ],
      "1713560400000": [
        {
          url: "https://malware.news/t/more-on-the-pan-os-cve-2024-3400/81073",
          firstEntryId:
            "LNpcjUMKmQexwVgF2HfeIU2a9mSM/aKVHu+Ysyy8NWM=_18ef8331ce4:154a7d8:e56ebecb",
          age: 655965852,
          timestamp: 1713561083108,
        },
        {
          url: "https://cert-portal.siemens.com/productcert/html/ssa-750274.html",
          firstEntryId:
            "/K8maxVaa06BX2Mhe5gPqG2srh3mSKUtMKQtXIc1KRw=_18ef8415ee3:1557cd6:e56ebecb",
          age: 656900251,
          timestamp: 1713562017507,
          sourceType: ["Vendor"],
        },
        {
          url: "https://vulnera.com/newswire/ongoing-attacks-target-22500-palo-alto-firewalls-vulnerable-to-cve-2024-3400",
          firstEntryId:
            "fHw/pxWHd05zGOS4Qs4kHlH8dy7epdhYRlEN3zpimxU=_18ef845f2de:155aeca:5edf391c",
          age: 657200278,
          timestamp: 1713562317534,
        },
        {
          url: "https://www.s-rminform.com/cyber-intelligence-briefing/cyber-intelligence-briefing-19-april-2024",
          firstEntryId:
            "L7myM9IaOU4vlI7M6D5Qkz2R2Ir0rZVk+VROFVGnbhw=_18ef847293a:155cdb8:e56ebecb",
          age: 657279730,
          timestamp: 1713562396986,
        },
        {
          url: "https://vulnera.com/newswire/magicdot-windows-vulnerabilities-enable-stealthy-rootkit-like-activities",
          firstEntryId:
            "fHw/pxWHd05zGOS4Qs4kHlH8dy7epdhYRlEN3zpimxU=_18ef853dd61:15698e5:5edf391c",
          age: 658112281,
          timestamp: 1713563229537,
        },
        {
          url: "https://kill-the-newsletter.com/alternates/rhvpr7oale9qdt1f.html",
          firstEntryId:
            "ZSFQ3tq0fjhh+/P8rKd3Wg0EBYZHF5dwBG3rH8GoBuE=_18ef855c89f:156c4d4:e56ebecb",
          age: 658238039,
          timestamp: 1713563355295,
        },
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-19",
          firstEntryId:
            "yZChqzpsA+WkWW3mcxTXaykHtByen3j9nJX+Gy7ELvo=_18ef85ee521:15766e5:e56ebecb",
          age: 658835161,
          timestamp: 1713563952417,
        },
      ],
      "1713564000000": [
        {
          url: "https://sploitus.com/exploit?id=MSF:EXPLOIT-LINUX-HTTP-PANOS_TELEMETRY_CMD_EXEC-",
          firstEntryId:
            "g3c3uqnYWAxGdH4v4IZcr/yluDS8l6KCs29aH0+cGWo=_18ef868c01a:158119a:e56ebecb",
          age: 659481042,
          timestamp: 1713564598298,
        },
      ],
      "1713567600000": [
        {
          url: "https://www.redpacketsecurity.com/cisa-palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-20-04-2024",
          firstEntryId:
            "1iffYOFZqFSo2N0mykHY7POj7jgSReETVUAZLnZwqws=_18ef899bbb6:521470:5c6f62c1",
          age: 662691182,
          timestamp: 1713567808438,
        },
      ],
      "1713574800000": [
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c8co9e/cve20243400_level_3_compromise",
          firstEntryId:
            "ktB7TSGQXdSIrux1crgYJ5U8fQpQTtwYxGJrURhSOWw=_18ef917bad1:16292ee:e56ebecb",
          age: 670948489,
          timestamp: 1713576065745,
        },
      ],
      "1713578400000": [
        {
          url: "https://news.google.com/rss/articles/CBMiN2h0dHBzOi8vdHdpdHRlci5jb20vY3liM3JvcHMvc3RhdHVzLzE3ODEyOTQ1Mjk1ODYzMzE2NTDSAQA?oc=5",
          firstEntryId:
            "uXf5bhk+h7zrJqjQORw7ikVEOKWKKkSZzjq+xdjb3rE=_18ef945a1b8:164e94a:e56ebecb",
          age: 673956720,
          timestamp: 1713579073976,
        },
        {
          url: "https://www.getinfosec.news/54967154/22500-palo-alto-firewalls-possibly-vulnerable-to-ongoing-attacks",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18ef94cc5a4:543abf:5c6f62c1",
          age: 674424668,
          timestamp: 1713579541924,
        },
      ],
      "1713582000000": [
        {
          url: "https://lifeboat.com/blog/2024/04/22500-palo-alto-firewalls-possibly-vulnerable-to-ongoing-attacks",
          firstEntryId:
            "j4SI5XqxZyRUMMK+/fbSMyyHN1GqrP4Rxuqp75N2IlY=_18ef9a43b0e:169bbda:e56ebecb",
          age: 680156358,
          timestamp: 1713585273614,
        },
      ],
      "1713585600000": [
        {
          url: "https://ciso2ciso.com/22500-palo-alto-firewalls-possibly-vulnerable-to-ongoing-attacks-source-www-bleepingcomputer-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18ef9ad6931:169b25c:5edf391c",
          age: 680757993,
          timestamp: 1713585875249,
        },
      ],
      "1713589200000": [
        {
          url: "https://thehackernews.com/2024/04/palo-alto-networks-discloses-more.html",
          firstEntryId:
            "CJzbEzB0tDROnK5HTx1b/ntZCzdzp4bsCPPuTwkbmkc=_18efa12544b:25ff28:fbeaa2c7",
          age: 687371779,
          timestamp: 1713592489035,
        },
        {
          url: "https://blog.netmanageit.com/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack",
          firstEntryId:
            "DjLqObdHZsoV/G+ilaJM4jhEcnZ3FpjCLBHKHGWiWc0=_18efa141c80:16f6bd2:e56ebecb",
          age: 687488568,
          timestamp: 1713592605824,
        },
      ],
      "1713592800000": [
        {
          url: "https://ciso2ciso.com/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack-sourcethehackernews-com",
          firstEntryId:
            "zkiWgnTnkOd/lR5MEPPQTd2L51XcmfzsXY5ucqofTgo=_18efa1995ea:16facc3:e56ebecb",
          age: 687847330,
          timestamp: 1713592964586,
        },
        {
          url: "https://www.hacking.reviews/2024/04/palo-alto-networks-discloses-more.html",
          firstEntryId:
            "D5YAlbXWHyT2jNvPDNzLWUpUt4yimnflHrZBDIAmUbU=_18efa1bc101:16fd069:e56ebecb",
          age: 687989433,
          timestamp: 1713593106689,
        },
        {
          url: "https://buaq.net/go-235432.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18efa1f5bf0:16f5c2d:5edf391c",
          age: 688225704,
          timestamp: 1713593342960,
        },
        {
          url: "https://unsafe.sh/go-235432.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18efa21bfef:16f7bc7:5edf391c",
          age: 688382375,
          timestamp: 1713593499631,
        },
        {
          url: "https://www.itsecuritynews.info/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18efa22d421:1704849:e56ebecb",
          age: 688453081,
          timestamp: 1713593570337,
        },
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/20/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18efa24cd13:16fb01c:5edf391c",
          age: 688582347,
          timestamp: 1713593699603,
        },
        {
          url: "https://allinfosecnews.com/item/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack-2024-04-20",
          firstEntryId:
            "XVwbHcQKqXNmREDP8jETehm8z3xMFZO7PlD4zOn7RrE=_18efa373bd8:170b228:5edf391c",
          age: 689790352,
          timestamp: 1713594907608,
        },
      ],
      "1713596400000": [
        {
          url: "https://vulners.com/thn/THN:2D88F35A63385D63B615B98F623B683B",
          firstEntryId:
            "NxE1UcQYtVQ5fAXp6GZqnsbADhxaTq3D90aAVsPqIpk=_18efa58b502:17286e4:5edf391c",
          age: 691984058,
          timestamp: 1713597101314,
        },
        {
          url: "https://www.getinfosec.news/54978885/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18efa5caa92:172cab4:5edf391c",
          age: 692243530,
          timestamp: 1713597360786,
        },
        {
          url: "https://www.reddit.com/r/paloaltonetworks/comments/1c8jlu4/cve20243400_panorama_silver_lining",
          firstEntryId:
            "wmtZZnxQQTeQAnCc/Af9Kzz2ekDvqCxqs5xbRaiQssI=_18efa61ccf8:173b7ef:e56ebecb",
          age: 692580016,
          timestamp: 1713597697272,
        },
        {
          url: "https://ctoatncsc.substack.com/p/cto-at-ncsc-summary-week-ending-april-d3d",
          firstEntryId:
            "dT4KsB9LfHphAE551ovATjweGUMXdP1jZlzIB/+sRw0=_18efa70cf1d:173f6ea:5edf391c",
          age: 693563605,
          timestamp: 1713598680861,
        },
      ],
      "1713600000000": [
        {
          url: "https://talkback.sh/resource/82dd853b-af17-4adc-9e9e-576bc9b820d4",
          firstEntryId:
            "nKesiCLbGJVw6X5R+sYcbNieanfzkq4lBhdwoHRc6Cc=_18efa873c7c:175254b:5edf391c",
          age: 695033396,
          timestamp: 1713600150652,
        },
        {
          url: "https://gixtools.net/2024/04/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack",
          firstEntryId:
            "BCdqAscORYyZ9EV/TNQVWcswN20kb7K8ta8vg1rVysM=_18efa946b5f:1769747:e56ebecb",
          age: 695897367,
          timestamp: 1713601014623,
        },
      ],
      "1713603600000": [
        {
          url: "https://osintcorp.net/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack",
          firstEntryId:
            "U1gqQ2iNqzX70utj+glyeaTeCMMdnaa4gLcmoURj2qU=_18efaebefb3:17b167e:5edf391c",
          age: 701632875,
          timestamp: 1713606750131,
        },
      ],
      "1713607200000": [
        {
          url: "https://infosec-mashup.santolaria.net/p/infosec-mashup-week-162024",
          firstEntryId:
            "44EPb1h3qLhy9Oid5lNcyvy3a3BnRWZrKgxL8ut7CSE=_18efafb14ae:17c14e7:5edf391c",
          age: 702625382,
          timestamp: 1713607742638,
        },
        {
          url: "https://hackernoon.com/4-20-2024-techbeat",
          firstEntryId:
            "oLxo1n2f3br4qmvvAJehIUYdf248L/zskx6CRtIHzHU=_18efb16110c:17dcdac:5edf391c",
          age: 704393924,
          timestamp: 1713609511180,
        },
        {
          url: "https://thecyberwire.com/newsletters/week-that-was/8/16",
          firstEntryId:
            "xDRR9Q4kjMOfAlWCqEPtt/Fel27hvxpa/jQ56IiZE2U=_18efb228061:59cf1e:5c6f62c1",
          age: 705208857,
          timestamp: 1713610326113,
        },
      ],
      "1713610800000": [
        {
          url: "https://cyberwarriorsmiddleeast.com/palo-alto-networks-reveals-further-information-about-critical-pan-os-vulnerability-being-exploited",
          firstEntryId:
            "9mYFcRN+QOIjLsLg/qXWSCbUI0B1gUM9ikp3CaQ/k8c=_18efb30075b:1800b3b:e56ebecb",
          age: 706095379,
          timestamp: 1713611212635,
        },
        {
          url: "https://www.reddit.com/r/SecOpsDaily/comments/1c8njre/more_on_the_panos_cve20243400",
          firstEntryId:
            "PuIE2BFn/4CBYAx3LJzIqSmvypFDm2KOKBQavOrnQAE=_18efb5413b0:1817e74:5edf391c",
          age: 708457832,
          timestamp: 1713613575088,
        },
      ],
      "1713614400000": [
        {
          url: "https://www.reddit.com/r/blueteamsec/comments/1c8orbq/more_on_the_panos_cve20243400",
          firstEntryId:
            "0x1krWVFiOy2l5dBauocR6LEjIR9c79vLcoHkesD1vA=_18efb9060e7:185e157:e56ebecb",
          age: 712409759,
          timestamp: 1713617527015,
        },
        {
          url: "https://infosec.exchange/@simontsui/112303664230067368",
          firstEntryId:
            "tQrcdE0E7m6/RFHZguugjyI+kFthN0Yvf9ZAv8hPm8E=_18efb96d62b:1865c00:e56ebecb",
          age: 712832995,
          timestamp: 1713617950251,
        },
      ],
      "1713618000000": [
        {
          url: "https://github.com/stronglier/CVE-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18efbbc95ee:188fdb6:e56ebecb",
          age: 715306918,
          timestamp: 1713620424174,
        },
      ],
      "1713621600000": [
        {
          url: "https://talkback.sh/resource/323bcc08-22ad-4fe1-b5eb-78a0600f4588",
          firstEntryId:
            "PHqrwWLsqAc+meWiTJ8KCHgis4nBIL6oq5a0ZIQuBzY=_18efbd286f8:1894b57:5edf391c",
          age: 716744880,
          timestamp: 1713621862136,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/tac-p/584386",
          firstEntryId:
            "GCf1fgM5ECgw+RPmqqf01vtZcHm58GHOATDouWorCw8=_18efbe0d04e:18a3124:5edf391c",
          age: 717681158,
          timestamp: 1713622798414,
          sourceType: ["VendorReference"],
        },
      ],
      "1713628800000": [
        {
          url: "https://news.google.com/rss/articles/CBMiOGh0dHBzOi8vdHdpdHRlci5jb20vSGFja2luZ0xaL3N0YXR1cy8xNzgxNDE5ODA3NzQ2NzQ0NjI00gEA?oc=5",
          firstEntryId:
            "uXf5bhk+h7zrJqjQORw7ikVEOKWKKkSZzjq+xdjb3rE=_18efc3edb76:190b3bd:e56ebecb",
          age: 723844398,
          timestamp: 1713628961654,
        },
        {
          url: "https://www.ruetir.com/2024/04/20/pan-os-palo-alto-networks-reveals-flaws-in-its-software",
          firstEntryId:
            "1m0nMqKUDqIym/rPeBIhFJrgagGqEVuhKgLOA1wTbOg=_18efc515424:1928d23:e56ebecb",
          age: 725054940,
          timestamp: 1713630172196,
        },
      ],
      "1713639600000": [
        {
          url: "https://www.runzero.com/blog/palo-alto-networks-2",
          firstEntryId:
            "RmcJvnHK+RoZUunqaqhBscUS+T3cFu+OAozx8E8ZGe4=_18efcf4b507:19b27b0:5edf391c",
          age: 735762111,
          timestamp: 1713640879367,
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/is-it-possible-to-confirm-that-panos-10-1-13-is-not-affected-by/td-p/584389",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18efd0862d3:19da01c:e56ebecb",
          age: 737051787,
          timestamp: 1713642169043,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.whistic.com/resources/blog/palo-alto-globalprotect-vulnerability-questionnaire",
          firstEntryId:
            "X00G0Mg9k5iMKdE+wz45i2Rlc/zdlcMwYTCISRGeDAU=_18efd0f7a65:19cdc03:5edf391c",
          age: 737516573,
          timestamp: 1713642633829,
        },
      ],
      "1713646800000": [
        {
          url: "https://healsecurity.com/palo-alto-networks-discloses-more-details-on-critical-pan-os-flaw-under-attack",
          firstEntryId:
            "8Cns9GQd1kOqrAzP31rDT7JbFVB4amIG0VrvYfMiJeQ=_18efd59979d:1a1c769:e56ebecb",
          age: 742373717,
          timestamp: 1713647490973,
        },
        {
          url: "https://infosec.exchange/@patrickcmiller/112305721908527527",
          firstEntryId:
            "Bsv9gXIBNqGLcUSG/nv2FhjxKrEMYOEQB1eWtqz95pA=_18efd76b1a6:1a317da:e56ebecb",
          age: 744280926,
          timestamp: 1713649398182,
        },
        {
          url: "https://www.itsecuritynews.info/it-security-news-daily-summary-2024-04-20",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18efd8466c6:1a27c6e:5edf391c",
          age: 745179262,
          timestamp: 1713650296518,
        },
      ],
      "1713650400000": [
        {
          url: "https://log.rosecurify.com/seclog-70",
          firstEntryId:
            "HxLGK5joazqpHOdManZGYvRAVBoptu/wiZo6cPZaRCc=_18efd89eb85:1a2c83b:5edf391c",
          age: 745540925,
          timestamp: 1713650658181,
        },
      ],
      "1713654000000": [
        {
          url: "https://mastodon.social/@RedPacketSecurity/112306034515653265",
          firstEntryId:
            "0UYqSxjk2gwmIBa1b/zBLaG34V+eLgbV5PzGhOhOvic=_18efdbff682:1a58dbc:5edf391c",
          age: 749082682,
          timestamp: 1713654199938,
        },
        {
          url: "https://www.facebook.com/467773418726516/posts/846220760881778",
          firstEntryId:
            "6FOG0FQhTEeZfDIL06cBcSQ9fw73Ym9gNii7XsqKGW8=_18efddcbaf1:1a803d5:e56ebecb",
          age: 750967977,
          timestamp: 1713656085233,
          sourceType: ["Vulnerability", "Vendor"],
        },
      ],
      "1713661200000": [
        {
          url: "https://www.getinfosec.news/55021150/more-on-the-pan-os-cve-2024-3400",
          firstEntryId:
            "g5Kdpp7JF1wsITOWNyiWehCHldojZ4hYiMh/vuwV+kM=_18efe53c501:1ad570f:e56ebecb",
          age: 758769337,
          timestamp: 1713663886593,
        },
      ],
      "1713686400000": [
        {
          url: "https://www.helpnetsecurity.com/2024/04/21/week-in-review-palo-alto-firewalls-mitigation-ineffective-putty-client-vulnerable-to-key-recovery-attack",
          firstEntryId:
            "u6RGqcfIcEeQ5ERqlJMPsX4R5UNIk0HaouDW6cdLfQo=_18effad05fd:1bd3571:e56ebecb",
          age: 781395893,
          timestamp: 1713686513149,
        },
        {
          url: "https://www.itsecuritynews.info/week-in-review-palo-alto-firewalls-mitigation-ineffective-putty-client-vulnerable-to-key-recovery-attack",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18effb0820b:1bd5fbe:e56ebecb",
          age: 781624259,
          timestamp: 1713686741515,
        },
      ],
      "1713693600000": [
        {
          url: "https://cyber.vumetric.com/security-news/2024/04/21/week-in-review-palo-alto-firewalls-mitigation-ineffective-putty-client-vulnerable-to-key-recovery-attack",
          firstEntryId:
            "5dH6bb5QhDkhtRWbASwNKIf3WOw+4RC/MZN39Xg2mOQ=_18f00215623:1c21f88:5edf391c",
          age: 789018587,
          timestamp: 1713694135843,
        },
        {
          url: "https://hackerattacks.einnews.com/article/705358577/WpL5cJZ0MKdhci_Q?ref=rss&ecode=DtSkePn36FXIO0Uu",
          firstEntryId:
            "PCgw/b3JJ9XygcnMEkQ31zFL5XrrLW23Di6ocvJ9RfY=_18f003c2f30:1c39572:5edf391c",
          age: 790778088,
          timestamp: 1713695895344,
        },
      ],
      "1713700800000": [
        {
          url: "https://thisweekin4n6.com/2024/04/21/week-16-2024",
          firstEntryId:
            "Zq59m1nY4aZWb1NBk0ZsRx99qKzYpAm2DMp0Xt+5sPA=_18f00ac1d0b:1c9ef86:5edf391c",
          age: 798113475,
          timestamp: 1713703230731,
        },
      ],
      "1713704400000": [
        {
          url: "https://www.exploit-db.com/exploits/51996",
          firstEntryId:
            "mfE67xNgpennBUQzBYl/j0AMPYXm5zaZhzjwtHVws78=_18f00d09ac0:1ce3742:e56ebecb",
          age: 800504952,
          timestamp: 1713705622208,
        },
        {
          url: "https://kravensecurity.com/triaging-the-week-021",
          firstEntryId:
            "xm8QxJZKTxLFaxJZa/U9S+obEezDaiMlKW8uylE4ARI=_18f00d99b70:1cecec5:e56ebecb",
          age: 801094952,
          timestamp: 1713706212208,
        },
        {
          url: "https://securityaffairs.com/162081/security/security-affairs-newsletter-round-468-by-pierluigi-paganini-international-edition.html",
          firstEntryId:
            "GkT9Omj3/TrwoD60ExVW8HF3NDmBHkgAwZ5RH/vWE4U=_18f00e3676e:1cf75e7:e56ebecb",
          age: 801736998,
          timestamp: 1713706854254,
        },
      ],
      "1713715200000": [
        {
          url: "https://www.catonetworks.com/blog/cve-2024-3400-critical-palo-alto-pan-os-command-injection-vulnerability",
          firstEntryId:
            "1Ej7sXa9Y7vjMOUp/Vl9I/lU/jaVAMjKCnDrQ7ersJ0=_18f01825e5e:1d9c119:e56ebecb",
          age: 812154902,
          timestamp: 1713717272158,
        },
        {
          url: "https://infosec.exchange/@shadowserver/112310224121725938",
          firstEntryId:
            "0J2dzSmxs0p6Oe3YF7wCVUOhJsAAcGKHyYj9Dr7YcBQ=_18f018f0148:1d83f6e:5edf391c",
          age: 812983040,
          timestamp: 1713718100296,
        },
      ],
      "1713722400000": [
        {
          url: "https://sploitus.com/exploit?id=EDB-ID:51996",
          firstEntryId:
            "uUk9xP+WETRwnqcC8VI2L9INeKT7jusZsDwLpdGutOw=_18f01d6d597:1dc9aa7:5edf391c",
          age: 817690447,
          timestamp: 1713722807703,
        },
      ],
      "1713726000000": [
        {
          url: "https://github.com/Kr0ff/cve-2024-3400",
          firstEntryId:
            "ijTIpt0Z0xBnwrPsD57Lltp5xO5NG513LX8Xqs5TghA=_18f023151c0:1e48bf6:e56ebecb",
          age: 823620472,
          timestamp: 1713728737728,
        },
      ],
      "1713736800000": [
        {
          url: "https://www.itsecuritynews.info/it-security-news-weekly-summary-week-16",
          firstEntryId:
            "yJ9QVgIN0hUiuvkwqv+XHSismj+BiJZIJEITTBuEGHA=_18f02aea8d2:1e866c1:5edf391c",
          age: 831834762,
          timestamp: 1713736952018,
        },
        {
          url: "https://sploitus.com/exploit?id=1337DAY-ID-39566",
          firstEntryId:
            "g3c3uqnYWAxGdH4v4IZcr/yluDS8l6KCs29aH0+cGWo=_18f02b225cf:1e89875:5edf391c",
          age: 832063367,
          timestamp: 1713737180623,
        },
      ],
      "1713740400000": [
        {
          url: "https://k1z3.hatenablog.com/entry/2024/04/22/080228",
          firstEntryId:
            "ZA+BGbnxEQ/xbyAxlQDa90/HwCi8JwcNDzahIhwwL3U=_18f02e65be2:1edf906:e56ebecb",
          age: 835485082,
          timestamp: 1713740602338,
        },
        {
          url: "https://www.redpacketsecurity.com/cisa-palo-alto-networks-releases-guidance-for-vulnerability-in-pan-os-cve-22-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18f02e8fd32:1ee1a4b:e56ebecb",
          age: 835657450,
          timestamp: 1713740774706,
        },
        {
          url: "https://mastodon.social/@RedPacketSecurity/112311708235925675",
          firstEntryId:
            "1iffYOFZqFSo2N0mykHY7POj7jgSReETVUAZLnZwqws=_18f02e9bd16:1ee2575:e56ebecb",
          age: 835706574,
          timestamp: 1713740823830,
        },
        {
          url: "https://thedxt.ca/2024/04/palo-alto-private-data-reset-with-ha-active-passive",
          firstEntryId:
            "hcB4a691Ci/fI0BXTaYTlZHjWovwor+MTRO1Nq9OnfE=_18f03175d18:1ee01de:5edf391c",
          age: 838696656,
          timestamp: 1713743813912,
        },
      ],
      "1713744000000": [
        {
          url: "https://www.auscert.org.au:443/bulletins/ESB-2024.2280.4",
          firstEntryId:
            "sSxFRaZmXCcQAGqUJAYPvSEfpvP4AbaQyHJSZDBR2V4=_18f032b9d90:1f1723f:e56ebecb",
          age: 840023880,
          timestamp: 1713745141136,
        },
        {
          url: "http://www.auscert.org.au/bulletins/ESB-2024.2280.4",
          firstEntryId:
            "6MhMKfRuisolv5l2FNV3Ew+cQVcBliQax2qWYAFL/Fc=_18f032e8803:1f1a49b:e56ebecb",
          age: 840214971,
          timestamp: 1713745332227,
        },
      ],
      "1713751200000": [
        {
          url: "https://isc.sans.edu/podcastdetail/8948",
          firstEntryId:
            "LnTiuqNsg4PTruEgUUOGx+3szIOr4xHuGIhm9w8600I=_18f03887624:1f680ef:e56ebecb",
          age: 846108636,
          timestamp: 1713751225892,
        },
      ],
      "1713754800000": [
        {
          url: "https://www.redpacketsecurity.com/palo-alto-products-remote-code-execution-vulnerability-22-04-2024",
          firstEntryId:
            "glITqZYXCW5gvtKGGG9BhH2QX3hK1KMinrKr6TuqrRM=_18f03c2d3b2:1f9907c:e56ebecb",
          age: 849933674,
          timestamp: 1713755050930,
        },
      ],
      "1713758400000": [
        {
          url: "https://news.risky.biz/risky-biz-news-fta-hacking-spree-continues-with-crushftp-zero-day",
          firstEntryId:
            "ou/qMWN7MKkICefbeKM8HodVOLLExrx7WdEyMBKLtH0=_18f0414f805:1fb527e:5edf391c",
          age: 855316925,
          timestamp: 1713760434181,
        },
      ],
      "1713762000000": [
        {
          url: "https://sosintel.co.uk/the-sos-intelligence-cve-chatter-weekly-top-ten-22-april-2024",
          firstEntryId:
            "o57Dgr83S669FuQnBlpbRs0c9YcNok6Iv/NCpgaBq1Y=_18f045a03ab:1ff7e79:5edf391c",
          age: 859841891,
          timestamp: 1713764959147,
        },
      ],
    },
    firstTimestamp: 1712905117256,
    referenceEntries: {
      vendor: [
        {
          url: "https://security.paloaltonetworks.com/CVE-2024-3400",
          firstEntryId:
            "mU9aShOep98rDW1nQCNiv3cMlp723zT42aQKl0teiNk=_18ed119de48:13f94db:e56ebecb",
          age: 0,
          timestamp: 1712905117256,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed14a968b:1427e33:e56ebecb",
          age: 3192899,
          timestamp: 1712908310155,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/tid-95187-is-not-on-my-signature-list/m-p/583497",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed19a8216:1476fa5:e56ebecb",
          age: 8430542,
          timestamp: 1712913547798,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/tid-95187-is-not-on-my-signature-list/td-p/583497",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed1f8dcdd:13472e3:5c6f62c1",
          age: 14614165,
          timestamp: 1712919731421,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://unit42.paloaltonetworks.com/cve-2024-3400",
          firstEntryId:
            "vjSeYVi2IR+mt/jALIk+rk6xX+aJoQENuU0ENjWY3Y4=_18ed3419f9b:1726af8:5edf391c",
          age: 36159827,
          timestamp: 1712941277083,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/ta-p/340184/page/2",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ed45c6393:176ea68:e56ebecb",
          age: 54691147,
          timestamp: 1712959808403,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/query-regarding-cve-2024-3400/td-p/583630",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18edd34809d:1e590d7:5edf391c",
          age: 203072085,
          timestamp: 1713108189341,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/running-11-1-2-in-production/td-p/582129",
          firstEntryId:
            "NvsugYR7z66ob3rOpGJMqR3QyMdiQneH/nXdcEpUsek=_18ee00b6a46:2047c7e:5edf391c",
          age: 250711038,
          timestamp: 1713155828294,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/query-for-cve-2024-3400/td-p/583685",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee08a6ecb:20aed72:5edf391c",
          age: 259035267,
          timestamp: 1713164152523,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/how-can-i-see-if-my-fw-has-already-been-exploited-by-the-cve/td-p/583724",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee20b1857:225d87c:5edf391c",
          age: 284244495,
          timestamp: 1713189361751,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/how-can-i-see-if-my-fw-has-already-been-exploited-by-the-cve/td-p/583729",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee211f426:1eb70b3:5c6f62c1",
          age: 284693982,
          timestamp: 1713189811238,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/threat-vulnerability-discussions/query-for-cve-2024-3400/m-p/583862",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee628bd51:2250646:5c6f62c1",
          age: 353296137,
          timestamp: 1713258413393,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/10-2-8-dp-dp-hardware-packet-buffer-exhaustion-bug/td-p/583103",
          firstEntryId:
            "NvsugYR7z66ob3rOpGJMqR3QyMdiQneH/nXdcEpUsek=_18ee6eb92e8:273d4a5:5edf391c",
          age: 366064800,
          timestamp: 1713271182056,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/cortex-xdr-discussions/missing-xql-preset-queries/td-p/583931",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ee8781daa:ab407:5c6f62c1",
          age: 392052578,
          timestamp: 1713297169834,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/tac-p/583938",
          firstEntryId:
            "GCf1fgM5ECgw+RPmqqf01vtZcHm58GHOATDouWorCw8=_18ee8cc68e8:f317d:5c6f62c1",
          age: 397576864,
          timestamp: 1713302694120,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/tac-p/583955",
          firstEntryId:
            "GCf1fgM5ECgw+RPmqqf01vtZcHm58GHOATDouWorCw8=_18ee98fc06f:12a48b:5c6f62c1",
          age: 410378791,
          timestamp: 1713315496047,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/tsf-file-upload/td-p/584230",
          firstEntryId:
            "IAEit3mpaMEyDLBAsYmHB84Wds29glzXBL3gFVwQQlw=_18ef1b370a8:359380:5c6f62c1",
          age: 546935392,
          timestamp: 1713452052648,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/intermittent-inet-connectivity-after-updating-to-10-2-8-h3/td-p/584240",
          firstEntryId:
            "IAEit3mpaMEyDLBAsYmHB84Wds29glzXBL3gFVwQQlw=_18ef1fa22fd:370f17:5c6f62c1",
          age: 551568565,
          timestamp: 1713456685821,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/cve-2024-2400-ioc-s/td-p/584343",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ef6cdcf7e:134bd11:5edf391c",
          age: 632549686,
          timestamp: 1713537666942,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/cve-2024-3400-ioc-s/m-p/584343",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18ef6d4c5a5:135cb21:e56ebecb",
          age: 633005917,
          timestamp: 1713538123173,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/general-topics/cve-2024-3400-ioc-s/td-p/584343",
          firstEntryId:
            "9Bmf9IEojwpKIVI7cXJmK0hztc3DBessEd5LlEou+8A=_18ef6d56246:135d92e:e56ebecb",
          age: 633046014,
          timestamp: 1713538163270,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.paloaltonetworks.ca/blog/2024/04/more-on-the-pan-os-cve",
          firstEntryId:
            "99xXdwXviGhbcEu77tmIz/tOKt1whjx/N0iVG0IgJUE=_18ef808dee2:151c390:e56ebecb",
          age: 653197466,
          timestamp: 1713558314722,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://www.paloaltonetworks.com/blog/2024/04/more-on-the-pan-os-cve",
          firstEntryId:
            "EiZBK3qaVKhdV9kRAiOJP0J+y4Lehr23sqz8kMSJ6i0=_18ef809bd48:501636:5c6f62c1",
          age: 653254400,
          timestamp: 1713558371656,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/globalprotect-articles/applying-vulnerability-protection-to-globalprotect-interfaces/tac-p/584386",
          firstEntryId:
            "GCf1fgM5ECgw+RPmqqf01vtZcHm58GHOATDouWorCw8=_18efbe0d04e:18a3124:5edf391c",
          age: 717681158,
          timestamp: 1713622798414,
          sourceType: ["VendorReference"],
        },
        {
          url: "https://live.paloaltonetworks.com/t5/next-generation-firewall/is-it-possible-to-confirm-that-panos-10-1-13-is-not-affected-by/td-p/584389",
          firstEntryId:
            "i+4H6Oy3iIYdxAssypfMQSGsTj+CuJWXrSsAEfdvdCM=_18efd0862d3:19da01c:e56ebecb",
          age: 737051787,
          timestamp: 1713642169043,
          sourceType: ["VendorReference"],
        },
      ],
      threatIntelligenceReports: [
        {
          url: "https://www.volexity.com/blog/2024/04/12/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400",
          firstEntryId:
            "qdaYh95lFNFddOlKTCMjBs8jHH+3he8pOAvC0dj3VuE=_18ed34511f1:165f2d2:e56ebecb",
          age: 36385705,
          timestamp: 1712941502961,
        },
        {
          url: "https://malware.news/t/zero-day-exploitation-of-unauthenticated-remote-code-execution-vulnerability-in-globalprotect-cve-2024-3400/80812",
          firstEntryId:
            "LNpcjUMKmQexwVgF2HfeIU2a9mSM/aKVHu+Ysyy8NWM=_18ed346393c:172b40d:5edf391c",
          age: 36461300,
          timestamp: 1712941578556,
        },
        {
          url: "https://unsafe.sh/go-234034.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ed36a4585:16889bd:e56ebecb",
          age: 38823741,
          timestamp: 1712943940997,
        },
        {
          url: "https://buaq.net/go-234034.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ed36dd8d8:17593d8:5edf391c",
          age: 39058064,
          timestamp: 1712944175320,
        },
        {
          url: "https://exchange.xforce.ibmcloud.com/report/details/guid:a5ada306c56555cad92c350f15342da2",
          firstEntryId:
            "lBdsQVehp8ABHSRhzrVrnB1/ssPPcn6712TIhhG5k6s=_18ed52e8e52:1804747:e56ebecb",
          age: 68464650,
          timestamp: 1712973581906,
          sourceType: ["Vendor"],
        },
        {
          url: "https://www.enigmasoftware.com/cve20243400vulnerability-removal",
          firstEntryId:
            "hA2sYryzQzdz1JERuJ6J10dV2OK7rKF9T8ocMyn2cxk=_18ee3952151:2050400:5c6f62c1",
          age: 310067977,
          timestamp: 1713215185233,
        },
        {
          url: "https://www.criticalinsight.com/vulnerabilities/cve-2024-3400-zero-day-exploitation-of-unauthenticated-remote-code-execution-on-palo-alto",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ee3feeea4:2363431:e56ebecb",
          age: 317001820,
          timestamp: 1713222119076,
        },
        {
          url: "https://vulcan.io/blog/fixing-cve-2024-3400",
          firstEntryId:
            "3BauJ7fS/kHkRs4O9EGaoAeIiFF0/m/Pg0tji3l9Q2k=_18ee43748f8:20ca4fd:5c6f62c1",
          age: 320694960,
          timestamp: 1713225812216,
        },
        {
          url: "https://medium.com/@rst_cloud/rst-ti-report-digest-15-apr-2024-e578f6692ea9",
          firstEntryId:
            "m2mY0OhMMS3yqfbmAIkiSk7q+af5nmuBmDPJDaLIEBY=_18ee5297d41:256c428:5edf391c",
          age: 336568057,
          timestamp: 1713241685313,
        },
        {
          url: "https://labs.watchtowr.com/palo-alto-putting-the-protecc-in-globalprotect-cve-2024-3400",
          firstEntryId:
            "3qdDFtu+1Qds9CopM8yVYIw8wPo+uAgwQbUQFs+KvgY=_18ee7258598:236563f:5c6f62c1",
          age: 369862480,
          timestamp: 1713274979736,
        },
        {
          url: "https://www.ctfiot.com/174006.html",
          firstEntryId:
            "46zngy9Jny8qDMrr2TuIUWaumtGnte7WUf8BPMGZJtg=_18ee9814a0e:1e92de:5edf391c",
          age: 409430982,
          timestamp: 1713314548238,
        },
        {
          url: "https://www.ctfiot.com/174012.html",
          firstEntryId:
            "46zngy9Jny8qDMrr2TuIUWaumtGnte7WUf8BPMGZJtg=_18ee9bed785:21b7a6:e56ebecb",
          age: 413464893,
          timestamp: 1713318582149,
        },
        {
          url: "https://www.zscaler.com/blogs/security-research/look-cve-2024-3400-activity-and-upstyle-backdoor-technical-analysis",
          firstEntryId:
            "ddVelp76vh2mHJXD1a2g2Wo4KgoyAHsFBmNnVNkLmNw=_18eeec4fc94:293e20:5c6f62c1",
          age: 497753676,
          timestamp: 1713402870932,
        },
        {
          url: "https://malware.news/t/a-look-at-cve-2024-3400-activity-and-upstyle-backdoor-technical-analysis/80990",
          firstEntryId:
            "LNpcjUMKmQexwVgF2HfeIU2a9mSM/aKVHu+Ysyy8NWM=_18ef00c6ac4:a1cd43:5edf391c",
          age: 519212156,
          timestamp: 1713424329412,
        },
        {
          url: "https://buaq.net/go-235037.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ef0e9f093:b669bb:e56ebecb",
          age: 533729867,
          timestamp: 1713438847123,
        },
        {
          url: "https://unsafe.sh/go-235037.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ef0eaf5e9:b586f9:5edf391c",
          age: 533796769,
          timestamp: 1713438914025,
        },
        {
          url: "https://blackkite.com/blog/focus-friday-a-comprehensive-analysis-of-cve-2024-3400-and-its-risksfocus-friday-a-comprehensive-analysis-of-cve-2024-3400-and-its-risks",
          firstEntryId:
            "BjSkZVzPHvSO3W/+cSRG7vyveJphY8sK4u2seeJqsi8=_18ef6e321b1:1373a60:e56ebecb",
          age: 633946985,
          timestamp: 1713539064241,
        },
        {
          url: "https://blackkite.com/blog/focus-friday-a-comprehensive-analysis-of-cve-2024-3400-and-its-risks",
          firstEntryId:
            "M+t4G9O9wbiaK+zmSnu62Y7esGTIr8ASD1odCfVthfA=_18ef6e3a687:136cd9f:5edf391c",
          age: 633980991,
          timestamp: 1713539098247,
        },
        {
          url: "https://bishopfox.com/blog/pan-os-cve-2024-3400-patch-your-palo-alto-firewalls",
          firstEntryId:
            "VmtkKP3EVRmKAYtVlri68Np90ZUlQuZq+Qp7IrbgpW8=_18ef6efdd3c:13870ac:e56ebecb",
          age: 634781428,
          timestamp: 1713539898684,
        },
        {
          url: "https://blog.polyswarm.io/operation-midnighteclipse-leverages-cve-2024-3400",
          firstEntryId:
            "rAAKQp5oPDWtq9KxuO44DdurAFgTTEW/zVl84rJRJmE=_18ef757d814:1433df4:e56ebecb",
          age: 641595852,
          timestamp: 1713546713108,
        },
        {
          url: "https://unsafe.sh/go-235381.html",
          firstEntryId:
            "BtHBJ0cZbh6WN7eW0McYZxFGw0qJxlLw7B2QMtmHqEA=_18ef75be86a:142fe4e:5edf391c",
          age: 641862178,
          timestamp: 1713546979434,
        },
        {
          url: "https://buaq.net/go-235381.html",
          firstEntryId:
            "k1yxel0iPMHjWi+uJTLREzL6OpsYoXDLqOCYLTibzww=_18ef75cd617:1431961:5edf391c",
          age: 641923023,
          timestamp: 1713547040279,
        },
        {
          url: "https://www.catonetworks.com/blog/cve-2024-3400-critical-palo-alto-pan-os-command-injection-vulnerability",
          firstEntryId:
            "1Ej7sXa9Y7vjMOUp/Vl9I/lU/jaVAMjKCnDrQ7ersJ0=_18f01825e5e:1d9c119:e56ebecb",
          age: 812154902,
          timestamp: 1713717272158,
        },
        {
          url: "https://k1z3.hatenablog.com/entry/2024/04/22/080228",
          firstEntryId:
            "ZA+BGbnxEQ/xbyAxlQDa90/HwCi8JwcNDzahIhwwL3U=_18f02e65be2:1edf906:e56ebecb",
          age: 835485082,
          timestamp: 1713740602338,
        },
      ],
    },
  },
  relationships: [
    {
      cveId: "CVE-2024-3400",
      firstArticle: {
        crawledAt: "2024-04-12T22:33:32.337000+00:00",
        entryId:
          "vb4kz62CGq8opQT7QE/OkoFSdcYi5R8nXM+/xvSncYs=_18ed471cfb1:184ccab:5edf391c",
        sourceName: "Ars Technica - All content",
        title:
          "“Highly capable” hackers root corporate networks by exploiting firewall 0-day",
      },
      threat: {
        id: "nlp/f/entity/gz:mal:1824c463-77df-43af-a055-d94567918f6b",
        label: "UPSTYLE",
        type: "malwareFamily",
      },
      validatedAt: "2024-04-15T11:33:43.167876+00:00",
    },
  ],
};
