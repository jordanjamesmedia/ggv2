import gc2 from '../assets/images/gc2.jpg'
import gc7 from '../assets/images/gc7.jpg'
import gc8 from '../assets/images/gc8.jpg'
import gc11 from '../assets/images/gc11.jpg'
import gc13 from '../assets/images/gc13.jpg'
import gc14 from '../assets/images/gc14.jpg'

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'why-regular-gutter-cleaning-is-essential',
    title: 'Why Regular Gutter Cleaning is Essential for Your Home',
    excerpt: 'Discover the importance of maintaining clean gutters and how it protects your home from water damage, foundation issues, and pest infestations.',
    content: `
      Regular gutter cleaning is one of the most important maintenance tasks for your home, yet it's often overlooked. Clean gutters are essential for protecting your home's foundation, preventing water damage, and maintaining your property's value.

      When gutters become clogged with leaves, twigs, and debris, they can't effectively channel water away from your home. This can lead to several serious problems:

      1. Foundation Damage
      When gutters overflow, water pools around your home's foundation. Over time, this can lead to cracks, settling, and expensive repairs.

      2. Roof Damage
      Backed-up gutters can cause water to seep under your roofing materials, leading to rotted roof decking, damaged shingles, and interior water damage.

      3. Pest Infestations
      Clogged gutters create the perfect environment for pests like mosquitoes, birds, and rodents to make their homes.

      4. Ice Dams
      In winter, clogged gutters can lead to ice dams, which can cause significant damage to your roof and gutters.

      5. Landscape Erosion
      Overflowing gutters can erode your landscaping and damage plants below.

      To protect your home, we recommend cleaning your gutters at least twice a year - more frequently if you have many trees near your house. Professional gutter cleaning ensures thorough removal of debris and inspection of your gutter system for any potential issues.
    `,
    date: '2023-12-05',
    author: 'Mike Wilson',
    imageUrl: gc13,
    readTime: 5
  },
  {
    id: 'signs-you-need-gutter-cleaning',
    title: '5 Warning Signs Your Gutters Need Cleaning',
    excerpt: 'Learn to recognize the telltale signs that indicate your gutters need professional cleaning before serious damage occurs.',
    content: `
      Your gutters play a crucial role in protecting your home from water damage, but how do you know when they need cleaning? Here are five warning signs to watch for:

      1. Overflowing During Rain
      If you notice water cascading over the sides of your gutters during rainfall, this is a clear sign they're clogged. This overflow can damage your fascia boards and foundation.

      2. Sagging Gutters
      When gutters become too heavy with debris and standing water, they begin to pull away from your house. This can lead to structural damage and eventual gutter system failure.

      3. Plant Growth
      Seeds can sprout in the accumulated debris in your gutters. If you see plants growing, it's definitely time for a cleaning.

      4. Pest Activity
      An increase in bird or pest activity around your gutters often indicates they're full of organic matter that's attracting wildlife.

      5. Water Marks
      Water marks or damage on your siding beneath the gutters is a sign that water is not being properly channeled away from your home.

      Don't wait until you see these signs to schedule a cleaning. Regular maintenance can prevent these issues and protect your home from costly water damage.
    `,
    date: '2023-12-04',
    author: 'Sarah Johnson',
    imageUrl: gc11,
    readTime: 4
  },
  {
    id: 'gutter-guard-benefits',
    title: 'The Benefits of Installing Gutter Guards',
    excerpt: 'Explore how gutter guards can reduce maintenance needs, protect your home, and provide long-term cost savings.',
    content: `
      Gutter guards are an investment in your home's protection and maintenance efficiency. These simple additions to your gutter system can provide numerous benefits:

      Long-Term Cost Savings
      While there's an initial investment, gutter guards can save you money over time by:
      - Reducing the frequency of professional cleanings
      - Preventing costly water damage repairs
      - Extending the life of your gutter system

      Reduced Maintenance
      Gutter guards significantly reduce the amount of debris that enters your gutters, meaning:
      - Less frequent cleaning required
      - Reduced risk of clogs
      - Easier maintenance when cleaning is needed

      Better Water Flow
      Protected gutters function more effectively by:
      - Maintaining consistent water flow
      - Preventing overflow and water damage
      - Reducing the risk of ice dams in winter

      Home Protection
      Gutter guards help protect your home by:
      - Preventing pest infestations
      - Reducing fire risk from dry debris
      - Protecting your foundation from water damage

      While gutter guards don't eliminate the need for maintenance entirely, they can significantly reduce it while providing better protection for your home.
    `,
    date: '2023-12-03',
    author: 'Tom Anderson',
    imageUrl: gc8,
    readTime: 6
  },
  {
    id: 'professional-vs-diy-gutter-cleaning',
    title: 'Professional vs DIY Gutter Cleaning: What You Need to Know',
    excerpt: 'Compare the pros and cons of professional gutter cleaning services versus doing it yourself, including safety considerations and cost analysis.',
    content: `
      When it comes to gutter cleaning, homeowners often debate between hiring professionals or tackling the job themselves. Here's a comprehensive comparison to help you make an informed decision:

      Professional Gutter Cleaning
      Advantages:
      - Safety: Professionals have proper equipment and training
      - Thoroughness: Complete cleaning and inspection of your gutter system
      - Efficiency: Quick completion with professional tools
      - Insurance: Protection against accidents or damage
      - Expert Assessment: Identification of potential issues

      Disadvantages:
      - Cost: Higher upfront expense
      - Scheduling: Need to coordinate with service provider

      DIY Gutter Cleaning
      Advantages:
      - Cost Savings: Only equipment expenses
      - Flexibility: Clean on your own schedule
      - Immediate Action: Address issues as soon as you notice them

      Disadvantages:
      - Safety Risks: Working at height can be dangerous
      - Time-Consuming: Longer completion time without professional tools
      - Limited Expertise: May miss potential problems
      - Equipment Needs: Must purchase or rent proper tools

      For most homeowners, professional cleaning is the safer and more efficient choice, especially for multi-story homes or complex gutter systems.
    `,
    date: '2023-12-02',
    author: 'Chris Martinez',
    imageUrl: gc7,
    readTime: 7
  },
  {
    id: 'seasonal-gutter-maintenance-guide',
    title: 'Your Seasonal Gutter Maintenance Guide',
    excerpt: 'A comprehensive guide to maintaining your gutters throughout the year, with specific tips for each season.',
    content: `
      Proper gutter maintenance varies with the seasons. Here's your guide to keeping your gutters in top condition year-round:

      Spring Maintenance
      - Remove winter debris and check for winter damage
      - Clear any remaining ice or snow
      - Check for loose brackets or sagging
      - Clean out accumulated seeds and pollen
      
      Summer Maintenance
      - Remove debris from summer storms
      - Check for bird nests and pest infestations
      - Ensure downspouts are clear and directing water properly
      - Look for signs of sun damage or warping

      Fall Maintenance
      - Regular cleaning as leaves fall
      - Install leaf guards if needed
      - Check for proper drainage
      - Ensure gutters are secure before winter

      Winter Maintenance
      - Remove ice dams as they form
      - Check for snow accumulation
      - Monitor for icicles
      - Look for signs of stress from ice and snow weight

      Year-Round Tips
      - Inspect after major storms
      - Monitor for signs of water damage
      - Keep trees trimmed away from gutters
      - Address repairs promptly

      Following this seasonal guide helps prevent major issues and extends the life of your gutter system.
    `,
    date: '2023-12-01',
    author: 'Emily Parker',
    imageUrl: gc14,
    readTime: 8
  },
  {
    id: 'common-gutter-problems',
    title: 'Common Gutter Problems and How to Fix Them',
    excerpt: 'Learn about the most common gutter issues homeowners face and get expert advice on how to address them effectively.',
    content: `
      Understanding common gutter problems and their solutions can help you maintain your home's drainage system effectively. Here are the most frequent issues and how to address them:

      1. Clogged Gutters
      Problem: Debris accumulation preventing proper water flow
      Solution:
      - Regular cleaning (at least twice yearly)
      - Install gutter guards
      - Trim overhanging branches

      2. Sagging Gutters
      Problem: Gutters pulling away from the house
      Solution:
      - Replace damaged brackets
      - Add additional support hangers
      - Check for proper slope

      3. Leaking Joints
      Problem: Water leaking at seams and corners
      Solution:
      - Seal joints with gutter sealant
      - Replace damaged sections
      - Consider seamless gutters

      4. Improper Slope
      Problem: Water not flowing to downspouts
      Solution:
      - Adjust hangers to create proper slope
      - Realign gutter sections
      - Professional re-installation if needed

      5. Damaged Downspouts
      Problem: Crushed or disconnected downspouts
      Solution:
      - Replace damaged sections
      - Add downspout supports
      - Install splash blocks at base

      Regular inspection and maintenance can prevent most of these issues from becoming major problems.
    `,
    date: '2023-11-30',
    author: 'David Thompson',
    imageUrl: gc2,
    readTime: 6
  }
]; 