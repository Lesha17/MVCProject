using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(WebApiServer.Startup))]

namespace WebApiServer
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

        }
    }
}
