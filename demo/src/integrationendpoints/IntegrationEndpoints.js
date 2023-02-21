import React, {useState} from "react";
import {Datadog,Cloudwatch,Elasticsearch,Jolokia,Syslog} from './IntegrSvgObject'
import IntegrationEndpointsFlank from "./IntegrationEndpointsFlank";

function IntergrationEndPoints(props) {
  const [service ,setService] = useState();
  function flank(fl){
    setService(<IntegrationEndpointsFlank/>)
  }
  return(
      <>
        <div>
          <h1>Integration endpoints</h1>
        </div>

        <div>
          <div>
            Aiven supports integrating with a number of external systems. In order to connect your Aiven
            service with an external system you will need to define the endpoint. <br/>Choose from the list which
            external endpoint you want to set up, before enabling the integration on the service itself.
          </div>
        </div>

        <div className="xpanse-intergration-main">
          <ul className="xpanse-intergration-subleft">
            <li>
              <a>
                <div>
                  <span onClick={() => flank(props)} service={service} >
                    <img src={Datadog} alt="Datadog"/>
                    Datadog
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div>
                  <span>
                    <img src={Cloudwatch}/>
                    AWS Cloudwatch Logs
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div>
                  <span>
                    <img src={Elasticsearch}/>
                    External Elasticsearch
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div>
                  <span>
                    <img src={Jolokia}/>
                    Jolokia
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <div>
                  <span>
                    <img src={Syslog}/>
                    Syslog
                  </span>
                </div>
              </a>
            </li>
          </ul>

          {/*<div className="xpanse-intergration-subright">*/}
          {/*  <h2>Datadog</h2>*/}
          {/*  <div>*/}
          {/*    <a>aaa</a>*/}
          {/*    is a monitoring service for cloud-scale applications, bringing together data from servers, <br/>databases, tools, and services to present a unified view of an entire stack.*/}
          {/*    <i>(Note: Only for metrics, service logs can be sent via remote Syslog)</i>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    Configure endpoints for your external Datadog service to enable the integration with your<br/>*/}
          {/*    Aiven services.*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <a>Help articles</a>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <a>Create new</a>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </>

  )
}







export default IntergrationEndPoints;