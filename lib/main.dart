import 'package:flutter/material.dart';
import 'package:fruithero/detailsPage.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: ListView(
        children: <Widget>[
          Padding(
            padding: EdgeInsets.only(top: 15.0, left: 10.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                IconButton(
                  icon: Icon(Icons.arrow_back_ios),
                  color: Colors.white,
                  onPressed: () {},
                ),
                Container(
                    width: 125.0,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        IconButton(
                          icon: Icon(Icons.filter_list),
                          color: Colors.black,
                          onPressed: () {},
                        ),
                        IconButton(
                          icon: Icon(Icons.menu),
                          color: Colors.black,
                          onPressed: () {},
                        )
                      ],
                    ))
              ],
            ),
          ),
          SizedBox(height: 25.0),
          Padding(
            padding: EdgeInsets.only(left: 40.0),
            child: Row(
              children: <Widget>[
                Text('BID',
                    style: TextStyle(
                        fontFamily: 'Montserrat',
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 25.0)),
                SizedBox(width: 10.0),
                Text('DARK',
                    style: TextStyle(
                        fontFamily: 'Montserrat',
                        color: Colors.black,
                        fontSize: 25.0))
              ],
            ),
          ),
          SizedBox(height: 40.0),
          Container(
            height: MediaQuery.of(context).size.height - 185.0,
            decoration: BoxDecoration(
              color: Colors.black,
              borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(50.0),
                  topRight: Radius.circular(50.0)),
            ),
            child: ListView(
              primary: false,
              padding: EdgeInsets.only(left: 25.0, right: 20.0),
              children: <Widget>[
                Padding(
                    padding: EdgeInsets.only(top: 45.0),
                    child: Container(
                        height: MediaQuery.of(context).size.height - 300.0,
                        child: ListView(children: [
                          _buildFoodItem('assets/image1.png',
                              'Find Your Way Home', 'May 16, 2023'),
                          _buildFoodItem('assets/image2.png', 'How To Be Alone',
                              'May 18, 2023'),
                          _buildFoodItem('assets/image3.png',
                              'Living In Moments', 'May 19, 2023'),
                          _buildFoodItem('assets/image4.png',
                              'Morning / Perfect Illusion', 'May 22, 2023'),
                          _buildFoodItem('assets/image5.png',
                              'The World Is Big', 'May 24, 2023'),
                          _buildFoodItem('assets/image6.png',
                              'Me, Nature & My Camera', 'May 27, 2023')
                        ]))),
                Container(
                  color: Color.fromARGB(255, 54, 50, 50),
                  child: Column(
                    children: [
                      SizedBox(height: 10.0),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                              color: Colors.grey,
                              border: Border.all(
                                  color: Colors.white,
                                  style: BorderStyle.solid,
                                  width: 1.0),
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            child: Center(
                              child: Icon(Icons.facebook, color: Colors.white),
                            ),
                          ),
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                              color: Colors.grey,
                              border: Border.all(
                                  color: Colors.grey,
                                  style: BorderStyle.solid,
                                  width: 1.0),
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            child: Center(
                              child: Icon(Icons.library_books,
                                  color: Colors.white),
                            ),
                          ),
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                                color: Colors.grey,
                                border: Border.all(
                                    color: Colors.grey,
                                    style: BorderStyle.solid,
                                    width: 1.0),
                                borderRadius: BorderRadius.circular(10.0)),
                            child: Center(
                              child: Icon(Icons.library_books,
                                  color: Colors.white),
                            ),
                          ),
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                              border: Border.all(
                                  color: Colors.grey,
                                  style: BorderStyle.solid,
                                  width: 1.0),
                              borderRadius: BorderRadius.circular(10.0),
                              color: Colors.grey,
                            ),
                            child: Center(
                              child: Icon(Icons.library_books,
                                  color: Colors.white),
                            ),
                          ),
                          Container(
                            height: 40.0,
                            width: 40.0,
                            decoration: BoxDecoration(
                              border: Border.all(
                                  color: Colors.grey,
                                  style: BorderStyle.solid,
                                  width: 1.0),
                              borderRadius: BorderRadius.circular(10.0),
                              color: Colors.grey,
                            ),
                            child: Center(
                              child: Icon(Icons.library_books,
                                  color: Colors.white),
                            ),
                          )
                        ],
                      ),
                      SizedBox(height: 10.0),
                    ],
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _buildFoodItem(String imgPath, String foodName, String price) {
    return Padding(
        padding:
            EdgeInsets.only(left: 10.0, right: 10.0, top: 10.0, bottom: 10.0),
        child: InkWell(
            onTap: () {
              Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => DetailsPage(
                      heroTag: imgPath, foodName: foodName, foodPrice: price)));
            },
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Container(
                    child: Row(children: [
                  Hero(
                      tag: imgPath,
                      child: Image(
                          image: AssetImage(imgPath),
                          fit: BoxFit.cover,
                          height: 175.0,
                          width: 175.0)),
                  SizedBox(width: 10.0),
                  Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(foodName,
                            style: TextStyle(
                                fontFamily: 'Montserrat',
                                fontSize: 19.0,
                                fontWeight: FontWeight.bold,
                                color: Colors.white)),
                        Text(price,
                            style: TextStyle(
                                fontFamily: 'Montserrat',
                                fontSize: 17.0,
                                color: Colors.grey))
                      ])
                ])),
                // IconButton(
                //     icon: Icon(Icons.add),
                //     color: Colors.black,
                //     onPressed: () {})
              ],
            )));
  }
}
