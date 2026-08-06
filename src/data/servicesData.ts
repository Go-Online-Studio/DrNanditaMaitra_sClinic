import {
  ShieldCheck,
  ZoomIn,
  Scan,
  Dna,
  RefreshCw,
  Heart,
  Baby,
  HeartHandshake,
  MessageSquareDot,
} from 'lucide-react';

export const servicesData = [
  {
    id: 'gynecologic-ultrasound',
    icon: Scan,
    heading: 'Gynecologic Ultrasound',
    shortDesc: 'Safe, radiation-free pelvic ultrasound for accurate diagnosis of bleeding, pain, cysts, and fertility concerns.',
    fullDesc: `Pelvic ultrasound is an essential part of modern gynecological care, providing a safe, painless, and radiation-free way to evaluate the uterus, ovaries, and other pelvic organs. It helps diagnose the cause of symptoms such as abnormal bleeding, pelvic pain, menstrual irregularities, ovarian cysts, fibroids, and infertility, while also allowing accurate monitoring of treatment.\n
At our clinic, ultrasound is performed by an experienced gynecologist, ensuring that your symptoms, examination findings, and scan are interpreted together for a more accurate diagnosis and a personalized treatment plan.
`,
    image: '/images/GynecServiceImage1.avif',
  },
  {
    id: 'fertility-consultation',
    icon: Dna,
    heading: 'Fertility Consultation & Evaluation',
    shortDesc: 'Comprehensive, evidence-based fertility evaluation and targeted investigations to guide your conception journey.',
    fullDesc: `A comprehensive fertility evaluation helps identify the factors affecting conception and guides the most appropriate treatment. The assessment begins with a detailed medical history, menstrual cycle evaluation, and clinical examination, followed by targeted investigations based on your individual needs.\n
Evaluation may include ovulation monitoring (cycle studies), pelvic ultrasound, ovarian reserve assessment (AMH and antral follicle count), hormone testing, tubal patency assessment, and semen analysis for the male partner. Additional investigations are recommended only when clinically indicated, ensuring an evidence-based and individualized approach`,
    image: '/images/GynecServiceImage2.avif',
  },
  {
    id: 'pcos-care',
    icon: RefreshCw,
    heading: 'PCOS / PMOS Care',
    shortDesc: 'Accurate diagnosis and individualized care for PCOS, focusing on symptom management and long-term metabolic health.',
    fullDesc: `Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age. It may present with irregular or infrequent periods, acne, excessive hair growth, difficulty conceiving, or weight-related concerns, although many women with PCOS have a normal body weight. Left untreated, PCOS can increase the long-term risk of diabetes, metabolic disorders, and endometrial problems.\n
Our approach focuses on accurate diagnosis, identifying the specific PCOS phenotype, and individualized treatment. Care includes lifestyle guidance, management of menstrual and hormonal symptoms, fertility evaluation when required, and long-term monitoring to help protect your reproductive and overall health.
`,
    image: '/images/GynecServiceImage3.avif',
  },
  {
    id: 'preconception-counselling',
    icon: HeartHandshake,
    heading: 'Preconception Counselling',
    shortDesc: 'Personalized health assessment and guidance before conception to ensure the best possible start for a healthy pregnancy.',
    fullDesc: `Planning a pregnancy is the first step towards a healthy mother and baby. Preconception counselling helps identify and address medical, lifestyle, and reproductive factors before conception, improving the chances of a healthy pregnancy and reducing preventable complications.\n
Assessment includes a review of your medical history, medications, immunization status, menstrual health, nutrition, weight, and any existing medical conditions. Individualized advice is provided on optimizing health, managing chronic illnesses, and planning pregnancy at the right time.\n
Our goal is to help you begin your pregnancy with confidence through personalized, evidence-based care tailored to your individual needs.`,
    image: '/images/GynecServiceImage4.avif',
  },
  {
    id: 'early-pregnancy-care',
    icon: Baby,
    heading: 'Early Pregnancy Care',
    shortDesc: 'Compassionate first-trimester care, including essential screening tests, early ultrasound, and personalized guidance.',
    fullDesc: `Compassionate care from the very beginning of pregnancy, with a focus on maternal well-being and healthy fetal development. Services include early pregnancy ultrasound, essential blood tests, and screening for anemia, blood group, infections, and diabetes where indicated. We also provide guidance on nutrition, medications, and first-trimester screening, NIPT, and NT scan to support a healthy pregnancy.`,
    image: '/images/GynecServiceImage5.avif',
  },
  {
    id: 'cervical-cancer-screening',
    icon: ShieldCheck,
    heading: 'Cervical Cancer Screening',
    shortDesc: 'Evidence-based screening including Pap smears and HPV DNA testing for early detection and long-term cervical health.',
    fullDesc: `Our screening services include Pap smear (cytology), HPV DNA testing, and colposcopy when indicated. We follow evidence-based screening recommendations and provide individualized advice based on your age, screening history, HPV status, and risk factors.\n
Early detection offers the best opportunity for prevention, timely treatment, and long-term peace of mind. Screening is recommended even in the absence of symptoms, as early cervical changes usually do not cause noticeable signs.`,
    image: '/images/GynecServiceImage6.avif',
  },
  {
    id: 'colposcopy-and-vulval-evaluation',
    icon: ZoomIn,
    heading: 'Colposcopy and Vulval Evaluation',
    shortDesc: 'Expert high-definition (HD) magnification of the cervix and vulva for precise diagnosis of abnormal screening results and symptoms.',
    fullDesc: `Expert evaluation for abnormal Pap smears, HPV infection, persistent cervical abnormalities, and vulval symptoms using high-definition (HD) magnification. Colposcopy allows detailed assessment of the cervix, while vulvoscopy provides careful examination of the vulva to identify inflammatory, precancerous, and other vulval disorders. When required, targeted biopsies are performed to ensure an accurate diagnosis and appropriate treatment.\n
Vulval assessment is guided by the TRIV framework, a systematic approach that evaluates Texture, Redness, Inspection, and Variation to help identify subtle vulval changes and support precise diagnosis`,
    image: '/images/GynecServiceImage7.avif',
  },
  {
    id: 'menopause-consultation',
    icon: Heart,
    heading: 'Menopause Consultation',
    shortDesc: 'Comprehensive assessment and tailored treatments to relieve menopausal symptoms and protect your long-term health and well-being.',
    fullDesc: `Whether you are experiencing hot flushes, night sweats, irregular periods, mood changes, sleep disturbances, vaginal dryness, urinary symptoms, or concerns about bone and heart health, personalized care can help you manage this transition with confidence and comfort.\n
Care begins with a comprehensive assessment of your symptoms, medical history, and individual health risks. Treatment is tailored to your needs and may include lifestyle and dietary advice, menopausal hormone therapy (when appropriate), non-hormonal treatment options, and measures to protect bone, cardiovascular, and urogenital health.\n
Our aim is to help you remain healthy, active, and confident, while improving your quality of life during the menopausal transition and beyond.`,
    image: '/images/GynecServiceImage8.avif',
  },
  {
    id: 'second-opinion',
    icon: MessageSquareDot,
    heading: 'Second Opinion Consultation',
    shortDesc: 'Unbiased, evidence-based review of your diagnosis or advised treatment to help you make confident and informed healthcare decisions.',
    fullDesc: `When you are uncertain about a diagnosis, advised surgery, or not improving with treatment, seeking a second opinion can help you move forward with confidence. We provide a careful, unbiased review of your medical history, examination findings, investigations, and previous treatment. The aim is to confirm the diagnosis, explore appropriate alternatives where available, and help you make informed decisions based on the best available evidence.`,
    image: '/images/GynecServiceImage9.avif',
  },
];
