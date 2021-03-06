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
        <h1>Resources/Notes for Fundamental Analysis</h1> <hr/>
        <div>
          <h2>Vocab</h2>
          <ul>
            {this.state.definitionComponents}
          </ul><hr/>
        </div>

        <div>
          <h2>Notes</h2>
          <ul>
            <li>
              <h3>How to Make Money in Stocks (William J O'neil) Summary</h3>
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
                    <li>
                      5-year growth requirement will help eliminate most stocks within an industry as investment opportunities. The majority of companies
                      within an industry have very small growth, if any.
                    </li>
                    <li>
                      Don't just look at annual EPS or quarterly EPS. It is combination of the two that leads to breakouts in a stock price. You need a solid
                      5-year history of growth (indicated by increasing annual EPS percentages) as well as recent quarterly EPS percentages that are significantly
                      up from last year's same quarters. It is the combination of this long-term and short-term growth that lead to breakouts.
                    </li>
                    <li>
                      The P/E ratio should not be heavily considered when deciding what to invest in. Oftentimes, it offers little to no indication of how good of
                      an investment a stock is. From 1953 to 1985, data shows that if you were not willing to pay an average of 20 to 30 times earnings for a growth
                      stock then you would have eliminated some of the best stocks from pool of available investments.
                    </li>
                  </ul>
                </li>

                <li>
                  <h4> Chapter 3 - (N) New Products, New Management, New Highs: Buying at the Right Time </h4>
                  <ul>
                    <li>
                      Many price breakouts have a trigger or catalyst that cause the stock price to increase rapidly. This trigger is generally
                      something new, like a new product that makes waves in the industry, new management that shakes things up and streamlines the company to increase
                      profits dramatically, new technology being released after years of research, and even something as simple as industry-wide shortages.
                    </li>
                    <li>
                      O'neil calls this the Stock Market's greatest paradox: 'what seems too high and risky to the majority, usually goes higher
                      and what seems low and cheap usually goes lower'. He details that most investors he has met will not invest into a stock that is currently
                      making higher highs in the market. A stock that appears on the 'most-gained' list for the first time in bull market, along with a massive
                      increase in volume could turn into a game-changing investment. I am definitely guilty of having this mentality. Usually when you see a stock
                      making new highs, you assume it's reaching its peak and will come down soon. So you avoid investment. Yes, there are times when this will be
                      the case, but you also need to realize that a lot of the time it isn't. A stock could just be getting started and if you invest in a stock
                      that's making higher highs at the right time, it is more likely to continue making higher highs. To wrap this paragraph up and put this in
                      other words... O'neil's point here is that you are far more likely to see a great return on your investment if you put it in a stock that is
                      making higher highs, over a stock that, although is cheap, is making lower lows.
                    </li>
                    <li>
                      When is the best time to go in on a stock? Look for a correction followed by a consolidation period that can last from 7-8 weeks all the way
                      up to 15 months. This consolidation period is called the base-building period. Eventually, if the stock price breaks out of this consolidation
                      period and begins to climb, the best place to buy the stock will be right at or right as it is approaching a new high. I believe this is more
                      of a long term approach, so you should be looking at weekly time period charts for this strategy.
                    </li>
                    <li>
                      Wait until a stock looks high to a majority of investors (typically after this consolidation period mentioned in the previous point). Ride out
                      the wave as the stock price increases and begins to look good to the convential investors. Then sell.
                    </li>
                    <li>
                      The key points from the chapter are to first search for a company that has new management, essential new products, or changes to the conditions
                      of the company's industry. Second, look for companies who's stock prices are exiting a consolidation period and reaching for new highs.
                    </li>
                  </ul>
                </li>

                <li>
                  <h4>Chapter 4 - (S) Supply and Demand: Small Capitalization Plus Big Volume Demand</h4>
                  <ul>
                    <li>
                      Companies with a large number of shares outstanding require a lot more demand to see any significant price increases. Therefore, it is more
                      likely, and in your best interest to invest in companies that have a much lower number of shares outstanding. Price movements in companies
                      with too many shares just require too much volume compared to companies with a much smaller amount of shares. It is simple supply and demand.
                    </li>
                    <li>
                      The shares outstanding of common stock are what is potentially available to the public to be purchased. This is an important number to consider,
                      as mentioned in the previous point. However, something just as important is the 'floating' supply. This is the amount of common shares available
                      for purchase if you don't consider the stock that is owned by company management/officers. If top management owns a lot of stock in a company,
                      the company is much more likely to be a great investment.
                    </li>
                    <li>
                      In most cases, stay away from giant companies. In bigger companies, upper management typically doesn't own as much stock,
                      there's less incentive to take risks and use imagination, and often times the chain from upper management down to the customer is just too long for
                      management to really engage in anything. Even if the previous statements are not true about a company and they invent some cool new product, the
                      resulting sales would still be too small to have a massive impact on the company. The company is just too big and new sales for new products account
                      for only a small percentage of the total that the company brings in.
                    </li>
                    <li>
                      O'neil's 40 year study found that 95% of companies had less than 25 million shares during their greatest periods of earnings. The average capitalization
                      during this time period for these successful companies was 11.8 million shares. Look for companies with number of shares at this range/magnitude as
                      opposed to ones that are in the hundreds of millions.
                    </li>
                    <li>
                      Companies will often look to do a stock split after a nice price-run up lasting a year or two in an effort to make the now-cheaper stocks more attractive
                      to investors. During a stock split a company multiplies the number of stock by a certain factor and divides the price by the same factor. So, for example, a
                      2 to 1 split means the amount of stock in circulation will be doubled, but the price of each stock will be halved. The first time this happens is generally
                      okay, but if a company continues splitting their stock after this, the capitalization will just become too big too quickly and growth will become sluggish.
                      Also watch out for large ratio stock splits. Generally 1 to 2 or 3 to 2 (1.5) is acceptable. If a company is splitting 3 to 1 or 5 to 1, that may be a good
                      indication to pull out. You should also back out if this is the second or third time a split is happening.
                    </li>
                    <li>
                      A small or medium company that is actively buying back its own stock is a great investment because the company itself believes it is a great investment.
                      It also means less available stock in the marketplace. The smaller supply means there doesn't need to be as much demand/volume to see significant price
                      movement and growth.
                    </li>
                    <li>
                      Companies with low debt-to-equity ratios are always a safer investment. Companies that are consistently decreasing their debt with respect to their equity
                      on a yearly basis are also good signs for a company.
                    </li>
                    <li>
                      Smaller capitlization companies tend to be more volatile, so there is more risk involved in the investment. But that also means there is more opportunity
                      for significant growth. Watch out for low cap companies with no institutional sponsorship or ownership. They have low liquidity and a low following.
                    </li>
                    <li>
                      Volume is the best indicator of supply and demand for a stock. The stocks you invest in should have low volumes on corrections and high
                      volumes during upswings. If people are really bullish about a stock, you should see at least 50% increased volume than usual as a stock's price breaks away
                      from its base structure/price. It can increase more than this, oftentimes.
                    </li>
                  </ul>
                </li>

                <li>
                  <h4>Chapter 5 - (L) Leader or Laggard: Which is Your Stock?</h4>
                  <ul>
                    <li>
                      Don't buy a stock solely because it makes you feel comfortable or you know the name. Do your research and pick stocks that have a lot of potential for
                      good growth. Oftentimes, an industry will only have two to three stocks that perform very well, while the remaining stocks in that industry stay stangnant.
                      If you are focusing on comfort picks, you may miss out on these two or three diamond stocks that explode to the moon.
                    </li>
                    <li>
                      Don't invest in sympathy stocks. A sympathy stock follows the price movement of a leading stock within the same industry group. However, the sympathy stock
                      will show much weaker performance and price movement as compared to the industry leader stock. The leading stock will make great movements and while weaker
                      stocks within that industry will attempt to (but fail to) follow, "in sympathy", the price movement of the leading stock. Always look for the group leader.
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
