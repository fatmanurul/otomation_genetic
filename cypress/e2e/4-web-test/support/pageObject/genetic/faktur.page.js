class faktur{
   Detail = 'tbody > :nth-child(1) > .text-right'
   DetailFaktur = '.dtr-data > .btn'

    ClickDtail(){
        cy.get(this.Detail).click()
    }

    ClickDtailFaktur(){
        cy.get(this.DetailFaktur).click()
    }

}
export default new faktur()