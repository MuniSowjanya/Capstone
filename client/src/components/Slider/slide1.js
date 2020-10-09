import React, { Component } from 'react'

export default class slide1 extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="https://images.financialexpress.com/2017/09/amazon-great-indian-sale.jpg" alt="First slide"/>
    </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://paidfreedroid.com/wp-content/uploads/2018/10/Flipkart-Big-Billion-Days.jpg" alt="Second slide"/>
    </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="https://ecouponshop.com/wp-content/uploads/2017/10/myntra-diwali-offers.jpg" alt="Third slide"/>
    </div>
    <div class="carousel-item">
                                    <img class="d-block w-100" src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article2442.jpg" alt="Fourth slide"/>
    </div>
    <div class="carousel-item">
                                    <img class="d-block w-100" src="https://cdn.newsnationtv.com/resize/460_-/images/2019/09/30/shopping-site-96.jpg" alt="Fifth slide"/>
    </div>
    <div class="carousel-item">
                                    <img class="d-block w-100" src="https://www.startupstories.in/wp-content/uploads/2017/09/shopping-sites-1.jpg" alt="Fifth slide"/>
    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
        )
    }
}
