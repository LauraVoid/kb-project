export default [
    {
        type: "Library",
        name: "jQuery",
        cves: [
            { name: "CVE-2020-11022 (6.1)", version: ">=1.5.1 <3.5.0", info: "" },
            { name: "CVE-2020-11023 (6.1)", version: ">=1.5.1 |<3.5.0", info: "" },
            { name: "CVE-2019-11358 (6.1)", version: "<3.4.0", info: "used in Drupal, Backdrop CMS, and other products" },
        ],
        info_end: "https://endoflife.date/jquery",
        support: "No soportado: 1.x | 2.x"
    },
    {
        type: "Library",
        name: "jQuery UI",
        cves: [
            { name: "CVE-2016-7103 (6.1)", version: "<1.12.0", info: "XSS" },
            { name: "CVE-2021-41184 (6.1)", version: "<1.13.0", info: "XSS" },
            { name: "CVE-2021-41183 (6.1)", version: "<1.13.0", info: "" },
            { name: "CVE-2021-41182 (6.1)", version: "<1.13.0", info: "" },
        ],
        info_end: "",
        support: "No soportado: <1.12.1"
    },
    {
        type: "Library",
        name: "Bootstrap",
        cves: [
            { name: "CVE-2018-14041 (6.1)", version: "<4.1.2", info: "XSS" },
            { name: "CVE-2018-20676 (6.1)", version: "<3.4.0", info: "XSS" },
            { name: "CVE-2018-20677 (6.1)", version: "<3.4.0", info: "XSS" },
            { name: "CVE-2019-8331 (6.1)", version: "<3.4.1 | 4.3.X | <4.3.1", info: "XSS" },
            
        ],
        info_end: "https://endoflife.date/bootstrap",
        support: "No soportado: <3.X"
    },
    {
        type: "Software",
        name: "Nginx",
        cves: [
            { name: "CVE-2021-23017 (6.8)", version: "=>0.6.18 | =<1.20.0", info: "CVSS 2.0" },
            { name: "CVE-2019-9511 (7.5)", version: "=>1.9.5 | =<1.17.2", info: "" },
            { name: "CVE-2019-9513 (7.5)", version: "=>1.9.5 | =<1.17.2", info: "" },
            { name: "CVE-2019-8331 (6.1)", version: "=>1.1.3 | =<1.15.5 | =>1.0.7 | =<1.0.15", info: "" },
            
        ],
        info_end: "https://endoflife.date/nginx",
        web_info: "http://nginx.org/en/security_advisories.html",
        support: "No soportado: <1.21.X",
    },
    {
        type: "Software",
        name: "OpenSSH",
        cves: [
            { name: "CVE-2016-10708 (7.5)", version: "<7.4", info: "DoS" },
            { name: "CVE-2016-6515 (7.5)", version: "<7.3", info: "DoS" },
            { name: "CVE-2015-8325 (7.8)", version: "<7.2p2", info: "Gain privileges" },
            { name: "CVE-2018-20685 (5.3)", version: "<7.9", info: "" },
            { name: "CVE-2019-6111 (5.9)", version: "<7.9", info: "" },
            { name: "CVE-2021-41617 (5.9)", version: "6.2 | 8.x | <8.8", info: "" },
            
        ],
        info_end: "",
        support: "Desactualizado: <8.8",
    },
    {
        type: "Software",
        name: "Microsoft IIS",
        cves: [
            { name: "CVE-2010-2730 (9.3)", version: "7.5", info: "CVSS 2.0" },
            { name: "CVE-2010-1256 (8.5)", version: "6.0 | 7.0 | 7.5", info: "CVSS 2.0" },
            { name: "CVE-2010-3972 (10)", version: "7.0 | 7.5", info: "CVSS 2.0" },          
            
        ],
        info_end: "https://docs.microsoft.com/en-us/lifecycle/products/internet-information-services-iis",
        support: "No soportado: <7.5",
    },

]