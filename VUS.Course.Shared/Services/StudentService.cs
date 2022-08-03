using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Text;

namespace VUS.Course.Shared.Services
{
    public class StudentService
    {
        public IOrganizationService Service { get; set; }
        public StudentService(IOrganizationService service)
        {
            Service = service;
        }

        public bool ValidateStudentName(vus_student target)
        {
            if (target.vus_fullname.ToLower().Contains("test") ||
                target.vus_lastname.ToLower().Contains("test") ||
                target.vus_firstname.ToLower().Contains("test"))
            {
                return false;
            }
            return true;
        }
    }
}
