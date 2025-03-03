using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace micheeStudyGroup.Models
{
	public class Student
	{
		[Display(Name= "Student Number")]
		public string StudentNumber { get; set; }

        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Surname")]
        public string LastName { get; set; }

        [Display(Name = "Email Address")]
        public string Email { get; set; }
    }
}