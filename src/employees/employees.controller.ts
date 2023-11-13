import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    const employees = this.employeesService.getAllEmployees();
    if (employees.length > 0) {
      const formattedEmployees = employees.map(emp => `ID: ${emp.id}, Name: ${emp.name}, Phone: ${emp.phone}, Salary: ${emp.salary}`);
      return formattedEmployees.join('\n');
    } else {
      return 'No hay empleados disponibles';
    }
  }

  @Get(':id')
  getEmployeeById(@Param('id') identificador): string {
    return this.employeesService.getEmployeeById(identificador);
  }

  @Post()
  addEmployee(@Body() newEmployee): string {
    return this.employeesService.addEmployee(newEmployee);
  }
  @Delete(':id')
  deleteEmployee(@Param('id') identificador): string {
    return this.employeesService.deleteEmployee(identificador);
  }

  @Put(':id')
updateEmployee(@Param('id') id, @Body() updatedEmployee): string {
  return this.employeesService.updateEmployee(id, updatedEmployee);
}
}