import React, {Component} from 'react';
import Definition from './Definition';
import getVocabSection from './VocabHelper';
const DATA_FUNDAMENTAL_ANALYSIS = require('./DATA_FUNDAMENTAL_ANALYSIS.json');

class FundamentalAnalysis extends Component {


  constructor(props) {
    super(props);

    this.state = {
      definitionComponents: getVocabSection(DATA_FUNDAMENTAL_ANALYSIS)
    }
  }
  render() {

    return (

      <div>
        <h1>Resources/Notes for Fundamental Analysis</h1>
        <div>
          <h2>Vocab</h2>
          <ul>
            {this.state.definitionComponents}
          </ul>
        </div>

        <div>
          <h2>Notes</h2>
          <ul>
            <li>
              <h3>How to Make Money in Stocks (William J Oneill) Summary</h3>
              <ul>
                <li>
                  <h4>Chapter 1 - (C) Current Quarterly Earnings</h4>
                  <ul>
                    <li>
                      Compare the current quarterly earnings per share (EPS) of a stock with the EPS of the same quarter from last year. The current EPS
                      should be up by at least 20-50% from last quarter. And don't stop there. Why not look for stocks that are 100-500% up from last quarter.
                      Try and find the cream of the crop. Find the best possible stocks to invest in.
                    </li>
                    <li>
                      Omit extraordinary (one-time purchases, aquisitions, etc.) gains when considering the change in EPS from the current quarter to last year.
                      This can skew the reality of what is really happening to the fundamentals of the company with regards to earnings.
                    </li>
                    <li>
                      Look for accelerating growth and invest in that. At least for the last 10 quarters, you need to see acceerating percentages in EPS. Also,
                      look for deccelerating growth and stay away from that. A good rule of thumb is to pull out if you see two consecutive deccelerating quarters.
                      For example, you're seeing growth of 10%, 15%, 25%, 40%, 47% for five quarters of a stock and then suddenly it drops back down to 25% and
                      then 15% and then 5% in the following three quarters. That may be an indication that the company has peaked and does not have much more
                      growth potential. You should not be investing in a company that is tapering off in terms of acceleration.
                    </li>
                    <li>
                      Logarithmic graphs can help you see acceleration. On traditional arithmetic graphs, a price action that increases by X each quarter will
                      cause the graph to increase by the same distance every time the price action increases by X. On a log graph, if you increase the price
                      action by X every quarter, you will see half as much distance covered with each quarter. You want to look at consistently linear
                      (or exponential if you're lucky) movements on a logarithmic graph because this implies that the EPS is not only increasing, but accelerating.
                      If you are moving the same distance every quarter on a log graph, then this tells you that the EPS of a company is gaining more and more
                      percentage-wise with each quarter.
                    </li>
                    <li>
                      Let's say you find a stock that you are interested in investing in. As an additional safety, you should look at other stocks within the
                      same industry group. Make sure you can find other stocks besides the one that you are interested, that are also doing pretty well in that
                      industry group. If you can't find any other impressive stocks in that industry group, that may be an indicator that you are investing in
                      the wrong stock.
                    </li>

                  </ul>
                </li>
                <li>
                  <h4>Chapter 2 - (A) Annual Earnings Increases</h4>
                  <ul>
                    <li>
                      For the last 5 years, a company's Earnings Per Share should show an increase from the previous year, every year. It is acceptable, to have
                      one year down in the last 5, as long as the following year comes back very quickly and reaches a higher high.
                    </li>
                    <li>
                      Expect at least 25-50% increase in EPS every year. You can look for even higher percentages than that.
                    </li>
                    <li>
                      Here is an example of annual EPS progression for a company that you would want to invest in: $0.70, $1.15, $1.85, $2.80, and $4. In terms
                      of percentage increases from year to year: 64.3%, 60.9%, 51.4%, and 42.9%. Note that this is different from the acceleration requirement from
                      chapter 1. You don't need to see price acceleration year over year (though it can't hurt if a company does have that). You just need the YoY
                      EPS percentage increase to AT LEAST sit within that 25-50% range.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FundamentalAnalysis;
