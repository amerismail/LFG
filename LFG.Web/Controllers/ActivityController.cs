using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LFG.Web.Controllers
{
    public class ActivityController : ApiController
    {
        // GET api/activity
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/activity/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/activity
        public void Post([FromBody]string value)
        {
        }

        // PUT api/activity/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/activity/5
        public void Delete(int id)
        {
        }
    }
}
