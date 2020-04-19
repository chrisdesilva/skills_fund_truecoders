import logo from "../images/logo_truecoders.png" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.69 - 12.36%",
  APRRange60: "12.89 - 13.14%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "",
      APR36: "11.69%",
      financeCharge36: "$2,215.12",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.89%",
      financeCharge60: "$3,945.10",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "2", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "",
      APR36: "12.36%",
      financeCharge36: "$1,332.85",
      FullMonthlyPayment36: "$231.47",
      APR60: "13.14%",
      financeCharge60: "$2,494.91",
      FullMonthlyPayment60: "$158.25",
      LoanExampleAmt: "$7,000",
      LoanExampleOFeeAmt: "$280",
      LoanExampleAmtPlusOFee: "$7,280",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: !false, // true if at least one program has cost of living included
  costOfLivingPrograms: "Developer Accelerator program", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: !true, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: true, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: true, // true if both IR and IO are available
  multiPrograms: true, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$10,000",
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.69%",
  APR60: "12.89%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.16",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "the Developer Accelerator program",
      maxAmount: "$9,500",
      col: true,
      colAmount: "$3,500",
    },
    {
      programName: "the Developer Night Course",
      maxAmount: "$7,000",
      col: false,
      colAmount: "$6,000",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "TrueCoders"

export const schoolURL = "https://truecoders.io/" // update with url of school's website

export const skfURL = "https://truecoders.skills.fund/" // update with Skills Fund url

export const headline = "Learn to Code at TrueCoders" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to provide students with a foundation for a career in software development. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Choose between the Developer Accelerator and Developer Night Course programs.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "truecoders_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "2e654e06-7dc3-4680-9bc2-41e43dbafbb8" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_truecoders_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Developer Accelerator",
    url: "https://my.skills.fund/application?lenderCode=SKTCDA18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 13000,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 5,
        apr36: 11.69,
        apr60: 12.89,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1", "Metro 2", "Metro 3"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 13000,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
            apr36: 11.69,
            apr60: 12.89,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  {
    name: "Developer Night Course",
    url: "https://my.skills.fund/application?lenderCode=SKTCDNC18",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 7000,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        k: 5,
      },
      "Immediate Repayment": {
        apr36: 12.36,
        apr60: 13.14,
      },
    },
    defaultLoanType: "Immediate Repayment", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false,
    showLoanTypes: false,
    loanTypes: ["Immediate Repayment"],
    locations: ["Metro 1", "Metro 2"],
    metros: [
      {
        location: "Metro 1",
        loanInfo: {
          // match loanInfo to Program 2 loanInfo above
          maxLoanAmt: 7000,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 5,
          },
          "Immediate Repayment": {
            apr36: 12.36,
            apr60: 13.14,
          },
        },
      },
    ],
  },
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $9,500 for tuition & $3,500 for cost of living for the Developer Accelerator program or up to $7,000 for tuition for the Developer Night Course program."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "PROGRAM 1",
      tuition: "$13,495",
      col: "$6,000",
      max: "$19,495",
    },
    {
      name: "PROGRAM 2",
      tuition: "$16,495",
      col: "$6,000",
      max: "$22,495",
    },
    {
      name: "PROGRAM 3",
      tuition: "$13,495",
      col: "--",
      max: "$13,495",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
