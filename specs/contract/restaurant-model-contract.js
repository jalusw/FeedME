const itActAsRestaurantModel = (model) => {
  it("Should reject on attempt to insert an invalid restaurant", async () => {
    await expectAsync(model.insert(1)).toBeRejectedWithError();
    await expectAsync(model.insert({ id: "1" })).toBeRejectedWithError();
    await expectAsync(
      model.insert({ name: "Restaurant" })
    ).toBeRejectedWithError();
  });

  it("Should insert a restaurant", async () => {
    model.insert({ id: "1", name: "Restaurant" });
    await expectAsync(model.get("1")).toBeResolvedTo({
      id: "1",
      name: "Restaurant",
    });
  });

  it("Should reject on attempt to remove an invalid restaurant", async () => {
    await model.insert({ id: "1", name: "Restaurant" });
    await expectAsync(model.remove(1)).toBeRejectedWithError();
  });

  it("Should remove a restaurant", async () => {
    await model.insert({ id: "1", name: "Restaurant" });
    await model.remove("1");

    await expectAsync(model.get("1")).toBeResolvedTo(undefined);
  });

  it("Should return undefined for non existing restaurant ", async () => {
    await expectAsync(model.get("2")).toBeResolvedTo(undefined);
  });

  it("Should return a restaurant", async () => {
    await model.insert({ id: "1", name: "Restaurant" });
    await expectAsync(model.get("1")).toBeResolvedTo({
      id: "1",
      name: "Restaurant",
    });
  });

  it("Should return empty array when there's no restaurant", async () => {
    await expectAsync(model.getAll()).toBeResolvedTo([]);
  });

  it("Should return all restaurants", async () => {
    await model.insert({ id: "1", name: "One Restaurant" });
    await model.insert({ id: "2", name: "Second Restaurant" });
    await expectAsync(model.getAll()).toBeResolvedTo([
      { id: "1", name: "One Restaurant" },
      { id: "2", name: "Second Restaurant" },
    ]);
  });
};
export default itActAsRestaurantModel;
