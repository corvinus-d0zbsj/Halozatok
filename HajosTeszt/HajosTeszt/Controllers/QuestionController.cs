using HajosTeszt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        [Route("questions/count")]
        public int method1 ()
        {
            HajostesztContext context = new HajostesztContext();
            int kerdesekszama = context.Questions.Count();
            return kerdesekszama;
        }


        [HttpGet]
        [Route("questions/{sorszam}")]
        public ActionResult method2 (int sorszam)
        {
            HajostesztContext context = new HajostesztContext();
            var kérdés = (from x in context.Questions where x.QuestionId == sorszam select x).FirstOrDefault();


            if (kérdés == null) return BadRequest("Nincs ilyen kérdés");

            return new JsonResult(kérdés);
        }

    }
}
