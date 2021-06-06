import { Component } from "react";

class ModifyStudentModal extends Component {


    render() {
        return (
            <form>
                <div class="modal-header">
                    <h4 class="modal-title">Hi there!</h4>
                    <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="inputName">Név</label>
                        <input type="text" class="form-control" name="name" placeholder="Név" formControlName="name"/>
                        {/* <div class="invalid-feedback" *ngIf="form.controls.name.errors?.required">
                            Név megadása kötelező
                        </div> */}
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">E-mail cím</label>
                        <input type="email" class="form-control" name="email" placeholder="E-mail cím" formControlName="email"/>
                        {/* <div class="invalid-feedback" *ngIf="form.controls.email.errors?.required">
                            E-mail cím megadása kötelező
                        </div> */}
                        {/* <div class="invalid-feedback" *ngIf="form.controls.email.errors?.email">
                            Nem valós e-mail cím
                        </div> */}
                    </div>
                    <div class="form-group">
                        <label for="inputAge">Életkor</label>
                        <input type="number" class="form-control" name="age" placeholder="Életkor" formControlName="age"/>
                        {/* <div class="invalid-feedback" *ngIf="form.controls.age.errors?.required">
                            Életkor megadása kötelező
                        </div>
                        <div class="invalid-feedback" *ngIf="form.controls.age.errors?.min">
                            Legalább 18-nak kell lennie
                        </div>
                        <div class="invalid-feedback" *ngIf="form.controls.age.errors?.max">
                            Legfeljebb 100-nak szabad lennie
                        </div> */}
                    </div>
                    <div class="form-group">
                        <label class="mr-2" for="inputGender">Nem</label>
                        <select class="custom-select my-1 mr-sm-2" name="gender" formControlName="gender">
                            <option value="FEMALE">Nő</option>
                            <option value="MALE">Férfi</option>
                            <option value="2">Egyéb</option>
                            <option value="3">Nem szeretném megadni</option>
                        </select>
                        {/* <div class="invalid-feedback" *ngIf="form.controls.gender.errors?.binary">
                            Kötelező: Férfi vagy Nő
                        </div> */}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark">Mégsem</button>
                    <button class="btn btn-primary" type="submit">Mentés</button>
                </div>
            </form>
        )
    }
}

export default ModifyStudentModal;