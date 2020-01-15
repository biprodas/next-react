export const packages = [
  {
    title: "Free",
    currency: "$",
    cost: 0,
    period: "Mo",
    price(){ return `${this.currency}${this.cost}/${this.period}`},
    bandwith: "10GB users included",
    storage: "2GB",
    support: "Email Support",
    access: "Help center aaccess",
    btnText: "Signup for free",
    btnClass: "btn btn-outline-primary btn-lg",
    btnStyle: {paddingLeft:'40px',paddingRight:'40px',paddingtop:'7px',paddingBottom:'7px'}
  },
  {
    title: "Pro",
    currency: "$",
    cost: 15,
    period: "Mo",
    price(){ return `${this.currency}${this.cost}/${this.period}`},
    bandwith: "20GB users included",
    storage: "10GB",
    support: "Priority Email Support",
    access: "Help center aaccess",
    btnText: "Get started",
    btnClass: "btn btn-primary btn-lg",
    btnStyle: {paddingLeft:'70px',paddingRight:'70px'}
  },
  {
    title: "Enterprise",
    currency: "$",
    cost: 29,
    period: "Mo",
    price(){ return `${this.currency}${this.cost}/${this.period}`},
    bandwith: "30GB users included",
    storage: "15GB",
    support: "Phone & Email Support",
    access: "Help center aaccess",
    btnText: "Contact Us",
    btnClass: "btn btn-primary btn-lg",
    btnStyle: {paddingLeft:'70px',paddingRight:'70px'}
  }
]


function getPackages(){
  return packages;
}