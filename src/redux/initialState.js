export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        author: 'Jane Doe',
        title: 'CAREGIVER NEEDED 2 DAYS A WEEK',
        content: 'Help a Sr. Lady with MS No heavy lifting. Must be able to assist in dressing, bathing, eating and some light housework. Must be clean, speak English, willing to maintain a support group. Please call and leave a message and I will call back.',
        date: '10.02.2020',
        updateDate: '11.02.2020',
        mail: 'janedoe@example.com',
        status: 'published',
        userId: '1',
      },
      {
        id: '2',
        author: 'Harry Hole',
        title: 'Concrete Laborers & Foreman',
        content: 'Concrete company looking for experienced concrete laborers and foreman. Applicants without experience will not be considered. CDL license preferred.',
        date: '13.02.2020',
        updateDate: '13.02.2020',
        mail: 'harry.hole@example.com',
        status: 'published',
        userId: '2',
      },
      {
        id: '3',
        author: 'Tony Green',
        title: 'Production Worker - Packaging',
        content: 'Production Worker - Packaging Food Products All shifts avail- 6am to 2:00pm- $11.00/hr 2pm to 10:00pm- $11.00/hr 10pm to 6:00am-$12.50/hr Long Term Jobs - Referral Bonus Programs',
        date: '14.02.2020',
        updateDate: '15.02.2020',
        mail: 'TonyGreen@example.com',
        status: 'published',
        userId: '3',
      },
      {
        id: '4',
        author: 'Jane Doe',
        title: 'An Assistant needed urgently',
        content: 'A responsible assistant needed to handle administrative and clerical duties remotely.',
        date: '18.03.2020',
        updateDate: '19.03.2020',
        mail: 'janedoe@example.com',
        status: 'published',
        userId: '1',
      },
      {
        id: '5',
        author: 'Harry Hole',
        title: 'Mechanic',
        content: 'Heavy truck and equipment mechanic. A wide verity of machines from skid steers, semis and excavators.',
        date: '19.03.2020',
        updateDate: '20.03.2020',
        mail: 'harry.hole@example.com',
        status: 'published',
        userId: '2',
      },
      {
        id: '6',
        author: 'Tony Green',
        title: 'WHITE TOYOTA HIGHLANDER',
        content: 'FOR SALE 2006 WHITE TOYOTA HIGHLANDER, V6, FWD, HAS 3RD ROW, 191K NEW BATTERY WELL KEPT, RUNS GREAT. ORIGINAL OWNER.',
        date: '11.04.2020',
        updateDate: '11.04.2020',
        mail: 'TonyGreen@example.com',
        status: 'published',
        userId: '3',
      },
      {
        id: '7',
        author: 'Tony Green',
        title: 'ROOFING REPAIR',
        content: 'HAIL AND WIND DAMAGE ROOF REPAIR We know how to work with insurance companies to your benefit. Only a small amount of hail or wind damage entitles you to an entirely new roof.',
        date: '07.05.2020',
        updateDate: '09.05.2020',
        mail: 'TonyGreen@example.com',
        status: 'published',
        userId: '3',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  user: {
    id: '2',
    logged: true,
    author: 'Harry Hole',
    mail: 'harry.hole@example.com',
  },
};
