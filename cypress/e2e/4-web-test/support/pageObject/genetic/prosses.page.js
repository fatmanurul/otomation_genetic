class prosses {
    Detail = '.sorting_1'
    DetailProsses = '.dtr-data > .btn'
    BatalkanProsses = '.btn'
    BtnBatalkanPross = '.col-sm-10 > .btn'
    AlsnDbtlkn = '.note-editable'
    AlsnPssw = '#iUserPassword'

    //pembayaran
    DetailP = '.odd > .sorting_1'
    // BtnSelesai = '.dtr-data > .btn-success'
    TglPmbyrn = '#iProcessPaidDate'
    BuktiPmbyrn = '#iProcessPaidPicture'

    //status prosses
    DtlProsses = ':nth-child(1) > .sorting_1'
    BtnProsses = '.dtr-data > .btn-warning'
    BatalPrsoses = ':nth-child(1) > .swal-button'
    Prosses = ':nth-child(2) > .swal-button'

    //Prosses selesai
    ProssesSelesai = '.dtr-data > .btn-success'
    BtnProssesSelesai = '.col-sm-10 > .btn'
    RqrdHarga = '#parsley-id-5 > .parsley-required'
    RqrdFtoProsses = '#parsley-id-9 > .parsley-required'
    Harga = '#iProcessProductOrdersPrice'
    FotoProsses = '#iOrderProductsDataFile'

    ClickDtailPsnan(){
        cy.get(this.Detail).click()
    }

    ClickDtailPrssses(){
        cy.get(this.DetailProsses).click()
    }

    ClickBtlkn(){
        cy.get(this.BatalkanProsses).click()
    }

    ClickBtnBtlkn(){
        cy.get(this.BtnBatalkanPross).click()
    }

    ClickBtnDetailProsses(){
        cy.get(this.DtlProsses).click()
    }

    ClickProsses(){
        cy.get(this.BtnProsses).click()
    }

    ClickProssesSelesai(){
        cy.get(this.ProssesSelesai).click()
    }

    ClickBtnProssesSelesai(){
        cy.get(this.BtnProssesSelesai).click()
    }

    ClickBtnProssesSelesai(){
        cy.get(this.BtnProssesSelesai).click()
    }



}

export default new prosses()
