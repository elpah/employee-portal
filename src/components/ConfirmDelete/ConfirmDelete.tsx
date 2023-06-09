import React from "react";
import Button from "../Button/Button";
import "./confirmDelete.css";
import { Employee } from "../../employeeType";
interface Props {
  employee: Employee;
  confirmDelete: (employeeId: string | undefined) => void;
  cancelDelete: () => void;
}
export default function ConfirmDelete({
  confirmDelete,
  cancelDelete,
  employee,
}: Props) {
  return (
    <div className="delete__modal">
      <div className="delete__box">
        <h1 className="delete__header">Confirm Delete!</h1>
        <p className="delete__paragraph">Do you want to delete employee?</p>
        <div className="button__div-container">
          <Button
            className="button__div button__div-confirm"
            buttonType="button"
            onClick={() => confirmDelete(employee.employeeId)}
            buttonName="confirm"
          ></Button>
          <Button
            className="button__div button__div-cancel"
            buttonType="button"
            onClick={cancelDelete}
            buttonName="cancel"
          ></Button>
        </div>
      </div>
    </div>
  );
}
