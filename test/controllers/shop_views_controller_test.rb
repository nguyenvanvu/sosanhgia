require 'test_helper'

class ShopViewsControllerTest < ActionController::TestCase
  setup do
    @shop_view = shop_views(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shop_views)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shop_view" do
    assert_difference('ShopView.count') do
      post :create, shop_view: { shop_view_description: @shop_view.shop_view_description, shop_view_image: @shop_view.shop_view_image, shop_view_name: @shop_view.shop_view_name }
    end

    assert_redirected_to shop_view_path(assigns(:shop_view))
  end

  test "should show shop_view" do
    get :show, id: @shop_view
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shop_view
    assert_response :success
  end

  test "should update shop_view" do
    patch :update, id: @shop_view, shop_view: { shop_view_description: @shop_view.shop_view_description, shop_view_image: @shop_view.shop_view_image, shop_view_name: @shop_view.shop_view_name }
    assert_redirected_to shop_view_path(assigns(:shop_view))
  end

  test "should destroy shop_view" do
    assert_difference('ShopView.count', -1) do
      delete :destroy, id: @shop_view
    end

    assert_redirected_to shop_views_path
  end
end
