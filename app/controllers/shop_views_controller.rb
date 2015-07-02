class ShopViewsController < ApplicationController
  before_action :set_shop_view, only: [:show, :edit, :update, :destroy]

  # GET /shop_views
  # GET /shop_views.json
  def index
    @shop_views = ShopView.all
  end

  # GET /shop_views/1
  # GET /shop_views/1.json
  def show
  end

  # GET /shop_views/new
  def new
    @shop_view = ShopView.new
  end

  # GET /shop_views/1/edit
  def edit
  end

  # POST /shop_views
  # POST /shop_views.json
  def create
    @shop_view = ShopView.new(shop_view_params)

    respond_to do |format|
      if @shop_view.save
        format.html { redirect_to @shop_view, notice: 'Shop view was successfully created.' }
        format.json { render :show, status: :created, location: @shop_view }
      else
        format.html { render :new }
        format.json { render json: @shop_view.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shop_views/1
  # PATCH/PUT /shop_views/1.json
  def update
    respond_to do |format|
      if @shop_view.update(shop_view_params)
        format.html { redirect_to @shop_view, notice: 'Shop view was successfully updated.' }
        format.json { render :show, status: :ok, location: @shop_view }
      else
        format.html { render :edit }
        format.json { render json: @shop_view.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shop_views/1
  # DELETE /shop_views/1.json
  def destroy
    @shop_view.destroy
    respond_to do |format|
      format.html { redirect_to shop_views_url, notice: 'Shop view was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shop_view
      @shop_view = ShopView.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shop_view_params
      params.require(:shop_view).permit(:shop_view_name, :shop_view_image, :shop_view_description)
    end
end
