import React from 'react'
import * as styles from './sample.module.css'

import Blog from '../../components/Blog'
import Container from '../../components/Container'
import Layout from '../../components/Layout/Layout'
import { toOptimizedImage } from '../../helpers/general'

const BrandingFixPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'branding'}
              title={'Why Your Business Branding Looks DIY (And 3 Steps to Fix It Under An Hour)'}
              image={'/images/blog/branding-fix/featured.jpg'}
              alt={'Before and after branding mockup'}
            >
              <div className={styles.content}>

                <h1>Why Your Business Branding Looks DIY (And 3 Steps to Fix It Under An Hour)</h1>

                {/* Optional featured image */}
                <img
                  src="/images/blog/branding-fix/featured.jpg"
                  alt="Before and after branding mockup"
                  style={{ maxWidth: "100%", height: "auto", margin: "1rem 0" }}
                />

                <p>
                  You’ve been putting off “doing your branding” for weeks now. Maybe months. Maybe
                  it’s the last thing on your to-do list before officially launching your dream business.
                </p>

                <p>
                  You know you need a logo. You know your Instagram looks… random. You’ve watched
                  other businesses launch with gorgeous, cohesive branding and thought, “How did they
                  figure that out?”
                </p>

                <p>
                  Meanwhile, you’ve changed your bio for the tenth time, tweaked colors in Canva until
                  2 AM, and still feel like something’s off. Your biggest fear? Looking unprofessional.
                </p>

                <p><strong>Here’s the truth:</strong> You’re not bad at design. You just don’t have a system.</p>
                <p><strong>Here’s the good news:</strong> You don’t have to figure this out alone.</p>

                <hr />

                <h2>The Real Problem Isn’t What You Think</h2>
                <p>
                  Most new business owners think they need to become graphic designers overnight. They
                  spend hours watching YouTube tutorials about color theory, researching design apps,
                  testing endless templates.
                </p>

                <p>But here’s what’s actually happening:</p>
                <ul>
                  <li>❌ You’re paralyzed by infinite choices instead of just picking something clean</li>
                  <li>❌ You’re reinventing the wheel when proven templates already exist</li>
                  <li>❌ You’re treating branding like art class instead of business strategy</li>
                </ul>

                <p>
                  The result? Potential customers see your content and think <em>“side hustle”</em> instead of
                  <em>“established business.”</em> That perception gap is costing you sales — and it’s completely fixable.
                </p>

                <hr />

                <h2>The Solution Is Simpler Than You Think</h2>
                <p>
                  The businesses that look most professional aren’t necessarily the most creative —
                  they’re the most consistent. Same colors, same fonts, same approach everywhere they show up.
                </p>

                <p><strong>Perfect branding doesn’t exist, but consistent branding works like magic.</strong></p>

                <ul>
                  <li>That local bakery with the simple logo? They use it everywhere, exactly the same way.</li>
                  <li>That Etsy shop that’s crushing it? Same fonts, same colors, same style across every product photo.</li>
                  <li>That coffee shop down the street? Their Instagram matches their storefront matches their business cards.</li>
                </ul>

                <p>Looking professional doesn’t require a design degree or a $2,000 designer.</p>

                <hr />

                <h2>The 3-Step Branding Fix (1 Hour)</h2>
                <p>The most successful small businesses don’t have the most creative branding — they have the most consistent branding.</p>

                <h3>Step 1: Lock Down Your Color Palette (15 minutes)</h3>
                <p>
                  Choose exactly three colors: one primary, one neutral (black/gray/white), one accent.
                  Write down the hex codes. Use only these colors for the next 6 months. Period.
                </p>

                <h3>Step 2: Select Your Font Pair (10 minutes)</h3>
                <p>
                  Pick two fonts maximum: one for headers, one for body text. Stick with them across every
                  platform — social media, business cards, website, everything.
                </p>

                <h3>Step 3: Create Your Logo Standard (30 minutes)</h3>
                <p>
                  Keep it simple. Your business name in your header font, possibly with a basic shape or line.
                  Professional doesn’t mean complicated — it means consistent and clean.
                </p>

                <hr />

                <h2>Apply It Everywhere, Exactly the Same Way</h2>
                <p>Once you have these three elements, use them identically across:</p>
                <ul>
                  <li>Social media profiles and posts</li>
                  <li>Website headers and content</li>
                  <li>Business cards and printed materials</li>
                  <li>Email signatures and invoices</li>
                </ul>

                <p>
                  When someone sees your Instagram post, then visits your website, they should immediately
                  think, “Yes, this is the same company.” That recognition builds trust. Trust converts to sales.
                </p>

                <hr />

                <h2>Your Branding Doesn’t Have to Be Perfect</h2>
                <p>
                  It just has to be yours, and it has to be consistent. You don’t need to reinvent design
                  principles or create something no one’s ever seen. You need to look professional enough
                  that people trust you with their money.
                </p>

                <p>And honestly? If you can follow a recipe, you can brand your business.</p>

                <hr />

                <h2>Skip the Learning Curve (Let Me Handle the Heavy Lifting)</h2>
                <p>
                  You could spend the next month researching color theory and typography. Or you could use
                  a proven system that just works.
                </p>

                <p>With <strong>The Branding Kit</strong>, you’ll get:</p>
                <ul>
                  <li>✅ Pre-selected color palettes that look expensive (but aren’t)</li>
                  <li>✅ Professional font combinations that work perfectly together</li>
                  <li>✅ Logo templates you can customize in minutes, not hours</li>
                  <li>✅ Step-by-step guidance for applying everything consistently</li>
                  <li>✅ Done-for-you social media templates to get you started fast</li>
                </ul>

                <p>
                  Think of it as your branding shortcut. Instead of figuring out what works through trial and
                  error, you get proven combinations that make you look established and professional from day one.
                </p>

                <hr />

                <h2>Ready to Stop Worrying About Your Branding?</h2>
                <p>
                  You have enough on your plate running your business. Let me handle the visual stuff so
                  you can focus on what you do best — serving your customers and growing your revenue.
                </p>

                <p>The Branding Kit gets you professionally branded in 5 days, not 5 weeks.</p>

                <p>
                  <a
                    href="/#pricing"
                    style={{
                      display: "inline-block",
                      padding: "12px 20px",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontWeight: 600,
                      border: "1px solid currentColor"
                    }}
                  >
                    👉 Yes, I Want Professional Branding ($27)
                  </a>
                </p>

              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default BrandingFixPage
