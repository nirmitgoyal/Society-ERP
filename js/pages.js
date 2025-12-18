/**
 * SocietyERP Page Content
 * Auto-generated from HTML files
 */

window.PAGES = {
  "dashboard": {
    title: "Dashboard Overview",
    subtitle: "Welcome back! Here's what's happening today.",
    content: `<div id="stats-grid" class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i
                class="fa-solid fa-indian-rupee-sign text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">+2% (MoM)</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹8,45,230</h3>
          <p class="text-sm text-neutral-500">Total Collections(maintenance and
            fines) (MTD)</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i
                class="fa-solid fa-exclamation-triangle text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">12
              Units</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹1,24,500</h3>
          <p class="text-sm text-neutral-500">Pending Payments</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i
                class="fa-solid fa-clipboard-list text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">8
              Open</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">23</h3>
          <p class="text-sm text-neutral-500">Active Complaints</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-users text-neutral-600 text-xl"></i></div>
            <span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">94.2%</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">156/165</h3>
          <p class="text-sm text-neutral-500">Units Paid (MTD)</p>
        </div>
      </div>
      <div id="content-grid" class="grid grid-cols-3 gap-6 mb-8">
        <div
          class="col-span-2 bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">Recent Transactions</h3><button
              class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1"><span>View
                All</span><i
                class="fa-solid fa-arrow-right text-xs"></i>
          </button></div>
          <div class="space-y-4">
            <div
              class="flex items-center justify-between py-3 border-b border-neutral-100">
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-check text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Flat A-304 - Maintenance
                  </p>
                  <p class="text-xs text-neutral-500">Amit Sharma • UPI Payment
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">+₹5,500</p>
                <p class="text-xs text-neutral-500">2 hours ago</p>
              </div>
            </div>
            <div
              class="flex items-center justify-between py-3 border-b border-neutral-100">
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-check text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Flat B-102 - Electricity
                    Bill</p>
                  <p class="text-xs text-neutral-500">Priya Patel • Net Banking
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">+₹2,340</p>
                <p class="text-xs text-neutral-500">5 hours ago</p>
              </div>
            </div>
            <div
              class="flex items-center justify-between py-3 border-b border-neutral-100">
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-xmark text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Flat C-205 - Water Bill
                  </p>
                  <p class="text-xs text-neutral-500">Rahul Verma • Payment
                    Failed</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">₹890</p>
                <p class="text-xs text-neutral-500">Yesterday</p>
              </div>
            </div>
            <div
              class="flex items-center justify-between py-3 border-b border-neutral-100">
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-check text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Flat D-401 - Maintenance
                  </p>
                  <p class="text-xs text-neutral-500">Sneha Reddy • Credit Card
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">+₹5,500</p>
                <p class="text-xs text-neutral-500">Yesterday</p>
              </div>
            </div>
            <div class="flex items-center justify-between py-3">
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-check text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Flat E-108 - Electricity
                    Bill</p>
                  <p class="text-xs text-neutral-500">Vikram Singh • UPI Payment
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">+₹1,780</p>
                <p class="text-xs text-neutral-500">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">Active Complaints</h3><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">8
              Open</span>
          </div>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-center gap-2">
                  <div
                    class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                    <i class="fa-solid fa-bolt text-neutral-600 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Power Outage</p>
                    <p class="text-xs text-neutral-500">Flat A-201</p>
                  </div>
                </div><span
                  class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Critical</span>
              </div>
              <p class="text-xs text-neutral-600 mb-3">Main power supply
                disrupted in A-wing</p>
              <div class="flex items-center justify-between"><span
                  class="text-xs text-neutral-500">2 hours ago</span><span
                  class="text-xs text-neutral-600">Level 2 Escalation</span>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-center gap-2">
                  <div
                    class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                    <i class="fa-solid fa-droplet text-neutral-600 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Water Leakage</p>
                    <p class="text-xs text-neutral-500">Flat B-305</p>
                  </div>
                </div><span
                  class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">High</span>
              </div>
              <p class="text-xs text-neutral-600 mb-3">Bathroom pipe leaking
                continuously</p>
              <div class="flex items-center justify-between"><span
                  class="text-xs text-neutral-500">5 hours ago</span><span
                  class="text-xs text-neutral-600">Assigned</span></div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-center gap-2">
                  <div
                    class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                    <i class="fa-solid fa-hammer text-neutral-600 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Wall Crack</p>
                    <p class="text-xs text-neutral-500">Flat C-102</p>
                  </div>
                </div><span
                  class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Medium</span>
              </div>
              <p class="text-xs text-neutral-600 mb-3">Large crack appeared in
                living room wall</p>
              <div class="flex items-center justify-between"><span
                  class="text-xs text-neutral-500">1 day ago</span><span
                  class="text-xs text-neutral-600">In Progress</span></div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-start justify-between mb-2">
                <div class="flex items-center gap-2">
                  <div
                    class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                    <i class="fa-solid fa-droplet text-neutral-600 text-sm"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Low Water Pressure</p>
                    <p class="text-xs text-neutral-500">Flat D-504</p>
                  </div>
                </div><span
                  class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Medium</span>
              </div>
              <p class="text-xs text-neutral-600 mb-3">Water pressure very low
                in morning hours</p>
              <div class="flex items-center justify-between"><span
                  class="text-xs text-neutral-500">2 days ago</span><span
                  class="text-xs text-neutral-600">Pending</span></div>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom-grid" class="grid grid-cols-2 gap-6">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">Payment Defaulters</h3><button
              class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1"><span>Send
                Reminders</span><i
                class="fa-solid fa-paper-plane text-xs"></i>
          </button></div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-neutral-200">
                  <th
                    class="text-left py-3 px-2 text-xs text-neutral-600 uppercase">
                    Unit</th>
                  <th
                    class="text-left py-3 px-2 text-xs text-neutral-600 uppercase">
                    Owner</th>
                  <th
                    class="text-left py-3 px-2 text-xs text-neutral-600 uppercase">
                    Amount Due</th>
                  <th
                    class="text-left py-3 px-2 text-xs text-neutral-600 uppercase">
                    Days Overdue</th>
                  <th
                    class="text-left py-3 px-2 text-xs text-neutral-600 uppercase">
                    Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-neutral-100">
                  <td class="py-3 px-2 text-sm text-neutral-900">A-405</td>
                  <td class="py-3 px-2">
                    <div class="flex items-center gap-2"><img
                        src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=3421"
                        alt="Owner" class="w-6 h-6 rounded-full"><span
                        class="text-sm text-neutral-900">Suresh Kumar</span>
                    </div>
                  </td>
                  <td class="py-3 px-2 text-sm text-neutral-600">₹16,500</td>
                  <td class="py-3 px-2"><span
                      class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">45
                      days</span></td>
                  <td class="py-3 px-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i></td>
                </tr>
                <tr class="border-b border-neutral-100">
                  <td class="py-3 px-2 text-sm text-neutral-900">B-201</td>
                  <td class="py-3 px-2">
                    <div class="flex items-center gap-2"><img
                        src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=7832"
                        alt="Owner" class="w-6 h-6 rounded-full"><span
                        class="text-sm text-neutral-900">Meena Joshi</span>
                    </div>
                  </td>
                  <td class="py-3 px-2 text-sm text-neutral-600">₹11,000</td>
                  <td class="py-3 px-2"><span
                      class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">32
                      days</span></td>
                  <td class="py-3 px-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i></td>
                </tr>
                <tr class="border-b border-neutral-100">
                  <td class="py-3 px-2 text-sm text-neutral-900">C-308</td>
                  <td class="py-3 px-2">
                    <div class="flex items-center gap-2"><img
                        src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=9234"
                        alt="Owner" class="w-6 h-6 rounded-full"><span
                        class="text-sm text-neutral-900">Anil Desai</span></div>
                  </td>
                  <td class="py-3 px-2 text-sm text-neutral-600">₹8,900</td>
                  <td class="py-3 px-2"><span
                      class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">28
                      days</span></td>
                  <td class="py-3 px-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i></td>
                </tr>
                <tr class="border-b border-neutral-100">
                  <td class="py-3 px-2 text-sm text-neutral-900">D-102</td>
                  <td class="py-3 px-2">
                    <div class="flex items-center gap-2"><img
                        src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=5678"
                        alt="Owner" class="w-6 h-6 rounded-full"><span
                        class="text-sm text-neutral-900">Kavita Shah</span>
                    </div>
                  </td>
                  <td class="py-3 px-2 text-sm text-neutral-600">₹5,500</td>
                  <td class="py-3 px-2"><span
                      class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">18
                      days</span></td>
                  <td class="py-3 px-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">Vendor Workforce Status</h3>
            <button class="text-sm text-neutral-600 hover:text-neutral-900">View
              All
          </button></div>
          <div class="space-y-4">
            <div
              class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-broom text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Cleaning Services</p>
                  <p class="text-xs text-neutral-500">CleanPro Solutions</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">8/8</p>
                <p class="text-xs text-neutral-500">Present Today</p>
              </div>
            </div>
            <div
              class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-bolt text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Electrical</p>
                  <p class="text-xs text-neutral-500">PowerTech Electricals</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">4/5</p>
                <p class="text-xs text-neutral-500">Present Today</p>
              </div>
            </div>
            <div
              class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-droplet text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Plumbing</p>
                  <p class="text-xs text-neutral-500">AquaFix Plumbers</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">6/6</p>
                <p class="text-xs text-neutral-500">Present Today</p>
              </div>
            </div>
            <div
              class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-leaf text-neutral-600"></i></div>
                <div>
                  <p class="text-sm text-neutral-900">Gardening</p>
                  <p class="text-xs text-neutral-500">GreenScape Gardens</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">2/3</p>
                <p class="text-xs text-neutral-500">Present Today</p>
              </div>
            </div>
            <div
              class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-paint-roller text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Painting</p>
                  <p class="text-xs text-neutral-500">ColorCraft Painters</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-600">3/3</p>
                <p class="text-xs text-neutral-500">Present Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>`
  },

  "invoices": {
    title: "Invoices Management",
    subtitle: "Track and manage all resident invoices, billing and payment status",
    content: `<div id="stats-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-file-invoice text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">247</h3>
          <p class="text-sm text-neutral-500">Total Invoices</p>
          <p class="text-xs text-neutral-400 mt-2">Current period</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-circle-check text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">198</h3>
          <p class="text-sm text-neutral-500">Paid Invoices</p>
          <p class="text-xs text-neutral-400 mt-2">80.2% collection rate</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-clock text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">37</h3>
          <p class="text-sm text-neutral-500">Pending Invoices</p>
          <p class="text-xs text-neutral-400 mt-2">Within due date</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-triangle-exclamation text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">12</h3>
          <p class="text-sm text-neutral-500">Overdue Invoices</p>
          <p class="text-xs text-neutral-400 mt-2">Requires attention</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-indian-rupee-sign text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹1.2M</h3>
          <p class="text-sm text-neutral-500">Total Outstanding</p>
          <p class="text-xs text-neutral-400 mt-2">Across all invoices</p>
        </div>
      </div>
      <div id="quick-filters-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg text-neutral-900">Quick Filters</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900">
            <i class="fa-solid fa-rotate-right mr-2"></i>
            Reset All
          </button>
        </div>
        <div class="grid grid-cols-6 gap-4">
          <button class="px-4 py-3 border-2 border-neutral-900 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center justify-center gap-2">
            <i class="fa-solid fa-list"></i>
            <span>All Invoices</span>
          </button>
          <button class="px-4 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg text-sm hover:border-neutral-900 hover:bg-neutral-50 flex items-center justify-center gap-2">
            <i class="fa-solid fa-circle-check"></i>
            <span>Paid</span>
          </button>
          <button class="px-4 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg text-sm hover:border-neutral-900 hover:bg-neutral-50 flex items-center justify-center gap-2">
            <i class="fa-solid fa-clock"></i>
            <span>Pending</span>
          </button>
          <button class="px-4 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg text-sm hover:border-neutral-900 hover:bg-neutral-50 flex items-center justify-center gap-2">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Overdue</span>
          </button>
          <button class="px-4 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg text-sm hover:border-neutral-900 hover:bg-neutral-50 flex items-center justify-center gap-2">
            <i class="fa-solid fa-bolt"></i>
            <span>Electricity</span>
          </button>
          <button class="px-4 py-3 border-2 border-neutral-200 text-neutral-700 rounded-lg text-sm hover:border-neutral-900 hover:bg-neutral-50 flex items-center justify-center gap-2">
            <i class="fa-solid fa-wrench"></i>
            <span>Maintenance</span>
          </button>
        </div>
      </div>
      <div id="invoice-table-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Invoice List</h3>
              <p class="text-sm text-neutral-500 mt-1">All invoices with payment status and aging information</p>
            </div>
            <div class="flex items-center gap-3">
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-download"></i>
                <span>Export</span>
              </button>
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-paper-plane"></i>
                <span>Send Bulk Reminders</span>
              </button>
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span>Invoice ID</span>
                  </div>
                </th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Resident</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Bill Type</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Period</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Issue Date</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Due Date</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Total Amount</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Outstanding</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Status</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Aging</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <div>
                      <p class="text-sm text-neutral-900">INV-20251201-0001</p>
                      <p class="text-xs text-neutral-500">AR-INV-5001</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1111" alt="Resident" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Asha Verma</p>
                      <p class="text-xs text-neutral-500">F-101</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-wrench text-neutral-600 text-xs"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Maintenance</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 01, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 15, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹3,500</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹0</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Paid</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">0 days</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900" title="View PDF">
                      <i class="fa-solid fa-file-pdf"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="View Payments">
                      <i class="fa-solid fa-money-bill"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Audit Log">
                      <i class="fa-solid fa-clock-rotate-left"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <div>
                      <p class="text-sm text-neutral-900">INV-20251201-0008</p>
                      <p class="text-xs text-neutral-500">AR-INV-5010</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=2222" alt="Resident" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Sunil Rao</p>
                      <p class="text-xs text-neutral-500">F-102</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-bolt text-neutral-600 text-xs"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Electricity</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 01, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 15, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹2,800</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹2,800</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-400 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Overdue</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">31-60 days</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Export PDF">
                      <i class="fa-solid fa-file-pdf"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Mark Dispute">
                      <i class="fa-solid fa-flag"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <div>
                      <p class="text-sm text-neutral-900">INV-20251201-0015</p>
                      <p class="text-xs text-neutral-500">AR-INV-5015</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3333" alt="Resident" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Meera Patel</p>
                      <p class="text-xs text-neutral-500">F-205</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-droplet text-neutral-600 text-xs"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Water</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 01, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 15, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹1,200</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹1,200</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-500 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Pending</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">0-30 days</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900" title="View PDF">
                      <i class="fa-solid fa-file-pdf"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Record Payment">
                      <i class="fa-solid fa-money-bill"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <div>
                      <p class="text-sm text-neutral-900">INV-20251201-0022</p>
                      <p class="text-xs text-neutral-500">AR-INV-5022</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=4444" alt="Resident" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Rajesh Kumar</p>
                      <p class="text-xs text-neutral-500">F-310</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-wrench text-neutral-600 text-xs"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Maintenance</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 01, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 15, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹3,500</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹0</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Paid</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">0 days</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900" title="View PDF">
                      <i class="fa-solid fa-file-pdf"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="View Payments">
                      <i class="fa-solid fa-money-bill"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Audit Log">
                      <i class="fa-solid fa-clock-rotate-left"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <div>
                      <p class="text-sm text-neutral-900">INV-20251201-0029</p>
                      <p class="text-xs text-neutral-500">AR-INV-5029</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5555" alt="Resident" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Priya Singh</p>
                      <p class="text-xs text-neutral-500">F-412</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-bolt text-neutral-600 text-xs"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Electricity</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 01, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 15, 2025</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹3,100</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">₹3,100</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-500 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Pending</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">0-30 days</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900" title="View PDF">
                      <i class="fa-solid fa-file-pdf"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900" title="Record Payment">
                      <i class="fa-solid fa-money-bill"></i>
                    </button>
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-6 border-t border-neutral-200">
          <div class="flex items-center justify-between">
            <p class="text-sm text-neutral-500">Showing 1-5 of 247 invoices</p>
            <div class="flex items-center gap-2">
              <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <button class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1</button>
              <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">2</button>
              <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">3</button>
              <span class="px-3 py-2 text-neutral-500">...</span>
              <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">50</button>
              <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
                <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="aging-analysis-section" class="grid grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">Aging Analysis</h3>
              <p class="text-sm text-neutral-500 mt-1">Outstanding amounts by aging bucket</p>
            </div>
            <button class="text-neutral-600 hover:text-neutral-900">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-900 mb-1">0-30 Days</p>
                <p class="text-xs text-neutral-500">Current dues</p>
              </div>
              <div class="text-right">
                <p class="text-lg text-neutral-900">₹4.2L</p>
                <p class="text-xs text-neutral-500">35 invoices</p>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-900 mb-1">31-60 Days</p>
                <p class="text-xs text-neutral-500">Early overdue</p>
              </div>
              <div class="text-right">
                <p class="text-lg text-neutral-900">₹3.8L</p>
                <p class="text-xs text-neutral-500">28 invoices</p>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-900 mb-1">61-90 Days</p>
                <p class="text-xs text-neutral-500">Late overdue</p>
              </div>
              <div class="text-right">
                <p class="text-lg text-neutral-900">₹2.1L</p>
                <p class="text-xs text-neutral-500">15 invoices</p>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-900 mb-1">90+ Days</p>
                <p class="text-xs text-neutral-500">Critical overdue</p>
              </div>
              <div class="text-right">
                <p class="text-lg text-neutral-900">₹1.5L</p>
                <p class="text-xs text-neutral-500">9 invoices</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">Bill Type Distribution</h3>
              <p class="text-sm text-neutral-500 mt-1">Outstanding by invoice category</p>
            </div>
            <button class="text-neutral-600 hover:text-neutral-900">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-wrench text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Maintenance</p>
                  <p class="text-xs text-neutral-500">Monthly charges</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-lg text-neutral-900">₹6.8L</p>
                <p class="text-xs text-neutral-500">58%</p>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-bolt text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Electricity</p>
                  <p class="text-xs text-neutral-500">Utility bills</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-lg text-neutral-900">₹3.5L</p>
                <p class="text-xs text-neutral-500">30%</p>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-droplet text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Water</p>
                  <p class="text-xs text-neutral-500">Utility bills</p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-lg text-neutral-900">₹1.4L</p>
                <p class="text-xs text-neutral-500">12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="recent-activity-section" class="bg-white rounded-lg border border-neutral-200">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Recent Invoice Activity</h3>
              <p class="text-sm text-neutral-500 mt-1">Latest invoice generation and payment events</p>
            </div>
            <button class="text-sm text-neutral-900 hover:underline">View All Activity</button>
          </div>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-plus text-neutral-600"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-sm text-neutral-900">Invoice Created</p>
                  <span class="text-xs text-neutral-500">2 hours ago</span>
                </div>
                <p class="text-xs text-neutral-600 mb-2">New maintenance invoice generated for F-501 - Amit Sharma</p>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">INV-20251218-0145</span>
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">₹3,500</span>
                </div>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-check text-neutral-600"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-sm text-neutral-900">Payment Received</p>
                  <span class="text-xs text-neutral-500">5 hours ago</span>
                </div>
                <p class="text-xs text-neutral-600 mb-2">Payment auto-reconciled for F-310 - Rajesh Kumar</p>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">INV-20251201-0022</span>
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">₹3,500</span>
                </div>
              </div>
            </div>
            <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-paper-plane text-neutral-600"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-sm text-neutral-900">Reminder Sent</p>
                  <span class="text-xs text-neutral-500">1 day ago</span>
                </div>
                <p class="text-xs text-neutral-600 mb-2">Payment reminder sent to 12 overdue residents</p>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Bulk Action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
  },

  "billing": {
    title: "Payments",
    subtitle: "Manage invoices, payments, and billing cycles.",
    content: `<div id="payment-stats" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i
                class="fa-solid fa-indian-rupee-sign text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Today</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹6,000</h3>
          <p class="text-sm text-neutral-500">Total Received</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-check-circle text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Auto</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">1</h3>
          <p class="text-sm text-neutral-500">Reconciled</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-clock text-neutral-600 text-xl"></i></div>
            <span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Pending</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">1</h3>
          <p class="text-sm text-neutral-500">Awaiting Action</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-sync text-neutral-600 text-xl"></i></div>
            <span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">SAP</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">1</h3>
          <p class="text-sm text-neutral-500">Synced to SAP</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-mobile-alt text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">UPI</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">1</h3>
          <p class="text-sm text-neutral-500">UPI Payments</p>
        </div>
      </div>
      <div id="filters-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg text-neutral-900">Filters &amp; Actions</h3><button
            class="text-sm text-neutral-600 hover:text-neutral-900">Clear
            All
        </button></div>
        <div class="grid grid-cols-6 gap-4">
          <div><label class="block text-xs text-neutral-600 mb-2">Date
              Range</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select></div>
          <div><label class="block text-xs text-neutral-600 mb-2">Payment
              Method</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Methods</option>
              <option>UPI</option>
              <option>Cash</option>
              <option>Net Banking</option>
              <option>Credit Card</option>
            </select></div>
          <div><label class="block text-xs text-neutral-600 mb-2">Reconciliation
              Status</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Status</option>
              <option>Auto Matched</option>
              <option>Exception Pending</option>
              <option>Manual Review</option>
            </select></div>
          <div><label class="block text-xs text-neutral-600 mb-2">SAP Sync
              Status</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Status</option>
              <option>Synced</option>
              <option>Pending</option>
              <option>Failed</option>
            </select></div>
          <div><label
              class="block text-xs text-neutral-600 mb-2">Flat/Unit</label><input
              type="text" placeholder="F-101, F-102..."
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
          </div>
          <div class="flex items-end"><button
              class="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 text-sm">
              Apply Filters
            </button></div>
        </div>
      </div>
      <div id="bulk-actions"
        class="bg-white rounded-lg border border-neutral-200 p-4 mb-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4"><label
              class="flex items-center gap-2"><input type="checkbox"
                class="w-4 h-4 rounded border-neutral-300"><span
                class="text-sm text-neutral-700">Select All</span></label><span
              class="text-sm text-neutral-500">2 payments selected</span></div>
          <div class="flex items-center gap-3"><button
              class="px-4 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"><i
                class="fa-solid fa-file-export"></i><span>Export
                Selected</span></button><button
              class="px-4 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"><i
                class="fa-solid fa-sync"></i><span>Sync to
                SAP</span></button><button
              class="px-4 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"><i
                class="fa-solid fa-file-pdf"></i><span>Generate
                Report</span></button></div>
        </div>
      </div>
      <div id="payments-table"
        class="bg-white rounded-lg border border-neutral-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase w-12">
                  <input type="checkbox"
                    class="w-4 h-4 rounded border-neutral-300"></th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  Payment ID</th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  Flat ID</th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  Amount</th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  Method</th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  Received At</th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  Reconciliation</th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  SAP Status</th>
                <th
                  class="text-left py-4 px-4 text-xs text-neutral-600 uppercase">
                  Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4"><input type="checkbox"
                    class="w-4 h-4 rounded border-neutral-300"></td>
                <td class="py-4 px-4">
                  <div class="flex flex-col"><span
                      class="text-sm text-neutral-900">PAY-20251205-0001</span><span
                      class="text-xs text-neutral-500">UPI-REF-554433</span>
                  </div>
                </td>
                <td class="py-4 px-4"><span
                    class="text-sm text-neutral-900">F-101</span></td>
                <td class="py-4 px-4"><span
                    class="text-sm text-neutral-900">₹3,500</span></td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i
                        class="fa-solid fa-mobile-alt text-neutral-600 text-xs"></i>
                    </div><span class="text-sm text-neutral-900">UPI</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-col"><span
                      class="text-sm text-neutral-900">05 Dec 2025</span><span
                      class="text-xs text-neutral-500">10:12 AM</span></div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-col gap-1"><span
                      class="inline-flex items-center gap-1 text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded w-fit"><i
                        class="fa-solid fa-check text-neutral-600"></i>
                      Auto Matched
                    </span><span
                      class="text-xs text-neutral-500">VA-GNW-101</span></div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-col gap-1"><span
                      class="inline-flex items-center gap-1 text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded w-fit"><i
                        class="fa-solid fa-check text-neutral-600"></i>
                      Synced
                    </span><span
                      class="text-xs text-neutral-500">SAP_RCPT_9001</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2"><button
                      class="p-2 text-neutral-600 hover:bg-neutral-100 rounded"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="p-2 text-neutral-600 hover:bg-neutral-100 rounded"><i
                        class="fa-solid fa-download"></i></button><button
                      class="p-2 text-neutral-600 hover:bg-neutral-100 rounded"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4"><input type="checkbox"
                    class="w-4 h-4 rounded border-neutral-300"></td>
                <td class="py-4 px-4">
                  <div class="flex flex-col"><span
                      class="text-sm text-neutral-900">PAY-20251206-0002</span><span
                      class="text-xs text-neutral-500">Manual Entry</span></div>
                </td>
                <td class="py-4 px-4"><span
                    class="text-sm text-neutral-900">F-102</span></td>
                <td class="py-4 px-4"><span
                    class="text-sm text-neutral-900">₹2,500</span></td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i
                        class="fa-solid fa-money-bill text-neutral-600 text-xs"></i>
                    </div><span class="text-sm text-neutral-900">CASH</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-col"><span
                      class="text-sm text-neutral-900">06 Dec 2025</span><span
                      class="text-xs text-neutral-500">07:45 AM</span></div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-col gap-1"><span
                      class="inline-flex items-center gap-1 text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded w-fit"><i
                        class="fa-solid fa-exclamation-triangle text-neutral-600"></i>
                      Exception Pending
                    </span><span class="text-xs text-neutral-500">Awaiting
                      deposit</span></div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-col gap-1"><span
                      class="inline-flex items-center gap-1 text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded w-fit"><i
                        class="fa-solid fa-clock text-neutral-600"></i>
                      Pending
                    </span><span class="text-xs text-neutral-500">Not
                      synced</span></div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2"><button
                      class="p-2 text-neutral-600 hover:bg-neutral-100 rounded"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="p-2 text-neutral-600 hover:bg-neutral-100 rounded"><i
                        class="fa-solid fa-download"></i></button><button
                      class="p-2 text-neutral-600 hover:bg-neutral-100 rounded"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="border-t border-neutral-200 px-6 py-4">
          <div class="flex items-center justify-between">
            <div class="text-sm text-neutral-600">
              Showing 2 of 2 payments
            </div>
            <div class="flex items-center gap-2"><button disabled=""
                class="px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"><i
                  class="fa-solid fa-chevron-left"></i></button><button
                class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1</button><button
                disabled=""
                class="px-3 py-2 border border-neutral-300 rounded-lg text-sm text-neutral-700 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"><i
                  class="fa-solid fa-chevron-right"></i></button></div>
          </div>
        </div>
      </div>
      <div id="detailed-sections" class="grid grid-cols-2 gap-6 mt-8"></div>
      <div id="sap-integration-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mt-6">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">SAP Integration Status</h3>
            <p class="text-sm text-neutral-500 mt-1">Real-time synchronization
              with SAP ERP system</p>
          </div><button
            class="px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 flex items-center gap-2"><i
              class="fa-solid fa-sync"></i><span class="text-sm">Sync All
              Pending</span>
        </button></div>
        <div class="grid grid-cols-4 gap-4 mb-6">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-2">
              <div
                class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                <i class="fa-solid fa-check text-neutral-600"></i></div><span
                class="text-2xl text-neutral-900">1</span>
            </div>
            <p class="text-sm text-neutral-600">Successfully Synced</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-2">
              <div
                class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                <i class="fa-solid fa-clock text-neutral-600"></i></div><span
                class="text-2xl text-neutral-900">1</span>
            </div>
            <p class="text-sm text-neutral-600">Pending Sync</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-2">
              <div
                class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                <i class="fa-solid fa-xmark text-neutral-600"></i></div><span
                class="text-2xl text-neutral-900">0</span>
            </div>
            <p class="text-sm text-neutral-600">Failed Sync</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-2">
              <div
                class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                <i class="fa-solid fa-clock text-neutral-600"></i></div><span
                class="text-sm text-neutral-900">10:20 AM</span>
            </div>
            <p class="text-sm text-neutral-600">Last Sync Time</p>
          </div>
        </div>
        <div class="border-t border-neutral-200 pt-4">
          <h4 class="text-sm text-neutral-900 mb-4">Recent SAP Sync Activities
          </h4>
          <div class="space-y-3">
            <div
              class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
              <div class="flex items-center gap-3"><i
                  class="fa-solid fa-check-circle text-neutral-600"></i>
                <div>
                  <p class="text-sm text-neutral-900">Payment PAY-20251205-0001
                    synced</p>
                  <p class="text-xs text-neutral-500">SAP Document:
                    SAP_RCPT_9001</p>
                </div>
              </div><span class="text-xs text-neutral-500">05 Dec 2025, 10:20
                AM</span>
            </div>
            <div
              class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
              <div class="flex items-center gap-3"><i
                  class="fa-solid fa-clock text-neutral-600"></i>
                <div>
                  <p class="text-sm text-neutral-900">Payment PAY-20251206-0002
                    awaiting sync</p>
                  <p class="text-xs text-neutral-500">Pending reconciliation
                    completion</p>
                </div>
              </div><span class="text-xs text-neutral-500">06 Dec 2025, 07:45
                AM</span>
            </div>
          </div>
        </div>
      </div>
      <div id="collection-details"
        class="bg-white rounded-lg border border-neutral-200 p-6 mt-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Collection Personnel Details</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900">View
            All Staff
        </button></div>
        <div class="space-y-4">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4"><img
                  src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=4521"
                  alt="Staff" class="w-12 h-12 rounded-full">
                <div>
                  <p class="text-sm text-neutral-900">Security Personnel - Guard
                    07</p>
                  <p class="text-xs text-neutral-500">Device: guard_tablet_07
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-900">1 Collection</p>
                <p class="text-xs text-neutral-500">₹2,500 (Cash)</p>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-neutral-100">
              <div class="flex items-center justify-between text-xs"><span
                  class="text-neutral-500">Last Collection:
                  PAY-20251206-0002</span><span class="text-neutral-500">06 Dec
                  2025, 07:45 AM</span></div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                  <i class="fa-solid fa-robot text-neutral-600 text-xl"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">System - Automated</p>
                  <p class="text-xs text-neutral-500">Digital Payment Gateway
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-neutral-900">1 Collection</p>
                <p class="text-xs text-neutral-500">₹3,500 (UPI)</p>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-neutral-100">
              <div class="flex items-center justify-between text-xs"><span
                  class="text-neutral-500">Last Collection:
                  PAY-20251205-0001</span><span class="text-neutral-500">05 Dec
                  2025, 10:12 AM</span></div>
            </div>
          </div>
        </div>
      </div>
      <div id="invoice-application"
        class="bg-white rounded-lg border border-neutral-200 p-6 mt-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Invoice Application Details</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900">View
            All Invoices
        </button></div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th
                  class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">
                  Payment ID</th>
                <th
                  class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">
                  Invoice ID</th>
                <th
                  class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">
                  Invoice Type</th>
                <th
                  class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">
                  Amount Applied</th>
                <th
                  class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">
                  Balance</th>
                <th
                  class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">
                  Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-100">
                <td class="py-3 px-4 text-sm text-neutral-900">PAY-20251205-0001
                </td>
                <td class="py-3 px-4 text-sm text-neutral-900">INV-20251201-0001
                </td>
                <td class="py-3 px-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Maintenance</span>
                </td>
                <td class="py-3 px-4 text-sm text-neutral-900">₹3,500</td>
                <td class="py-3 px-4 text-sm text-neutral-600">₹0</td>
                <td class="py-3 px-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Fully
                    Paid</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="attachments-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mt-6">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Payment Attachments &amp;
            Documents</h3><button
            class="text-sm text-neutral-600 hover:text-neutral-900">Manage
            Documents
        </button></div>
        <div class="grid grid-cols-3 gap-4">
          <div class="border border-neutral-200 rounded-lg p-4">
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-12 h-12 bg-neutral-100 rounded flex items-center justify-center">
                <i class="fa-solid fa-file-image text-neutral-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <p class="text-sm text-neutral-900">deposit_slip_20251206.jpg
                </p>
                <p class="text-xs text-neutral-500">Payment: PAY-20251206-0002
                </p>
              </div>
            </div>
            <div
              class="flex items-center justify-between text-xs text-neutral-500">
              <span>ATT-CASH-0001</span><span>245 KB</span></div>
            <div class="mt-3 pt-3 border-t border-neutral-100">
              <div class="flex items-center gap-2"><button
                  class="flex-1 px-3 py-2 border border-neutral-300 rounded text-xs text-neutral-700 hover:bg-neutral-50"><i
                    class="fa-solid fa-eye mr-1"></i>View
                </button><button
                  class="flex-1 px-3 py-2 border border-neutral-300 rounded text-xs text-neutral-700 hover:bg-neutral-50"><i
                    class="fa-solid fa-download mr-1"></i>Download
                </button></div>
            </div>
            <div class="mt-2 text-xs text-neutral-500"><i
                class="fa-solid fa-check-circle text-neutral-600 mr-1"></i>Synced
              to SAP
            </div>
          </div>
          <div class="border border-neutral-200 rounded-lg p-4 border-dashed">
            <div class="flex flex-col items-center justify-center h-full py-6">
              <div
                class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-3">
                <i class="fa-solid fa-plus text-neutral-600 text-xl"></i></div>
              <p class="text-sm text-neutral-900 mb-1">Upload Document</p>
              <p class="text-xs text-neutral-500 text-center">Drag &amp; drop or
                click to browse</p>
            </div>
          </div>
        </div>
      </div>`
  },

  "defaulters": {
    title: "Payment Defaulters",
    subtitle: "Track and manage overdue payments and defaulters.",
    content: `<div id="stats-section" class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-indian-rupee-sign text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹1,80,000</h3>
          <p class="text-sm text-neutral-500">Total Receivables</p>
          <p class="text-xs text-neutral-400 mt-2">As of Dec 10, 2025</p>
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-exclamation-triangle text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">13.9%</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹25,000</h3>
          <p class="text-sm text-neutral-500">Overdue Receivables</p>
          <p class="text-xs text-neutral-400 mt-2">Requires attention</p>
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-xmark text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">12 Units</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">12</h3>
          <p class="text-sm text-neutral-500">Active Defaulters</p>
          <p class="text-xs text-neutral-400 mt-2">Across all wings</p>
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-clock text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹15,000</h3>
          <p class="text-sm text-neutral-500">90+ Days Overdue</p>
          <p class="text-xs text-neutral-400 mt-2">Critical status</p>
        </div>
      </div>

      <div id="aging-section" class="grid grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">Aging Buckets</h3>
            <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
              <span>Export</span>
              <i class="fa-solid fa-download text-xs"></i>
            
          </div>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-900">0-30 Days</span>
                <span class="text-sm text-neutral-600">₹80,000</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-400 h-2 rounded-full" style="width: 44.4%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">44.4% of total receivables</p>
            </div>

            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-900">31-60 Days</span>
                <span class="text-sm text-neutral-600">₹60,000</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-500 h-2 rounded-full" style="width: 33.3%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">33.3% of total receivables</p>
            </div>

            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-900">61-90 Days</span>
                <span class="text-sm text-neutral-600">₹25,000</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-600 h-2 rounded-full" style="width: 13.9%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">13.9% of total receivables</p>
            </div>

            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-900">90+ Days</span>
                <span class="text-sm text-neutral-600">₹15,000</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 8.3%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">8.3% of total receivables - Critical</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">Auto Defaulter Actions</h3>
            <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
              <i class="fa-solid fa-gear text-xs"></i>
              <span>Configure</span>
            
          </div>
          <div class="space-y-4">
            <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-comment-sms text-neutral-600"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-sm text-neutral-900">SMS Reminder</p>
                  <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Day 7</span>
                </div>
                <p class="text-xs text-neutral-500">Automated SMS sent to defaulter after 7 days overdue</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-envelope text-neutral-600"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-sm text-neutral-900">Email Notice</p>
                  <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Day 15</span>
                </div>
                <p class="text-xs text-neutral-500">Formal email notice sent after 15 days overdue</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-bell text-neutral-600"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-sm text-neutral-900">Committee Alert</p>
                  <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Day 30</span>
                </div>
                <p class="text-xs text-neutral-500">Management committee notified after 30 days</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-ban text-neutral-600"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <p class="text-sm text-neutral-900">Facility Access Restriction</p>
                  <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Day 60</span>
                </div>
                <p class="text-xs text-neutral-500">Common facility access restricted after 60 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="defaulters-table-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Defaulter List</h3>
            <p class="text-sm text-neutral-500 mt-1">12 units with overdue payments</p>
          </div>
          <div class="flex items-center gap-3">
            <select class="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Wings</option>
              <option>Wing A</option>
              <option>Wing B</option>
              <option>Wing C</option>
              <option>Wing D</option>
            </select>
            <select class="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Periods</option>
              <option>0-30 Days</option>
              <option>31-60 Days</option>
              <option>61-90 Days</option>
              <option>90+ Days</option>
            </select>
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-filter"></i>
              <span>Filter</span>
            
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-neutral-200">
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">
                  <input type="checkbox" class="rounded border-neutral-300">
                </th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Unit</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Owner</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Contact</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Amount Due</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Days Overdue</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Last Payment</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Status</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">A-405</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3421" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Suresh Kumar</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43210</p>
                  <p class="text-xs text-neutral-500">suresh.k@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹16,500</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">45 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Oct 26, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 2</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">B-201</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=7832" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Meena Joshi</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43211</p>
                  <p class="text-xs text-neutral-500">meena.j@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹11,000</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">32 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Nov 08, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 2</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">C-308</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=9234" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Anil Desai</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43212</p>
                  <p class="text-xs text-neutral-500">anil.d@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹8,900</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">28 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Nov 12, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 1</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">D-102</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Kavita Shah</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43213</p>
                  <p class="text-xs text-neutral-500">kavita.s@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹5,500</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">18 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Nov 22, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 1</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">A-203</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1122" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Ramesh Nair</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43214</p>
                  <p class="text-xs text-neutral-500">ramesh.n@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹22,000</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">95 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Sep 06, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 4</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">E-501</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3344" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Pooja Menon</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43215</p>
                  <p class="text-xs text-neutral-500">pooja.m@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹7,200</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">24 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Nov 16, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 1</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">B-404</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5566" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Vikram Rao</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43216</p>
                  <p class="text-xs text-neutral-500">vikram.r@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹13,500</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">52 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Oct 19, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 3</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <input type="checkbox" class="rounded border-neutral-300">
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">C-106</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=7788" alt="Owner" class="w-8 h-8 rounded-full">
                    <span class="text-sm text-neutral-900">Deepa Iyer</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <p class="text-sm text-neutral-600">+91 98765 43217</p>
                  <p class="text-xs text-neutral-500">deepa.i@email.com</p>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹9,800</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">38 days</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Nov 02, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-900 bg-neutral-100 px-2 py-1 rounded">Level 2</span>
                </td>
                <td class="py-4 px-4">
                  <div class="flex items-center gap-2">
                    <button class="p-1 text-neutral-600 hover:text-neutral-900" title="Send Reminder">
                      <i class="fa-solid fa-paper-plane text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                      <i class="fa-solid fa-eye text-sm"></i>
                    
                    </button><button class="p-1 text-neutral-600 hover:text-neutral-900" title="More Options">
                      <i class="fa-solid fa-ellipsis-vertical text-sm"></i>
                    
                  </button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between mt-6 pt-4 border-t border-neutral-200">
          <p class="text-sm text-neutral-600">Showing 8 of 12 defaulters</p>
          <div class="flex items-center gap-2">
            <button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50">Previous
            </button><button class="px-3 py-1 bg-neutral-900 text-white rounded text-sm">1
            </button><button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50">2
            <button class="px-3 py-1 border border-neutral-300 rounded text-sm hover:bg-neutral-50">Next
          </div>
        </button></div>
      </div>

      <div id="actions-section" class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-paper-plane text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Send Bulk Reminders</h3>
          <p class="text-sm text-neutral-500 mb-4">Send payment reminders to all selected defaulters via SMS and email</p>
          <button class="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800">Send Reminders
        </button></div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-file-export text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Export Defaulter Report</h3>
          <p class="text-sm text-neutral-500 mb-4">Download detailed report of all defaulters with payment history</p>
          <button class="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">Export PDF
        </button></div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-gear text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Configure Actions</h3>
          <p class="text-sm text-neutral-500 mb-4">Customize automated actions and escalation timelines for defaulters</p>
          <button class="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">Settings
        </button></div>
      </div>`
  },

  "reconciliation": {
    title: "Reconciliation",
    subtitle: "Match and reconcile transactions with bank statements.",
    content: `<!-- Triple-Check Totals Section -->
      <div id="triple-check-totals" class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg border-2 border-neutral-300 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div class="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-building-columns text-white text-2xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-3 py-1 rounded-full">Bank</span>
          </div>
          <h3 class="text-3xl font-semibold text-neutral-900 mb-1">₹12,45,500</h3>
          <p class="text-sm text-neutral-600 font-medium">Total Received in Bank</p>
          <div class="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-200">
            <i class="fa-solid fa-arrow-trend-up text-neutral-600 text-xs"></i>
            <span class="text-xs text-neutral-500">219 transactions • Dec 2025</span>
          </div>
        </div>

        <div class="bg-white rounded-lg border-2 border-neutral-300 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div class="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-file-invoice-dollar text-white text-2xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-3 py-1 rounded-full">Invoices</span>
          </div>
          <h3 class="text-3xl font-semibold text-neutral-900 mb-1">₹11,85,000</h3>
          <p class="text-sm text-neutral-600 font-medium">Total Paid Invoices</p>
          <div class="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-200">
            <i class="fa-solid fa-check-circle text-neutral-600 text-xs"></i>
            <span class="text-xs text-neutral-500">215 invoices settled • Dec 2025</span>
          </div>
        </div>

        <div class="bg-white rounded-lg border-2 border-neutral-300 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div class="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-cloud-arrow-up text-white text-2xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-3 py-1 rounded-full">SAP</span>
          </div>
          <h3 class="text-3xl font-semibold text-neutral-900 mb-1">₹11,25,000</h3>
          <p class="text-sm text-neutral-600 font-medium">Total Synced with SAP</p>
          <div class="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-200">
            <i class="fa-solid fa-sync text-neutral-600 text-xs"></i>
            <span class="text-xs text-neutral-500">210 entries synced • Last: Jan 2, 2026</span>
          </div>
        </div>
      </div>

      <!-- Variance Alert Bar -->
      <div id="variance-alert" class="bg-neutral-100 border border-neutral-300 rounded-lg p-4 mb-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-scale-balanced text-neutral-600 text-lg"></i>
            </div>
            <div>
              <p class="text-sm font-medium text-neutral-900">Triple-Check Variance Summary</p>
              <p class="text-xs text-neutral-600 mt-1">
                Bank vs Invoices: <span class="font-medium">₹60,500</span> (4 pending) • 
                Invoices vs SAP: <span class="font-medium">₹60,000</span> (5 unsynced) • 
                Bank vs SAP: <span class="font-medium">₹1,20,500</span>
              </p>
            </div>
          </div>
          <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
            <i class="fa-solid fa-magnifying-glass-chart"></i>
            <span>Investigate Variances</span>
          </button>
        </div>
      </div>

      <div id="stats-section" class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-check-double text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">98.2%</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">215</h3>
          <p class="text-sm text-neutral-500">Auto-Matched</p>
          <p class="text-xs text-neutral-400 mt-2">Dec 1-31, 2025</p>
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-exclamation-circle text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">1.8%</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">4</h3>
          <p class="text-sm text-neutral-500">Exceptions</p>
          <p class="text-xs text-neutral-400 mt-2">Requires review</p>
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-building-columns text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">HDFC-001</h3>
          <p class="text-sm text-neutral-500">Bank Account</p>
          <p class="text-xs text-neutral-400 mt-2">Primary account</p>
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-sync text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Synced</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">SAP</h3>
          <p class="text-sm text-neutral-500">Integration Status</p>
          <p class="text-xs text-neutral-400 mt-2">Last sync: Jan 2, 2026</p>
        </div>
      </div>

      <div id="reconciliation-header" class="bg-white rounded-lg border border-neutral-200 p-6 mb-6">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg text-neutral-900 mb-1">Reconciliation: RECON-20251205-01</h3>
            <div class="flex items-center gap-4 mt-2">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-calendar text-neutral-400 text-sm"></i>
                <span class="text-sm text-neutral-600">Period: Dec 1-31, 2025</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-file-alt text-neutral-400 text-sm"></i>
                <span class="text-sm text-neutral-600">Statement: BANK_STMT_2025_12</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-clock text-neutral-400 text-sm"></i>
                <span class="text-sm text-neutral-600">Imported: Jan 2, 2026 02:00 AM</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
              <i class="fa-solid fa-sync"></i>
              <span>Sync to SAP</span>
            
          </div>
        </div>
      </div>

      <div id="tabs-section" class="bg-white rounded-lg border border-neutral-200 mb-6">
        <div class="border-b border-neutral-200">
          <div class="flex items-center gap-1 px-6">
            <button class="px-4 py-3 text-sm text-neutral-900 border-b-2 border-neutral-900">
              Exceptions (4)
            
            </button><button class="px-4 py-3 text-sm text-neutral-600 hover:text-neutral-900">
              Matched Transactions (215)
            
            </button><button class="px-4 py-3 text-sm text-neutral-600 hover:text-neutral-900">
              History
            
            <button class="px-4 py-3 text-sm text-neutral-600 hover:text-neutral-900">
              Settings
            
          </div>
        </button></div>

        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">Exception Management</h3>
              <p class="text-sm text-neutral-500 mt-1">Review and resolve reconciliation exceptions</p>
            </div>
            <div class="flex items-center gap-3">
              <select class="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>All Exceptions</option>
                <option>Cash Deposits</option>
                <option>Amount Mismatch</option>
                <option>Missing Reference</option>
              </select>
              <select class="px-3 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>All Assignees</option>
                <option>Senior Admin 01</option>
                <option>Senior Admin 02</option>
                <option>Unassigned</option>
              </select>
            </div>
          </div>

          <div class="space-y-4">
            <div class="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors">
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-brands fa-google-pay text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <h4 class="text-base text-neutral-900">UPI-REF-9999</h4>
                      <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Amount Mismatch</span>
                      <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Medium Priority</span>
                    </div>
                    <p class="text-sm text-neutral-600 mb-3">Amount mismatch between bank statement and ERP record</p>
                    <div class="flex items-center gap-6 text-sm">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-calendar text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">Dec 8, 2025</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-indian-rupee-sign text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">Bank: ₹8,500 | ERP: ₹8,000</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-building-columns text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">HDFC-001</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678" alt="Assigned" class="w-8 h-8 rounded-full">
                  <div class="text-right">
                    <p class="text-xs text-neutral-900">Senior Admin 01</p>
                    <p class="text-xs text-neutral-500">Assigned</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
                  <i class="fa-solid fa-edit"></i>
                  <span>Adjust Amount</span>
                
                <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                  <i class="fa-solid fa-eye"></i>
                  <span>View Details</span>
                
                <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                  <i class="fa-solid fa-comment"></i>
                  <span>Add Note</span>
                
                <button class="ml-auto p-2 text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
            </div>

            <div class="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors">
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-receipt text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <h4 class="text-base text-neutral-900">CHQ-2025-156</h4>
                      <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Missing Reference</span>
                      <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Low Priority</span>
                    </div>
                    <p class="text-sm text-neutral-600 mb-3">Cheque deposit missing transaction reference number</p>
                    <div class="flex items-center gap-6 text-sm">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-calendar text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">Dec 12, 2025</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-indian-rupee-sign text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">Amount: ₹12,000</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-building-columns text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">HDFC-001</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-user-slash text-neutral-400 text-sm"></i>
                  </div>
                  <div class="text-right">
                    <p class="text-xs text-neutral-600">Unassigned</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
                  <i class="fa-solid fa-user-plus"></i>
                  <span>Assign</span>
                
                <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                  <i class="fa-solid fa-link"></i>
                  <span>Link Reference</span>
                
                <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                  <i class="fa-solid fa-eye"></i>
                  <span>View Details</span>
                
                <button class="ml-auto p-2 text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
            </div>

            <div class="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors">
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-credit-card text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <h4 class="text-base text-neutral-900">NEFT-2025-889</h4>
                      <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Duplicate Entry</span>
                      <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Medium Priority</span>
                    </div>
                    <p class="text-sm text-neutral-600 mb-3">Potential duplicate transaction found in system</p>
                    <div class="flex items-center gap-6 text-sm">
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-calendar text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">Dec 15, 2025</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-indian-rupee-sign text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">Amount: ₹25,000</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <i class="fa-solid fa-building-columns text-neutral-400 text-xs"></i>
                        <span class="text-neutral-600">HDFC-001</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center">
                    <i class="fa-solid fa-user-slash text-neutral-400 text-sm"></i>
                  </div>
                  <div class="text-right">
                    <p class="text-xs text-neutral-600">Unassigned</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
                  <i class="fa-solid fa-user-plus"></i>
                  <span>Assign</span>
                
                <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                  <i class="fa-solid fa-code-compare"></i>
                  <span>Compare Entries</span>
                
                <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                  <i class="fa-solid fa-trash"></i>
                  <span>Remove Duplicate</span>
                
                <button class="ml-auto p-2 text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
            </div>
          </div>
        </div>
      </div>

      <div id="matched-transactions-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Recently Matched Transactions</h3>
            <p class="text-sm text-neutral-500 mt-1">Latest auto-matched transactions</p>
          </div>
          <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
            <span>View All</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          
        </div>

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-neutral-200">
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Date</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Transaction ID</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Description</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Type</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Amount</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Unit</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Status</th>
                <th class="text-left py-3 px-4 text-xs text-neutral-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Dec 20, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">TXN-20251220-001</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Maintenance Payment - Dec 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">UPI</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹8,500</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">A-301</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Matched</span>
                </td>
                <td class="py-4 px-4">
                  <button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                    <i class="fa-solid fa-eye text-sm"></i>
                  
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Dec 19, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">TXN-20251219-087</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Water Bill - Nov 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">NEFT</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹1,200</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">B-205</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Matched</span>
                </td>
                <td class="py-4 px-4">
                  <button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                    <i class="fa-solid fa-eye text-sm"></i>
                  
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Dec 18, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">TXN-20251218-156</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Electricity Bill - Nov 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Card</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹2,800</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">C-410</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Matched</span>
                </td>
                <td class="py-4 px-4">
                  <button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                    <i class="fa-solid fa-eye text-sm"></i>
                  
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Dec 17, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">TXN-20251217-092</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Maintenance Payment - Dec 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">UPI</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹8,500</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">D-108</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Matched</span>
                </td>
                <td class="py-4 px-4">
                  <button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                    <i class="fa-solid fa-eye text-sm"></i>
                  
                </td>
              </tr>

              <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Dec 16, 2025</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">TXN-20251216-234</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">Parking Fee - Annual</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Cheque</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-900">₹6,000</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-sm text-neutral-600">E-202</span>
                </td>
                <td class="py-4 px-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Matched</span>
                </td>
                <td class="py-4 px-4">
                  <button class="p-1 text-neutral-600 hover:text-neutral-900" title="View Details">
                    <i class="fa-solid fa-eye text-sm"></i>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="sap-integration-section" class="grid grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">SAP Integration</h3>
            <span class="text-xs text-white bg-neutral-800 px-3 py-1 rounded">Active</span>
          </div>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-check-circle text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Reconciliation ID</p>
                  <p class="text-xs text-neutral-500 mt-1">SAP_RECON_202512</p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-clock text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Last Sync</p>
                  <p class="text-xs text-neutral-500 mt-1">Jan 2, 2026 at 02:00 AM</p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-database text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Records Synced</p>
                  <p class="text-xs text-neutral-500 mt-1">215 transactions</p>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-server text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Connection Status</p>
                  <p class="text-xs text-neutral-500 mt-1">Connected to SAP ERP</p>
                </div>
              </div>
            </div>
          </div>

          <button class="w-full mt-6 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center justify-center gap-2">
            <i class="fa-solid fa-sync"></i>
            <span>Sync Now</span>
          
        </div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">Reconciliation Rules</h3>
            <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
              <i class="fa-solid fa-gear text-xs"></i>
              <span>Configure</span>
            
          </div>

          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Auto-match by Reference</p>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked class="sr-only peer">
                  <div class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <p class="text-xs text-neutral-500">Match transactions using reference numbers</p>
            </div>

            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Amount Tolerance</p>
                <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">± ₹50</span>
              </div>
              <p class="text-xs text-neutral-500">Allow minor amount variations</p>
            </div>

            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Date Range Matching</p>
                <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">± 2 days</span>
              </div>
              <p class="text-xs text-neutral-500">Match transactions within date range</p>
            </div>

            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Auto-assign Exceptions</p>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked class="sr-only peer">
                  <div class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <p class="text-xs text-neutral-500">Automatically assign to senior admins</p>
            </div>

            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Email Notifications</p>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked class="sr-only peer">
                  <div class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
              <p class="text-xs text-neutral-500">Notify admins of new exceptions</p>
            </div>
          </div>
        </div>
      </div>

      <div id="activity-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Recent Activity</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1">
            <span>View All</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          
        </div>

        <div class="space-y-4">
          <div class="flex items-start gap-4 pb-4 border-b border-neutral-100">
            <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-check text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">Exception resolved by Senior Admin 01</p>
              <p class="text-xs text-neutral-500">Cash deposit receipt uploaded for CASH-REC-0001</p>
              <p class="text-xs text-neutral-400 mt-2">2 hours ago</p>
            </div>
          </div>

          <div class="flex items-start gap-4 pb-4 border-b border-neutral-100">
            <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-upload text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">Bank statement imported</p>
              <p class="text-xs text-neutral-500">BANK_STMT_2025_12 processed successfully</p>
              <p class="text-xs text-neutral-400 mt-2">5 hours ago</p>
            </div>
          </div>

          <div class="flex items-start gap-4 pb-4 border-b border-neutral-100">
            <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-sync text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">SAP synchronization completed</p>
              <p class="text-xs text-neutral-500">215 transactions synced to SAP_RECON_202512</p>
              <p class="text-xs text-neutral-400 mt-2">8 hours ago</p>
            </div>
          </div>

          <div class="flex items-start gap-4 pb-4 border-b border-neutral-100">
            <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-user-plus text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">Exception assigned</p>
              <p class="text-xs text-neutral-500">UPI-REF-9999 assigned to Senior Admin 01</p>
              <p class="text-xs text-neutral-400 mt-2">1 day ago</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-bell text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">Notification sent</p>
              <p class="text-xs text-neutral-500">Exception alerts sent to all senior admins</p>
              <p class="text-xs text-neutral-400 mt-2">1 day ago</p>
            </div>
          </div>
        </div>
      </div>

      <div id="quick-actions-section" class="grid grid-cols-3 gap-6">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-file-import text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Import New Statement</h3>
          <p class="text-sm text-neutral-500 mb-4">Upload bank statement for automatic reconciliation</p>
          <button class="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800">Import Statement
        </button></div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-file-export text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Export Report</h3>
          <p class="text-sm text-neutral-500 mb-4">Download detailed reconciliation report as PDF</p>
          <button class="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">Export PDF
        </button></div>

        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-history text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">View History</h3>
          <p class="text-sm text-neutral-500 mb-4">Access previous reconciliation records and reports</p>
          <button class="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">View History
        </button></div>
      </div>`
  },

  "reports": {
    title: "Reports",
    subtitle: "Generate and view financial and operational reports.",
    content: `<div id="stats-section" class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-file-lines text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">4</h3>
          <p class="text-sm text-neutral-500">Report Templates</p>
          <p class="text-xs text-neutral-400 mt-2">Available formats</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-download text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">This
              Month</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">127</h3>
          <p class="text-sm text-neutral-500">Reports Generated</p>
          <p class="text-xs text-neutral-400 mt-2">Dec 2025</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-clock text-neutral-600 text-xl"></i></div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">Dec 10</h3>
          <p class="text-sm text-neutral-500">Last Generated</p>
          <p class="text-xs text-neutral-400 mt-2">05:00 AM</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-link text-neutral-600 text-xl"></i></div>
            <span
              class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Active</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">SAP</h3>
          <p class="text-sm text-neutral-500">Integration Status</p>
          <p class="text-xs text-neutral-400 mt-2">Auto-sync enabled</p>
        </div>
      </div>
      <div id="report-templates-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Report Templates</h3>
            <p class="text-sm text-neutral-500 mt-1">Select a template to
              generate reports</p>
          </div><button
            class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2"><i
              class="fa-solid fa-gear text-xs"></i><span>Configure
              Templates</span>
        </button></div>
        <div class="grid grid-cols-2 gap-6">
          <div
            class="border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition-colors">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-money-bill-trend-up text-neutral-600 text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-base text-neutral-900 mb-1">Cash Flow
                    Statement</h4>
                  <p class="text-sm text-neutral-500 mb-3">Detailed cash inflow
                    and outflow analysis</p>
                  <div class="flex items-center gap-2"><span
                      class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">CSV</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                class="flex-1 px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center justify-center gap-2"><i
                  class="fa-solid fa-file-csv"></i><span>Export
                  CSV</span></button><button
                class="p-2 text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-ellipsis-vertical"></i></button></div>
          </div>
          <div
            class="border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition-colors">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-calendar-days text-neutral-600 text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-base text-neutral-900 mb-1">Aging of Dues</h4>
                  <p class="text-sm text-neutral-500 mb-3">Outstanding payments
                    by aging buckets</p>
                  <div class="flex items-center gap-2"><span
                      class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">CSV</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                class="flex-1 px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center justify-center gap-2"><i
                  class="fa-solid fa-file-csv"></i><span>Export
                  CSV</span></button><button
                class="p-2 text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-ellipsis-vertical"></i></button></div>
          </div>
          <div
            class="border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition-colors">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-receipt text-neutral-600 text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-base text-neutral-900 mb-1">Committee Expenses
                  </h4>
                  <p class="text-sm text-neutral-500 mb-3">Comprehensive expense
                    breakdown report</p>
                  <div class="flex items-center gap-2"><span
                      class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">CSV</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                class="flex-1 px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center justify-center gap-2"><i
                  class="fa-solid fa-file-csv"></i><span>Export
                  CSV</span></button><button
                class="p-2 text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-ellipsis-vertical"></i></button></div>
          </div>
          <div
            class="border border-neutral-200 rounded-lg p-6 hover:border-neutral-300 transition-colors">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-14 h-14 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-file-zipper text-neutral-600 text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-base text-neutral-900 mb-1">Audit Pack</h4>
                  <p class="text-sm text-neutral-500 mb-3">Complete audit
                    documentation package</p>
                  <div class="flex items-center gap-2"><span
                      class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">ZIP</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                class="flex-1 px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center justify-center gap-2"><i
                  class="fa-solid fa-file-zipper"></i><span>Export
                  ZIP</span></button><button
                class="p-2 text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-ellipsis-vertical"></i></button></div>
          </div>
        </div>
      </div>
      <div id="export-settings-section" class="grid grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg text-neutral-900">CSV Export Settings</h3><button
              class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1"><i
                class="fa-solid fa-pen text-xs"></i><span>Edit</span>
          </button></div>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Delimiter</p><span
                  class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Comma
                  (,)</span>
              </div>
              <p class="text-xs text-neutral-500">Field separator character</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Text Encoding</p><span
                  class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">UTF-8</span>
              </div>
              <p class="text-xs text-neutral-500">Character encoding format</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Include Headers</p><label
                  class="relative inline-flex items-center cursor-pointer"><input
                    type="checkbox" checked="" class="sr-only peer">
                  <div
                    class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all">
                  </div>
                </label>
              </div>
              <p class="text-xs text-neutral-500">Add column headers in first
                row</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Date Format</p><span
                  class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">DD/MM/YYYY</span>
              </div>
              <p class="text-xs text-neutral-500">Date representation format</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Number Format</p><span
                  class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Indian
                  (₹)</span>
              </div>
              <p class="text-xs text-neutral-500">Currency and decimal notation
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="scheduled-reports-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Scheduled Reports</h3>
            <p class="text-sm text-neutral-500 mt-1">Automate report generation
              and delivery</p>
          </div><button
            class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2"><i
              class="fa-solid fa-plus"></i><span>Add Schedule</span>
        </button></div>
        <div class="space-y-4">
          <div
            class="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-calendar-days text-neutral-600 text-xl"></i>
                </div>
                <div>
                  <h4 class="text-base text-neutral-900 mb-1">Monthly Aging
                    Report</h4>
                  <p class="text-sm text-neutral-500 mb-3">Automatically
                    generated on 1st of every month</p>
                  <div class="flex items-center gap-4 text-sm">
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-clock text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">08:00 AM</span></div>
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-file-pdf text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">CSV Format</span></div>
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-envelope text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">3 Recipients</span></div>
                  </div>
                </div>
              </div><label
                class="relative inline-flex items-center cursor-pointer"><input
                  type="checkbox" checked="" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div>
              </label>
            </div>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-pen"></i><span>Edit
                  Schedule</span></button><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-play"></i><span>Run
                  Now</span></button><button
                class="ml-auto p-2 text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-ellipsis-vertical"></i></button></div>
          </div>
          <div
            class="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-money-bill-trend-up text-neutral-600 text-xl"></i>
                </div>
                <div>
                  <h4 class="text-base text-neutral-900 mb-1">Weekly Cash Flow
                    Summary</h4>
                  <p class="text-sm text-neutral-500 mb-3">Every Monday morning
                    summary</p>
                  <div class="flex items-center gap-4 text-sm">
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-clock text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">07:00 AM</span></div>
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-file-csv text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">CSV Format</span></div>
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-envelope text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">5 Recipients</span></div>
                  </div>
                </div>
              </div><label
                class="relative inline-flex items-center cursor-pointer"><input
                  type="checkbox" checked="" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div>
              </label>
            </div>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-pen"></i><span>Edit
                  Schedule</span></button><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-play"></i><span>Run
                  Now</span></button><button
                class="ml-auto p-2 text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-ellipsis-vertical"></i></button></div>
          </div>
          <div
            class="border border-neutral-200 rounded-lg p-5 hover:border-neutral-300 transition-colors">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-file-zipper text-neutral-600 text-xl"></i>
                </div>
                <div>
                  <h4 class="text-base text-neutral-900 mb-1">Quarterly Audit
                    Pack</h4>
                  <p class="text-sm text-neutral-500 mb-3">Generated at end of
                    each quarter</p>
                  <div class="flex items-center gap-4 text-sm">
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-clock text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">11:59 PM</span></div>
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-file-zipper text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">ZIP Format</span></div>
                    <div class="flex items-center gap-2"><i
                        class="fa-solid fa-envelope text-neutral-400 text-xs"></i><span
                        class="text-neutral-600">2 Recipients</span></div>
                  </div>
                </div>
              </div><label
                class="relative inline-flex items-center cursor-pointer"><input
                  type="checkbox" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all">
                </div>
              </label>
            </div>
            <div
              class="flex items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-pen"></i><span>Edit
                  Schedule</span></button><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-play"></i><span>Run
                  Now</span></button><button
                class="ml-auto p-2 text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-ellipsis-vertical"></i></button></div>
          </div>
        </div>
      </div>
      <div id="quick-actions-section" class="grid grid-cols-3 gap-6">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div
            class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i
              class="fa-solid fa-wand-magic-sparkles text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Custom Report Builder</h3>
          <p class="text-sm text-neutral-500 mb-4">Create custom reports with
            advanced filters</p><button
            class="w-full px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800">Build
            Report
        </button></div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div
            class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-file-import text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Import Template</h3>
          <p class="text-sm text-neutral-500 mb-4">Upload custom report template
            files</p><button
            class="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">Import
            Template
        </button></div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div
            class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-4">
            <i class="fa-solid fa-share-nodes text-neutral-600 text-xl"></i>
          </div>
          <h3 class="text-lg text-neutral-900 mb-2">Share Reports</h3>
          <p class="text-sm text-neutral-500 mb-4">Share reports with committee
            members</p><button
            class="w-full px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">Share
            Access
        </button></div>
      </div>`
  },

  "audit-logs": {
    title: "Audit Logs",
    subtitle: "View system activity and audit trail.",
    content: `<div id="stats-section" class="grid grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-list-check text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">2,847</h3>
          <p class="text-sm text-neutral-500">Total Logs</p>
          <p class="text-xs text-neutral-400 mt-2">Last 30 days</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-shield text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Today</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">142</h3>
          <p class="text-sm text-neutral-500">User Actions</p>
          <p class="text-xs text-neutral-400 mt-2">Dec 17, 2025</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-robot text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-neutral-600 bg-neutral-50 px-2 py-1 rounded">Automated</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">89</h3>
          <p class="text-sm text-neutral-500">System Actions</p>
          <p class="text-xs text-neutral-400 mt-2">Auto-matched today</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-shield-halved text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Active</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">100%</h3>
          <p class="text-sm text-neutral-500">Audit Coverage</p>
          <p class="text-xs text-neutral-400 mt-2">All actions logged</p>
        </div>
      </div>
      <div id="filter-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Filter Logs</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
            <i class="fa-solid fa-rotate-left text-xs"></i>
            <span>Reset Filters</span>
          
        </div>
        <div class="grid grid-cols-5 gap-4">
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Entity Type</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Types</option>
              <option>Invoice</option>
              <option>Payment</option>
              <option>Reconciliation</option>
              <option>User</option>
              <option>Report</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Action</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Actions</option>
              <option>Created</option>
              <option>Updated</option>
              <option>Deleted</option>
              <option>Auto-matched</option>
              <option>Approved</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Performed By</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Users</option>
              <option>System</option>
              <option>u_senior_01</option>
              <option>u_senior_02</option>
              <option>u_executive_01</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Date From</label>
            <input type="date" value="2025-12-01" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Date To</label>
            <input type="date" value="2025-12-17" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
          </div>
        </div>
        <div class="flex items-center gap-3 mt-6">
          <button class="px-6 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Apply Filters</span>
          
          <button class="px-6 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
            Clear All
          
        </button></div>
      </div>
      <div id="logs-table-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Activity Logs</h3>
              <p class="text-sm text-neutral-500 mt-1">Complete audit trail of all system activities</p>
            </div>
            <div class="flex items-center gap-3">
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-file-csv"></i>
                <span>Export CSV</span>
              
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-file-pdf"></i>
                <span>Export PDF</span>
              
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span>Log ID</span>
                  </div>
                </th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Entity Type</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Entity ID</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Action</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Performed By</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Timestamp</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1001</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-file-invoice text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Invoice</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">INV-20251201-0001</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Created</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="User" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">u_senior_01</p>
                      <p class="text-xs text-neutral-500">Senior Admin</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 01, 2025</p>
                    <p class="text-xs text-neutral-500">03:00 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1002</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-money-bill text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Payment</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">PAY-20251205-0001</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Auto-matched</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                      <i class="fa-solid fa-robot text-white text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">System</p>
                      <p class="text-xs text-neutral-500">Automated</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 05, 2025</p>
                    <p class="text-xs text-neutral-500">10:20 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1003</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-rotate text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Reconciliation</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">RECON-20251205-01</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Updated</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678" alt="User" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">u_senior_02</p>
                      <p class="text-xs text-neutral-500">Senior Admin</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 06, 2025</p>
                    <p class="text-xs text-neutral-500">02:15 PM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1004</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-chart-bar text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Report</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">RPT-AGING</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Generated</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="User" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">u_senior_01</p>
                      <p class="text-xs text-neutral-500">Senior Admin</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 10, 2025</p>
                    <p class="text-xs text-neutral-500">05:00 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1005</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-user text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">User</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">u_executive_03</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Created</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=8547" alt="User" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">u_head_01</p>
                      <p class="text-xs text-neutral-500">Head Admin</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 12, 2025</p>
                    <p class="text-xs text-neutral-500">09:30 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1006</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-money-bill text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Payment</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">PAY-20251215-0042</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Approved</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678" alt="User" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">u_senior_02</p>
                      <p class="text-xs text-neutral-500">Senior Admin</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 15, 2025</p>
                    <p class="text-xs text-neutral-500">11:45 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1007</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-file-invoice text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Invoice</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">INV-20251216-0089</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Deleted</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="User" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">u_senior_01</p>
                      <p class="text-xs text-neutral-500">Senior Admin</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 16, 2025</p>
                    <p class="text-xs text-neutral-500">04:20 PM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">AL-1008</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-rotate text-neutral-600 text-sm"></i>
                    </div>
                    <span class="text-sm text-neutral-900">Reconciliation</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm text-neutral-700">RECON-20251217-01</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Auto-matched</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                      <i class="fa-solid fa-robot text-white text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">System</p>
                      <p class="text-xs text-neutral-500">Automated</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 17, 2025</p>
                    <p class="text-xs text-neutral-500">02:00 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <button class="text-neutral-600 hover:text-neutral-900">
                    <i class="fa-solid fa-eye"></i>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-6 border-t border-neutral-200 flex items-center justify-between">
          <p class="text-sm text-neutral-600">Showing 8 of 2,847 logs</p>
          <div class="flex items-center gap-2">
            <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <i class="fa-solid fa-chevron-left"></i>
            
            </button><button class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">2
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">3
            <span class="px-3 py-2 text-sm text-neutral-600">...</span>
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">356
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
              <i class="fa-solid fa-chevron-right"></i>
            
          </button></div>
        </div>
      </div>
      <div id="activity-timeline-section" class="grid grid-cols-3 gap-6 mb-8">
        <div class="col-span-2 bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">Recent Activity Timeline</h3>
              <p class="text-sm text-neutral-500 mt-1">Last 24 hours activity</p>
            </div>
            <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
              <i class="fa-solid fa-arrows-rotate text-xs"></i>
              <span>Refresh</span>
            
          </div>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-file-invoice text-neutral-600"></i>
                </div>
                <div class="w-0.5 h-full bg-neutral-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-6">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <h4 class="text-sm text-neutral-900 mb-1">Invoice Created</h4>
                    <p class="text-sm text-neutral-600">INV-20251201-0001 created by u_senior_01</p>
                  </div>
                  <span class="text-xs text-neutral-500">2 hours ago</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Invoice</span>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Created</span>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-robot text-white"></i>
                </div>
                <div class="w-0.5 h-full bg-neutral-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-6">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <h4 class="text-sm text-neutral-900 mb-1">Payment Auto-matched</h4>
                    <p class="text-sm text-neutral-600">PAY-20251205-0001 automatically matched by system</p>
                  </div>
                  <span class="text-xs text-neutral-500">5 hours ago</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Payment</span>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Auto-matched</span>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-rotate text-neutral-600"></i>
                </div>
                <div class="w-0.5 h-full bg-neutral-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-6">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <h4 class="text-sm text-neutral-900 mb-1">Reconciliation Updated</h4>
                    <p class="text-sm text-neutral-600">RECON-20251205-01 updated by u_senior_02</p>
                  </div>
                  <span class="text-xs text-neutral-500">8 hours ago</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Reconciliation</span>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Updated</span>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-chart-bar text-neutral-600"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <h4 class="text-sm text-neutral-900 mb-1">Report Generated</h4>
                    <p class="text-sm text-neutral-600">RPT-AGING generated by u_senior_01</p>
                  </div>
                  <span class="text-xs text-neutral-500">12 hours ago</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Report</span>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Action Summary</h3>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Created</p>
                <span class="text-lg text-neutral-900">342</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 68%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Updated</p>
                <span class="text-lg text-neutral-900">189</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 38%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Auto-matched</p>
                <span class="text-lg text-neutral-900">156</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 31%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Approved</p>
                <span class="text-lg text-neutral-900">98</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 20%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-900">Deleted</p>
                <span class="text-lg text-neutral-900">23</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 5%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="audit-settings-section" class="bg-white rounded-lg border border-neutral-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Audit Configuration</h3>
            <p class="text-sm text-neutral-500 mt-1">Configure audit logging settings and retention policies</p>
          </div>
          <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
            <i class="fa-solid fa-floppy-disk"></i>
            <span>Save Settings</span>
          
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="text-sm text-neutral-900 mb-1">Log All User Actions</p>
                  <p class="text-xs text-neutral-500">Track every user activity in the system</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked="" class="sr-only peer">
                  <div class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="text-sm text-neutral-900 mb-1">Log System Actions</p>
                  <p class="text-xs text-neutral-500">Track automated system processes</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked="" class="sr-only peer">
                  <div class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="text-sm text-neutral-900 mb-1">Log Failed Login Attempts</p>
                  <p class="text-xs text-neutral-500">Track security-related events</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked="" class="sr-only peer">
                  <div class="w-11 h-6 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <p class="text-sm text-neutral-900 mb-1">Real-time Alerts</p>
                  <p class="text-xs text-neutral-500">Send alerts for critical actions</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer">
                  <div class="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <p class="text-sm text-neutral-900 mb-3">Log Retention Period</p>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>90 Days</option>
                <option>180 Days</option>
                <option>365 Days</option>
                <option>2 Years</option>
                <option>5 Years</option>
              </select>
              <p class="text-xs text-neutral-500 mt-2">Duration to keep audit logs</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <p class="text-sm text-neutral-900 mb-3">Archive Location</p>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>Local Storage</option>
                <option>Cloud Storage</option>
                <option>SAP Archive</option>
              </select>
              <p class="text-xs text-neutral-500 mt-2">Where to archive old logs</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <p class="text-sm text-neutral-900 mb-3">Export Format</p>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>CSV</option>
                <option>JSON</option>
                <option>XML</option>
              </select>
              <p class="text-xs text-neutral-500 mt-2">Default format for log exports</p>
            </div>
          </div>
        </div>
      </div>`
  },

  "complaints": {
    title: "Complaints Management",
    subtitle: "Track and resolve resident complaints and issues.",
    content: `<div id="stats-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-ticket text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">147</h3>
          <p class="text-sm text-neutral-500">Total Complaints</p>
          <p class="text-xs text-neutral-400 mt-2">This month</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-clock text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Active</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">23</h3>
          <p class="text-sm text-neutral-500">Open Tickets</p>
          <p class="text-xs text-neutral-400 mt-2">Requires attention</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-exclamation-triangle text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">High</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">8</h3>
          <p class="text-sm text-neutral-500">High Priority</p>
          <p class="text-xs text-neutral-400 mt-2">Urgent action needed</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-check-circle text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">112</h3>
          <p class="text-sm text-neutral-500">Resolved</p>
          <p class="text-xs text-neutral-400 mt-2">This month</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-chart-line text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">4.2h</h3>
          <p class="text-sm text-neutral-500">Avg Resolution</p>
          <p class="text-xs text-neutral-400 mt-2">Time to resolve</p>
        </div>
      </div>
      <div id="category-stats-section" class="grid grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-bolt text-neutral-600"></i>
              </div>
              <div>
                <h3 class="text-lg text-neutral-900">Electricity</h3>
                <p class="text-xs text-neutral-500">Power & Wiring Issues</p>
              </div>
            </div>
            <span class="text-2xl text-neutral-900">42</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-600">Open: 8</span>
            <span class="text-neutral-600">Resolved: 34</span>
          </div>
          <div class="w-full bg-neutral-100 rounded-full h-2 mt-3">
            <div class="bg-neutral-800 h-2 rounded-full" style="width: 81%"></div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-faucet text-neutral-600"></i>
              </div>
              <div>
                <h3 class="text-lg text-neutral-900">Plumbing</h3>
                <p class="text-xs text-neutral-500">Water & Drainage</p>
              </div>
            </div>
            <span class="text-2xl text-neutral-900">58</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-600">Open: 11</span>
            <span class="text-neutral-600">Resolved: 47</span>
          </div>
          <div class="w-full bg-neutral-100 rounded-full h-2 mt-3">
            <div class="bg-neutral-800 h-2 rounded-full" style="width: 81%"></div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-hammer text-neutral-600"></i>
              </div>
              <div>
                <h3 class="text-lg text-neutral-900">Masonry</h3>
                <p class="text-xs text-neutral-500">Construction & Repairs</p>
              </div>
            </div>
            <span class="text-2xl text-neutral-900">47</span>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-neutral-600">Open: 4</span>
            <span class="text-neutral-600">Resolved: 43</span>
          </div>
          <div class="w-full bg-neutral-100 rounded-full h-2 mt-3">
            <div class="bg-neutral-800 h-2 rounded-full" style="width: 91%"></div>
          </div>
        </div>
      </div>
      <div id="filter-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Filter Complaints</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
            <i class="fa-solid fa-rotate-left text-xs"></i>
            <span>Reset Filters</span>
          
        </div>
        <div class="grid grid-cols-6 gap-4">
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Status</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Resolved</option>
              <option>Closed</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Category</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Categories</option>
              <option>Electricity</option>
              <option>Plumbing</option>
              <option>Masonry</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Priority</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Tower/Block</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Towers</option>
              <option>Tower A</option>
              <option>Tower B</option>
              <option>Tower C</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Date From</label>
            <input type="date" value="2025-12-01" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Date To</label>
            <input type="date" value="2025-12-17" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
          </div>
        </div>
        <div class="flex items-center gap-3 mt-6">
          <button class="px-6 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Apply Filters</span>
          
          <button class="px-6 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
            Clear All
          
        </button></div>
      </div>
      <div id="complaints-table-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Active Complaints</h3>
              <p class="text-sm text-neutral-500 mt-1">All resident complaints with escalation tracking</p>
            </div>
            <div class="flex items-center gap-3">
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-download"></i>
                <span>Export</span>
              
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-print"></i>
                <span>Print</span>
              
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span>Ticket ID</span>
                  </div>
                </th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Flat/Unit</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Category</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Description</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Priority</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Status</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">SLA Due</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">TCK-20251207-1001</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">F-101</p>
                    <p class="text-xs text-neutral-500">Tower A</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-bolt text-neutral-600 text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">Electricity</p>
                      <p class="text-xs text-neutral-500">Power Failure</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="max-w-xs">
                    <p class="text-sm text-neutral-900 truncate">Frequent tripping in Tower A lift circuit</p>
                    <div class="flex items-center gap-2 mt-1">
                      <i class="fa-solid fa-paperclip text-neutral-400 text-xs"></i>
                      <span class="text-xs text-neutral-500">1 attachment</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">High</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Open</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 08, 2025</p>
                    <p class="text-xs text-neutral-500">09:10 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">TCK-20251208-1002</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">F-205</p>
                    <p class="text-xs text-neutral-500">Tower B</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-faucet text-neutral-600 text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">Plumbing</p>
                      <p class="text-xs text-neutral-500">Leakage</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="max-w-xs">
                    <p class="text-sm text-neutral-900 truncate">Water leakage from bathroom ceiling</p>
                    <div class="flex items-center gap-2 mt-1">
                      <i class="fa-solid fa-paperclip text-neutral-400 text-xs"></i>
                      <span class="text-xs text-neutral-500">2 attachments</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">High</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">In Progress</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 09, 2025</p>
                    <p class="text-xs text-neutral-500">11:30 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">TCK-20251209-1003</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">F-312</p>
                    <p class="text-xs text-neutral-500">Tower C</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-hammer text-neutral-600 text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">Masonry</p>
                      <p class="text-xs text-neutral-500">Wall Crack</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="max-w-xs">
                    <p class="text-sm text-neutral-900 truncate">Cracks appearing in bedroom wall</p>
                    <div class="flex items-center gap-2 mt-1">
                      <i class="fa-solid fa-paperclip text-neutral-400 text-xs"></i>
                      <span class="text-xs text-neutral-500">3 attachments</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Medium</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Open</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 10, 2025</p>
                    <p class="text-xs text-neutral-500">02:15 PM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">TCK-20251210-1004</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">F-408</p>
                    <p class="text-xs text-neutral-500">Tower A</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-bolt text-neutral-600 text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">Electricity</p>
                      <p class="text-xs text-neutral-500">Socket Issue</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="max-w-xs">
                    <p class="text-sm text-neutral-900 truncate">Kitchen socket not working properly</p>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-xs text-neutral-500">No attachments</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Low</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Open</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 11, 2025</p>
                    <p class="text-xs text-neutral-500">04:45 PM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">TCK-20251211-1005</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">F-502</p>
                    <p class="text-xs text-neutral-500">Tower B</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-faucet text-neutral-600 text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">Plumbing</p>
                      <p class="text-xs text-neutral-500">Drainage</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="max-w-xs">
                    <p class="text-sm text-neutral-900 truncate">Slow drainage in kitchen sink</p>
                    <div class="flex items-center gap-2 mt-1">
                      <i class="fa-solid fa-paperclip text-neutral-400 text-xs"></i>
                      <span class="text-xs text-neutral-500">1 attachment</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Medium</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">In Progress</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 12, 2025</p>
                    <p class="text-xs text-neutral-500">10:00 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">TCK-20251212-1006</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">F-610</p>
                    <p class="text-xs text-neutral-500">Tower C</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-bolt text-neutral-600 text-sm"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">Electricity</p>
                      <p class="text-xs text-neutral-500">Wiring</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="max-w-xs">
                    <p class="text-sm text-neutral-900 truncate">Exposed wiring in common area hallway</p>
                    <div class="flex items-center gap-2 mt-1">
                      <i class="fa-solid fa-paperclip text-neutral-400 text-xs"></i>
                      <span class="text-xs text-neutral-500">2 attachments</span>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">High</span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Open</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Dec 13, 2025</p>
                    <p class="text-xs text-neutral-500">08:30 AM</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                  </button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-6 border-t border-neutral-200 flex items-center justify-between">
          <p class="text-sm text-neutral-600">Showing 6 of 23 active complaints</p>
          <div class="flex items-center gap-2">
            <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <i class="fa-solid fa-chevron-left"></i>
            
            </button><button class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">2
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">3
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">4
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
              <i class="fa-solid fa-chevron-right"></i>
            
          </button></div>
        </div>
      </div>
      <div id="escalation-section" class="grid grid-cols-3 gap-6 mb-8">
        <div class="col-span-2 bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">Escalation Timeline</h3>
              <p class="text-sm text-neutral-500 mt-1">Auto-escalation workflow for TCK-20251207-1001</p>
            </div>
            <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
              <i class="fa-solid fa-gear text-xs"></i>
              <span>Configure</span>
            
          </div>
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-flag text-white"></i>
                </div>
                <div class="w-0.5 h-full bg-neutral-800 mt-2"></div>
              </div>
              <div class="flex-1 pb-6">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <h4 class="text-sm text-neutral-900 mb-1">Level 1 - Initial Assignment</h4>
                    <p class="text-sm text-neutral-600">Ticket created and assigned to maintenance team</p>
                  </div>
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Active</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Due: Dec 08, 09:10 AM</span>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">24 hours</span>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-user-tie text-neutral-400"></i>
                </div>
                <div class="w-0.5 h-full bg-neutral-200 mt-2"></div>
              </div>
              <div class="flex-1 pb-6">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <h4 class="text-sm text-neutral-900 mb-1">Level 2 - Senior Admin</h4>
                    <p class="text-sm text-neutral-600">Escalated to senior admin for review</p>
                  </div>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Pending</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Due: Dec 09, 09:10 AM</span>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">48 hours</span>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-user-shield text-neutral-400"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <h4 class="text-sm text-neutral-900 mb-1">Level 3 - Head Admin</h4>
                    <p class="text-sm text-neutral-600">Final escalation to head admin</p>
                  </div>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Pending</span>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">Due: Dec 10, 09:10 AM</span>
                  <span class="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">72 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">SLA Configuration</h3>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm text-neutral-900">Level 1 Escalation</p>
                <span class="text-lg text-neutral-900">24h</span>
              </div>
              <p class="text-xs text-neutral-500 mb-3">Escalate to: Senior Admin</p>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 45%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">10.8 hours remaining</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm text-neutral-900">Level 2 Escalation</p>
                <span class="text-lg text-neutral-900">48h</span>
              </div>
              <p class="text-xs text-neutral-500 mb-3">Escalate to: Head Admin</p>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-200 h-2 rounded-full" style="width: 0%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">Not triggered yet</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm text-neutral-900">Level 3 Escalation</p>
                <span class="text-lg text-neutral-900">72h</span>
              </div>
              <p class="text-xs text-neutral-500 mb-3">Escalate to: Executive Admin</p>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-200 h-2 rounded-full" style="width: 0%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">Not triggered yet</p>
            </div>
          </div>
          <button class="w-full mt-6 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center justify-center gap-2">
            <i class="fa-solid fa-edit"></i>
            <span>Edit SLA Settings</span>
          
        </div>
      </div>
      <div id="complaint-details-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Complaint Details - TCK-20251207-1001</h3>
            <p class="text-sm text-neutral-500 mt-1">Complete information and action history</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-print"></i>
              <span>Print</span>
            
            <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
              <i class="fa-solid fa-check"></i>
              <span>Mark Resolved</span>
            
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div class="space-y-6">
            <div>
              <h4 class="text-sm text-neutral-900 mb-4">Complaint Information</h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Ticket ID</span>
                  <span class="text-sm text-neutral-900">TCK-20251207-1001</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Flat/Unit</span>
                  <span class="text-sm text-neutral-900">F-101, Tower A</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Category</span>
                  <span class="text-sm text-neutral-900">Electricity - Power Failure</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Priority</span>
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">High</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Status</span>
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Open</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Created</span>
                  <span class="text-sm text-neutral-900">Dec 07, 2025 09:10 AM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-sm text-neutral-900 mb-3">Description</h4>
              <p class="text-sm text-neutral-600 leading-relaxed">Frequent tripping in Tower A lift circuit. The circuit breaker trips multiple times a day, causing lift service disruption. Residents are facing inconvenience especially during peak hours.</p>
            </div>
            <div>
              <h4 class="text-sm text-neutral-900 mb-3">Attachments</h4>
              <div class="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg">
                <div class="w-12 h-12 bg-neutral-100 rounded flex items-center justify-center">
                  <i class="fa-solid fa-image text-neutral-600"></i>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">trip_photo.jpg</p>
                  <p class="text-xs text-neutral-500">Image • 2.4 MB</p>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-download"></i>
                
              </button></div>
            </div>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="text-sm text-neutral-900 mb-4">Resident Information</h4>
              <div class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
                <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3456" alt="Resident" class="w-12 h-12 rounded-full">
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Amit Sharma</p>
                  <p class="text-xs text-neutral-500">F-101, Tower A</p>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-phone"></i>
                
              </button></div>
            </div>
            <div>
              <h4 class="text-sm text-neutral-900 mb-4">Assignment</h4>
              <div class="space-y-3">
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Assigned To</span>
                  <span class="text-sm text-neutral-900">Maintenance Team</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Assigned By</span>
                  <span class="text-sm text-neutral-900">System (Auto)</span>
                </div>
                <div class="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span class="text-sm text-neutral-500">Assigned On</span>
                  <span class="text-sm text-neutral-900">Dec 07, 2025 09:15 AM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 class="text-sm text-neutral-900 mb-3">Activity Log</h4>
              <div class="space-y-3">
                <div class="flex gap-3">
                  <div class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-plus text-neutral-600 text-xs"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-neutral-900">Complaint created</p>
                    <p class="text-xs text-neutral-500">Dec 07, 2025 09:10 AM</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-user text-neutral-600 text-xs"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-neutral-900">Assigned to maintenance team</p>
                    <p class="text-xs text-neutral-500">Dec 07, 2025 09:15 AM</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-eye text-neutral-600 text-xs"></i>
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-neutral-900">Viewed by senior admin</p>
                    <p class="text-xs text-neutral-500">Dec 07, 2025 11:30 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sla-settings-section" class="bg-white rounded-lg border border-neutral-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Global SLA Settings</h3>
            <p class="text-sm text-neutral-500 mt-1">Configure auto-escalation rules and timelines</p>
          </div>
          <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
            <i class="fa-solid fa-floppy-disk"></i>
            <span>Save Settings</span>
          
        </div>
        <div class="grid grid-cols-3 gap-6">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-bolt text-neutral-600"></i>
              </div>
              <h4 class="text-sm text-neutral-900">Electricity Complaints</h4>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 1 (Hours)</label>
                <input type="number" value="24" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 2 (Hours)</label>
                <input type="number" value="48" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 3 (Hours)</label>
                <input type="number" value="72" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-faucet text-neutral-600"></i>
              </div>
              <h4 class="text-sm text-neutral-900">Plumbing Complaints</h4>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 1 (Hours)</label>
                <input type="number" value="12" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 2 (Hours)</label>
                <input type="number" value="24" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 3 (Hours)</label>
                <input type="number" value="48" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-hammer text-neutral-600"></i>
              </div>
              <h4 class="text-sm text-neutral-900">Masonry Complaints</h4>
            </div>
            <div class="space-y-3">
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 1 (Hours)</label>
                <input type="number" value="48" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 2 (Hours)</label>
                <input type="number" value="96" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
              <div>
                <label class="block text-xs text-neutral-500 mb-2">Level 3 (Hours)</label>
                <input type="number" value="144" class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 p-4 border border-neutral-200 rounded-lg">
          <h4 class="text-sm text-neutral-900 mb-4">Escalation Recipients</h4>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label class="block text-xs text-neutral-500 mb-2">Level 1 Escalate To</label>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>Senior Admin</option>
                <option>Maintenance Head</option>
                <option>Operations Manager</option>
              </select>
            </div>
            <div>
              <label class="block text-xs text-neutral-500 mb-2">Level 2 Escalate To</label>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>Head Admin</option>
                <option>Society Manager</option>
                <option>Committee Member</option>
              </select>
            </div>
            <div>
              <label class="block text-xs text-neutral-500 mb-2">Level 3 Escalate To</label>
              <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
                <option>Executive Admin</option>
                <option>Society President</option>
                <option>Managing Committee</option>
              </select>
            </div>
          </div>
        </div>
      </div>`
  },

  "vendors": {
    title: "Vendor Management",
    subtitle: "Manage vendors, contracts, and service agreements.",
    content: `<div id="stats-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-truck text-neutral-600 text-xl"></i></div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">28</h3>
          <p class="text-sm text-neutral-500">Total Vendors</p>
          <p class="text-xs text-neutral-400 mt-2">Registered</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-check-circle text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Active</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">24</h3>
          <p class="text-sm text-neutral-500">Active Vendors</p>
          <p class="text-xs text-neutral-400 mt-2">Currently engaged</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-clock text-neutral-600 text-xl"></i></div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">3</h3>
          <p class="text-sm text-neutral-500">Pending Approval</p>
          <p class="text-xs text-neutral-400 mt-2">Awaiting review</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-file-contract text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">18</h3>
          <p class="text-sm text-neutral-500">Active Contracts</p>
          <p class="text-xs text-neutral-400 mt-2">Valid agreements</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i
                class="fa-solid fa-indian-rupee-sign text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">₹8.4L</h3>
          <p class="text-sm text-neutral-500">Monthly Spend</p>
          <p class="text-xs text-neutral-400 mt-2">This month</p>
        </div>
      </div>
      <div id="category-stats-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-broom text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Cleaning</h3>
              <p class="text-xs text-neutral-500">Services</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">6</p>
          <p class="text-xs text-neutral-500">Active: 5 • Pending: 1</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-bolt text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Electricity</h3>
              <p class="text-xs text-neutral-500">Services</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">4</p>
          <p class="text-xs text-neutral-500">Active: 4 • Pending: 0</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-faucet text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Plumbing</h3>
              <p class="text-xs text-neutral-500">Services</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">7</p>
          <p class="text-xs text-neutral-500">Active: 6 • Pending: 1</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-paint-roller text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Painting</h3>
              <p class="text-xs text-neutral-500">Services</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">5</p>
          <p class="text-xs text-neutral-500">Active: 4 • Pending: 1</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-seedling text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Gardening</h3>
              <p class="text-xs text-neutral-500">Services</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">6</p>
          <p class="text-xs text-neutral-500">Active: 5 • Pending: 1</p>
        </div>
      </div>
      <div id="filter-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Filter Vendors</h3><button
            class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2"><i
              class="fa-solid fa-rotate-left text-xs"></i><span>Reset
              Filters</span>
        </button></div>
        <div class="grid grid-cols-5 gap-4">
          <div><label
              class="block text-sm text-neutral-700 mb-2">Category</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Categories</option>
              <option>Cleaning</option>
              <option>Electricity</option>
              <option>Plumbing</option>
              <option>Painting</option>
              <option>Gardening</option>
            </select></div>
          <div><label
              class="block text-sm text-neutral-700 mb-2">Status</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending Approval</option>
              <option>Suspended</option>
            </select></div>
          <div><label class="block text-sm text-neutral-700 mb-2">Payment
              Terms</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Terms</option>
              <option>7 Days</option>
              <option>15 Days</option>
              <option>30 Days</option>
            </select></div>
          <div><label class="block text-sm text-neutral-700 mb-2">Contract
              Status</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Contracts</option>
              <option>Active Contract</option>
              <option>Expiring Soon</option>
              <option>No Contract</option>
            </select></div>
          <div><label class="block text-sm text-neutral-700 mb-2">SAP
              Integration</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All</option>
              <option>Synced</option>
              <option>Not Synced</option>
            </select></div>
        </div>
        <div class="flex items-center gap-3 mt-6"><button
            class="px-6 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2"><i
              class="fa-solid fa-magnifying-glass"></i><span>Apply
              Filters</span><button
            class="px-6 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
            Clear All
          </div>
      </button></div>
      <div id="vendors-table-section"
        class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Registered Vendors</h3>
              <p class="text-sm text-neutral-500 mt-1">All vendors with
                contracts and SAP integration status</p>
            </div>
            <div class="flex items-center gap-3"><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-download"></i><span>Export</span></button><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-print"></i><span>Print</span>
            </button></div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span>Vendor
                      ID</span></div>
                </th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Vendor Name</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Category</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  SAP Supplier ID</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Payment Terms</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Status</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Manager</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">V-CLEAN-001</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-broom text-neutral-600"></i></div>
                    <div>
                      <p class="text-sm text-neutral-900">Clean &amp; Care
                        Services</p>
                      <p class="text-xs text-neutral-500">Since 2023</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Cleaning</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">AP-000201</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Synced</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">7 Days</p>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Approved</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=7845"
                      alt="Manager" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Priya Singh</p>
                      <p class="text-xs text-neutral-500">Vendor Manager</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">V-PLMB-001</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-faucet text-neutral-600"></i></div>
                    <div>
                      <p class="text-sm text-neutral-900">FlowFix Plumbing</p>
                      <p class="text-xs text-neutral-500">Since 2024</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Plumbing</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">AP-000202</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Synced</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">15 Days</p>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Approved</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-500">Not Assigned</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">V-ELEC-001</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-bolt text-neutral-600"></i></div>
                    <div>
                      <p class="text-sm text-neutral-900">PowerTech Solutions
                      </p>
                      <p class="text-xs text-neutral-500">Since 2023</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Electricity</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">AP-000203</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Synced</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">7 Days</p>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Approved</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=4521"
                      alt="Manager" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Amit Kumar</p>
                      <p class="text-xs text-neutral-500">Vendor Manager</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">V-PAINT-001</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-paint-roller text-neutral-600"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">ColorCraft Painters
                      </p>
                      <p class="text-xs text-neutral-500">Since 2024</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Painting</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">AP-000204</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Synced</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">30 Days</p>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Approved</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=9632"
                      alt="Manager" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Sneha Patel</p>
                      <p class="text-xs text-neutral-500">Vendor Manager</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">V-GARD-001</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-seedling text-neutral-600"></i>
                    </div>
                    <div>
                      <p class="text-sm text-neutral-900">GreenScape Gardening
                      </p>
                      <p class="text-xs text-neutral-500">Since 2023</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Gardening</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">AP-000205</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Synced</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">15 Days</p>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Approved</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=7845"
                      alt="Manager" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Priya Singh</p>
                      <p class="text-xs text-neutral-500">Vendor Manager</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">V-CLEAN-002</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                      <i class="fa-solid fa-broom text-neutral-600"></i></div>
                    <div>
                      <p class="text-sm text-neutral-900">Sparkle Clean Co.</p>
                      <p class="text-xs text-neutral-500">Since 2024</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Cleaning</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-500">Not Synced</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-exclamation text-neutral-400 text-xs"></i><span
                        class="text-xs text-neutral-400">Pending</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">7 Days</p>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Pending
                    Approval</span></td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-500">Not Assigned</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="p-6 border-t border-neutral-200 flex items-center justify-between">
          <p class="text-sm text-neutral-600">Showing 6 of 28 vendors</p>
          <div class="flex items-center gap-2"><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"><i
                class="fa-solid fa-chevron-left"></i></button><button
              class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">2</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">3</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">4</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">5</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50"><i
                class="fa-solid fa-chevron-right"></i></button></div>
        </div>
      </div>
      <div id="vendor-details-section" class="grid grid-cols-3 gap-6 mb-8">
        <div
          class="col-span-2 bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">Vendor Details - Clean &amp;
                Care Services</h3>
              <p class="text-sm text-neutral-500 mt-1">Complete vendor
                information and contract details</p>
            </div>
            <div class="flex items-center gap-2"><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-print"></i><span>Print</span></button><button
                class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2"><i
                  class="fa-solid fa-edit"></i><span>Edit</span></button></div>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-6">
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Basic Information</h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Vendor ID</span><span
                      class="text-sm text-neutral-900">V-CLEAN-001</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Vendor
                      Name</span><span class="text-sm text-neutral-900">Clean
                      &amp; Care Services</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Category</span><span
                      class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Cleaning</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Registration
                      Date</span><span class="text-sm text-neutral-900">Jan 15,
                      2023</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Status</span><span
                      class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Approved</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Contact Information
                </h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Contact
                      Person</span><span class="text-sm text-neutral-900">Rahul
                      Verma</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Phone</span><span
                      class="text-sm text-neutral-900">+91 98765 43210</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Email</span><span
                      class="text-sm text-neutral-900">contact@cleancare.in</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Address</span><span
                      class="text-sm text-neutral-900 text-right">123, Service
                      Lane, Mumbai</span></div>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Financial Details</h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">SAP Supplier
                      ID</span><span
                      class="text-sm text-neutral-900">AP-000201</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Payment
                      Terms</span><span class="text-sm text-neutral-900">7
                      Days</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">SAP Sync
                      Status</span>
                    <div class="flex items-center gap-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Synced</span></div>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Total
                      Invoiced</span><span
                      class="text-sm text-neutral-900">₹2,45,000</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span
                      class="text-sm text-neutral-500">Outstanding</span><span
                      class="text-sm text-neutral-900">₹35,000</span></div>
                </div>
              </div>
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Contract Details</h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Contract
                      Start</span><span class="text-sm text-neutral-900">Jan 15,
                      2023</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Contract
                      End</span><span class="text-sm text-neutral-900">Jan 14,
                      2026</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Contract
                      Value</span><span
                      class="text-sm text-neutral-900">₹8,50,000</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Auto
                      Renewal</span><span
                      class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="text-sm text-neutral-900 mb-4">Assigned Manager</h4>
            <div
              class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
              <img
                src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=7845"
                alt="Manager" class="w-12 h-12 rounded-full">
              <div class="flex-1">
                <p class="text-sm text-neutral-900">Priya Singh</p>
                <p class="text-xs text-neutral-500">Vendor Manager •
                  u_vendor_mgr_01</p>
              </div><button class="text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-phone"></i></button><button
                class="text-neutral-600 hover:text-neutral-900"><i
                  class="fa-solid fa-envelope"></i>
            </button></div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="bg-white rounded-lg border border-neutral-200 p-6">
            <h3 class="text-lg text-neutral-900 mb-6">Documents</h3>
            <div class="space-y-3">
              <div
                class="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                  <i class="fa-solid fa-file-pdf text-neutral-600"></i></div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Contract Agreement</p>
                  <p class="text-xs text-neutral-500">PDF • 1.2 MB</p>
                </div><button class="text-neutral-600 hover:text-neutral-900"><i
                    class="fa-solid fa-download"></i>
              </button></div>
              <div
                class="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                  <i class="fa-solid fa-file-pdf text-neutral-600"></i></div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Tax Documents</p>
                  <p class="text-xs text-neutral-500">PDF • 856 KB</p>
                </div><button class="text-neutral-600 hover:text-neutral-900"><i
                    class="fa-solid fa-download"></i>
              </button></div>
              <div
                class="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                  <i class="fa-solid fa-file-pdf text-neutral-600"></i></div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Insurance Certificate</p>
                  <p class="text-xs text-neutral-500">PDF • 645 KB</p>
                </div><button class="text-neutral-600 hover:text-neutral-900"><i
                    class="fa-solid fa-download"></i>
              </button></div>
            </div><button
              class="w-full mt-4 px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center justify-center gap-2"><i
                class="fa-solid fa-upload"></i><span>Upload
                Document</span>
          </button></div>
        </div>
      </div>
      <div id="sap-integration-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">SAP Integration Status</h3>
            <p class="text-sm text-neutral-500 mt-1">Monitor vendor
              synchronization with SAP system</p>
          </div><button
            class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2"><i
              class="fa-solid fa-sync"></i><span>Sync All
              Vendors</span>
        </button></div>
        <div class="grid grid-cols-4 gap-6 mb-6">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-circle-check text-neutral-600"></i></div>
              <span
                class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Success</span>
            </div>
            <h3 class="text-2xl text-neutral-900 mb-1">24</h3>
            <p class="text-sm text-neutral-500">Synced Vendors</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-clock text-neutral-600"></i></div><span
                class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Pending</span>
            </div>
            <h3 class="text-2xl text-neutral-900 mb-1">3</h3>
            <p class="text-sm text-neutral-500">Pending Sync</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i
                  class="fa-solid fa-triangle-exclamation text-neutral-600"></i>
              </div><span
                class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Error</span>
            </div>
            <h3 class="text-2xl text-neutral-900 mb-1">1</h3>
            <p class="text-sm text-neutral-500">Sync Errors</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-calendar text-neutral-600"></i></div>
            </div>
            <h3 class="text-sm text-neutral-900 mb-1">Dec 17, 2025</h3>
            <p class="text-sm text-neutral-500">Last Sync</p>
            <p class="text-xs text-neutral-400 mt-1">10:30 AM</p>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Vendor</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  SAP Supplier ID</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Sync Status</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Last Sync</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Clean &amp; Care Services
                  </p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AP-000201</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><i
                      class="fa-solid fa-circle-check text-neutral-600"></i><span
                      class="text-sm text-neutral-900">Synced</span></div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 17, 2025 10:30 AM</p>
                </td>
                <td class="px-6 py-4"><button
                    class="text-neutral-600 hover:text-neutral-900 text-sm"><i
                      class="fa-solid fa-sync"></i> Sync Now
                  </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">FlowFix Plumbing</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AP-000202</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><i
                      class="fa-solid fa-circle-check text-neutral-600"></i><span
                      class="text-sm text-neutral-900">Synced</span></div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Dec 17, 2025 10:30 AM</p>
                </td>
                <td class="px-6 py-4"><button
                    class="text-neutral-600 hover:text-neutral-900 text-sm"><i
                      class="fa-solid fa-sync"></i> Sync Now
                  </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Sparkle Clean Co.</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-500">Not Assigned</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><i
                      class="fa-solid fa-circle-exclamation text-neutral-400"></i><span
                      class="text-sm text-neutral-500">Pending</span></div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-500">Never</p>
                </td>
                <td class="px-6 py-4"><button
                    class="text-neutral-600 hover:text-neutral-900 text-sm"><i
                      class="fa-solid fa-link"></i> Link SAP ID
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="vendor-actions-section" class="grid grid-cols-2 gap-6">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Quick Actions</h3>
          <div class="grid grid-cols-2 gap-4"><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-file-contract text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">Create
                Contract</span></button><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-file-invoice text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">Generate
                Invoice</span></button><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-clipboard-check text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">Work
                Order</span></button><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-star text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">Rate Service</span>
          </button></div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Payment Summary</h3>
          <div class="space-y-4">
            <div
              class="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-500">Total Paid (This Month)</p>
                <p class="text-xl text-neutral-900 mt-1">₹8,42,500</p>
              </div><i
                class="fa-solid fa-indian-rupee-sign text-2xl text-neutral-600"></i>
            </div>
            <div
              class="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-500">Outstanding Amount</p>
                <p class="text-xl text-neutral-900 mt-1">₹1,23,000</p>
              </div><i class="fa-solid fa-clock text-2xl text-neutral-600"></i>
            </div>
            <div
              class="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-500">Pending Invoices</p>
                <p class="text-xl text-neutral-900 mt-1">7</p>
              </div><i
                class="fa-solid fa-file-invoice text-2xl text-neutral-600"></i>
            </div>
          </div>
        </div>
      </div>`
  },

  "vendor-workforce": {
    title: "Vendor Workforce",
    subtitle: "Track vendor employees and their assignments.",
    content: `<div id="stats-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-users text-neutral-600 text-xl"></i></div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">156</h3>
          <p class="text-sm text-neutral-500">Total Employees</p>
          <p class="text-xs text-neutral-400 mt-2">Across all vendors</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-check text-neutral-600 text-xl"></i>
            </div><span
              class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Active</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">142</h3>
          <p class="text-sm text-neutral-500">Active Today</p>
          <p class="text-xs text-neutral-400 mt-2">Checked in</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">156</h3>
          <p class="text-sm text-neutral-500">Biometric Enrolled</p>
          <p class="text-xs text-neutral-400 mt-2">100% coverage</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i
                class="fa-solid fa-clipboard-user text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">28</h3>
          <p class="text-sm text-neutral-500">Assigned Tasks</p>
          <p class="text-xs text-neutral-400 mt-2">Today</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div
              class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-percent text-neutral-600 text-xl"></i></div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">94.2%</h3>
          <p class="text-sm text-neutral-500">Attendance Rate</p>
          <p class="text-xs text-neutral-400 mt-2">This month</p>
        </div>
      </div>
      <div id="vendor-breakdown-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-broom text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Cleaning</h3>
              <p class="text-xs text-neutral-500">Clean &amp; Care</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">42</p>
          <p class="text-xs text-neutral-500">Employees</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex-1 bg-neutral-100 rounded-full h-1.5">
              <div class="bg-neutral-800 h-1.5 rounded-full" id="ie2mzj"></div>
            </div><span class="text-xs text-neutral-500">95%</span>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-faucet text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Plumbing</h3>
              <p class="text-xs text-neutral-500">FlowFix</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">28</p>
          <p class="text-xs text-neutral-500">Employees</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex-1 bg-neutral-100 rounded-full h-1.5">
              <div class="bg-neutral-800 h-1.5 rounded-full" id="iu09qb"></div>
            </div><span class="text-xs text-neutral-500">92%</span>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-bolt text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Electricity</h3>
              <p class="text-xs text-neutral-500">PowerTech</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">35</p>
          <p class="text-xs text-neutral-500">Employees</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex-1 bg-neutral-100 rounded-full h-1.5">
              <div class="bg-neutral-800 h-1.5 rounded-full" id="iyrgyh"></div>
            </div><span class="text-xs text-neutral-500">97%</span>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-paint-roller text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Painting</h3>
              <p class="text-xs text-neutral-500">ColorCraft</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">24</p>
          <p class="text-xs text-neutral-500">Employees</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex-1 bg-neutral-100 rounded-full h-1.5">
              <div class="bg-neutral-800 h-1.5 rounded-full" id="iu6xjo"></div>
            </div><span class="text-xs text-neutral-500">89%</span>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-seedling text-neutral-600"></i></div>
            <div>
              <h3 class="text-sm text-neutral-900">Gardening</h3>
              <p class="text-xs text-neutral-500">GreenScape</p>
            </div>
          </div>
          <p class="text-2xl text-neutral-900 mb-1">27</p>
          <p class="text-xs text-neutral-500">Employees</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex-1 bg-neutral-100 rounded-full h-1.5">
              <div class="bg-neutral-800 h-1.5 rounded-full" id="isejlj"></div>
            </div><span class="text-xs text-neutral-500">93%</span>
          </div>
        </div>
      </div>
      <div id="filter-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Filter Workforce</h3><button
            class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2"><i
              class="fa-solid fa-rotate-left text-xs"></i><span>Reset
              Filters</span>
        </button></div>
        <div class="grid grid-cols-6 gap-4">
          <div><label
              class="block text-sm text-neutral-700 mb-2">Vendor</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Vendors</option>
              <option>Clean &amp; Care Services</option>
              <option>FlowFix Plumbing</option>
              <option>PowerTech Solutions</option>
              <option>ColorCraft Painters</option>
              <option>GreenScape Gardening</option>
            </select></div>
          <div><label
              class="block text-sm text-neutral-700 mb-2">Category</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Categories</option>
              <option>Cleaning</option>
              <option>Plumbing</option>
              <option>Electricity</option>
              <option>Painting</option>
              <option>Gardening</option>
            </select></div>
          <div><label
              class="block text-sm text-neutral-700 mb-2">Status</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Status</option>
              <option>Active</option>
              <option>On Leave</option>
              <option>Inactive</option>
            </select></div>
          <div><label class="block text-sm text-neutral-700 mb-2">Biometric
              Status</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All</option>
              <option>Enrolled</option>
              <option>Not Enrolled</option>
              <option>Pending</option>
            </select></div>
          <div><label
              class="block text-sm text-neutral-700 mb-2">Attendance</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All</option>
              <option>Present Today</option>
              <option>Absent Today</option>
            </select></div>
          <div><label
              class="block text-sm text-neutral-700 mb-2">Assignment</label><select
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All</option>
              <option>Assigned</option>
              <option>Unassigned</option>
            </select></div>
        </div>
        <div class="flex items-center gap-3 mt-6"><button
            class="px-6 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2"><i
              class="fa-solid fa-magnifying-glass"></i><span>Apply
              Filters</span><button
            class="px-6 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
            Clear All
          </div>
      </button></div>
      <div id="workforce-table-section"
        class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Vendor Employees</h3>
              <p class="text-sm text-neutral-500 mt-1">Complete workforce
                directory with biometric tracking</p>
            </div>
            <div class="flex items-center gap-3"><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-download"></i><span>Export</span></button><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-fingerprint"></i><span>Bulk
                  Enroll</span></button><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-print"></i><span>Print</span>
            </button></div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span>Employee
                      ID</span></div>
                </th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Employee Name</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Vendor</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Category</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Biometric ID</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Phone</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Status</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">VE-001</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=1234"
                      alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Ramesh Cleaner</p>
                      <p class="text-xs text-neutral-500">Since Jan 2023</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Clean &amp; Care
                      Services</p>
                    <p class="text-xs text-neutral-500">V-CLEAN-001</p>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Cleaning</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-CLN-1001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Enrolled</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">+91 98888 00101</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div><span
                      class="text-xs text-neutral-900">Present</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">VE-101</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=5678"
                      alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Suresh Plumber</p>
                      <p class="text-xs text-neutral-500">Since Mar 2024</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">FlowFix Plumbing</p>
                    <p class="text-xs text-neutral-500">V-PLMB-001</p>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Plumbing</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-PLM-2001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Enrolled</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">+91 98888 00201</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div><span
                      class="text-xs text-neutral-900">Present</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">VE-002</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=9101"
                      alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Mukesh Kumar</p>
                      <p class="text-xs text-neutral-500">Since Feb 2023</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Clean &amp; Care
                      Services</p>
                    <p class="text-xs text-neutral-500">V-CLEAN-001</p>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Cleaning</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-CLN-1002</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Enrolled</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">+91 98888 00102</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div><span
                      class="text-xs text-neutral-900">Present</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">VE-201</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=1122"
                      alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Vijay Electrician</p>
                      <p class="text-xs text-neutral-500">Since Jan 2023</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">PowerTech Solutions</p>
                    <p class="text-xs text-neutral-500">V-ELEC-001</p>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Electricity</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-ELC-3001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Enrolled</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">+91 98888 00301</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div><span
                      class="text-xs text-neutral-900">Present</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">VE-301</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=3344"
                      alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Anil Painter</p>
                      <p class="text-xs text-neutral-500">Since Apr 2024</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">ColorCraft Painters</p>
                    <p class="text-xs text-neutral-500">V-PAINT-001</p>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Painting</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-PNT-4001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Enrolled</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">+91 98888 00401</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-300 rounded-full"></div><span
                      class="text-xs text-neutral-500">Absent</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><input type="checkbox"
                      class="w-4 h-4 border-neutral-300 rounded"><span
                      class="text-sm text-neutral-900">VE-401</span></div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3"><img
                      src="https://api.dicebear.com/7.x/notionists/svg?scale=200&amp;seed=5566"
                      alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Ravi Gardener</p>
                      <p class="text-xs text-neutral-500">Since Jan 2023</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">GreenScape Gardening</p>
                    <p class="text-xs text-neutral-500">V-GARD-001</p>
                  </div>
                </td>
                <td class="px-6 py-4"><span
                    class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Gardening</span>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-GRD-5001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Enrolled</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">+91 98888 00501</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div><span
                      class="text-xs text-neutral-900">Present</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2"><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-eye"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-edit"></i></button><button
                      class="text-neutral-600 hover:text-neutral-900"><i
                        class="fa-solid fa-ellipsis-vertical"></i>
                  </button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="p-6 border-t border-neutral-200 flex items-center justify-between">
          <p class="text-sm text-neutral-600">Showing 6 of 156 employees</p>
          <div class="flex items-center gap-2"><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"><i
                class="fa-solid fa-chevron-left"></i></button><button
              class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">2</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">3</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">...</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">26</button><button
              class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50"><i
                class="fa-solid fa-chevron-right"></i></button></div>
        </div>
      </div>
      <div id="employee-details-section" class="grid grid-cols-3 gap-6 mb-8">
        <div
          class="col-span-2 bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">Employee Details - Ramesh
                Cleaner</h3>
              <p class="text-sm text-neutral-500 mt-1">Complete employee profile
                and performance tracking</p>
            </div>
            <div class="flex items-center gap-2"><button
                class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2"><i
                  class="fa-solid fa-print"></i><span>Print</span></button><button
                class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2"><i
                  class="fa-solid fa-edit"></i><span>Edit</span></button></div>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div class="space-y-6">
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Basic Information</h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Employee
                      ID</span><span
                      class="text-sm text-neutral-900">VE-001</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Full Name</span><span
                      class="text-sm text-neutral-900">Ramesh Cleaner</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Vendor</span><span
                      class="text-sm text-neutral-900">Clean &amp; Care
                      Services</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Category</span><span
                      class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Cleaning</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Join Date</span><span
                      class="text-sm text-neutral-900">Jan 15, 2023</span></div>
                </div>
              </div>
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Contact Information
                </h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Phone</span><span
                      class="text-sm text-neutral-900">+91 98888 00101</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Emergency
                      Contact</span><span class="text-sm text-neutral-900">+91
                      98888 00199</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Address</span><span
                      class="text-sm text-neutral-900 text-right">Sector 12,
                      Andheri, Mumbai</span></div>
                </div>
              </div>
            </div>
            <div class="space-y-6">
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Biometric Details</h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Biometric
                      ID</span><span
                      class="text-sm text-neutral-900">BIO-CLN-1001</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Enrollment
                      Status</span>
                    <div class="flex items-center gap-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Enrolled</span></div>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Enrollment
                      Date</span><span class="text-sm text-neutral-900">Jan 16,
                      2023</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Last Scan</span><span
                      class="text-sm text-neutral-900">Today 08:15 AM</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Total
                      Scans</span><span
                      class="text-sm text-neutral-900">684</span></div>
                </div>
              </div>
              <div>
                <h4 class="text-sm text-neutral-900 mb-4">Work Details</h4>
                <div class="space-y-3">
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Current Status</span>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                      <span class="text-xs text-neutral-900">Present</span>
                    </div>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Assigned
                      Area</span><span class="text-sm text-neutral-900">Tower A,
                      Floors 1-5</span></div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span class="text-sm text-neutral-500">Shift</span><span
                      class="text-sm text-neutral-900">Morning (8AM-4PM)</span>
                  </div>
                  <div
                    class="flex items-center justify-between py-2 border-b border-neutral-100">
                    <span
                      class="text-sm text-neutral-500">Supervisor</span><span
                      class="text-sm text-neutral-900">Priya Singh</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h4 class="text-sm text-neutral-900 mb-4">Attendance Summary (This
              Month)</h4>
            <div class="grid grid-cols-4 gap-4">
              <div class="p-4 border border-neutral-200 rounded-lg">
                <p class="text-xs text-neutral-500 mb-1">Present Days</p>
                <p class="text-2xl text-neutral-900">16</p>
              </div>
              <div class="p-4 border border-neutral-200 rounded-lg">
                <p class="text-xs text-neutral-500 mb-1">Absent Days</p>
                <p class="text-2xl text-neutral-900">1</p>
              </div>
              <div class="p-4 border border-neutral-200 rounded-lg">
                <p class="text-xs text-neutral-500 mb-1">Late Arrivals</p>
                <p class="text-2xl text-neutral-900">2</p>
              </div>
              <div class="p-4 border border-neutral-200 rounded-lg">
                <p class="text-xs text-neutral-500 mb-1">Attendance %</p>
                <p class="text-2xl text-neutral-900">94%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div class="bg-white rounded-lg border border-neutral-200 p-6">
            <h3 class="text-lg text-neutral-900 mb-6">Recent Activity</h3>
            <div class="space-y-4">
              <div class="flex gap-3">
                <div
                  class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-fingerprint text-neutral-600 text-xs"></i>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Check-in recorded</p>
                  <p class="text-xs text-neutral-500">Today, 08:15 AM</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div
                  class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i
                    class="fa-solid fa-clipboard-check text-neutral-600 text-xs"></i>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Task completed</p>
                  <p class="text-xs text-neutral-500">Yesterday, 03:45 PM</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div
                  class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-star text-neutral-600 text-xs"></i>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Received 5-star rating</p>
                  <p class="text-xs text-neutral-500">Dec 15, 2025</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div
                  class="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-award text-neutral-600 text-xs"></i>
                </div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Employee of the month</p>
                  <p class="text-xs text-neutral-500">Nov 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg border border-neutral-200 p-6">
            <h3 class="text-lg text-neutral-900 mb-6">Documents</h3>
            <div class="space-y-3">
              <div
                class="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                  <i class="fa-solid fa-file-pdf text-neutral-600"></i></div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">ID Proof</p>
                  <p class="text-xs text-neutral-500">PDF • 842 KB</p>
                </div><button class="text-neutral-600 hover:text-neutral-900"><i
                    class="fa-solid fa-download"></i>
              </button></div>
              <div
                class="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                  <i class="fa-solid fa-file-pdf text-neutral-600"></i></div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Police Verification</p>
                  <p class="text-xs text-neutral-500">PDF • 1.1 MB</p>
                </div><button class="text-neutral-600 hover:text-neutral-900"><i
                    class="fa-solid fa-download"></i>
              </button></div>
              <div
                class="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg">
                <div
                  class="w-10 h-10 bg-neutral-100 rounded flex items-center justify-center">
                  <i class="fa-solid fa-file-pdf text-neutral-600"></i></div>
                <div class="flex-1">
                  <p class="text-sm text-neutral-900">Training Certificate</p>
                  <p class="text-xs text-neutral-500">PDF • 645 KB</p>
                </div><button class="text-neutral-600 hover:text-neutral-900"><i
                    class="fa-solid fa-download"></i>
              </button></div>
            </div><button
              class="w-full mt-4 px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center justify-center gap-2"><i
                class="fa-solid fa-upload"></i><span>Upload
                Document</span>
          </button></div>
        </div>
      </div>
      <div id="biometric-section"
        class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Biometric Enrollment Status
            </h3>
            <p class="text-sm text-neutral-500 mt-1">Monitor biometric
              registration across all vendor employees</p>
          </div><button
            class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2"><i
              class="fa-solid fa-fingerprint"></i><span>Bulk
              Enroll</span>
        </button></div>
        <div class="grid grid-cols-4 gap-6 mb-6">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-circle-check text-neutral-600"></i></div>
              <span
                class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Complete</span>
            </div>
            <h3 class="text-2xl text-neutral-900 mb-1">156</h3>
            <p class="text-sm text-neutral-500">Enrolled</p>
            <p class="text-xs text-neutral-400 mt-1">100% coverage</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-clock text-neutral-600"></i></div><span
                class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Pending</span>
            </div>
            <h3 class="text-2xl text-neutral-900 mb-1">0</h3>
            <p class="text-sm text-neutral-500">Pending Enrollment</p>
            <p class="text-xs text-neutral-400 mt-1">No pending</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-fingerprint text-neutral-600"></i></div>
            </div>
            <h3 class="text-2xl text-neutral-900 mb-1">2,847</h3>
            <p class="text-sm text-neutral-500">Total Scans Today</p>
            <p class="text-xs text-neutral-400 mt-1">Check-ins/outs</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div
                class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-calendar text-neutral-600"></i></div>
            </div>
            <h3 class="text-sm text-neutral-900 mb-1">Dec 17, 2025</h3>
            <p class="text-sm text-neutral-500">Last Enrollment</p>
            <p class="text-xs text-neutral-400 mt-1">10:30 AM</p>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Employee</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Vendor</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Biometric ID</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Enrollment Date</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Last Scan</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Total Scans</th>
                <th
                  class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Ramesh Cleaner</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Clean &amp; Care Services
                  </p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-CLN-1001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Active</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Jan 16, 2023</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Today 08:15 AM</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">684</p>
                </td>
                <td class="px-6 py-4"><button
                    class="text-neutral-600 hover:text-neutral-900 text-sm"><i
                      class="fa-solid fa-sync"></i> Re-enroll
                  </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Suresh Plumber</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">FlowFix Plumbing</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-PLM-2001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Active</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Mar 20, 2024</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Today 08:22 AM</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">268</p>
                </td>
                <td class="px-6 py-4"><button
                    class="text-neutral-600 hover:text-neutral-900 text-sm"><i
                      class="fa-solid fa-sync"></i> Re-enroll
                  </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Vijay Electrician</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">PowerTech Solutions</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">BIO-ELC-3001</p>
                    <div class="flex items-center gap-1 mt-1"><i
                        class="fa-solid fa-circle-check text-neutral-600 text-xs"></i><span
                        class="text-xs text-neutral-500">Active</span></div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Jan 25, 2023</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">Today 08:10 AM</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">712</p>
                </td>
                <td class="px-6 py-4"><button
                    class="text-neutral-600 hover:text-neutral-900 text-sm"><i
                      class="fa-solid fa-sync"></i> Re-enroll
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="quick-actions-section" class="grid grid-cols-2 gap-6">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Quick Actions</h3>
          <div class="grid grid-cols-2 gap-4"><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-user-plus text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">Add
                Employee</span></button><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-fingerprint text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">Enroll
                Biometric</span></button><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-clipboard-user text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">Assign
                Task</span></button><button
              class="p-4 border border-neutral-300 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2"><i
                class="fa-solid fa-calendar-check text-2xl text-neutral-600"></i><span
                class="text-sm text-neutral-900">View Attendance</span>
          </button></div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Today's Summary</h3>
          <div class="space-y-4">
            <div
              class="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-500">Total Check-ins</p>
                <p class="text-xl text-neutral-900 mt-1">142</p>
              </div><i
                class="fa-solid fa-arrow-right-to-bracket text-2xl text-neutral-600"></i>
            </div>
            <div
              class="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-500">Late Arrivals</p>
                <p class="text-xl text-neutral-900 mt-1">8</p>
              </div><i class="fa-solid fa-clock text-2xl text-neutral-600"></i>
            </div>
            <div
              class="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p class="text-sm text-neutral-500">Absent Today</p>
                <p class="text-xl text-neutral-900 mt-1">14</p>
              </div><i
                class="fa-solid fa-user-xmark text-2xl text-neutral-600"></i>
            </div>
          </div>
        </div>
      </div>`
  },

  "attendance": {
    title: "Attendance Tracking",
    subtitle: "Monitor staff and vendor attendance records.",
    content: `<div id="stats-section" class="grid grid-cols-6 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-check text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">142</h3>
          <p class="text-sm text-neutral-500">Present Today</p>
          <p class="text-xs text-neutral-400 mt-2">91.0% attendance</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-xmark text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">14</h3>
          <p class="text-sm text-neutral-500">Absent Today</p>
          <p class="text-xs text-neutral-400 mt-2">9.0% absent</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-clock text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">8</h3>
          <p class="text-sm text-neutral-500">Late Arrivals</p>
          <p class="text-xs text-neutral-400 mt-2">After 9:00 AM</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">284</h3>
          <p class="text-sm text-neutral-500">Total Scans</p>
          <p class="text-xs text-neutral-400 mt-2">Check-ins/outs</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-triangle-exclamation text-neutral-600 text-xl"></i>
            </div>
            <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">Alert</span>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">3</h3>
          <p class="text-sm text-neutral-500">Missing Logs</p>
          <p class="text-xs text-neutral-400 mt-2">Require review</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-circle-check text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">139</h3>
          <p class="text-sm text-neutral-500">Verified Records</p>
          <p class="text-xs text-neutral-400 mt-2">97.9% verified</p>
        </div>
      </div>
      <div id="realtime-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Real-Time Attendance Feed</h3>
            <p class="text-sm text-neutral-500 mt-1">Live biometric check-ins and check-outs</p>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <div class="w-2 h-2 bg-neutral-800 rounded-full animate-pulse"></div>
              <span class="text-xs text-neutral-600">Live</span>
            </div>
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-rotate"></i>
              <span>Refresh</span>
            
          </div>
        </div>
        <div class="space-y-3">
          <div class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-arrow-right-to-bracket text-neutral-600"></i>
            </div>
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=9987" alt="Employee" class="w-10 h-10 rounded-full">
            <div class="flex-1">
              <p class="text-sm text-neutral-900">Priya Sharma</p>
              <p class="text-xs text-neutral-500">VE-502 • GreenScape Gardening</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-neutral-900">Check-in</p>
              <p class="text-xs text-neutral-500">08:45 AM • BIO_DEVICE_05</p>
            </div>
            <div class="flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-neutral-600"></i>
              <span class="text-xs text-neutral-500">Verified</span>
            </div>
          </div>
          <div class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-arrow-right-from-bracket text-neutral-600"></i>
            </div>
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=7765" alt="Employee" class="w-10 h-10 rounded-full">
            <div class="flex-1">
              <p class="text-sm text-neutral-900">Amit Kumar</p>
              <p class="text-xs text-neutral-500">VE-302 • ColorCraft Painters</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-neutral-900">Check-out</p>
              <p class="text-xs text-neutral-500">04:30 PM • BIO_DEVICE_04</p>
            </div>
            <div class="flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-neutral-600"></i>
              <span class="text-xs text-neutral-500">Verified</span>
            </div>
          </div>
          <div class="flex items-center gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-arrow-right-to-bracket text-neutral-600"></i>
            </div>
            <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=4432" alt="Employee" class="w-10 h-10 rounded-full">
            <div class="flex-1">
              <p class="text-sm text-neutral-900">Deepak Singh</p>
              <p class="text-xs text-neutral-500">VE-203 • PowerTech Solutions</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-neutral-900">Check-in</p>
              <p class="text-xs text-neutral-500">09:15 AM • BIO_DEVICE_03</p>
            </div>
            <div class="flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-neutral-600"></i>
              <span class="text-xs text-neutral-500">Verified</span>
            </div>
          </div>
        </div>
      </div>
      <div id="filter-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Filter Attendance Records</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
            <i class="fa-solid fa-rotate-left text-xs"></i>
            <span>Reset Filters</span>
          
        </div>
        <div class="grid grid-cols-5 gap-4">
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Date Range</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Vendor</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Vendors</option>
              <option>Clean & Care Services</option>
              <option>FlowFix Plumbing</option>
              <option>PowerTech Solutions</option>
              <option>ColorCraft Painters</option>
              <option>GreenScape Gardening</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Status</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Status</option>
              <option>Present</option>
              <option>Absent</option>
              <option>Late</option>
              <option>Early Departure</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Verification</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Records</option>
              <option>Verified</option>
              <option>Unverified</option>
              <option>Missing Logs</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Device</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Devices</option>
              <option>BIO_DEVICE_01</option>
              <option>BIO_DEVICE_02</option>
              <option>BIO_DEVICE_03</option>
              <option>BIO_DEVICE_04</option>
              <option>BIO_DEVICE_05</option>
            </select>
          </div>
        </div>
        <div class="flex items-center gap-3 mt-6">
          <button class="px-6 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Apply Filters</span>
          
          <button class="px-6 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
            Clear All
          
        </button></div>
      </div>
      <div id="attendance-table-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Attendance Records - December 7, 2025</h3>
              <p class="text-sm text-neutral-500 mt-1">Complete biometric attendance tracking for all vendor employees</p>
            </div>
            <div class="flex items-center gap-3">
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-download"></i>
                <span>Export CSV</span>
              
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-file-pdf"></i>
                <span>Export PDF</span>
              
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-print"></i>
                <span>Print</span>
              
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span>Attendance ID</span>
                  </div>
                </th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Employee</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Vendor</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Clock In</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Clock Out</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Total Hours</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Device</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Status</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">ATT-20251207-VE-001</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Ramesh Cleaner</p>
                      <p class="text-xs text-neutral-500">VE-001</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Clean & Care Services</p>
                    <p class="text-xs text-neutral-500">V-CLEAN-001</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">08:00 AM</p>
                    <p class="text-xs text-neutral-500">On time</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">04:00 PM</p>
                    <p class="text-xs text-neutral-500">Recorded 16:01</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">8h 0m</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">BIO_DEVICE_01</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-neutral-600"></i>
                    <span class="text-xs text-neutral-900">Verified</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50 bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">ATT-20251207-VE-101</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678" alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Suresh Plumber</p>
                      <p class="text-xs text-neutral-500">VE-101</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">FlowFix Plumbing</p>
                    <p class="text-xs text-neutral-500">V-PLMB-001</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">09:00 AM</p>
                    <p class="text-xs text-neutral-500">On time</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">05:00 PM</p>
                    <p class="text-xs text-neutral-500">Recorded 17:05</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">8h 0m</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">BIO_DEVICE_02</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-triangle-exclamation text-neutral-600"></i>
                    <span class="text-xs text-neutral-900">Missing Log Alert</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">ATT-20251207-VE-002</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=9101" alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Mukesh Kumar</p>
                      <p class="text-xs text-neutral-500">VE-002</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">Clean & Care Services</p>
                    <p class="text-xs text-neutral-500">V-CLEAN-001</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">08:15 AM</p>
                    <p class="text-xs text-neutral-500">15 min late</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">04:15 PM</p>
                    <p class="text-xs text-neutral-500">Recorded 16:16</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">8h 0m</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">BIO_DEVICE_01</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-neutral-600"></i>
                    <span class="text-xs text-neutral-900">Verified</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">ATT-20251207-VE-201</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1122" alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Vijay Electrician</p>
                      <p class="text-xs text-neutral-500">VE-201</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">PowerTech Solutions</p>
                    <p class="text-xs text-neutral-500">V-ELEC-001</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">08:05 AM</p>
                    <p class="text-xs text-neutral-500">On time</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">04:05 PM</p>
                    <p class="text-xs text-neutral-500">Recorded 16:07</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">8h 0m</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">BIO_DEVICE_03</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-neutral-600"></i>
                    <span class="text-xs text-neutral-900">Verified</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">ATT-20251207-VE-401</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5566" alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Ravi Gardener</p>
                      <p class="text-xs text-neutral-500">VE-401</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">GreenScape Gardening</p>
                    <p class="text-xs text-neutral-500">V-GARD-001</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">07:55 AM</p>
                    <p class="text-xs text-neutral-500">Early arrival</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">03:55 PM</p>
                    <p class="text-xs text-neutral-500">Recorded 15:56</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">8h 0m</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">BIO_DEVICE_05</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-neutral-600"></i>
                    <span class="text-xs text-neutral-900">Verified</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">ATT-20251207-VE-302</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=6677" alt="Employee" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Rajesh Painter</p>
                      <p class="text-xs text-neutral-500">VE-302</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">ColorCraft Painters</p>
                    <p class="text-xs text-neutral-500">V-PAINT-001</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">09:30 AM</p>
                    <p class="text-xs text-neutral-500">30 min late</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">05:30 PM</p>
                    <p class="text-xs text-neutral-500">Recorded 17:31</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">8h 0m</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">BIO_DEVICE_04</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-neutral-600"></i>
                    <span class="text-xs text-neutral-900">Verified</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-6 border-t border-neutral-200 flex items-center justify-between">
          <p class="text-sm text-neutral-600">Showing 6 of 142 attendance records</p>
          <div class="flex items-center gap-2">
            <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <i class="fa-solid fa-chevron-left"></i>
            
            </button><button class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">2
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">3
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">...
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">24
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
              <i class="fa-solid fa-chevron-right"></i>
            
          </button></div>
        </div>
      </div>
      <div id="alerts-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Missing Logs & Alerts</h3>
            <p class="text-sm text-neutral-500 mt-1">Attendance records requiring review and verification</p>
          </div>
          <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
            <i class="fa-solid fa-check-double"></i>
            <span>Mark All Reviewed</span>
          
        </div>
        <div class="space-y-4">
          <div class="p-4 border border-neutral-300 rounded-lg bg-neutral-50">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-triangle-exclamation text-neutral-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h4 class="text-sm text-neutral-900">Missing Clock-Out Log</h4>
                  <span class="text-xs text-white bg-neutral-800 px-2 py-1 rounded">High Priority</span>
                </div>
                <p class="text-sm text-neutral-600 mb-3">Employee Suresh Plumber (VE-101) has missing clock-out record for December 7, 2025. Clock-in recorded at 09:00 AM but no clock-out detected.</p>
                <div class="flex items-center gap-4 mb-3">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-user text-neutral-500 text-xs"></i>
                    <span class="text-xs text-neutral-600">VE-101 • FlowFix Plumbing</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-fingerprint text-neutral-500 text-xs"></i>
                    <span class="text-xs text-neutral-600">BIO_DEVICE_02</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-user-tie text-neutral-500 text-xs"></i>
                    <span class="text-xs text-neutral-600">Assigned to: u_vendor_mgr_01</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
                    <i class="fa-solid fa-check"></i>
                    <span>Verify & Close</span>
                  
                  <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                    <i class="fa-solid fa-pen"></i>
                    <span>Add Manual Entry</span>
                  
                  <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                    <i class="fa-solid fa-comment"></i>
                    <span>Add Note</span>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-clock text-neutral-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h4 class="text-sm text-neutral-900">Late Arrival Pattern Detected</h4>
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Medium Priority</span>
                </div>
                <p class="text-sm text-neutral-600 mb-3">Employee Rajesh Painter (VE-302) has been late 3 times this week. Latest arrival: 09:30 AM (30 minutes late).</p>
                <div class="flex items-center gap-4 mb-3">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-user text-neutral-500 text-xs"></i>
                    <span class="text-xs text-neutral-600">VE-302 • ColorCraft Painters</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-calendar text-neutral-500 text-xs"></i>
                    <span class="text-xs text-neutral-600">Last 7 days</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
                    <i class="fa-solid fa-bell"></i>
                    <span>Send Warning</span>
                  
                  <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                    <i class="fa-solid fa-chart-line"></i>
                    <span>View History</span>
                  
                  <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
                    Dismiss
                  
                </button></div>
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-2">
                  <h4 class="text-sm text-neutral-900">Biometric Device Issue</h4>
                  <span class="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">Low Priority</span>
                </div>
                <p class="text-sm text-neutral-600 mb-3">BIO_DEVICE_02 reported 2 failed scan attempts for employee VE-105. Device may require maintenance or recalibration.</p>
                <div class="flex items-center gap-4 mb-3">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-fingerprint text-neutral-500 text-xs"></i>
                    <span class="text-xs text-neutral-600">BIO_DEVICE_02</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-clock text-neutral-500 text-xs"></i>
                    <span class="text-xs text-neutral-600">Today, 08:45 AM</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button class="px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
                    <i class="fa-solid fa-wrench"></i>
                    <span>Schedule Maintenance</span>
                  
                  <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
                    Dismiss
                  
                </button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="analytics-section" class="grid grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Attendance Trends (Last 7 Days)</h3>
          <div class="space-y-4">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600">Monday, Dec 1</span>
                <span class="text-sm text-neutral-900">145/156 (93%)</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 93%"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600">Tuesday, Dec 2</span>
                <span class="text-sm text-neutral-900">148/156 (95%)</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600">Wednesday, Dec 3</span>
                <span class="text-sm text-neutral-900">143/156 (92%)</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 92%"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600">Thursday, Dec 4</span>
                <span class="text-sm text-neutral-900">150/156 (96%)</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 96%"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600">Friday, Dec 5</span>
                <span class="text-sm text-neutral-900">144/156 (92%)</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 92%"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600">Saturday, Dec 6</span>
                <span class="text-sm text-neutral-900">138/156 (88%)</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 88%"></div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm text-neutral-600">Today, Dec 7</span>
                <span class="text-sm text-neutral-900">142/156 (91%)</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 91%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Vendor-wise Attendance Today</h3>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-broom text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Clean & Care Services</p>
                    <p class="text-xs text-neutral-500">Cleaning</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">40/42</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-faucet text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">FlowFix Plumbing</p>
                    <p class="text-xs text-neutral-500">Plumbing</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">26/28</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 93%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-bolt text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">PowerTech Solutions</p>
                    <p class="text-xs text-neutral-500">Electricity</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">33/35</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 94%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-paint-roller text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">ColorCraft Painters</p>
                    <p class="text-xs text-neutral-500">Painting</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">20/24</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 83%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-seedling text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">GreenScape Gardening</p>
                    <p class="text-xs text-neutral-500">Gardening</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">23/27</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="device-status-section" class="bg-white rounded-lg border border-neutral-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Biometric Device Status</h3>
            <p class="text-sm text-neutral-500 mt-1">Monitor all biometric scanning devices across the society</p>
          </div>
          <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
            <i class="fa-solid fa-sync"></i>
            <span>Refresh Status</span>
          
        </div>
        <div class="grid grid-cols-5 gap-6">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                <span class="text-xs text-neutral-900">Online</span>
              </div>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">BIO_DEVICE_01</h4>
            <p class="text-xs text-neutral-500 mb-3">Main Gate • Tower A</p>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Today's Scans</span>
                <span class="text-neutral-900">84</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Last Scan</span>
                <span class="text-neutral-900">2 min ago</span>
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                <span class="text-xs text-neutral-900">Online</span>
              </div>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">BIO_DEVICE_02</h4>
            <p class="text-xs text-neutral-500 mb-3">Service Gate • Tower B</p>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Today's Scans</span>
                <span class="text-neutral-900">56</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Last Scan</span>
                <span class="text-neutral-900">5 min ago</span>
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                <span class="text-xs text-neutral-900">Online</span>
              </div>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">BIO_DEVICE_03</h4>
            <p class="text-xs text-neutral-500 mb-3">Basement • Tower C</p>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Today's Scans</span>
                <span class="text-neutral-900">70</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Last Scan</span>
                <span class="text-neutral-900">1 min ago</span>
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                <span class="text-xs text-neutral-900">Online</span>
              </div>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">BIO_DEVICE_04</h4>
            <p class="text-xs text-neutral-500 mb-3">Club House</p>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Today's Scans</span>
                <span class="text-neutral-900">38</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Last Scan</span>
                <span class="text-neutral-900">8 min ago</span>
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-fingerprint text-neutral-600 text-xl"></i>
              </div>
              <div class="flex items-center gap-1">
                <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                <span class="text-xs text-neutral-900">Online</span>
              </div>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">BIO_DEVICE_05</h4>
            <p class="text-xs text-neutral-500 mb-3">Garden Area</p>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Today's Scans</span>
                <span class="text-neutral-900">36</span>
              </div>
              <div class="flex items-center justify-between text-xs">
                <span class="text-neutral-500">Last Scan</span>
                <span class="text-neutral-900">3 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>`
  },

  "residents": {
    title: "Residents Directory",
    subtitle: "Manage resident information and unit occupancy.",
    content: `<div id="stats-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-building text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">248</h3>
          <p class="text-sm text-neutral-500">Total Flats</p>
          <p class="text-xs text-neutral-400 mt-2">Across all towers</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-users text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">236</h3>
          <p class="text-sm text-neutral-500">Occupied Units</p>
          <p class="text-xs text-neutral-400 mt-2">95.2% occupancy</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-door-open text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">12</h3>
          <p class="text-sm text-neutral-500">Vacant Units</p>
          <p class="text-xs text-neutral-400 mt-2">4.8% vacant</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-key text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">189</h3>
          <p class="text-sm text-neutral-500">Owner Occupied</p>
          <p class="text-xs text-neutral-400 mt-2">76.2% ownership</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-file-contract text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">47</h3>
          <p class="text-sm text-neutral-500">Rented Units</p>
          <p class="text-xs text-neutral-400 mt-2">18.9% rented</p>
        </div>
      </div>
      <div id="quick-actions-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <h3 class="text-lg text-neutral-900 mb-4">Quick Actions</h3>
        <div class="grid grid-cols-6 gap-4">
          <button class="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-plus text-neutral-600 text-xl"></i>
            </div>
            <span class="text-sm text-neutral-900">Add Resident</span>
          
          <button class="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-file-import text-neutral-600 text-xl"></i>
            </div>
            <span class="text-sm text-neutral-900">Bulk Import</span>
          
          <button class="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-file-invoice text-neutral-600 text-xl"></i>
            </div>
            <span class="text-sm text-neutral-900">Send Invoices</span>
          
          <button class="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-bell text-neutral-600 text-xl"></i>
            </div>
            <span class="text-sm text-neutral-900">Send Notice</span>
          
          <button class="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-chart-pie text-neutral-600 text-xl"></i>
            </div>
            <span class="text-sm text-neutral-900">View Reports</span>
          
          <button class="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 flex flex-col items-center gap-2">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-sync text-neutral-600 text-xl"></i>
            </div>
            <span class="text-sm text-neutral-900">Sync SAP</span>
          
        </div>
      </div>
      <div id="filter-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg text-neutral-900">Filter Residents</h3>
          <button class="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-2">
            <i class="fa-solid fa-rotate-left text-xs"></i>
            <span>Reset Filters</span>
          
        </div>
        <div class="grid grid-cols-5 gap-4">
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Tower</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Towers</option>
              <option>Tower A</option>
              <option>Tower B</option>
              <option>Tower C</option>
              <option>Tower D</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Floor</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Floors</option>
              <option>Ground Floor</option>
              <option>1st Floor</option>
              <option>2nd Floor</option>
              <option>3rd Floor</option>
              <option>4th Floor</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Occupancy Status</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Status</option>
              <option>Occupied</option>
              <option>Vacant</option>
              <option>Under Renovation</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Ownership Type</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Types</option>
              <option>Owner Occupied</option>
              <option>Rented</option>
              <option>Leased</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-neutral-700 mb-2">Payment Status</label>
            <select class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900">
              <option>All Payments</option>
              <option>Up to Date</option>
              <option>Pending</option>
              <option>Overdue</option>
            </select>
          </div>
        </div>
        <div class="flex items-center gap-3 mt-6">
          <button class="px-6 py-2 bg-neutral-900 text-white rounded-lg text-sm hover:bg-neutral-800 flex items-center gap-2">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Apply Filters</span>
          
          <button class="px-6 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
            Clear All
          
        </button></div>
      </div>
      <div id="residents-table-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">All Residents</h3>
              <p class="text-sm text-neutral-500 mt-1">Complete list of all flat owners and tenants with SAP integration</p>
            </div>
            <div class="flex items-center gap-3">
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-download"></i>
                <span>Export CSV</span>
              
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-file-pdf"></i>
                <span>Export PDF</span>
              
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-print"></i>
                <span>Print</span>
              
            </div>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span>Flat ID</span>
                  </div>
                </th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Owner Details</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Contact</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">SAP Customer ID</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Unit Share %</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Virtual Account</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Bank</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Status</th>
                <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200">
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-101</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1011" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Asha Verma</p>
                      <p class="text-xs text-neutral-500">Tower A, 1st Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911101</p>
                    <p class="text-xs text-neutral-500">asha.verma@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001001</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-101</p>
                    <p class="text-xs text-neutral-500">SAP_VA_101</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-102</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1022" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Sunil Rao</p>
                      <p class="text-xs text-neutral-500">Tower A, 1st Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911102</p>
                    <p class="text-xs text-neutral-500">sunil.rao@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001002</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-102</p>
                    <p class="text-xs text-neutral-500">SAP_VA_102</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-103</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1033" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Meera Patel</p>
                      <p class="text-xs text-neutral-500">Tower A, 1st Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911103</p>
                    <p class="text-xs text-neutral-500">meera.patel@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001003</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-103</p>
                    <p class="text-xs text-neutral-500">SAP_VA_103</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-201</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=2011" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Vikram Singh</p>
                      <p class="text-xs text-neutral-500">Tower A, 2nd Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911201</p>
                    <p class="text-xs text-neutral-500">vikram.singh@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001201</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-201</p>
                    <p class="text-xs text-neutral-500">SAP_VA_201</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-202</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=2022" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Priya Sharma</p>
                      <p class="text-xs text-neutral-500">Tower A, 2nd Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911202</p>
                    <p class="text-xs text-neutral-500">priya.sharma@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001202</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-202</p>
                    <p class="text-xs text-neutral-500">SAP_VA_202</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-203</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=2033" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Anil Kumar</p>
                      <p class="text-xs text-neutral-500">Tower A, 2nd Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911203</p>
                    <p class="text-xs text-neutral-500">anil.kumar@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001203</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-203</p>
                    <p class="text-xs text-neutral-500">SAP_VA_203</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-301</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3011" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Rajesh Gupta</p>
                      <p class="text-xs text-neutral-500">Tower A, 3rd Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911301</p>
                    <p class="text-xs text-neutral-500">rajesh.gupta@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001301</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-301</p>
                    <p class="text-xs text-neutral-500">SAP_VA_301</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
              <tr class="hover:bg-neutral-50">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                    <span class="text-sm text-neutral-900">F-302</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3022" alt="Owner" class="w-10 h-10 rounded-full">
                    <div>
                      <p class="text-sm text-neutral-900">Deepa Menon</p>
                      <p class="text-xs text-neutral-500">Tower A, 3rd Floor</p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">+919999911302</p>
                    <p class="text-xs text-neutral-500">deepa.menon@example.com</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">AR-0001302</p>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">1.25%</p>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <p class="text-sm text-neutral-900">VA-GNW-302</p>
                    <p class="text-xs text-neutral-500">SAP_VA_302</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <p class="text-sm text-neutral-900">HDFC</p>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Active</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-eye"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-edit"></i>
                    
                    </button><button class="text-neutral-600 hover:text-neutral-900">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    
                  </button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-6 border-t border-neutral-200 flex items-center justify-between">
          <p class="text-sm text-neutral-600">Showing 8 of 236 residents</p>
          <div class="flex items-center gap-2">
            <button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <i class="fa-solid fa-chevron-left"></i>
            
            </button><button class="px-3 py-2 bg-neutral-900 text-white rounded-lg text-sm">1
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">2
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">3
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">...
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">30
            </button><button class="px-3 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50">
              <i class="fa-solid fa-chevron-right"></i>
            
          </button></div>
        </div>
      </div>
      <div id="sap-integration-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">SAP Integration Status</h3>
            <p class="text-sm text-neutral-500 mt-1">Real-time synchronization with SAP ERP system</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-lg">
              <div class="w-2 h-2 bg-neutral-800 rounded-full animate-pulse"></div>
              <span class="text-xs text-neutral-600">Synced</span>
            </div>
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-sync"></i>
              <span>Sync Now</span>
            
          </div>
        </div>
        <div class="grid grid-cols-4 gap-6">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-users text-neutral-600"></i>
              </div>
              <i class="fa-solid fa-circle-check text-neutral-600"></i>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">Customer Accounts</h4>
            <p class="text-xs text-neutral-500 mb-2">236 accounts synced</p>
            <p class="text-xs text-neutral-400">Last sync: 5 min ago</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-credit-card text-neutral-600"></i>
              </div>
              <i class="fa-solid fa-circle-check text-neutral-600"></i>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">Virtual Accounts</h4>
            <p class="text-xs text-neutral-500 mb-2">236 accounts active</p>
            <p class="text-xs text-neutral-400">Last sync: 5 min ago</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-percent text-neutral-600"></i>
              </div>
              <i class="fa-solid fa-circle-check text-neutral-600"></i>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">Unit Share Data</h4>
            <p class="text-xs text-neutral-500 mb-2">100% configured</p>
            <p class="text-xs text-neutral-400">Last sync: 5 min ago</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center justify-between mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-database text-neutral-600"></i>
              </div>
              <i class="fa-solid fa-circle-check text-neutral-600"></i>
            </div>
            <h4 class="text-sm text-neutral-900 mb-1">Master Data</h4>
            <p class="text-xs text-neutral-500 mb-2">All records updated</p>
            <p class="text-xs text-neutral-400">Last sync: 5 min ago</p>
          </div>
        </div>
      </div>
      <div id="tower-breakdown-section" class="grid grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Tower-wise Distribution</h3>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <span class="text-sm text-neutral-900">A</span>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Tower A</p>
                    <p class="text-xs text-neutral-500">Ground + 4 Floors</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">62 units</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 100%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">59 occupied • 3 vacant</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <span class="text-sm text-neutral-900">B</span>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Tower B</p>
                    <p class="text-xs text-neutral-500">Ground + 4 Floors</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">62 units</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 95%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">59 occupied • 3 vacant</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <span class="text-sm text-neutral-900">C</span>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Tower C</p>
                    <p class="text-xs text-neutral-500">Ground + 4 Floors</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">62 units</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 97%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">60 occupied • 2 vacant</p>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <span class="text-sm text-neutral-900">D</span>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Tower D</p>
                    <p class="text-xs text-neutral-500">Ground + 4 Floors</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">62 units</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 94%"></div>
              </div>
              <p class="text-xs text-neutral-500 mt-2">58 occupied • 4 vacant</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <h3 class="text-lg text-neutral-900 mb-6">Payment Status Overview</h3>
          <div class="space-y-4">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-circle-check text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Up to Date</p>
                    <p class="text-xs text-neutral-500">All payments cleared</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">224 residents</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 95%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-clock text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Pending</p>
                    <p class="text-xs text-neutral-500">Due within 7 days</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">8 residents</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 3.4%"></div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-triangle-exclamation text-neutral-600"></i>
                  </div>
                  <div>
                    <p class="text-sm text-neutral-900">Overdue</p>
                    <p class="text-xs text-neutral-500">Payment overdue</p>
                  </div>
                </div>
                <span class="text-sm text-neutral-900">4 residents</span>
              </div>
              <div class="w-full bg-neutral-100 rounded-full h-2">
                <div class="bg-neutral-800 h-2 rounded-full" style="width: 1.7%"></div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-neutral-50 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-neutral-700">Total Outstanding Amount</p>
                <p class="text-lg text-neutral-900">₹2,45,000</p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-xs text-neutral-500">Collection Rate (This Month)</p>
                <p class="text-sm text-neutral-900">94.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="recent-activity-section" class="bg-white rounded-lg border border-neutral-200 p-6">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Recent Activity</h3>
            <p class="text-sm text-neutral-500 mt-1">Latest updates and changes to resident records</p>
          </div>
          <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>View All</span>
          
        </div>
        <div class="space-y-4">
          <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-user-plus text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">New resident added: Deepa Menon (F-302)</p>
              <p class="text-xs text-neutral-500">SAP Customer ID AR-0001302 created and virtual account configured</p>
              <p class="text-xs text-neutral-400 mt-2">Today at 2:45 PM • By Rajesh Kumar</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-edit text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">Contact details updated for Asha Verma (F-101)</p>
              <p class="text-xs text-neutral-500">Email and phone number updated in both ERP and SAP systems</p>
              <p class="text-xs text-neutral-400 mt-2">Today at 11:30 AM • By Priya Sharma</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-sync text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">SAP synchronization completed successfully</p>
              <p class="text-xs text-neutral-500">236 resident records synced with SAP ERP system</p>
              <p class="text-xs text-neutral-400 mt-2">Today at 9:00 AM • Automated Process</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-file-invoice text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">Monthly maintenance invoices generated</p>
              <p class="text-xs text-neutral-500">236 invoices created and sent to all active residents</p>
              <p class="text-xs text-neutral-400 mt-2">Yesterday at 6:00 PM • Automated Process</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
            <div class="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i class="fa-solid fa-credit-card text-neutral-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-neutral-900 mb-1">Virtual account activated for Sunil Rao (F-102)</p>
              <p class="text-xs text-neutral-500">VA-GNW-102 linked to HDFC bank and SAP system</p>
              <p class="text-xs text-neutral-400 mt-2">Yesterday at 3:15 PM • By Rajesh Kumar</p>
            </div>
          </div>
        </div>
      </div>`
  },

  "users-roles": {
    title: "Users & Roles",
    subtitle: "Manage user accounts and access permissions.",
    content: `<div id="society-info-section" class="bg-white rounded-lg border border-neutral-200 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h3 class="text-lg text-neutral-900">Society Configuration</h3>
            <p class="text-sm text-neutral-500 mt-1">Greenwood Apartments - SAP Company Code: GNW001</p>
          </div>
          <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
            <i class="fa-solid fa-edit"></i>
            <span>Edit Settings</span>
          
        </div>
        <div class="grid grid-cols-4 gap-6">
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-building text-neutral-600"></i>
              </div>
              <div>
                <p class="text-xs text-neutral-500">Society</p>
                <p class="text-sm text-neutral-900">Greenwood Apartments</p>
              </div>
            </div>
            <p class="text-xs text-neutral-400">Block A, Sector 12, xxxxxxxxx</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-calendar text-neutral-600"></i>
              </div>
              <div>
                <p class="text-xs text-neutral-500">Fiscal Year</p>
                <p class="text-sm text-neutral-900">Apr 2025 - Mar 2026</p>
              </div>
            </div>
            <p class="text-xs text-neutral-400">Current fiscal period</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-language text-neutral-600"></i>
              </div>
              <div>
                <p class="text-xs text-neutral-500">Default Language</p>
                <p class="text-sm text-neutral-900">English</p>
              </div>
            </div>
            <p class="text-xs text-neutral-400">System language</p>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-toggle-on text-neutral-600"></i>
              </div>
              <div>
                <p class="text-xs text-neutral-500">Active Features</p>
                <p class="text-sm text-neutral-900">6 Modules</p>
              </div>
            </div>
            <p class="text-xs text-neutral-400">MVP features enabled</p>
          </div>
        </div>
      </div>
      <div id="stats-section" class="grid grid-cols-5 gap-6 mb-8">
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-users text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">4</h3>
          <p class="text-sm text-neutral-500">Total Users</p>
          <p class="text-xs text-neutral-400 mt-2">Active system users</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-shield-halved text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">7</h3>
          <p class="text-sm text-neutral-500">Role Types</p>
          <p class="text-xs text-neutral-400 mt-2">Defined system roles</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-tie text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">3</h3>
          <p class="text-sm text-neutral-500">Admin Users</p>
          <p class="text-xs text-neutral-400 mt-2">Executive, Senior, Head</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-user-shield text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">1</h3>
          <p class="text-sm text-neutral-500">Security Staff</p>
          <p class="text-xs text-neutral-400 mt-2">Guard personnel</p>
        </div>
        <div class="bg-white rounded-lg border border-neutral-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-key text-neutral-600 text-xl"></i>
            </div>
          </div>
          <h3 class="text-2xl text-neutral-900 mb-1">42</h3>
          <p class="text-sm text-neutral-500">Total Permissions</p>
          <p class="text-xs text-neutral-400 mt-2">Across all roles</p>
        </div>
      </div>
      <div id="tabs-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="border-b border-neutral-200">
          <div class="flex items-center gap-1 px-6">
            <button class="px-4 py-3 text-sm text-neutral-900 border-b-2 border-neutral-900">
              <i class="fa-solid fa-users mr-2"></i>
              Users
            
            </button><button class="px-4 py-3 text-sm text-neutral-500 hover:text-neutral-900 border-b-2 border-transparent">
              <i class="fa-solid fa-shield-halved mr-2"></i>
              Roles
            
            </button><button class="px-4 py-3 text-sm text-neutral-500 hover:text-neutral-900 border-b-2 border-transparent">
              <i class="fa-solid fa-key mr-2"></i>
              Permissions
            
            </button><button class="px-4 py-3 text-sm text-neutral-500 hover:text-neutral-900 border-b-2 border-transparent">
              <i class="fa-solid fa-cog mr-2"></i>
              Settings
            
          </button></div>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h3 class="text-lg text-neutral-900">System Users</h3>
              <p class="text-sm text-neutral-500 mt-1">All users with access to the ERP system</p>
            </div>
            <div class="flex items-center gap-3">
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-download"></i>
                <span>Export</span>
              
              <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
                <i class="fa-solid fa-file-import"></i>
                <span>Bulk Import</span>
              
            </div>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">
                    <div class="flex items-center gap-2">
                      <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                      <span>User</span>
                    </div>
                  </th>
                  <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Contact</th>
                  <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Roles Assigned</th>
                  <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Hierarchy Rank</th>
                  <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Onboarded</th>
                  <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-4 text-left text-xs text-neutral-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-200">
                <tr class="hover:bg-neutral-50">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                      <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=1234" alt="User" class="w-10 h-10 rounded-full">
                      <div>
                        <p class="text-sm text-neutral-900">Priya Sharma</p>
                        <p class="text-xs text-neutral-500">u_head_01</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div>
                      <p class="text-sm text-neutral-900">+919999900001</p>
                      <p class="text-xs text-neutral-500">priya.sharma@example.com</p>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Head Admin</span>
                      <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Resident</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <span class="text-xs text-neutral-900">1</span>
                      </div>
                      <span class="text-xs text-neutral-500">Level 1</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-sm text-neutral-900">Sep 10, 2025</p>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                      <span class="text-xs text-neutral-900">Active</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-eye"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-edit"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      
                    </button></div>
                  </td>
                </tr>
                <tr class="hover:bg-neutral-50">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                      <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=5678" alt="User" class="w-10 h-10 rounded-full">
                      <div>
                        <p class="text-sm text-neutral-900">Ravi Gupta</p>
                        <p class="text-xs text-neutral-500">u_senior_01</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div>
                      <p class="text-sm text-neutral-900">+919999900002</p>
                      <p class="text-xs text-neutral-500">ravi.gupta@example.com</p>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Senior Admin</span>
                      <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Treasurer</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <span class="text-xs text-neutral-900">2</span>
                      </div>
                      <span class="text-xs text-neutral-500">Level 2</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-sm text-neutral-900">Sep 12, 2025</p>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                      <span class="text-xs text-neutral-900">Active</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-eye"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-edit"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      
                    </button></div>
                  </td>
                </tr>
                <tr class="hover:bg-neutral-50">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                      <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=9012" alt="User" class="w-10 h-10 rounded-full">
                      <div>
                        <p class="text-sm text-neutral-900">Anita Verma</p>
                        <p class="text-xs text-neutral-500">u_exec_01</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div>
                      <p class="text-sm text-neutral-900">+919999900003</p>
                      <p class="text-xs text-neutral-500">anita.verma@example.com</p>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Executive Admin</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <span class="text-xs text-neutral-900">3</span>
                      </div>
                      <span class="text-xs text-neutral-500">Level 3</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-sm text-neutral-900">Sep 15, 2025</p>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                      <span class="text-xs text-neutral-900">Active</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-eye"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-edit"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      
                    </button></div>
                  </td>
                </tr>
                <tr class="hover:bg-neutral-50">
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                      <input type="checkbox" class="w-4 h-4 border-neutral-300 rounded">
                      <img src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=3456" alt="User" class="w-10 h-10 rounded-full">
                      <div>
                        <p class="text-sm text-neutral-900">Guard K</p>
                        <p class="text-xs text-neutral-500">u_security_01</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div>
                      <p class="text-sm text-neutral-900">+919999900010</p>
                      <p class="text-xs text-neutral-500">guard.k@example.com</p>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                      <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Security</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-neutral-100 rounded-lg flex items-center justify-center">
                        <span class="text-xs text-neutral-900">0</span>
                      </div>
                      <span class="text-xs text-neutral-500">Level 0</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <p class="text-sm text-neutral-900">-</p>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                      <span class="text-xs text-neutral-900">Active</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-eye"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-edit"></i>
                      
                      </button><button class="text-neutral-600 hover:text-neutral-900">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      
                    </button></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div id="roles-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">System Roles</h3>
              <p class="text-sm text-neutral-500 mt-1">Predefined roles with specific permissions and hierarchy levels</p>
            </div>
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-plus"></i>
              <span>Create Custom Role</span>
            
          </div>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-2 gap-6">
            <div class="border border-neutral-200 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-crown text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-sm text-neutral-900">Executive Admin</h4>
                    <p class="text-xs text-neutral-500">Hierarchy Rank: 3 (Highest)</p>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
              <div class="mb-4">
                <p class="text-xs text-neutral-600 mb-2">Permissions:</p>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View All Financials</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Approve Big Payments</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Override Approvals</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View Audit Pack</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Assign Roles</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">
                <p class="text-xs text-neutral-500">1 user assigned</p>
                <button class="text-sm text-neutral-900 hover:underline">View Details
              </button></div>
            </div>
            <div class="border border-neutral-200 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-user-tie text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-sm text-neutral-900">Senior Admin</h4>
                    <p class="text-xs text-neutral-500">Hierarchy Rank: 2</p>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
              <div class="mb-4">
                <p class="text-xs text-neutral-600 mb-2">Permissions:</p>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View Financials</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Approve Vendor Payments</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Manage Complaints</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View Defaulter Dashboard</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">
                <p class="text-xs text-neutral-500">1 user assigned</p>
                <button class="text-sm text-neutral-900 hover:underline">View Details
              </button></div>
            </div>
            <div class="border border-neutral-200 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-user-gear text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-sm text-neutral-900">Head Admin</h4>
                    <p class="text-xs text-neutral-500">Hierarchy Rank: 1</p>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
              <div class="mb-4">
                <p class="text-xs text-neutral-600 mb-2">Permissions:</p>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Treasurer Tasks</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Generate Reports</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Initiate Audit Pack</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Manage Budgets</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">
                <p class="text-xs text-neutral-500">1 user assigned</p>
                <button class="text-sm text-neutral-900 hover:underline">View Details
              </button></div>
            </div>
            <div class="border border-neutral-200 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-calculator text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-sm text-neutral-900">Treasurer</h4>
                    <p class="text-xs text-neutral-500">Hierarchy Rank: 1</p>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
              <div class="mb-4">
                <p class="text-xs text-neutral-600 mb-2">Permissions:</p>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Create Invoices</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Record Payments</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Reconcile Transactions</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View Audit Logs</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Export Reports</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">
                <p class="text-xs text-neutral-500">1 user assigned</p>
                <button class="text-sm text-neutral-900 hover:underline">View Details
              </button></div>
            </div>
            <div class="border border-neutral-200 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-shield-halved text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-sm text-neutral-900">Security</h4>
                    <p class="text-xs text-neutral-500">Hierarchy Rank: 0</p>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
              <div class="mb-4">
                <p class="text-xs text-neutral-600 mb-2">Permissions:</p>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Record Gate Logs</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View Preapproved Visitors</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">
                <p class="text-xs text-neutral-500">1 user assigned</p>
                <button class="text-sm text-neutral-900 hover:underline">View Details
              </button></div>
            </div>
            <div class="border border-neutral-200 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-truck text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-sm text-neutral-900">Vendor Manager</h4>
                    <p class="text-xs text-neutral-500">Hierarchy Rank: 1</p>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
              <div class="mb-4">
                <p class="text-xs text-neutral-600 mb-2">Permissions:</p>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Manage Vendors</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View Vendor Attendance</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Create POs</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">
                <p class="text-xs text-neutral-500">0 users assigned</p>
                <button class="text-sm text-neutral-900 hover:underline">View Details
              </button></div>
            </div>
            <div class="border border-neutral-200 rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <i class="fa-solid fa-building-user text-neutral-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="text-sm text-neutral-900">Resident</h4>
                    <p class="text-xs text-neutral-500">Hierarchy Rank: 0</p>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
              <div class="mb-4">
                <p class="text-xs text-neutral-600 mb-2">Permissions:</p>
                <div class="flex flex-wrap gap-1">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">View Own Invoices</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Pay Bills</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Raise Complaints</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-4 border-t border-neutral-200">
                <p class="text-xs text-neutral-500">236 users assigned</p>
                <button class="text-sm text-neutral-900 hover:underline">View Details
              </button></div>
            </div>
          </div>
        </div>
      </div>
      <div id="escalation-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Escalation Configuration</h3>
              <p class="text-sm text-neutral-500 mt-1">Complaint SLA and escalation defaults by role hierarchy</p>
            </div>
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-edit"></i>
              <span>Edit Configuration</span>
            
          </div>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-3 gap-6">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <span class="text-sm text-neutral-900">L1</span>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Level 1 Escalation</p>
                  <p class="text-xs text-neutral-500">First escalation tier</p>
                </div>
              </div>
              <div class="space-y-3">
                <div>
                  <p class="text-xs text-neutral-600 mb-1">SLA Time:</p>
                  <p class="text-sm text-neutral-900">24 hours</p>
                </div>
                <div>
                  <p class="text-xs text-neutral-600 mb-1">Escalate To:</p>
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Senior Admin</span>
                </div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <span class="text-sm text-neutral-900">L2</span>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Level 2 Escalation</p>
                  <p class="text-xs text-neutral-500">Second escalation tier</p>
                </div>
              </div>
              <div class="space-y-3">
                <div>
                  <p class="text-xs text-neutral-600 mb-1">SLA Time:</p>
                  <p class="text-sm text-neutral-900">48 hours</p>
                </div>
                <div>
                  <p class="text-xs text-neutral-600 mb-1">Escalate To:</p>
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Head Admin</span>
                </div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <span class="text-sm text-neutral-900">L3</span>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Level 3 Escalation</p>
                  <p class="text-xs text-neutral-500">Final escalation tier</p>
                </div>
              </div>
              <div class="space-y-3">
                <div>
                  <p class="text-xs text-neutral-600 mb-1">SLA Time:</p>
                  <p class="text-sm text-neutral-900">72 hours</p>
                </div>
                <div>
                  <p class="text-xs text-neutral-600 mb-1">Escalate To:</p>
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Executive Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="billing-rules-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Billing Rules Configuration</h3>
              <p class="text-sm text-neutral-500 mt-1">Default billing cycles, late fees and defaulter tracking settings</p>
            </div>
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-edit"></i>
              <span>Edit Rules</span>
            
          </div>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-2 gap-6 mb-6">
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-calendar-days text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Billing Cycles</p>
                  <p class="text-xs text-neutral-500">Available payment cycles</p>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-neutral-600">Default Cycle:</span>
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Monthly</span>
                </div>
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Monthly</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Quarterly</span>
                  <span class="px-2 py-1 bg-neutral-50 text-neutral-700 text-xs rounded">Annual</span>
                </div>
                <div class="flex items-center gap-2 pt-2">
                  <input type="checkbox" checked class="w-4 h-4 border-neutral-300 rounded">
                  <span class="text-xs text-neutral-600">Prorate on move-in/out</span>
                </div>
              </div>
            </div>
            <div class="p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-chart-column text-neutral-600"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">Aging Buckets</p>
                  <p class="text-xs text-neutral-500">Defaulter tracking periods</p>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-neutral-600">Bucket 1:</span>
                  <span class="text-xs text-neutral-900">0-30 days</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-neutral-600">Bucket 2:</span>
                  <span class="text-xs text-neutral-900">31-60 days</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-neutral-600">Bucket 3:</span>
                  <span class="text-xs text-neutral-900">61-90 days</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-neutral-600">Bucket 4:</span>
                  <span class="text-xs text-neutral-900">90+ days</span>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 border border-neutral-200 rounded-lg">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-money-bill-wave text-neutral-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-900">Late Fee Rules</p>
                <p class="text-xs text-neutral-500">Automatic late fee calculation</p>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                <div>
                  <p class="text-xs text-neutral-900 mb-1">After 5 days overdue</p>
                  <p class="text-xs text-neutral-500">Fixed fee applied</p>
                </div>
                <span class="text-sm text-neutral-900">₹100</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                <div>
                  <p class="text-xs text-neutral-900 mb-1">After 30 days overdue</p>
                  <p class="text-xs text-neutral-500">Percentage fee applied</p>
                </div>
                <span class="text-sm text-neutral-900">2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="features-section" class="bg-white rounded-lg border border-neutral-200 mb-8">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Enabled MVP Features</h3>
              <p class="text-sm text-neutral-500 mt-1">Active modules and features for this society</p>
            </div>
            <button class="px-4 py-2 border border-neutral-300 rounded-lg text-sm hover:bg-neutral-50 flex items-center gap-2">
              <i class="fa-solid fa-sliders"></i>
              <span>Manage Features</span>
            
          </div>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-file-invoice-dollar text-neutral-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-900">Billing & Collections</p>
                <div class="flex items-center gap-1 mt-1">
                  <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                  <span class="text-xs text-neutral-500">Active</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-rotate text-neutral-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-900">Auto Reconciliation</p>
                <div class="flex items-center gap-1 mt-1">
                  <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                  <span class="text-xs text-neutral-500">Active</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-user-xmark text-neutral-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-900">Defaulter Tracking</p>
                <div class="flex items-center gap-1 mt-1">
                  <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                  <span class="text-xs text-neutral-500">Active</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-bell text-neutral-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-900">Complaint Escalation</p>
                <div class="flex items-center gap-1 mt-1">
                  <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                  <span class="text-xs text-neutral-500">Active</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-fingerprint text-neutral-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-900">Vendor Biometric</p>
                <div class="flex items-center gap-1 mt-1">
                  <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                  <span class="text-xs text-neutral-500">Active</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 border border-neutral-200 rounded-lg">
              <div class="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
                <i class="fa-solid fa-file-pdf text-neutral-600"></i>
              </div>
              <div>
                <p class="text-sm text-neutral-900">Report Export PDF</p>
                <div class="flex items-center gap-1 mt-1">
                  <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                  <span class="text-xs text-neutral-500">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="device-section" class="bg-white rounded-lg border border-neutral-200">
        <div class="p-6 border-b border-neutral-200">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg text-neutral-900">Device Configuration</h3>
              <p class="text-sm text-neutral-500 mt-1">Mobile devices and tablets assigned to users</p>
            </div>
          </div>
        </div>
        <div class="p-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-tablet text-neutral-600 text-xl"></i>
                </div>
                <div>
                  <p class="text-sm text-neutral-900">guard_tablet_07</p>
                  <p class="text-xs text-neutral-500 mt-1">Assigned to: Guard K (u_security_01)</p>
                </div>
              </div>
              <div class="flex items-center gap-6">
                <div>
                  <p class="text-xs text-neutral-600 mb-1">OS:</p>
                  <span class="px-2 py-1 bg-neutral-100 text-neutral-900 text-xs rounded">Android</span>
                </div>
                <div>
                  <p class="text-xs text-neutral-600 mb-1">Offline Mode:</p>
                  <div class="flex items-center gap-1">
                    <div class="w-2 h-2 bg-neutral-800 rounded-full"></div>
                    <span class="text-xs text-neutral-900">Enabled</span>
                  </div>
                </div>
                <button class="text-neutral-600 hover:text-neutral-900">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                
              </button></div>
            </div>
          </div>
        </div>
      </div>`
  },

  "security": {
    title: "Security Personnels",
    subtitle: "Manage security staff and access control.",
    content: `
      <div class="bg-white rounded-lg border border-neutral-200 p-12 text-center">
        <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fa-solid fa-shield-halved text-neutral-400 text-2xl"></i>
        </div>
        <h3 class="text-lg text-neutral-900 mb-2">Security Personnel Management</h3><span class="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full mb-3">Not part of MVP</span>
        <p class="text-neutral-500 mb-4">This feature is planned for future releases and is not included in the current MVP.</p>
        
          
        
      </div>
    `
  },

  "settings": {
    title: "Settings",
    subtitle: "Configure system preferences and options.",
    content: `
      <div class="bg-white rounded-lg border border-neutral-200 p-12 text-center">
        <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fa-solid fa-gear text-neutral-400 text-2xl"></i>
        </div>
        <h3 class="text-lg text-neutral-900 mb-2">System Settings</h3><span class="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full mb-3">Not part of MVP</span>
        <p class="text-neutral-500 mb-4">This feature is planned for future releases and is not included in the current MVP.</p>
        
          
        
      </div>
    `
  }
};
