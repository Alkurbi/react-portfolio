import React, { Component } from 'react';
import './Artical.css';

class Artical extends Component {
  render() {
    return (
      <div className="ar-content">
        <br></br>
        <p id="lead">Edge computing.</p>
        <p>Edge computing is a distributed computing framework that brings enterprise applications closer to data sources
          such as IoT devices or local edge servers. This proximity to data at its source can deliver strong business
          benefits: faster insights, improved response times and better bandwidth availability.</p>
        <br></br>
        <p id="lead">Why edge computing?</p>
        <p>The explosive growth and increasing computing power of IoT devices has resulted in unprecedented volumes of data.
          And data volumes will continue to grow as 5G networks increase the number of connected mobile devices.

          In the past, the promise of cloud and AI was to automate and speed innovation by driving actionable insight from
          data. But the unprecedented scale and complexity of data that’s created by connected devices has outpaced network
          and infrastructure capabilities.

          Sending all that device-generated data to a centralized data center or to the cloud causes bandwidth and latency
          issues. Edge computing offers a more efficient alternative: data is processed and analyzed closer to the point
          where it's created. Because data does not traverse over a network to a cloud or data center to be processed,
          latency is significantly reduced. Edge computing — and mobile edge computing on 5G networks — enables faster and
          more comprehensive data analysis, creating the opportunity for deeper insights, faster response times and improved
          customer experiences.</p>
        <br></br>
        <p id="lead">
          Devices at the edge: Harnessing the potential.</p>
        <p>From connected vehicles to intelligent bots on the factory floor, the amount of data from devices being
          generated
          in our world is higher than ever before, yet most of this IoT data is not exploited or used at all. For example, a
          McKinsey & Company study found that an offshore oil rig generates data from 30,000 sensors — but less than one
          percent of that data is currently used to make decisions.²

          Edge computing harnesses growing in-device computing capability to provide deep insights and predictive analysis
          in near-real time. This increased analytics capability in edge devices can power innovation to improve quality and
          enhance value. It also raises important strategic questions: How do you manage the deployment of workloads that
          perform these types of actions in the presence of increased compute capacity? How can you use the embedded
          intelligence in devices to influence operational processes for your employees, your customers and your business
          more responsively? In order to extract the most value from all those devices, significant volumes of computation
          must move to the edge.</p>
        <br></br>
        <p id="lead">Your journey to edge computing: Things to consider.</p>
        <p>Edge computing helps you unlock the potential of the vast untapped data that’s created by connected devices. You
          can uncover new business opportunities, increase operational efficiency and provide faster, more reliable and
          consistent experiences for your customers. The best edge computing models can help you accelerate performance by
          analyzing data locally. A well-considered approach to edge computing can keep workloads up-to-date according to
          predefined policies, can help maintain privacy, and will adhere to data residency laws and regulations.

          But this process is not without its challenges. An effective edge computing model should address network security
          risks, management complexities, and the limitations of latency and bandwidth. A viable model should help
          you:<br></br><br></br>
          - Manage your workloads across all clouds and on any number of devices<br></br>
          - Deploy applications to all edge locations reliably and seamlessly<br></br>
          - Maintain openness and flexibility to adopt to evolving needs<br></br>
          - Operate more securely and with confidence</p>
      </div>
    )
  }
}
export default Artical
