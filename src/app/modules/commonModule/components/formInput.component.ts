<div class="login-form">
    <div class="field">
        <label>{{label}}</label>
        <br>
        <input [formControl]=firstControlName [placeholder]=placeholder [type]="type"/>   
        <div *ngIf="firstControlName.touched && firstControlName.invalid  ">this field is required in correct way</div>    
    </div>
</div>