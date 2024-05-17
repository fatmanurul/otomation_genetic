class pembayaran {
    Detail = ':nth-child(2) > .sorting_1'
    Detail2 = '.dtr-data > .btn'
    CetakStruk = '.btn-default'
    Dtail = ':nth-child(1) > .sorting_1'
    BatalkanPembayaran = '.btn-danger'
    BtnBtlkan = '.col-sm-10 > .btn'
    AlrtRqrdPssw = '#parsley-id-3 > .parsley-required'
    AlsnBtl = '.note-editable'
    PsswAlsn = '#iUserPassword'


    ClickDetail1(){
        cy.get(this.Detail).click()
    }

    ClickDetailPmbyrn(){
        cy.get(this.Detail2).click()
    }

    ClickDtail2(){
        cy.get(this.Dtail).click()
    }

    ClickBtlknPmbyrn(){
        cy.get(this.BatalkanPembayaran).click()
    }

    ClickBtnCtkStrk(){
        cy.get(this.CetakStruk).click()
    }

    ClickBtnBatalkan(){
        cy.get(this.BtnBtlkan).click()
    }
}

export default new pembayaran()