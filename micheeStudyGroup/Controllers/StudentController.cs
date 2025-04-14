using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using micheeStudyGroup.Models;

namespace micheeStudyGroup.Controllers
{
    public class StudentController : Controller
    {
       private static List<Student> _students = new List<Student>();
        public ActionResult Index()
        {
        
                return View(_students);
           
        }
        public ActionResult Create()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "StudentNumber,FirstName,LastName,Email")] Student student)
        {
            if (ModelState.IsValid)
            {
                _students.Add(student);
                return RedirectToAction("Index");
            }
            return View(student);
        }
        [HttpGet] 
        public ActionResult Search(string searchString)
        {
            var filteredStudents = _students.Where(s =>
                s.FirstName.IndexOf(searchString, StringComparison.OrdinalIgnoreCase) >= 0
            ).ToList();

            return View("Index", filteredStudents);
        }
    }
}