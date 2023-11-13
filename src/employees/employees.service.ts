import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
  private employees = [
  ];

  getEmployeeById(id): string {
    const employee = this.employees.find(emp => emp.id === +id);

    if (employee) {
      return `Empleado con ID ${id}: ${employee.name}, telefono:${employee.phone}, salario:${employee.salary}`;
    } else {
      return `No se encontró empleado con ID ${id}`;
    }
  }

  getAllEmployees() {
    return this.employees;
  }

  addEmployee(newEmployee): string {
    const id = this.employees.length + 1;
    const employee = { id, ...newEmployee };
    this.employees.push(employee);
    return `Empleado agregado con ID ${id}`;
  }
  deleteEmployee(id): string {
    const index = this.employees.findIndex(emp => emp.id === +id);

    if (index !== -1) {
      const deletedEmployee = this.employees.splice(index, 1)[0];
      return `Empleado eliminado con ID ${id}: ${deletedEmployee.name}`;
    } else {
      return `No se encontró empleado con ID ${id}`;
    }
  }


  updateEmployee(id, updatedEmployee): string {
    const index = this.employees.findIndex(emp => emp.id === +id);
  
    if (index !== -1) {
      this.employees[index] = { ...this.employees[index], ...updatedEmployee };
      return `Empleado con ID ${id} actualizado`;
    } else {
      return `No se encontró empleado con ID ${id}`;
    }
  }
}