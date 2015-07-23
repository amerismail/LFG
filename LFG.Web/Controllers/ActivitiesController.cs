﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using LFG.Data;
using LFG.Model;
using System.Web.Http;

namespace LFG.Web.Controllers
{
    public abstract class ApiControllerBase : ApiController
    {
        protected LfgUow Uow {get; set;}
    }

    public class ActivitiesController : ApiControllerBase
    {
        public ActivitiesController()
        {
            Uow = new LfgUow();
        }
          
        // GET api/activity
        public IEnumerable<Activity> Get()
        {
            return Uow.Activities.GetAll().OrderBy(s => s.Name);
        }

    }
}
