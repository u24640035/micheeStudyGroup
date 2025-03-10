using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace micheeStudyGroup.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            List<Models.Student> students = new List<Models.Student>();
            {
                students.Add(new Models.Student { StudentNumber = "u24640035", FirstName = "Michee", LastName = "Munganga", Email = "u24640035@tuks.co.za", myLink= "~/HTML/Michee.html" });
                students.Add(new Models.Student { StudentNumber = "u24601315", FirstName = "Natasha", LastName = "Maredi", Email = "u24601315@tuks.co.za", myLink = "~/HTML/Natasha.html" });
                students.Add(new Models.Student { StudentNumber = "u24855449", FirstName = "Matthew", LastName = "Pasaribu", Email = "u24855449@tuks.co.za", myLink = "~/HTML/Matthew.html" });
                students.Add(new Models.Student { StudentNumber = "u04354265", FirstName = "Lysette", LastName = "Munganga", Email = "u04354265@tuks.co.za", myLink = "~/HTML/Lysette.html" });
                students.Add(new Models.Student { StudentNumber = "u24005400", FirstName = "Keegan", LastName = "Thys", Email = "u24005400@tuks.co.za", myLink = "~/HTML/Keegan.html" });

                return View(students);
            }
        }
    }
}